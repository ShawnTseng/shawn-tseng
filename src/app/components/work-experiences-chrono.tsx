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
        }
    ];

    return (
        <div>
            <Chrono items={items} mode="VERTICAL_ALTERNATING">
            </Chrono>
        </div>
    )
}