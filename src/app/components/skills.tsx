export default function Skills() {
  return (
    <>
      <div className="relative max-w-lg w-full bg-sky-50 mx-4 px-5 py-3 rounded-lg">
        <div className="w-full my-6">
          <span className="block text-sm font-semibold text-sky-950">HTML</span>
          <div className="h-2 w-full rounded-md mt-2 bg-sky-950">
            {/* TODO:remove skill-per, html, tooltip */}
            <span className="skill-per html">
              <span className="absolute right-[-14px] top-[-32px] text-sm font-medium text-sky-50 rounded bg-sky-500 px-[6px] py-[2px]
                               before:content-[''] before:absolute before:left-1/2 before:bottom-[-5px] before:h-[10px] before:w-[10px] z-10 before:translate-x-[-50%] before:rotate-45 before:bg-sky-500">
                75%
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
