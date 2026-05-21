import './globals.css'
import { Rajdhani, Exo_2 } from 'next/font/google'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'MediCore — AI-Powered Healthcare Platform',
  description:
    'Cloud-based EHR, Practice Management & Medical Billing powered by AI. Built for modern medical practices.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${exo2.variable}`}>
   
      <body>
           <Navbar/>
        {children}
        
             <Footer/>
        </body>
 
    </html>
  )
}