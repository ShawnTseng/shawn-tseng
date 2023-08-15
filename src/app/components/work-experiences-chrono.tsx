import moment from "moment";
import { ReactNode } from "react";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type WorkExperience = {
  startDate: moment.Moment;
  endDate: moment.Moment;
  years: number;
  months: number;
  duration: string;
  companyName: string;
  jobTitle: string;
  location: string;
  description: ReactNode;
};

const WorkIcon = () => {
  return <div>Work</div>;
};

const SchoolIcon = () => {
  return <div>School</div>;
};

const StarIcon = () => {
  return <div>StarIcon</div>;
};

export default function WorkExperiencesChrono() {
  const setWorkExperienceDurationInfo = (workExp: WorkExperience) => {
    const startDate = workExp.startDate.format("yyyy/MM");
    const endDate = workExp.endDate.format("yyyy-MM") === moment().format("yyyy-MM") ? "Current" : workExp.endDate.format("yyyy/MM");
    const years = workExp.endDate.diff(workExp.startDate, "years");
    const months = workExp.endDate.diff(workExp.startDate, "months") - years * 12;
    // const yearString = years > 0 ? `${years} y${years > 1 ? "s" : ""}` : "";
    // const monthString = months > 0 ? `${months} m${months > 1 ? "s" : ""}` : "";
    const yearString = years > 0 ? `${years}y` : "";
    const monthString = months > 0 ? `${months}m` : "";
    const conjunction = yearString && monthString ? "" : "";
    const duration = `${startDate} - ${endDate}(${yearString}${conjunction}${monthString})`;
    workExp.years = years;
    workExp.months = months;
    workExp.duration = duration;
  };

  const vertiv: WorkExperience = {
    startDate: moment("2021-03"),
    endDate: moment(),
    years: 0,
    months: 0,
    duration: "",
    companyName: "VERTIV",
    jobTitle: "Senior Software Engineer",
    location: "Taipei, Taiwan",
    description: (
      <ul>
        <li>Main framework/library – Angular、Vertiv's own library(based on Ng-Zorro)</li>
        <li>Source code control – git</li>
        <li>
          Responsible for engaging in&nbsp;
          <a
            target="_blank"
            href="https://www.vertiv.com/en-us/products-catalog/monitoring-control-and-management/digital-infrastructure-solutions/vertiv-avocent-adx-ecosystem/"
          >
            ADX Ecosystem
          </a>
        </li>
        <li>
          Responsible for UI project maintenance and management
          <ul>
            <li>INC(In development)</li>
            <li>
              <a
                target="_blank"
                href="https://www.vertiv.com/en-asia/products-catalog/monitoring-control-and-management/digital-infrastructure-solutions/vertiv-avocent-adx-ipsl-serial-device/"
              >
                IPSL
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.vertiv.com/en-us/products-catalog/monitoring-control-and-management/digital-infrastructure-solutions/vertiv-avocent-adx-ipuhd-4k-ip-kvm/"
              >
                IPUHD
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.vertiv.com/en-us/products/monitoring-control--management/avocent-embedded-management-systems/"
              >
                ACI
              </a>
            </li>
          </ul>
        </li>
        <li>Propose and apply new architectures to UI project - monorepo</li>
        <li>Manage a scrum team of 5-8 members</li>
        <li>Manage a front-end team of 4-7 members</li>
        <li>
          Performance tuned
          <ul>
            <li>Leveraging Grafana to perform stress test for ADX product</li>
          </ul>
        </li>
        <li>
          Miscellaneous
          <ul>
            <li>Establish effective communication links between Taipei team and U.S. team</li>
            <li>Establish rules for managing resources(hardware, dev env, etc.)</li>
            <li>Establish a weekly new tech sharing system</li>
            <li>Train members to acquire project management skills</li>
          </ul>
        </li>
      </ul>
    ),
  };
  setWorkExperienceDurationInfo(vertiv);

  const atGames: WorkExperience = {
    startDate: moment("2020-08"),
    endDate: moment("2021-03"),
    years: 0,
    months: 0,
    duration: "",
    companyName: "ATGames",
    jobTitle: "Senior Front End Developer",
    location: "Taipei, Taiwan",
    description: (
      <ul>
        <li>Main framework/library – react.js, Angular, angular.js, vue.js</li>
        <li>Source code control – git</li>
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
  setWorkExperienceDurationInfo(atGames);

  const newegg: WorkExperience = {
    startDate: moment("2019-01"),
    endDate: moment("2020-04"),
    years: 0,
    months: 0,
    duration: "",
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
  setWorkExperienceDurationInfo(newegg);

  const miniasp: WorkExperience = {
    startDate: moment("2018-08"),
    endDate: moment("2018-12"),
    years: 0,
    months: 0,
    duration: "",
    companyName: "Miniasp",
    jobTitle: "System Analyst",
    location: "Taipei, Taiwan",
    description: (
      <ul>
        <li>Responsible for refactoring bank app logic</li>
        <li>Main framework/library – .NET Web API, Angular, dot net Core API </li>
        <li>The number of team member – 5</li>
        <li>Source code control – git</li>
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
  setWorkExperienceDurationInfo(miniasp);

  const digiwin: WorkExperience = {
    startDate: moment("2015-05"),
    endDate: moment("2018-07"),
    years: 0,
    months: 0,
    duration: "",
    companyName: "Digiwin",
    jobTitle: "Full Stack Developer",
    location: "Taichung, Taiwan",
    description: (
      <ul>
        <li>Responsible for engaging in CRM (Customer Relationship Management)</li>
        <li>Main framework/library – .NET Web Forms, MSSQL, Angular, .NET Web API</li>
        <li>The number of team member – 20</li>
        <li>Source code control – TFS & git</li>
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
            <li>Redesign standard system’s user interfaces from traditionally gorgeous style into flat design</li>
          </ul>
        </li>
        <li>
          Miscellaneous
          <ul>
            <li>Customizing system for many different management processes of industry over one year</li>
            <li>Help company’s client service department handle online-issue</li>
            <li>Help team member troubleshooting dev environment problem</li>
            <li>Encapsulate Standard system with new version for supporting current version and before</li>
            <li>Upgrade testing and deploy testing for standard system</li>
          </ul>
        </li>
        <li>Reason for leave: For pursue new tech when I realize open source community</li>
      </ul>
    ),
  };
  setWorkExperienceDurationInfo(digiwin);

  const bestVisionTechnique: WorkExperience = {
    startDate: moment("2014-10"),
    endDate: moment("2015-03"),
    years: 0,
    months: 0,
    duration: "",
    companyName: "Best Vision Technique",
    jobTitle: "Full Stack Developer",
    location: "Taichung, Taiwan",
    description: (
      <ul>
        <li>Responsible for import AOI (Automated Optical Inspection) solution into AUO</li>
        <li>Main framework/library – graphic algorithm (Matrox imaging library), hardware API (camera, machinery)</li>
        <li>The number of team member – 3</li>
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
  setWorkExperienceDurationInfo(bestVisionTechnique);

  const items = [
    {
      title: vertiv.duration,
      cardTitle: vertiv.companyName,
      cardSubtitle: vertiv.jobTitle,
      icon: "Work",
      location: vertiv.location,
      description: vertiv.description,
    },
    {
      title: atGames.duration,
      cardTitle: atGames.companyName,
      cardSubtitle: atGames.jobTitle,
      icon: "Work",
      location: atGames.location,
      description: atGames.description,
    },
    {
      title: newegg.duration,
      cardTitle: newegg.companyName,
      cardSubtitle: newegg.jobTitle,
      icon: "Work",
      location: newegg.location,
      description: newegg.description,
    },
    {
      title: miniasp.duration,
      cardTitle: miniasp.companyName,
      cardSubtitle: miniasp.jobTitle,
      icon: "Work",
      location: miniasp.location,
      description: miniasp.description,
    },
    {
      title: digiwin.duration,
      cardTitle: digiwin.companyName,
      cardSubtitle: digiwin.jobTitle,
      icon: "Work",
      location: digiwin.location,
      description: digiwin.description,
    },
    {
      title: bestVisionTechnique.duration,
      cardTitle: bestVisionTechnique.companyName,
      cardSubtitle: bestVisionTechnique.jobTitle,
      icon: "Work",
      location: bestVisionTechnique.location,
      description: bestVisionTechnique.description,
    },
  ];

  const workIconStyle = { background: "#06d6a0" };
  const schoolIconStyle = { background: "#f9c74f" };

  return (
    <VerticalTimeline>
      {items.map((item) => {
        let isWorkIcon = item.icon === "Work";
        return (
          <VerticalTimelineElement
            key={item.title}
            date={item.title}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">{item.cardTitle}</h3>
            <h5 className="vertical-timeline-element-subtitle">{item.location}</h5>
            {item.description}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
