// 'use client'
import { Open_Sans } from 'next/font/google'
import './globals.css'
// import { UserLocationContext } from '@/context/UserLocationContext'


const opensan = Open_Sans({ subsets: ['latin'],weights:['300','400','500'] })

export const metadata ={
  title:'Jeevan ResQ Admin Panel',
  description:'Jeevan ResQ Admin Panel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <UserLocationContext.Provider value={{}}> */}

      <body className={opensan.className}>{children}</body>
      {/* </UserLocationContext.Provider> */}
    </html>
  )
}
