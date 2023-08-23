'use client';

import moment from "moment";
import { ReactNode, useState } from "react";
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
  location: "TAIPEI, TAIWAN",
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
  location: "TAICHUNG, TAIWAN",
  projects: [{
    name: 'Seller Portal',
    url: 'https://partner.newegg.com/euf/sellerportal/sign-in'
  }, {
    name: 'Newegg Mobile',
    url: 'https://m.newegg.com/'
  }, {
    name: 'Internal HR system',
    url: ''
  }],
  specialContribution: [
    "Refactor Automated Testing Project",
    "Performance Optimization - Splitting Large Requests into Multiple Concurrent Requests for Uploading/Downloading Files.",
    "Introducing New Software Technologies: Angular, NSwag, Postman, Automated Testing Theory, and More."
  ],
  videoUrl: '/newegg.mp4'
};

const duotify: WorkExperience = {
  startDate: moment("2018-08"),
  endDate: moment("2018-12"),
  companyName: "Duotify",
  jobTitle: "System Analyst",
  location: "Taipei, Taiwan",
  projects: [{
    name: 'SKBank APP',
    url: 'https://play.google.com/store/apps/details?id=com.willmobile.mobilebank.skbbank&pcampaignid=web_share'
  }],
  specialContribution: [
    'Engage in document writing, including transferring existing logic into documentation, clarifying current requirements with the client, generating requirement and specification documents, and conducting code reviews along with acceptance checks.',
    'Enroll in Technology Courses After Work Hours or During Weekends, Covering Entity Framework, LINQ, and SOLID Principles.'
  ]
};

const digiwin: WorkExperience = {
  startDate: moment("2015-05"),
  endDate: moment("2018-07"),
  companyName: "Digiwin",
  jobTitle: "Full Stack Developer",
  location: "Taichung, Taiwan",
  projects: [{
    name: 'CRM(Customer Relationship Management System)',
    url: 'https://www.digiwin.com/tw/software/708.html'
  }, {
    name: 'e-Service',
    url: 'http://eservice.dsc.com.tw/login.asp'
  }],
  specialContribution: [
    'Transition the main product from .NET Web Forms to Angular and .NET Web API through refactoring.',
    'Transform the user interfaces of the standard system, shifting from a traditional ornate style to a flat design.',
    'Tailor the system to adapt to diverse industry management processes over a year.',
    `Support the company's client service department in addressing online issues.`,
    'Help team members resolve challenges related to the development environment.',
    'Wrap the Standard system in a new version to provide support for both the current iteration and previous versions.',
    'Conduct upgrade testing and deployment testing for the standard system.'
  ],
  videoUrl: '/digiwin.mp4'
};

export default function ExperiencesTimeline() {
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

  const itemsValue: Array<TimelineItem> = [{
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
    isOpen: false,
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
    isOpen: false,
    videoUrl: atGames.videoUrl
  }, {
    title: newegg.companyName,
    startDate: newegg.startDate,
    endDate: newegg.endDate,
    location: newegg.location,
    skills: {
      framework: [Framework.React, Framework.Vue, Framework.Angular, Framework.AngularJs, Framework.TestNG, Framework.Selenium],
      tool: [Tool.Postman, Tool.Git, Tool.Sourcetree, Tool.VsCode],
      library: [],
      language: [Language.Typescript, Language.Javascript, Language.CSS, Language.Html5, Language.Java]
    },
    teamSize: TeamSize.Medium,
    teamSizeText: '3-10',
    projects: newegg.projects,
    specialContribution: newegg.specialContribution,
    isOpen: false,
    videoUrl: newegg.videoUrl
  }, {
    title: duotify.companyName,
    startDate: duotify.startDate,
    endDate: duotify.endDate,
    location: duotify.location,
    skills: {
      framework: [Framework.Angular, Framework.DotNetFramework, Framework.DotNetCore],
      tool: [Tool.Trello, Tool.Word, Tool.Powerpoint],
      library: [],
      language: []
    },
    teamSize: TeamSize.Small,
    teamSizeText: '5',
    projects: duotify.projects,
    specialContribution: duotify.specialContribution,
    isOpen: false,
    // videoUrl: ''
  }, {
    title: digiwin.companyName,
    startDate: digiwin.startDate,
    endDate: digiwin.endDate,
    location: digiwin.location,
    skills: {
      framework: [Framework.DotNetFramework, Framework.MSSql, Framework.Angular], // .net web form, 
      tool: [Tool.VisualStudio, Tool.VsCode, Tool.Git, Tool.TFS],
      library: [Library.AngularMaterial],
      language: [Language.Typescript, Language.Javascript, Language.CSS, Language.Html5, Language.CSharp, Language.TSQL]
    },
    teamSize: TeamSize.Medium,
    teamSizeText: '10-20',
    projects: digiwin.projects,
    specialContribution: digiwin.specialContribution,
    isOpen: false,
    videoUrl: digiwin.videoUrl
  }];

  const showItemDetail = (selectedItem: TimelineItem) => {
    const nextItems = items.map(item => {
      if (item.title === selectedItem.title) {
        return {
          ...item,
          isOpen: true
        }
      } else {
        return {
          ...item
        }
      }
    });
    setItems(nextItems);
  }

  const [items, setItems] = useState(itemsValue);

  return (
    <>
      <h1 className="font-poppins-bold text-center">
        WORK EXPERIENCE
      </h1>
      <Timeline items={items} showItemDetail={showItemDetail} />
    </>
  );
}
