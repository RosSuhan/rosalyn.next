'use client'
import { clsx } from 'clsx'
import style from '@/css/header.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { menu } from '@/lib/menu'

export default function Header(){
    

    const [mobileNav, setMobileNavOpen] = useState(false)
    return(
        <header
            className={style.header}
        >
            <Image
                src={"/assets/RosalynLogo.png"}
                alt="Rosalyn van Zyl Logo" 
                width={180}
                height={68}
                className={style.headerLogo}
            />

            <nav
                className={clsx(style.nav, mobileNav && style.mobileNav)}
            >
                {menu.map(({path, name}, index) => (
                    <a 
                        href={path}
                        title={name}
                        key={index}
                        className={style.navLink}
                        onClick={() => setMobileNavOpen(false)}
                    >
                        {name}
                    </a>
                ))}
            </nav>

            <button
                type='button'
                className={style.mobileMenu}
                onClick={() => setMobileNavOpen(!mobileNav)}
            >
                Menu
            </button>
        </header>
    )
}