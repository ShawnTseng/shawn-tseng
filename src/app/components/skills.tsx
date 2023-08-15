export default function Skills() {
  return (
    <>
      <div className="relative max-w-lg w-full bg-sky-50 mx-4 px-5 py-3 rounded-lg">
        <div className="w-full my-6">
          <span className="block text-sm font-semibold text-sky-950">HTML</span>
          <div className="h-2 w-full rounded-md mt-2 bg-sky-950">
            {/* TODO:remove skill-per, html, tooltip */}
            <span className="skill-per html">
              <span className="tooltip">75%</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
