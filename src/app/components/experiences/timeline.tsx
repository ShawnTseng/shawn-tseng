import moment from "moment";
import Image from "next/image";

export type TimelineItem = {
    startDate: moment.Moment;
    endDate: moment.Moment;
    title: string;
    location: string;
    skills: Skills;
    teamSize: TeamSize;
    projects: Array<Project>;
    specialContribution: Array<string>;
}

export enum Framework {
    Angular = 'Angular'
}

export enum Tool {
    Grafana = 'Grafana',
    K6 = 'K6',
    Postman = 'Postman',
    Git = 'Git',
    Sourcetree = 'Sourcetree',
    VsCode = 'VsCode'
}

export enum Library {
    Lerna = 'Lerna',
    NgZorro = 'NgZorro'
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
    Html5 = 'Html5'
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

export default function Timeline({ items }: { items: Array<TimelineItem> }) {
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
                return (
                    <>
                        <Image className="w-6 h-6" src="/small-group.svg" width={24} height={24} alt="small-group" />
                        ~8
                    </>
                )
            case TeamSize.Medium:
                return (
                    <>
                        <Image className="w-6 h-6" src="/medium-group.svg" width={24} height={24} alt="medium-group" />
                        8~20
                    </>
                )
            case TeamSize.Large:
                return (
                    <>
                        <Image className="w-6 h-6" src="/large-group.svg" width={24} height={24} alt="large-group" />
                        20~30
                    </>
                )
            default:
                return <span>Not Exist</span>;
        }
    }


    return <div className="w-full px-10 mb-20 flex flex-row">
        {/* vertical line */}
        <div className="w-[1px] h-auto bg-[#00000099] relative left-6 top-12 z-0" />
        {/* experience container */}
        {items.map(item => (
            <div key={item.title} className="w-full z-10">
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
                            <p className="inline-flex gap-2">
                                {item.skills.framework.map(f => {
                                    switch (f) {
                                        case Framework.Angular:
                                            return <Image className="w-6 h-6" key={f} src="/angular.svg" width={24} height={24} alt="Angular" />
                                        default:
                                            return;
                                    }
                                })}
                            </p>
                        </div>
                        <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                            <h6>Tool:</h6>
                            <p className="inline-flex gap-2">
                                {item.skills.tool.map(t => {
                                    switch (t) {
                                        case Tool.Grafana:
                                            return <Image className="w-6 h-6" key={t} src="/grafana.svg" width={24} height={24} alt="grafana" />
                                        case Tool.K6:
                                            return <Image className="w-6 h-6" key={t} src="/k6.svg" width={24} height={24} alt="k6" />
                                        case Tool.Postman:
                                            return <Image className="w-6 h-6" key={t} src="/postman.svg" width={24} height={24} alt="postman" />
                                        case Tool.Git:
                                            return <Image className="w-6 h-6" key={t} src="/git.svg" width={24} height={24} alt="git" />
                                        case Tool.Sourcetree:
                                            return <Image className="w-6 h-6" key={t} src="/sourcetree.svg" width={24} height={24} alt="sourcetree" />
                                        case Tool.VsCode:
                                            return <Image className="w-6 h-6" key={t} src="/vs-code.svg" width={24} height={24} alt="vs-code" />
                                        default:
                                            return;
                                    }
                                })}
                            </p>
                        </div>

                        <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                            <h6>Library:</h6>
                            <p className="inline-flex gap-2">
                                {item.skills.library.map(l => {
                                    switch (l) {
                                        case Library.Lerna:
                                            return <Image className="w-6 h-6" key={l} src="/lerna.svg" width={24} height={24} alt="lerna" />
                                        case Library.NgZorro:
                                            return <Image className="w-6 h-6" key={l} src="/ng-zorro.svg" width={24} height={24} alt="NG-ZORRO" />
                                        default:
                                            return;
                                    }
                                })}
                            </p>
                        </div>
                        <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                            <h6>Language:</h6>
                            <p className="inline-flex gap-2">
                                {item.skills.language.map(l => {
                                    switch (l) {
                                        case Language.Typescript:
                                            return <Image className="w-6 h-6" key={l} src="/typescript.svg" width={24} height={24} alt="typescript" />
                                        case Language.Javascript:
                                            return <Image className="w-6 h-6" key={l} src="/javascript.svg" width={24} height={24} alt="javascript" />
                                        case Language.CSS:
                                            return <Image className="w-6 h-6" key={l} src="/css.svg" width={24} height={24} alt="css" />
                                        case Language.Html5:
                                            return <Image className="w-6 h-6" key={l} src="/html5.svg" width={24} height={24} alt="html5" />
                                        default:
                                            return;
                                    }
                                })}
                            </p>
                        </div>
                        <div className="grid items-center grid-cols-[120px_minmax(900px,_1fr)]">
                            <h6>Team Size:</h6>
                            <p className="inline-flex gap-2">
                                {getTeamSizeDOM(item)}
                            </p>
                        </div>
                    </div>
                    <h6 className="font-poppins-semibold underline underline-offset-4">PROJECTS</h6>
                    <ul className="mx-14 my-5">
                        {item.projects.map(p => (p.url ?
                            <li>
                                <a href={p.url} target="_blank">
                                    {p.name}
                                </a>
                            </li> :
                            <li>{p.name}</li>
                        ))}
                    </ul>
                    <h6 className="font-poppins-semibold underline underline-offset-4">SPECIAL CONTRIBUTION</h6>
                    <ul className="mx-14 my-5">
                        {item.specialContribution.map(p =>
                            <li>{p}</li>
                        )}
                    </ul>
                </div>
            </div>
        ))}
    </div>
}
