export default function Navigation() {
    return (
        <header className="bg-white border-b border-sky-200">
            <nav className="mx-auto p-6 lg:px-8 flex max-w-7xl items-center justify-between" aria-label="Navigation">
                <div className="flex lg:flex-1">
                    <span>Shawn TSENG</span>
                </div>
                <div className="mr-2">
                    <button className="btn-sky mr-2">Resume</button>
                    <button className="btn-sky mr-2">Portfolio</button>
                    <button className="btn-sky mr-2">About me</button>
                    <button className="btn-sky">Contact me</button>
                </div>
            </nav>
        </header>
    )
}