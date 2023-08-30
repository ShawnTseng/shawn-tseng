export default function Brief() {
    return (
        <div id="career-summary" className="w-full h-full flex justify-center items-center bg-[#308BE0]">
            <div className="max-w-7xl my-12 mx-2 sm:mx-14 border-2 rounded-2xl p-10 flex flex-col justify-center items-center bg-[#feffff82] border-[#ffffffb3]">
                <h1 className="mb-4 font-poppins-bold text-4xl">
                    Career Summary
                </h1>
                <div className="grid grid-cols-1 gap-10">
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Expert in</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Familiar with</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>angular.js, react.js and vue.js</li>
                            <li>Git, TFS</li>
                            <li>Postman, YApi</li>
                            <li>IIS</li>
                            <li>MS SQL</li>
                            <li>Grafana, K6</li>
                            <li>REDFISH | DMTF</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Experiences with</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>NGINX</li>
                            <li>Docker, Harbor</li>
                            <li>Selenium</li>
                            <li>.NET Web API, .NET MVC and .NET Core Web API</li>
                            <li>Matrox imaging library</li>
                            <li>Camera API, Machinery API</li>
                            <li>Trello, Jira, rocket chat, slack</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Graduated from</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>B.S. in Information Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}