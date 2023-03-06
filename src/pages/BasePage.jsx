import NavBar from "../components/NavBar"

export default function BasePage({children})
{
    return <>
        <header className="container">
            <NavBar />
        </header>
        <main className="container">
            {children}
        </main>
        <footer className="container">
            2023 &copy; All rights reserved.
        </footer>
    </>
}
