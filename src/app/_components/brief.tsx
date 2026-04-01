export default function Brief() {
    return (
        <div id="career-summary" className="w-full h-full flex justify-center items-center bg-[#308BE0]">
            <div className="max-w-7xl my-12 mx-2 sm:mx-14 border-2 rounded-2xl p-10 flex flex-col justify-center items-center bg-[#feffff82] border-[#ffffffb3]">
                <h1 className="mb-4 font-poppins-bold text-4xl">
                    Career Summary
                </h1>
                <div className="grid grid-cols-1 gap-10">
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Focus</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>Cloud Platform Engineering</li>
                            <li>Azure DevOps & CI/CD</li>
                            <li>.NET 8 / .NET 10</li>
                            <li>React & TypeScript</li>
                            <li>AI Integration (Azure OpenAI)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Cloud & DevOps</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>Azure Functions, App Service, Service Fabric</li>
                            <li>Bicep IaC, ARM Templates</li>
                            <li>GitHub Actions, Azure DevOps Pipelines</li>
                            <li>Cypress (parallel test execution)</li>
                            <li>Synopsys Black Duck / Polaris</li>
                            <li>PowerShell, Bash, Azure CLI</li>
                            <li>Docker</li>
                            <li>Azure SQL, Service Bus, Key Vault</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">AI & Backend</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>Semantic Kernel</li>
                            <li>Azure OpenAI (GPT-4o)</li>
                            <li>ASP.NET Core Web API</li>
                            <li>LINE Messaging API</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Shipped</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>BuddyShopAI — AI customer service product, live in production (.NET 8 + Azure Functions + Azure OpenAI)</li>
                            <li>AI Recruitment Screening System — .NET 10 + Semantic Kernel + React, enterprise hiring workflow</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Certifications</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>AZ-900: Azure Fundamentals ✓</li>
                            <li>AZ-204: Azure Developer Associate (in progress)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <h3 className="min-w-[200px] font-poppins-semibold text-xl">Education</h3>
                        <ul className="grid sm:grid-cols-2 flex-1">
                            <li>B.S. in Information Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
