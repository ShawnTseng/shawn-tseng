enum SkillLevel {
  Basic,
  Familiar,
  Proficient
}

const getWidth = (skillLevel: SkillLevel) => {
  switch (skillLevel) {
    case SkillLevel.Basic:
      return ['w-4/12', '33%'];
    case SkillLevel.Familiar:
      return ['w-8/12', '66%'];
    case SkillLevel.Proficient:
      return ['w-11/12', '92%'];
    default:
      return ['w-8/12', '66%'];
  }
}

export default function Skills() {
  const htmlWidth = getWidth(SkillLevel.Proficient);

  return (
    <>
      <div className="relative max-w-lg w-full bg-sky-50 mx-4 px-5 py-3 rounded-lg">
        <div className="w-full my-6">
          <span className="block text-sm font-semibold text-sky-950">HTML</span>
          <div className="h-2 w-full rounded-md mt-2 bg-sky-950">
            {/* TODO:remove skill-per, html */}
            <span className={`skill-per ${htmlWidth[0]} relative block h-full rounded-md opacity-0 bg-sky-500 bar-percent delay-100`}>
              <span className="absolute right-[-14px] top-[-35px] text-sm font-medium text-sky-50 rounded bg-sky-500 px-[6px] py-[3px]
                               before:content-[''] before:absolute before:left-1/2 before:bottom-[-5px] before:h-[10px] before:w-[10px] z-10 before:translate-x-[-50%] before:rotate-45 before:bg-sky-500">
                {htmlWidth[1]}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
