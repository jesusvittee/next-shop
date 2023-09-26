
import Header from "@components/Header"
import Nav from "@common/Nav"
import '@style/tailwind.css'

export const metadata = {
  title: 'Shop | Store Online',
  description: 'Store ubicate in all the world',
}

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body>
          <>
          <div className="main-h-full">
          <main>
          <Header/>
          <Nav/>
              <div className="max-w-7xl py-6 sm:px6 lg:px-8">
                  {children}
              </div>
          </main>
          </div>
          </>
      </body>
     </html>
   )
 }



