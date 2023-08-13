export default function Navigation() {
    return (
        <header className="bg-white border-b border-sky-200">
            <nav className="p-6 lg:px-8 flex max-w-7xl items-center">
                <span>Shawn TSENG</span>
                <div className="flex-1"></div>
                <button className="btn-sky mr-2">Resume</button>
                <button className="btn-sky mr-2">Portfolio</button>
                <button className="btn-sky mr-2">About me</button>
                <button className="btn-sky">Contact me</button>
            </nav>
        </header>
    )
}