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

export default function Timeline({ items, toggleItemDetail }: { items: TimelineItem[]; toggleItemDetail: (item: TimelineItem) => void; }) {
    const getDuration = (exp: TimelineItem) => {
        const startDate = exp.startDate.format("yyyy/MM");
        const endDate = exp.endDate.format("yyyy-MM") === moment().format("yyyy-MM") ? "CURRENT" : exp.endDate.format("yyyy/MM");
        const years = exp.endDate.diff(exp.startDate, "years");
        const months = exp.endDate.diff(exp.startDate, "months") - years * 12;
        const yearString = years > 0 ? `${years}Y` : "";
        const monthString = months > 0 ? `${months}M` : "";
        const conjunction = yearString && monthString ? "" : "";
        const duration = `${yearString}${conjunction}${monthString} (${startDate} ~ ${endDate})`;
        return duration;
    };

    const getTeamSizeDOM = (item: TimelineItem) => {
        switch (item.teamSize) {
            case TeamSize.Small:
                return <motion.span className="relative w-6 h-6" whileHover={{ scale: 1.2 }}>
                    <Image src="/small-group.svg" fill alt="small-group" />
                </motion.span>
            case TeamSize.Medium:
                return <motion.span className="relative w-6 h-6" whileHover={{ scale: 1.2 }}>
                    <Image src="/medium-group.svg" fill alt="medium-group" />
                </motion.span>
            case TeamSize.Large:
                return <motion.span className="relative w-6 h-6" whileHover={{ scale: 1.2 }}>
                    <Image src="/large-group.svg" fill alt="large-group" />
                </motion.span>
            default:
                return <span>Not Exist</span>;
        }
    }

    return <div className="w-full sm:px-10 mb-20 flex justify-center">
        {/* vertical line */}
        <div className="w-[1px] h-auto bg-[#00000099] relative left-6 top-12 z-0" />
        {/* experience container */}
        <div className="w-full max-w-4xl z-10">
            {items.map(item => (
                <motion.div key={item.title} className="my-9"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: 'spring' }}
                >
                    {/* Indicator and Logo */}
                    <div className="inline-flex items-center gap-4">
                        {/* Indicator */}
                        <div className="w-12 h-12 rounded-full bg-[#ffffff] border-2 border-[#00000099] flex justify-center items-center" >
                            <div className="w-9 h-9 rounded-full bg-[#D9D9D9]" />
                        </div>
                        {/* Logo */}
                        <h4 className="font-poppins-bold text-[#00000099] text-4xl">{item.title}</h4>
                    </div>
                    {/* Content */}
                    <div className="h-fit mt-5 sm:ml-20 p-5 bg-[#EFEFEF]">
                        {/* Top Section */}
                        <div className="relative w-full top-[-32px] inline-flex flex-col sm:flex-row justify-between px-5">
                            <span className="text-[#00000099]">{getDuration(item)}</span>
                            <span>{item.location}</span>
                        </div>

                        <h6 className="font-poppins-semibold underline underline-offset-4">SKILLS</h6>
                        {/* grid */}
                        <div className="sm:mx-10 my-5 grid md:grid-cols-2 gap-x-20 gap-y-3">
                            <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                                <h6>Framework:</h6>
                                <p className="inline-flex gap-2 max-w-xs">
                                    {item.skills.framework.length > 0 ?
                                        item.skills.framework.map(f => {
                                            switch (f) {
                                                case Framework.Angular:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/angular.svg" fill alt="Angular" />
                                                    </motion.span>
                                                case Framework.AngularJs:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/angularjs.svg" fill alt="AngularJs" />
                                                    </motion.span>
                                                case Framework.React:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/react.svg" fill alt="React" />
                                                    </motion.span>
                                                case Framework.Vue:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/vue.svg" fill alt="vue" />
                                                    </motion.span>
                                                case Framework.TestNG:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/testng.svg" fill alt="testng" />
                                                    </motion.span>
                                                case Framework.Selenium:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/selenium.svg" fill alt="selenium" />
                                                    </motion.span>
                                                case Framework.DotNetFramework:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/dot-net-framework.svg" fill alt="DotNetFramework" />
                                                    </motion.span>
                                                case Framework.DotNetCore:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/dot-net-core.svg" fill alt="DotNetCore" />
                                                    </motion.span>
                                                case Framework.MSSql:
                                                    return <motion.span className="relative w-6 h-6" key={f} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/ms-sql.svg" fill alt="ms sql" />
                                                    </motion.span>
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
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/grafana.svg" fill alt="grafana" />
                                                    </motion.span>
                                                case Tool.K6:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/k6.svg" fill alt="k6" />
                                                    </motion.span>
                                                case Tool.Postman:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/postman.svg" fill alt="postman" />
                                                    </motion.span>
                                                case Tool.Git:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/git.svg" fill alt="git" />
                                                    </motion.span>
                                                case Tool.Sourcetree:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/sourcetree.svg" fill alt="sourcetree" />
                                                    </motion.span>
                                                case Tool.VsCode:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/vs-code.svg" fill alt="vs-code" />
                                                    </motion.span>
                                                case Tool.VisualStudio:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/visual-studio.svg" fill alt="visual studio" />
                                                    </motion.span>
                                                case Tool.WordPress:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/wordpress.svg" fill alt="wordpress" />
                                                    </motion.span>
                                                case Tool.Trello:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/trello.svg" fill alt="trello" />
                                                    </motion.span>
                                                case Tool.Word:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/word.svg" fill alt="word" />
                                                    </motion.span>
                                                case Tool.Powerpoint:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/powerpoint.svg" fill alt="powerpoint" />
                                                    </motion.span>
                                                case Tool.TFS:
                                                    return <motion.span className="relative w-6 h-6" key={t} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/tfs.svg" fill alt="tfs" />
                                                    </motion.span>
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
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/lerna.svg" fill alt="Lerna" />
                                                    </motion.span>
                                                case Library.NgZorro:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/ng-zorro.svg" fill alt="NG-ZORRO" />
                                                    </motion.span>
                                                case Library.Stripe:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/stripe.svg" fill alt="Stripe" />
                                                    </motion.span>
                                                case Library.Bootstrap:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/bootstrap.svg" fill alt="Bootstrap" />
                                                    </motion.span>
                                                case Library.AngularMaterial:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/angular-material.svg" fill alt="Angular-Material" />
                                                    </motion.span>
                                                case Library.MatroxImaging:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/matrox-imaging.svg" fill alt="Matrox Imaging" />
                                                    </motion.span>
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
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/typescript.svg" fill alt="typescript" />
                                                    </motion.span>
                                                case Language.Javascript:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/javascript.svg" fill alt="javascript" />
                                                    </motion.span>
                                                case Language.CSS:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/css.svg" fill alt="css" />
                                                    </motion.span>
                                                case Language.Html5:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/html5.svg" fill alt="html5" />
                                                    </motion.span>
                                                case Language.Java:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/java.svg" fill alt="java" />
                                                    </motion.span>
                                                case Language.CSharp:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/c-sharp.svg" fill alt="c#" />
                                                    </motion.span>
                                                case Language.TSQL:
                                                    return <motion.span className="relative w-6 h-6" key={l} whileHover={{ scale: 1.2 }}>
                                                        <Image src="/t-sql.svg" fill alt="T-SQL" />
                                                    </motion.span>
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
                        <motion.div animate={item.isOpen ? "open" : "closed"} variants={{
                            open: { opacity: 1 },
                            closed: { opacity: 0, height: 0, visibility: 'collapse' },
                        }} className="h-fit">
                            <div className="grid md:grid-cols-2 gap-x-20 gap-y-3">
                                <div>
                                    <h6 className="font-poppins-semibold underline underline-offset-4">PROJECTS</h6>
                                    <ul className="sm:mx-10 my-5">
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
                            <h6 className="mt-5 font-poppins-semibold underline underline-offset-4">SPECIAL CONTRIBUTION</h6>
                            <ul className="sm:mx-10 my-5">
                                {item.specialContribution && item.specialContribution.length > 0 ?
                                    item.specialContribution.map(p =>
                                        <li key={p}>{p}</li>
                                    ) :
                                    <span>N/A</span>
                                }
                            </ul>
                        </motion.div>

                        <div className="w-full flex flex-col justify-center items-center cursor-pointer relative z-10"
                            onClick={() => toggleItemDetail(item)}>
                            {!item.isOpen ?
                                <>
                                    <span>Read More</span>
                                    <p>V</p>
                                </> :
                                <>
                                    <span>Close</span>
                                    <p>^</p>
                                </>
                            }
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
}
