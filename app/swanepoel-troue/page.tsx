'use client'
import Image from 'next/image'
import style from './swanepoelTroue.module.css'
import Link from 'next/link'

export default function Swanepoeltroue(){

    return(
        <main
            className={style.mainPage}
        >
            <Image
                src={'/assets/page-top-banner.png'}
                alt=''
                width={1150}
                height={450}
                loading='eager'
                className={style.pageTopBanner}
            />

            <section
                className={style.invitation}
            >
                <div
                    className={style.page}
                >
                    <Image
                        src={'/assets/we-do.png'}
                        alt=''
                        width={1600}
                        height={800}
                        className={style.weDo}
                    />

                    <div
                        className={style.textBlock}
                    >
                        <p className={style.smallText} style={{margin:"0"}}>Together we,</p>
                        <h1 className={style.mainText}>Pieter & Rosalyn</h1>
                        <p className={style.smallText} style={{margin:"0"}}>Invite you to celebrate our wedding with us.</p>
                    </div>

                    <div
                        className={style.textBlock}
                    >
                        <span className={style.mediumText}>Saturday</span>
                        <span className={style.bigText}>11 July 2026</span>
                        <span className={style.mediumText}>Time</span>
                    </div>

                    <div
                        className={style.textBlock}
                    >
                        <span className={style.bigText}>Place</span>
                        <address className={style.smallText}>Address</address>
                    </div>

                    <a
                        href={"/swanepoel-troue/rsvp"}
                        className={style.submitBtn}
                    >
                        RSVP
                    </a>
                </div>
            </section>

            <Image
                src={'/assets/page-bottom-banner.png'}
                alt=''
                width={1150}
                height={640}
                className={style.pageBottomBanner}
            />
        </main>
    )
}