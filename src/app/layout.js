
import '@style/tailwind.css'

export const metadata = {
  title: 'Shop | Store Online',
  description: 'Store ubicate in all the world',
}

export default function RootLayout({ children }) {
  return (
     <html lang="en">
       <body>{children}</body>
     </html>
   )
 }
 
