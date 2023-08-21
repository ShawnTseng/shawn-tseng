'use client';

import moment from "moment";
import { ReactNode } from "react";
import Timeline, { Framework, Language, Library, TeamSize, TimelineItem, Tool } from "./timeline";

type WorkExperience = {
  startDate: moment.Moment;
  endDate: moment.Moment;
  icon?: ReactNode;
  companyName: string;
  jobTitle: string;
  location: string;
  projects: Array<{ name: string, url?: string }>;
  specialContribution: Array<string>;
  videoUrl?: string;
  description?: ReactNode;
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

export default function ExperiencesTimeline() {
  const vertiv: WorkExperience = {
    startDate: moment("2021-03"),
    endDate: moment(),
    companyName: "VERTIV",
    jobTitle: "Senior Software Engineer",
    location: "TAIPEI, TAIWAN",
    projects: [{
      name: 'Vertiv™ Avocent® ADX Platform',
      url: 'https://www.vertiv.com/en-us/products-catalog/monitoring-control-and-management/digital-infrastructure-solutions/vertiv-avocent-adx-ecosystem/'
    },
    {
      name: 'Avocent® Core Insight',
      url: 'https://www.vertiv.com/en-us/products/monitoring-control--management/avocent-embedded-management-systems/'
    },
    {
      name: 'Vertiv™ Avocent® ADX IPUHD 4K IP KVM',
      url: 'https://www.vertiv.com/en-us/products-catalog/monitoring-control-and-management/digital-infrastructure-solutions/vertiv-avocent-adx-ipuhd-4k-ip-kvm/'
    },
    {
      name: 'Vertiv™ Avocent® ADX IPSL Serial Device',
      url: 'https://www.vertiv.com/en-us/products-catalog/monitoring-control-and-management/digital-infrastructure-solutions/vertiv-avocent-adx-ipsl-serial-device/'
    },
    {
      name: 'INC(Unpublished)'
    }],
    specialContribution: [
      'Build monorepo for redfish based UI',
      'Lead team to perform stress testing on products',
      'Establish team communication channels, resource management rules, technology sharing systems, and talent training',
      'Scrum team leader(5-8 members)',
      'Front-end team leader(4-7 members)'
    ],
    videoUrl: '/adx-platform.mp4'
  };

  const atGames: WorkExperience = {
    startDate: moment("2020-08"),
    endDate: moment("2021-03"),
    companyName: "ATGames",
    jobTitle: "Senior Front End Developer",
    location: "Taipei, Taiwan",
    projects: [{
      name: 'Direct2Drive',
      url: 'https://www.direct2drive.com/'
    },
    {
      name: 'Direct2Drive Mobile',
      url: 'https://m.direct2drive.com/'
    },
    {
      name: 'ArcadeNet',
      url: 'https://www.atgames.net/arcadenet/'
    },
    {
      name: 'Arcades',
      url: 'https://www.atgames.net/arcades'
    },
    {
      name: 'Leaderboards',
      url: 'https://www.atgames.net/leaderboards/'
    }],
    specialContribution: [],
    videoUrl: '/atgames.mp4'
  };

  const newegg: WorkExperience = {
    startDate: moment("2019-01"),
    endDate: moment("2020-04"),
    companyName: "Newegg",
    jobTitle: "Senior Front End Developer",
    location: "Taichung, Taiwan",
    projects: [],
    specialContribution: [],
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

  const miniasp: WorkExperience = {
    startDate: moment("2018-08"),
    endDate: moment("2018-12"),
    companyName: "Miniasp",
    jobTitle: "System Analyst",
    location: "Taipei, Taiwan",
    projects: [],
    specialContribution: [],
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

  const digiwin: WorkExperience = {
    startDate: moment("2015-05"),
    endDate: moment("2018-07"),
    companyName: "Digiwin",
    jobTitle: "Full Stack Developer",
    location: "Taichung, Taiwan",
    projects: [],
    specialContribution: [],
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

  const bestVisionTechnique: WorkExperience = {
    startDate: moment("2014-10"),
    endDate: moment("2015-03"),
    companyName: "Best Vision Technique",
    jobTitle: "Full Stack Developer",
    location: "Taichung, Taiwan",
    projects: [],
    specialContribution: [],
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

  const yuntech: SchoolExperience = {
    startDate: moment("2010-09"),
    endDate: moment("2014-06"),
    schoolName: "National Yunlin University of Science and Technology",
    department: "Information Management",
    location: "Yunlin, Taiwan",
    description: <div>TODO:</div>,
  };

  const shalu: SchoolExperience = {
    startDate: moment("2007-09"),
    endDate: moment("2010-06"),
    schoolName: "National Sha-Lu Industrial Vocational Senior High School",
    department: "Data Processing",
    location: "Taichung, Taiwan",
    description: <div>TODO:</div>,
  };

  const items: Array<TimelineItem> = [{
    title: vertiv.companyName,
    startDate: vertiv.startDate,
    endDate: vertiv.endDate,
    location: vertiv.location,
    skills: {
      framework: [Framework.Angular],
      tool: [Tool.Grafana, Tool.K6, Tool.Postman, Tool.Git, Tool.Sourcetree, Tool.VsCode],
      library: [Library.Lerna, Library.NgZorro],
      language: [Language.Typescript, Language.Javascript, Language.CSS, Language.Html5]
    },
    teamSize: TeamSize.Large,
    teamSizeText: '20-30',
    projects: vertiv.projects,
    specialContribution: vertiv.specialContribution,
    videoUrl: vertiv.videoUrl
  }, {
    title: atGames.companyName,
    startDate: atGames.startDate,
    endDate: atGames.endDate,
    location: atGames.location,
    skills: {
      framework: [Framework.Angular, Framework.AngularJs],
      tool: [Tool.WordPress, Tool.Sourcetree, Tool.Git, Tool.VsCode],
      library: [Library.Stripe, Library.AngularMaterial, Library.Bootstrap],
      language: [Language.Typescript, Language.Javascript, Language.CSS, Language.Html5]
    },
    teamSize: TeamSize.Small,
    teamSizeText: '1-3',
    projects: atGames.projects,
    specialContribution: atGames.specialContribution,
    videoUrl: atGames.videoUrl
  }];

  return (
    <>
      <h1 className="font-poppins-bold text-center">
        WORK EXPERIENCE
      </h1>
      <Timeline items={items} />
    </>
  );
}
