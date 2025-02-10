import amiProject from "@/assets/images/amiProject.png";
import emrProject from "@/assets/images/emrProject.png";
import foodapp from "@/assets/images/foodapp.png";
import customerApp from "@/assets/images/customerApp.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const WebportfolioProjects = [
  {
    company: "Independent Project",
    year: "2024",
    title: "Ami-compliant (Hospital Management System)",
    results: [
      {
        title:
          "Ami-Compliant is a modern Hospital Management System streamlining patient records, appointments, billing, and inventory.",
      },
      {
        title:
          "It ensures secure, compliant, and efficient healthcare operations with real-time reporting.",
      },
    ],
    link: "https://www.upwork.com/freelancers/~011fc52a2ab0f7af3c?p=1868209332943081472",
    image: amiProject,
  },
  {
    company: "Independent Project",
    year: "2024",
    title: "EMR(Electronic Medical Sector) Health Care",
    results: [
      {
        title:
          "Developed an EMR-based application integrating healthcare functionalities with a user-friendly interface.",
      },
      {
        title:
          "Built with Node.js (backend) & MSSQL, using Vue.js & Nuxt.js (frontend) for secure, and seamless performance.",
      },
    ],
    link: "https://www.upwork.com/freelancers/~011fc52a2ab0f7af3c?p=1866195650122944512",
    image: emrProject,
  },
  {
    company: "Client Project",
    year: "2024",
    title: "Reliu Food delivery Driver app",
    results: [
      {
        title:
          "Reliu is a food delivery app like Foodpanda, offering seamless ordering, real-time tracking, and secure payments.",
      },
      {
        title:
          "Aim to elevate efficiency and scalability, ensuring a fast, reliable, and enjoyable user experience.",
      },
    ],
    link: "https://www.upwork.com/freelancers/~011fc52a2ab0f7af3c?p=1868196634519617536",
    image: foodapp,
  },
  {
    company: "Startup Project",
    year: "2024",
    title: "Reliu Customer App",
    results: [
      {
        title:
          "Reliu Customer App is a food delivery platform with real-time tracking, secure payments, and personalized recommendations",
      },
      {
        title:
          "Continuous improvements focus on optimizing performance, refining the UI, and enhancing the overall user experience..",
      },
    ],
    link: "https://www.upwork.com/freelancers/~011fc52a2ab0f7af3c?p=1868204637133754368",
    image: customerApp,
  },
];

export const WebProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container" id="projects">
        <SectionHeader
          title="Selected Projects"
          description="Featuring real-world software applications."
        />
        <div className="flex flex-col mt-8 md:mt-12 gap-20">
          {WebportfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {/* <div className="bg-gradient-to-r from-amber-300 to-orange-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"> */}
                  {/* <span>{project.company}</span> */}
                  {/* <span>&bull;</span>
                    <span>{project.year}</span> */}
                  {/* </div> */}
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm md:text-base lg:text-base text-white/50 text-justify tracking-tighter"
                      >
                        <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
                        <span className="flex-1">{result.title}</span>{" "}
                        {/* Allow text to grow */}
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="bg-white text-yellow-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>View More Details</span>
                      <ArrowUpRightIcon ClassName="size-4 " />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
