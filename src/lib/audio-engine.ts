type AmbientHandle = {
  stop: () => void;
};

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private ambient: AmbientHandle | null = null;
  private volume = 0.28;

  async init(): Promise<boolean> {
    if (typeof window === "undefined") return false;
    if (this.ctx) return this.ctx.state === "running";

    const Ctx =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return false;

    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(this.ctx.destination);

    try {
      await this.ctx.resume();
      return this.ctx.state === "running";
    } catch {
      return false;
    }
  }

  get isRunning(): boolean {
    return this.ctx?.state === "running";
  }

  async resume(): Promise<void> {
    await this.ctx?.resume();
  }

  setVolume(level: number): void {
    this.volume = level;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(level, this.ctx.currentTime, 0.08);
    }
  }

  setMuted(muted: boolean): void {
    this.setVolume(muted ? 0 : 0.28);
  }

  startAmbient(): void {
    if (!this.ctx || !this.master || this.ambient) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;

    const ambientGain = ctx.createGain();
    ambientGain.gain.setValueAtTime(0, now);
    ambientGain.gain.linearRampToValueAtTime(0.12, now + 2.5);
    ambientGain.connect(this.master);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 520;
    filter.Q.value = 0.6;
    filter.connect(ambientGain);

    const freqs = [55, 82.5, 110];
    const oscillators = freqs.map((freq) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      const detune = ctx.createOscillator();
      detune.type = "sine";
      detune.frequency.value = freq;
      detune.detune.value = 4 + Math.random() * 6;

      const mix = ctx.createGain();
      mix.gain.value = 0.33;
      osc.connect(mix);
      detune.connect(mix);
      mix.connect(filter);
      osc.start(now);
      detune.start(now);
      return { osc, detune, mix };
    });

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 18;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start(now);

    this.ambient = {
      stop: () => {
        const t = ctx.currentTime;
        ambientGain.gain.cancelScheduledValues(t);
        ambientGain.gain.setValueAtTime(ambientGain.gain.value, t);
        ambientGain.gain.linearRampToValueAtTime(0, t + 0.8);
        oscillators.forEach(({ osc, detune }) => {
          osc.stop(t + 0.85);
          detune.stop(t + 0.85);
        });
        lfo.stop(t + 0.85);
        setTimeout(() => {
          oscillators.forEach(({ mix }) => mix.disconnect());
          filter.disconnect();
          ambientGain.disconnect();
        }, 950);
        this.ambient = null;
      },
    };
  }

  stopAmbient(): void {
    this.ambient?.stop();
  }

  private tone(
    frequency: number,
    duration: number,
    type: OscillatorType = "sine",
    peak = 0.06,
  ): void {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(peak, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + duration + 0.02);
  }

  playHover(): void {
    this.tone(880, 0.06, "sine", 0.025);
  }

  playClick(): void {
    this.tone(440, 0.08, "triangle", 0.04);
    setTimeout(() => this.tone(660, 0.05, "sine", 0.02), 30);
  }

  playNavigate(): void {
    if (!this.ctx || !this.master) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(520, t + 0.18);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.035, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.25);
  }

  dispose(): void {
    this.stopAmbient();
    void this.ctx?.close();
    this.ctx = null;
    this.master = null;
  }
}

export const audioEngine = new AudioEngine();
