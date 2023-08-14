import moment from "moment";
import { Chrono } from "react-chrono";

type WorkExperience = {
    startDate: moment.Moment,
    endDate: moment.Moment,
    years: number,
    months: number,
    duration: string,
    companyName: string,
    jobTitle: string
}

export default function WorkExperiencesChrono() {
    const setWorkExperienceDurationInfo = (workExp: WorkExperience) => {
        const startDate = workExp.startDate.format('yyyy/MM');
        const endDate = workExp.endDate.format('yyyy-MM') === moment().format('yyyy-MM') ? 'Current' : workExp.endDate.format('yyyy/MM');
        const years = workExp.endDate.diff(workExp.startDate, 'years');
        const months = workExp.endDate.diff(workExp.startDate, 'months') - years * 12;
        const yearString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
        const monthString = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';
        const conjunction = yearString && monthString ? ' and ' : '';
        const duration = `${startDate} - ${endDate}(${yearString}${conjunction}${monthString})`;
        workExp.years = years;
        workExp.months = months;
        workExp.duration = duration;
    }

    const vertiv: WorkExperience = {
        startDate: moment('2021-03'),
        endDate: moment(),
        years: 0,
        months: 0,
        duration: '',
        companyName: 'VERTIV',
        jobTitle: 'Senior Software Engineer'
    }
    setWorkExperienceDurationInfo(vertiv);

    const atGames: WorkExperience = {
        startDate: moment('2020-08'),
        endDate: moment('2021-03'),
        years: 0,
        months: 0,
        duration: '',
        companyName: 'ATGames',
        jobTitle: 'Senior Front End Developer'
    }
    setWorkExperienceDurationInfo(atGames);

    const newegg: WorkExperience = {
        startDate: moment('2019-01'),
        endDate: moment('2020-04'),
        years: 0,
        months: 0,
        duration: '',
        companyName: 'Newegg',
        jobTitle: 'Senior Front End Developer'
    }
    setWorkExperienceDurationInfo(newegg);

    const miniasp: WorkExperience = {
        startDate: moment('2018-08'),
        endDate: moment('2018-12'),
        years: 0,
        months: 0,
        duration: '',
        companyName: 'Miniasp',
        jobTitle: 'System Analyst'
    }
    setWorkExperienceDurationInfo(miniasp);

    const digiwin: WorkExperience = {
        startDate: moment('2015-05'),
        endDate: moment('2018-07'),
        years: 0,
        months: 0,
        duration: '',
        companyName: 'Digiwin',
        jobTitle: 'Full Stack Developer'
    }
    setWorkExperienceDurationInfo(digiwin);

    const bestVisionTechnique: WorkExperience = {
        startDate: moment('2014-10'),
        endDate: moment('2015-03'),
        years: 0,
        months: 0,
        duration: '',
        companyName: 'Best Vision Technique',
        jobTitle: 'Full Stack Developer'
    }
    setWorkExperienceDurationInfo(bestVisionTechnique);

    const items = [
        {
            title: vertiv.duration,
            cardTitle: vertiv.companyName,
            cardSubtitle: vertiv.jobTitle,
        },
        {
            title: atGames.duration,
            cardTitle: atGames.companyName,
            cardSubtitle: atGames.jobTitle,
        },
        {
            title: newegg.duration,
            cardTitle: newegg.companyName,
            cardSubtitle: newegg.jobTitle,
        },
        {
            title: miniasp.duration,
            cardTitle: miniasp.companyName,
            cardSubtitle: miniasp.jobTitle,
        },
        {
            title: digiwin.duration,
            cardTitle: digiwin.companyName,
            cardSubtitle: digiwin.jobTitle,
        },
        {
            title: bestVisionTechnique.duration,
            cardTitle: bestVisionTechnique.companyName,
            cardSubtitle: bestVisionTechnique.jobTitle,
        }
    ];

    return (
        <div className="flex justify-center">
            <div className="w-11/12">
                <Chrono
                    items={items} mode="VERTICAL_ALTERNATING"
                    hideControls
                    theme={{
                        primary: "#0ea5e9",
                        secondary: "white",
                        cardBgColor: "white",
                        cardForeColor: "white",
                        titleColor: "black",
                        titleColorActive: "black",
                    }}
                >
                </Chrono>
            </div>
        </div>
    )
}