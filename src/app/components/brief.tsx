export default function Brief() {
    return (
        <div className="w-full h-full flex justify-center items-center bg-sky-500">
            <div className="max-w-7xl my-12 flex flex-col justify-center items-center mx-14">
                <h1 className="font-poppins-bold text-4xl">
                    Career Summary
                </h1>
                <div className="grid grid-cols-1 p-10 gap-10">
                    <div className="flex">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Expert in</h3>
                        <ul className="grid grid-cols-2 flex-1">
                            <li>Angular</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Familiar with</h3>
                        <ul className="grid grid-cols-2 flex-1">
                            <li>angular.js, react.js and vue.js</li>
                            <li>Git, TFS</li>
                            <li>Postman, YApi</li>
                            <li>IIS</li>
                            <li>MS SQL</li>
                            <li>Grafana, K6</li>
                            <li>REDFISH | DMTF</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Experiences with</h3>
                        <ul className="grid grid-cols-2 flex-1">
                            <li>NGINX</li>
                            <li>Docker, Harbor</li>
                            <li>Selenium</li>
                            <li>.NET Web API, .NET MVC and .NET Core Web API</li>
                            <li>Matrox imaging library</li>
                            <li>Camera API, Machinery API</li>
                            <li>Trello, Jira, rocket chat, slack</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Graduated from</h3>
                        <ul className="grid grid-cols-2 flex-1">
                            <li>B.S. in Information Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}