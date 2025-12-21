import style from '@/css/intro.module.css'
import { skills } from '@/lib/skills'

export default function HomepageIntro(){
    return (
        <section className={style.introSection} id='about'>
            <h2 className={style.pageHeading}>What I Do</h2>
            <p className={style.pageContent}>
                With a strong foundation in web development and a creative edge in digital marketing and design, 
                I help brands build beautiful, functional, and engaging online experiences.
            </p>


                {skills.map(({title, info}, index) => (
                <div 
                    key={index} 
                    className={style.contentBlock}
                >
                    <h3 
                        className={style.skillsTitle}
                    >
                        {title}
                    </h3>
                    <p 
                        className={style.skillsInfo}
                    >
                        <div dangerouslySetInnerHTML={{ __html: info }}/>
                    </p>
                </div>
                ))}
        </section>
    )
}