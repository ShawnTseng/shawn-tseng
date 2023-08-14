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
    const vertiv: WorkExperience = {
        startDate: moment('2021-03'),
        endDate: moment(Date.now()),
        years: 0,
        months: 0,
        duration: '',
        companyName: 'VERTIV',
        jobTitle: 'Senior Software Engineer'
    }
    vertiv.years = vertiv.endDate.diff(vertiv.startDate, 'years');
    vertiv.months = vertiv.endDate.diff(vertiv.startDate, 'months') - vertiv.years * 12;
    vertiv.duration = `${vertiv.startDate.format('yyyy/MM')} - Current(${vertiv.years} year${vertiv.years > 1 ? 's' : ''} and ${vertiv.months} month${vertiv.months > 1 ? 's' : ''})`;

    const items = [
        {
            title: vertiv.duration,
            cardTitle: vertiv.companyName,
            cardSubtitle: vertiv.jobTitle,
        }
    ];

    return (
        <div>
            <Chrono items={items} mode="VERTICAL_ALTERNATING">
            </Chrono>
        </div>
    )
}