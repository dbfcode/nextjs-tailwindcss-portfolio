import Image from "next/image";
import { FiClock, FiTag } from "react-icons/fi";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";
import RelatedProjects from "../../components/projects/RelatedProjects";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PlayButton } from "../../components/reusable/PlayButton";
import { ScrollDownIndicator } from "../../components/reusable/ScrollDownIndicator";
function ProjectSingle(props) {
  return (
    <div className="container mx-auto relative">
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <div className="flex justify-between items-end">
          <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light ">
            {props.project.ProjectHeader.title}
          </p>

          <ScrollDownIndicator />
        </div>
        <div className="my-5">
          {" "}
          <PlayButton onClick={null} />
        </div>

        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {props.project.ProjectImages.map((project) => {
          return (
            <div className="mb-10 sm:mb-0 flex items-center" key={project.id}>
              <Image
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={project.title}
                key={project.id}
                layout="responsive"
                width={100}
                height={90}
              />
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {props.project.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {props.project.ProjectInfo.CompanyInfo.map((info) => {
                return (
                  <li
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                    key={info.id}
                  >
                    <span>{info.title}: </span>
                    <a
                      href="https://stoman.me"
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.SocialSharingHeading}
            </p>
            {/* <div className="flex items-center gap-3 mt-5">
							{props.project.ProjectInfo.SocialSharing.map(
								(social, index) => {
									<Link
										key={index}
										href={social.url}
										target="__blank"
										passHref={true}
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</Link>;
								}
							)}
						</div> */}
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {props.project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {props.project.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          })}
        </div>
      </div>

      <RelatedProjects />
    </div>
  );
}

export async function getStaticPaths({ locales }) {
  const paths = [];

  projectsData.forEach((project) => {
    locales.forEach((locale) => {
      paths.push({
        params: { id: project.id.toString() },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { id } = params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      project,
    },
  };
}

export default ProjectSingle;
