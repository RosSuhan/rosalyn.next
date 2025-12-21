'use client'
import style from '@/css/footer.module.css'

export default function Footer(){
    return(
        <footer className={style.footer}>
            {/* <div className="">
                <a href="https://linkedin.com" className="">LinkedIn</a>
                <a href="https://github.com" className="">GitHub</a>
                <a href="mailto:info@rosalyn.online" className="">Email</a>
            </div> */}
            <p>© {new Date().getFullYear()} Rosalyn. All rights reserved.</p>
        </footer>
    )
}