'use client';

import dynamic from "next/dynamic";

const WorkExperiencesChrono = dynamic(
    () => import('./work-experiences-chrono'),
    { ssr: false }
  )

export default function WorkExperiences() {
    return <WorkExperiencesChrono />;
}
