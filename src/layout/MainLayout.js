import Header from "@components/Header"
import Main  from "@components/Main"
import Nav from "@common/Nav"

export default function MainLayout({ children }){
    return (
        <>
            <div className="main-h-full">
                <Header/>
                <Nav/>
                <Main/>
                <main>
                    <div className="max-w-7xl py-6 sm:px6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}