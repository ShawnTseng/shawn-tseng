import moment from "moment";
import Image from "next/image";
import { motion } from "framer-motion";

export type TimelineItem = {
    startDate: moment.Moment;
    endDate: moment.Moment;
    title: string;
    location: string;
    skills: Skills;
    teamSize: TeamSize;
    teamSizeText: string;
    projects: Array<Project>;
    specialContribution: Array<string>;
    isOpen?: boolean;
    videoUrl?: string;
}

export enum Framework {
    Angular = 'Angular',
    AngularJs = 'AngularJs',
    React = 'React',
    Vue = 'Vue',
    TestNG = 'TestNG',
    Selenium = 'Selenium',
    DotNetFramework = 'DotNetFramework',
    DotNetCore = 'DotNetCore',
    MSSql = 'MSSql'
}

export enum Tool {
    Grafana = 'Grafana',
    K6 = 'K6',
    Postman = 'Postman',
    Git = 'Git',
    Sourcetree = 'Sourcetree',
    VsCode = 'VsCode',
    VisualStudio = 'VisualStudio',
    WordPress = 'WordPress',
    Trello = 'Trello',
    Word = 'Word',
    Powerpoint = 'Powerpoint',
    TFS = 'TFS'
}

export enum Library {
    Lerna = 'Lerna',
    NgZorro = 'NgZorro',
    Stripe = 'Stripe',
    Bootstrap = 'Bootstrap',
    AngularMaterial = 'AngularMaterial',
    MatroxImaging = 'MatroxImaging'
}

export enum TeamSize {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large'
}

export enum Language {
    Typescript = 'Typescript',
    Javascript = 'Javascript',
    CSS = 'CSS',
    Html5 = 'Html5',
    Java = 'Java',
    CSharp = 'CSharp',
    TSQL = 'TSQL'
}

export type Skills = {
    framework: Array<Framework>;
    tool: Array<Tool>;
    library: Array<Library>;
    language: Array<Language>
}

export type Project = {
    name: string;
    url?: string;
}

export default function Timeline({ items, showItemDetail }: { items: TimelineItem[]; showItemDetail: (item: TimelineItem) => void; }) {
    const getDuration = (exp: TimelineItem) => {
        const startDate = exp.startDate.format("yyyy/MM");
        const endDate = exp.endDate.format("yyyy-MM") === moment().format("yyyy-MM") ? "CURRENT" : exp.endDate.format("yyyy/MM");
        const years = exp.endDate.diff(exp.startDate, "years");
        const months = exp.endDate.diff(exp.startDate, "months") - years * 12;
        const yearString = years > 0 ? `${years}Y` : "";
        const monthString = months > 0 ? `${months}M` : "";
        const conjunction = yearString && monthString ? "" : "";
        const duration = `${yearString}${conjunction}${monthString} (${startDate} - ${endDate})`;
        return duration;
    };

    const getTeamSizeDOM = (item: TimelineItem) => {
        switch (item.teamSize) {
            case TeamSize.Small:
                return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" src="/small-group.svg" width={24} height={24} alt="small-group" /></motion.span>
            case TeamSize.Medium:
                return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" src="/medium-group.svg" width={24} height={24} alt="medium-group" /></motion.span>
            case TeamSize.Large:
                return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" src="/large-group.svg" width={24} height={24} alt="large-group" /></motion.span>
            default:
                return <span>Not Exist</span>;
        }
    }

    return <div className="w-full px-10 mb-20 flex">
        {/* vertical line */}
        <div className="w-[1px] h-auto bg-[#00000099] relative left-6 top-12 z-0" />
        {/* experience container */}
        <div className="w-full z-10">
            {items.map(item => (
                <div key={item.title} >
                    {/* Indicator and Logo */}
                    <div className="inline-flex items-center gap-4">
                        {/* Indicator */}
                        <div className="w-12 h-12 rounded-full bg-[#ffffff] border-2 border-[#00000099] flex justify-center items-center" >
                            <div className="w-9 h-9 rounded-full bg-[#D9D9D9]" />
                        </div>
                        {/* Logo */}
                        <h4 className="font-poppins-bold text-[#00000099]">{item.title}</h4>
                    </div>
                    {/* Content */}
                    <div className="h-fit mt-5 ml-20 p-5 bg-[#EFEFEF]">
                        {/* Top Section */}
                        <div className="relative w-full top-[-32px] inline-flex justify-between px-5">
                            <span className="text-[#00000099]">{getDuration(item)}</span>
                            <span>{item.location}</span>
                        </div>

                        <h6 className="font-poppins-semibold underline underline-offset-4">SKILLS</h6>
                        {/* grid */}
                        <div className="mx-10 my-5 grid grid-cols-2 gap-x-20 gap-y-3">
                            <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                                <h6>Framework:</h6>
                                <p className="inline-flex gap-2 max-w-xs">
                                    {item.skills.framework.length > 0 ?
                                        item.skills.framework.map(f => {
                                            switch (f) {
                                                case Framework.Angular:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/angular.svg" width={24} height={24} alt="Angular" /></motion.span>
                                                case Framework.AngularJs:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/angularjs.svg" width={24} height={24} alt="AngularJs" /></motion.span>
                                                case Framework.React:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/react.svg" width={24} height={24} alt="React" /></motion.span>
                                                case Framework.Vue:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/vue.svg" width={24} height={24} alt="vue" /></motion.span>
                                                case Framework.TestNG:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/testng.svg" width={24} height={24} alt="testng" /></motion.span>
                                                case Framework.Selenium:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/selenium.svg" width={24} height={24} alt="selenium" /></motion.span>
                                                case Framework.DotNetFramework:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/dot-net-framework.svg" width={24} height={24} alt="DotNetFramework" /></motion.span>
                                                case Framework.DotNetCore:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/dot-net-core.svg" width={24} height={24} alt="DotNetCore" /></motion.span>
                                                case Framework.MSSql:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={f} src="/ms-sql.svg" width={24} height={24} alt="ms sql" /></motion.span>
                                                default:
                                                    return;
                                            }
                                        }) :
                                        <span>N/A</span>
                                    }
                                </p>
                            </div>
                            <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                                <h6>Tool:</h6>
                                <p className="inline-flex gap-2 max-w-xs">
                                    {item.skills.tool.length > 0 ?
                                        item.skills.tool.map(t => {
                                            switch (t) {
                                                case Tool.Grafana:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/grafana.svg" width={24} height={24} alt="grafana" /></motion.span>
                                                case Tool.K6:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/k6.svg" width={24} height={24} alt="k6" /></motion.span>
                                                case Tool.Postman:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/postman.svg" width={24} height={24} alt="postman" /></motion.span>
                                                case Tool.Git:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/git.svg" width={24} height={24} alt="git" /></motion.span>
                                                case Tool.Sourcetree:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/sourcetree.svg" width={24} height={24} alt="sourcetree" /></motion.span>
                                                case Tool.VsCode:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/vs-code.svg" width={24} height={24} alt="vs-code" /></motion.span>
                                                case Tool.VisualStudio:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/visual-studio.svg" width={24} height={24} alt="visual studio" /></motion.span>
                                                case Tool.WordPress:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/wordpress.svg" width={24} height={24} alt="wordpress" /></motion.span>
                                                case Tool.Trello:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/trello.svg" width={24} height={24} alt="trello" /></motion.span>
                                                case Tool.Word:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/word.svg" width={24} height={24} alt="word" /></motion.span>
                                                case Tool.Powerpoint:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/powerpoint.svg" width={24} height={24} alt="powerpoint" /></motion.span>
                                                case Tool.TFS:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={t} src="/tfs.svg" width={24} height={24} alt="tfs" /></motion.span>
                                                default:
                                                    return;
                                            }
                                        }) :
                                        <span>N/A</span>
                                    }
                                </p>
                            </div>

                            <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                                <h6>Library:</h6>
                                <p className="inline-flex gap-2 max-w-xs">
                                    {item.skills.library.length > 0 ?
                                        item.skills.library.map(l => {
                                            switch (l) {
                                                case Library.Lerna:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/lerna.svg" width={24} height={24} alt="Lerna" /></motion.span>
                                                case Library.NgZorro:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/ng-zorro.svg" width={24} height={24} alt="NG-ZORRO" /></motion.span>
                                                case Library.Stripe:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/stripe.svg" width={24} height={24} alt="Stripe" /></motion.span>
                                                case Library.Bootstrap:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/bootstrap.svg" width={24} height={24} alt="Bootstrap" /></motion.span>
                                                case Library.AngularMaterial:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/angular-material.svg" width={24} height={24} alt="Angular-Material" /></motion.span>
                                                case Library.MatroxImaging:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/matrox-imaging.svg" width={24} height={24} alt="Matrox Imaging" /></motion.span>
                                                default:
                                                    return;
                                            }
                                        }) :
                                        <span>N/A</span>
                                    }
                                </p>
                            </div>
                            <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                                <h6>Language:</h6>
                                <p className="inline-flex gap-2 max-w-xs">
                                    {item.skills.language.length > 0 ?
                                        item.skills.language.map(l => {
                                            switch (l) {
                                                case Language.Typescript:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/typescript.svg" width={24} height={24} alt="typescript" /></motion.span>
                                                case Language.Javascript:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/javascript.svg" width={24} height={24} alt="javascript" /></motion.span>
                                                case Language.CSS:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/css.svg" width={24} height={24} alt="css" /></motion.span>
                                                case Language.Html5:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/html5.svg" width={24} height={24} alt="html5" /></motion.span>
                                                case Language.Java:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/java.svg" width={24} height={24} alt="java" /></motion.span>
                                                case Language.CSharp:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/c-sharp.svg" width={24} height={24} alt="c#" /></motion.span>
                                                case Language.TSQL:
                                                    return <motion.span whileHover={{ scale: 1.2 }}><Image className="w-6 h-6" key={l} src="/t-sql.svg" width={24} height={24} alt="T-SQL" /></motion.span>
                                                default:
                                                    return;
                                            }
                                        }) :
                                        <span>N/A</span>
                                    }
                                </p>
                            </div>
                            <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                                <h6>Team Size:</h6>
                                <p className="inline-flex gap-2 max-w-xs">
                                    {getTeamSizeDOM(item)}
                                    {item.teamSizeText}
                                </p>
                            </div>
                        </div>
                        {!item.isOpen ?
                            <div className="w-full flex flex-col justify-center items-center"
                                onClick={() => showItemDetail(item)}
                            >
                                <span>Read More</span>
                                <p>V</p>{/* TODO: change it to be icon */}
                            </div> :
                            <>
                                <div className="grid grid-cols-2 gap-x-20 gap-y-3">
                                    <div>
                                        <h6 className="font-poppins-semibold underline underline-offset-4">PROJECTS</h6>
                                        <ul className="mx-14 my-5">
                                            {item.projects.length > 0 ?
                                                item.projects.map(p => (p.url ?
                                                    <li key={p.name}>
                                                        <a href={p.url} target="_blank">
                                                            {p.name}
                                                        </a>
                                                    </li> :
                                                    <li key={p.name}>{p.name}</li>
                                                )) :
                                                <span>N/A</span>
                                            }
                                        </ul>
                                    </div>
                                    <div className="max-w-xs">
                                        {item.videoUrl ?
                                            <video controls muted>
                                                <source src={item.videoUrl} type="video/mp4" />
                                            </video> :
                                            <span></span>
                                        }
                                    </div>
                                </div>
                                <h6 className="font-poppins-semibold underline underline-offset-4">SPECIAL CONTRIBUTION</h6>
                                <ul className="mx-14 my-5">
                                    {item.specialContribution && item.specialContribution.length > 0 ?
                                        item.specialContribution.map(p =>
                                            <li key={p}>{p}</li>
                                        ) :
                                        <span>N/A</span>
                                    }
                                </ul>
                            </>
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
}
