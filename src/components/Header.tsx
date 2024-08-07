"use client"
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-manrope'
});
import React from 'react'
import { usePathname, useRouter } from "next/navigation";

function Header(props: any) {
    const pathname = usePathname()
    const router = useRouter()
  return (
    <header className="bg-grad min-h-screen p-8 flex flex-col">
    <nav className="flex justify-between items-center">
      <div className="logo">
        <Image
  src="/logo.png"
  alt="Company Logo"
  width={151}
  height={40}
  priority
/>
      </div>
      <div className="menu">
        <ul className= {`${manrope.variable} font-normal flex gap-7`}>
          <li >
          <Link className={` link ${pathname === '/dashboard' ? 'active' : ''}`} href='/dashboard'> ¿Por qué usar Pigueon? </Link> 
          </li>
          <li>
          <Link className={`link ${pathname === '/funciones' ? 'active' : ''}`} href='/funciones'> Funciones </Link> 
          </li>
          <li>
          
          <Link className={`link ${pathname === '/recursos' ? 'active' : ''}`} href='/recursos'> Recursos grátis </Link> 
          </li>
          <li>
          
          <Link className={`link ${pathname === '/empresas' ? 'active' : ''}`} href='/empresas'> Empresas </Link> 
          </li>
          <li>
          <Link className={`link ${pathname === '/precios' ? 'active' : ''}`} href='/precios'> 
          Precios </Link> 
          </li>
        </ul>
      </div>
      <div className="cta">
      <Link className={`text-[#595984] link ${pathname === '/' ? 'active' : ''}`}  href='/login'> 
      Iniciar sesión </Link>
        <button className="bg-[#595984] p-3 ml-3 text-white rounded shadow-lg">
        ¡Comienza grátis!
        </button>
      </div>
    </nav>
    <div className="flex justify-center flex-grow flex-col items-center">
       <h1 className={`${manrope.variable} text-5xl`}>
        I am {props.title} Page
       </h1>
     <button className="bg-[#595984] p-3 ml-3 mt-5 text-white rounded shadow-lg" onClick={() => router.push('/')}>
        Back To Home
     </button>
     </div>
  </header>

  )
}

export default Header
