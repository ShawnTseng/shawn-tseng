'use client'

import { motion } from 'framer-motion';

enum SkillLevel {
  Basic,
  Familiar,
  Proficient
}

export default function Skills() {
  const skillsArray = [{
    name: 'HTML',
    level: SkillLevel.Proficient,
    width: '92%'
  }, {
    name: 'Javascript',
    level: SkillLevel.Proficient,
    width: '92%'
  }]

  return (
    <>
      Skills
      <div className="relative max-w-lg w-full bg-sky-50 mx-4 px-5 py-3 rounded-lg">
        {skillsArray.map(skill => {
          return (
            <div className="w-full my-6">
              <span className="block text-sm font-semibold text-sky-950">{skill.name}</span>
              <div className="h-2 w-full rounded-md mt-2 bg-sky-950">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: skill.width }}
                  transition={{ delay: 0.4 }}
                  className={`relative block h-full rounded-md bg-sky-500`}>
                  <span className="absolute right-[-14px] top-[-35px] text-sm font-medium text-sky-50 rounded bg-sky-500 px-[6px] py-[3px]
                               before:content-[''] before:absolute before:left-1/2 before:bottom-[-5px] before:h-[10px] before:w-[10px] z-10 before:translate-x-[-50%] before:rotate-45 before:bg-sky-500">
                    {skill.width}
                  </span>
                </motion.span>
              </div>
            </div>
          )
        })}
      </div >
    </>
  );
}
