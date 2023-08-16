'use client';

import moment from "moment";
import Image from "next/image";
import { ReactNode } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

enum ExperienceType {
  Work,
  School,
}

type WorkExperience = {
  startDate: moment.Moment;
  endDate: moment.Moment;
  icon?: ReactNode;
  companyName: string;
  jobTitle: string;
  location: string;
  description: ReactNode;
  years?: number;
  months?: number;
  duration?: string;
};

type SchoolExperience = {
  startDate: moment.Moment;
  endDate: moment.Moment;
  icon?: ReactNode;
  schoolName: string;
  department: string;
  location: string;
  description: ReactNode;
  years?: number;
  months?: number;
  duration?: string;
};

type ExperienceNode = {
  type: ExperienceType;
  duration?: string;
  icon?: ReactNode;
  title: string;
  subTitle: string;
  location: string;
  description: ReactNode;
};

const SchoolIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 512.001 512.001"
      height="512"
      viewBox="0 0 512.001 512.001"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m478.091 132.55-222.091-94.415-221.216 94.018-.874.396c-20.988 10.135-33.981 30.909-33.91 54.216s13.193 44.001 34.244 54.006l48.034 20.096h-1.278v137.793c-12.505 6.763-21 19.992-21 35.206 0 22.091 17.909 40 40 40s40-17.909 40-40c0-14.388-7.6-26.996-19-34.044v-122.756l135 56.479 129.551-54.185c11.972 21.713 22.549 50.553 29.223 79.727-59.217 16.151-112.495 38.673-158.774 67.117-26.608-16.354-55.543-30.739-86.579-43.093-4.305-1.657-8.072-3.043-11.368-4.202 12.99 13.714 21.181 32.001 21.876 52.171 23.22 10.574 44.993 22.426 65.162 35.55l10.909 7.098 10.908-7.098c49.641-32.302 108.838-57.03 175.948-73.499l18.085-4.438-3.138-18.355c-6.488-37.953-19.432-76.702-35.178-106.483l54.263-22.695.868-.388c21.051-10.005 34.172-30.699 34.244-54.006s-12.921-44.082-33.909-54.216zm-17.147 71.919-204.944 85.719-93.771-39.22 133.794-56.787-51.156-21.741-134.203 56.96-59.609-24.932c-6.907-3.439-11.031-10.074-11.055-17.827s4.059-14.412 10.942-17.894l205.058-87.149 205.059 87.15c6.883 3.482 10.966 10.142 10.942 17.894-.024 7.753-4.149 14.388-11.057 17.827z" />
    </svg>
  );
};

const WorkIcon = () => {
  return (
    <svg enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m467 14.292h-422c-24.813 0-45 20.187-45 45v305c0 24.813 20.187 45 45 45h151.198l-13.189 58.416h-63.275v30h272.532v-30h-63.275l-13.189-58.416h151.198c24.813 0 45-20.187 45-45v-305c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v240h-452v-240c0-8.271 6.729-15 15-15zm240.047 365 13.189 58.416h-84.471l13.189-58.416zm181.953-30h-422c-8.271 0-15-6.729-15-15v-35h452v35c0 8.271-6.729 15-15 15z" />
        <path d="m134.582 156.792h142.836v30h-142.836z" transform="matrix(.707 -.707 .707 .707 -61.139 195.981)" />
        <path d="m234.582 156.792h142.836v30h-142.836z" transform="matrix(.707 -.707 .707 .707 -31.85 266.691)" />
      </g>
    </svg>
  );
};

export default function WorkExperiencesChrono() {
  const setExperienceDurationInfo = (exp: WorkExperience | SchoolExperience) => {
    const startDate = exp.startDate.format("yyyy/MM");
    const endDate = exp.endDate.format("yyyy-MM") === moment().format("yyyy-MM") ? "Current" : exp.endDate.format("yyyy/MM");
    const years = exp.endDate.diff(exp.startDate, "years");
    const months = exp.endDate.diff(exp.startDate, "months") - years * 12;
    // const yearString = years > 0 ? `${years} y${years > 1 ? "s" : ""}` : "";
    // const monthString = months > 0 ? `${months} m${months > 1 ? "s" : ""}` : "";
    const yearString = years > 0 ? `${years}y` : "";
    const monthString = months > 0 ? `${months}m` : "";
    const conjunction = yearString && monthString ? "" : "";
    const duration = `${startDate} - ${endDate} (${yearString}${conjunction}${monthString})`;
    exp.years = years;
    exp.months = months;
    exp.duration = duration;
  };

  const vertiv: WorkExperience = {
    startDate: moment("2021-03"),
    endDate: moment(),
    icon: <Image src="/vertiv.svg" width={24} height={24} alt="Vertiv" />,
    companyName: "VERTIV",
    jobTitle: "Senior Software Engineer",
    location: "Taipei, Taiwan",
    description: (
      <>
        <video controls autoPlay muted>
          <source src="/adx-platform.mp4" type="video/mp4" />
        </video>
        <div className="flex">
          Framework:&nbsp;<Image src="/angular.svg" width={24} height={24} alt="Angular" />
        </div>
        <div className="flex">
          Library:&nbsp;
          <Image src="/lerna.svg" width={24} height={24} alt="lerna" />
          <Image src="/ng-zorro.svg" width={24} height={24} alt="NG-ZORRO" />
        </div>
        <div className="flex">
          Language:&nbsp;
          <Image src="/typescript.svg" width={24} height={24} alt="typescript" />
          <Image src="/javascript.svg" width={24} height={24} alt="javascript" />
          <Image src="/css.svg" width={24} height={24} alt="css" />
          <Image src="/html5.svg" width={24} height={24} alt="html5" />
        </div>
        <div className="flex">
          Tool:&nbsp;
          <Image src="/grafana.svg" width={24} height={24} alt="grafana" />
          <Image src="/k6.svg" width={24} height={24} alt="k6" />
          <Image src="/postman.svg" width={24} height={24} alt="postman" />
          <Image src="/git.svg" width={24} height={24} alt="git" />
          <Image src="/sourcetree.svg" width={24} height={24} alt="sourcetree" />
          <Image src="/vs-code.svg" width={24} height={24} alt="vs-code" />
        </div>
        <div className="flex">
          Team size:&nbsp;
          <Image src="/large-group.svg" width={24} height={24} alt="large-group" />
        </div>
        <div>
          Project:
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.vertiv.com/en-us/products-catalog/monitoring-control-and-management/digital-infrastructure-solutions/vertiv-avocent-adx-ecosystem/"
              >
                Vertiv™ Avocent® ADX Platform
              </a>
            </li>
            <li>
              <a
                className="mr-4"
                target="_blank"
                href="https://www.vertiv.com/en-us/products/monitoring-control--management/avocent-embedded-management-systems/"
              >
                Avocent® Core Insight
              </a>
            </li>
            <li>
              <a
                className="mr-4"
                target="_blank"
                href="https://www.vertiv.com/en-us/products-catalog/monitoring-control-and-management/digital-infrastructure-solutions/vertiv-avocent-adx-ipuhd-4k-ip-kvm/"
              >
                Vertiv™ Avocent® ADX IPUHD 4K IP KVM
              </a>
            </li>
            <li>
              INC(Unpublished)
            </li>
          </ul>
        </div>
        <div>
          Special Contribution:
          <ul>
            <li>Build monorepo for redfish based UI</li>
            <li>Lead team to perform stress testing on products</li>
            <li>Establish team communication channels, resource management rules, technology sharing systems, and talent training</li>
            <li>Scrum team leader(5-8 members)</li>
            <li>Front-end team leader(4-7 members)</li>
          </ul>
        </div>
      </>
    ),
  };
  setExperienceDurationInfo(vertiv);

  const atGames: WorkExperience = {
    startDate: moment("2020-08"),
    endDate: moment("2021-03"),
    companyName: "ATGames",
    jobTitle: "Senior Front End Developer",
    location: "Taipei, Taiwan",
    description: (
      <ul>
        <li>Main framework/library - react.js, Angular, angular.js, vue.js</li>
        <li>Source code control - git</li>
        <li>
          Maintain and feature developing
          <ul>
            <li>
              <a target="_blank" href="https://www.direct2drive.com/">
                D2D Website
              </a>
            </li>
            <li>
              <a target="_blank" href="https://m.direct2drive.com/">
                D2D Mobile Site
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.atgames.net/arcadenet/">
                ArcadeNet Website
              </a>
            </li>
          </ul>
        </li>
      </ul>
    ),
  };
  setExperienceDurationInfo(atGames);

  const newegg: WorkExperience = {
    startDate: moment("2019-01"),
    endDate: moment("2020-04"),
    companyName: "Newegg",
    jobTitle: "Senior Front End Developer",
    location: "Taichung, Taiwan",
    description: (
      <ul>
        <li>Responsible for the maintenance of the seller's website</li>
        <li>Develop internal HR system UI</li>
        <li>Maintain cloud storage system</li>
        <li>Responsible for the maintenance of the buyer's mobile website</li>
        <li>Main framework/library - angular.js, Angular, react.js, vue.js, TestNG with selenium </li>
        <li>The number of team member - 3~10</li>
        <li>Source code control - git</li>
        <li>
          Maintain and feature developing
          <ul>
            <li>Adjusting a seller site depends on the demand side and policy change coming from the USA.</li>
            <li>Develop HR system for targeting to replace SAP</li>
            <li>Change buyer site's country support due to company policy vary</li>
          </ul>
        </li>
        <li>
          Refactoring
          <ul>
            <li>Buyer mobile site's auto test project</li>
          </ul>
        </li>
        <li>
          Performance tuned
          <ul>
            <li>Split large request size into multiple parallel requests when upload/download files.</li>
          </ul>
        </li>
        <li>
          Miscellaneous
          <ul>
            <li>Share new software technologies, such as Angular, NSwag, Postman, auto test theory, etc.</li>
          </ul>
        </li>
        <li>Reason for leave: Signed a contract with hunter for getting a better package</li>
      </ul>
    ),
  };
  setExperienceDurationInfo(newegg);

  const miniasp: WorkExperience = {
    startDate: moment("2018-08"),
    endDate: moment("2018-12"),
    companyName: "Miniasp",
    jobTitle: "System Analyst",
    location: "Taipei, Taiwan",
    description: (
      <ul>
        <li>Responsible for refactoring bank app logic</li>
        <li>Main framework/library - .NET Web API, Angular, dot net Core API </li>
        <li>The number of team member - 5</li>
        <li>Source code control - git</li>
        <li>
          Document writing
          <ul>
            <li>Transfer old logic into document</li>
            <li>Clarify current demand with client</li>
            <li>Produce requirement doc and specification doc</li>
            <li>Code review and doing acceptance check</li>
          </ul>
        </li>
        <li>
          Miscellaneous
          <ul>
            <li>Take tech courses after get off work or in the weekend, including entity framework, LINQ, SOLID</li>
          </ul>
        </li>
        <li>Reason for leave: When project completed, I was asked for going to another city through commuting daily for next project.</li>
      </ul>
    ),
  };
  setExperienceDurationInfo(miniasp);

  const digiwin: WorkExperience = {
    startDate: moment("2015-05"),
    endDate: moment("2018-07"),
    companyName: "Digiwin",
    jobTitle: "Full Stack Developer",
    location: "Taichung, Taiwan",
    description: (
      <ul>
        <li>Responsible for engaging in CRM (Customer Relationship Management)</li>
        <li>Main framework/library - .NET Web Forms, MSSQL, Angular, .NET Web API</li>
        <li>The number of team member - 20</li>
        <li>Source code control - TFS & git</li>
        <li>
          From 0 to 1
          <ul>
            <li>Develop new product (E-service) with Angular and .NET Web API</li>
          </ul>
        </li>
        <li>
          Refactoring
          <ul>
            <li>Refactor main product from .NET Web Forms to Angular and .NET Web API</li>
          </ul>
        </li>
        <li>
          Feature developing
          <ul>
            <li>Redesign standard system's user interfaces from traditionally gorgeous style into flat design</li>
          </ul>
        </li>
        <li>
          Miscellaneous
          <ul>
            <li>Customizing system for many different management processes of industry over one year</li>
            <li>Help company's client service department handle online-issue</li>
            <li>Help team member troubleshooting dev environment problem</li>
            <li>Encapsulate Standard system with new version for supporting current version and before</li>
            <li>Upgrade testing and deploy testing for standard system</li>
          </ul>
        </li>
        <li>Reason for leave: For pursue new tech when I realize open source community</li>
      </ul>
    ),
  };
  setExperienceDurationInfo(digiwin);

  const bestVisionTechnique: WorkExperience = {
    startDate: moment("2014-10"),
    endDate: moment("2015-03"),
    companyName: "Best Vision Technique",
    jobTitle: "Full Stack Developer",
    location: "Taichung, Taiwan",
    description: (
      <ul>
        <li>Responsible for import AOI (Automated Optical Inspection) solution into AUO</li>
        <li>Main framework/library - graphic algorithm (Matron imaging library), hardware API (camera, machinery)</li>
        <li>The number of team member - 3</li>
        <li>
          Miscellaneous
          <ul>
            <li>Experiment control machine with driver, embedded board</li>
            <li>Arrange number of cameras API into library</li>
            <li>Install server at cleanroom</li>
          </ul>
        </li>
        <li>Reason for leave: Our organization collapsed from a controversy between manager and boss</li>
      </ul>
    ),
  };
  setExperienceDurationInfo(bestVisionTechnique);

  const yuntech: SchoolExperience = {
    startDate: moment("2010-09"),
    endDate: moment("2014-06"),
    schoolName: "National Yunlin University of Science and Technology",
    department: "Information Management",
    location: "Yunlin, Taiwan",
    description: <div>TODO:</div>,
  };
  setExperienceDurationInfo(yuntech);

  const shalu: SchoolExperience = {
    startDate: moment("2007-09"),
    endDate: moment("2010-06"),
    schoolName: "National Sha-Lu Industrial Vocational Senior High School",
    department: "Data Processing",
    location: "Taichung, Taiwan",
    description: <div>TODO:</div>,
  };
  setExperienceDurationInfo(shalu);

  const experiences: Array<ExperienceNode> = [
    {
      type: ExperienceType.Work,
      duration: vertiv.duration,
      icon: vertiv.icon,
      title: vertiv.companyName,
      subTitle: vertiv.jobTitle,
      location: vertiv.location,
      description: vertiv.description,
    },
    {
      type: ExperienceType.Work,
      duration: atGames.duration,
      title: atGames.companyName,
      subTitle: atGames.jobTitle,
      location: atGames.location,
      description: atGames.description,
    },
    {
      type: ExperienceType.Work,
      duration: newegg.duration,
      title: newegg.companyName,
      subTitle: newegg.jobTitle,
      location: newegg.location,
      description: newegg.description,
    },
    {
      type: ExperienceType.Work,
      duration: miniasp.duration,
      title: miniasp.companyName,
      subTitle: miniasp.jobTitle,
      location: miniasp.location,
      description: miniasp.description,
    },
    {
      type: ExperienceType.Work,
      duration: digiwin.duration,
      title: digiwin.companyName,
      subTitle: digiwin.jobTitle,
      location: digiwin.location,
      description: digiwin.description,
    },
    {
      type: ExperienceType.Work,
      duration: bestVisionTechnique.duration,
      title: bestVisionTechnique.companyName,
      subTitle: bestVisionTechnique.jobTitle,
      location: bestVisionTechnique.location,
      description: bestVisionTechnique.description,
    },
    {
      type: ExperienceType.School,
      duration: yuntech.duration,
      title: yuntech.schoolName,
      subTitle: yuntech.department,
      location: yuntech.location,
      description: yuntech.description,
    },
    {
      type: ExperienceType.School,
      duration: shalu.duration,
      title: shalu.schoolName,
      subTitle: shalu.department,
      location: shalu.location,
      description: shalu.description,
    },
  ];

  const workIconStyle = { background: "#06d6a0" };
  const schoolIconStyle = { background: "#f9c74f" };

  return (
    <VerticalTimeline lineColor=''>
      {experiences.map((exp) => {
        let isWork = exp.type === ExperienceType.Work;
        return (
          <VerticalTimelineElement
            key={exp.duration}
            date={exp.duration}
            dateClassName="text-sky-700"
            iconStyle={isWork ? workIconStyle : schoolIconStyle}
            icon={isWork ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3 className="flex">
              <span className="mr-2">{exp?.icon}</span>
              {exp.title}
            </h3>
            <h5 className="flex">
              <Image className="mr-2" src="/location.svg" width={16} height={16} alt="location" />
              {exp.location}
            </h5>
            {exp.description}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
