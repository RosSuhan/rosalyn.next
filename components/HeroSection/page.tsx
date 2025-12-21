import style from '@/css/homepageHero.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection(){
    return(
        <section className={style.heroSection}>
            <Image
                src={"/assets/Rosalyn_van_Zyl.jpeg"} 
                alt="Rosalyn van Zyl" 
                width={529}
                height={540}
                className={style.mainImage}
            />
            <div
                className={style.contentBlock}
            >
                <h1 
                    className={style.mainHeading}
                >
                    Hi, I&apos;m Rosalyn
                </h1>
                <p 
                    className={style.heroIntro}
                >
                    A passionate <span className="">Web Developer</span> and 
                    <span className=""> Digital Creative</span> blending tech and design to tell better brand stories.
                </p>
                <div 
                    className={style.buttonRow}
                >
                    <Link
                        href="#portfolio" 
                        className={style.buttonLink}>
                        View My Work
                    </Link>
                    {/* <Link to="/contact" className={style.buttonLink}>
                        Get in Touch
                    </Link> */}
                </div>
            </div>
        </section>
    )
}