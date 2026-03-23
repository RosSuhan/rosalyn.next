'use client'
import Image from 'next/image'
import style from './../swanepoelTroue.module.css'
import { useState } from 'react'

export default function Rsvp(){
    
    const [ activeHeart, setActiveHeart ] = useState(true)
    const [ activeBrokenHeart, setActiveBrokenHeart ] = useState(true)

    return (
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
                    <div
                        className={style.textBlock}
                    >
                        <h2 className={style.bigText}>RSVP</h2>
                        <p className={style.smallText}>Please respond by 1 July 2026</p>
                    </div>
                    <form action=""
                        className={style.formBlock}
                    >
                        <div
                            className={style.heartRow}
                        >
                            <label htmlFor=""
                                className={style.respondHeart}
                                onClick={() => {
                                    setActiveHeart(!activeHeart)
                                    setActiveBrokenHeart(true)
                                }}
                            >
                                {activeHeart ? 
                                    <Image
                                        src={'/assets/heart-line.svg'}
                                        alt=''
                                        width={1600}
                                        height={800}
                                        className={style.heart}
                                    />
                                :
                                    <Image
                                        src={'/assets/heart-fill.svg'}
                                        alt=''
                                        width={1600}
                                        height={800}
                                        className={style.heart}
                                    /> 
                                }
                                Yay!
                                <input 
                                    type="radio" 
                                    name="" 
                                    id="" 
                                    // style={{display:"none"}}
                                />
                            </label>

                            <label htmlFor=""
                                className={style.respondHeart}
                                onClick={() => {
                                    setActiveBrokenHeart(!activeBrokenHeart)
                                    setActiveHeart(true)
                                }}
                            >
                                {activeBrokenHeart ?
                                    <Image
                                        src={'/assets/broken-heart-line.svg'}
                                        alt=''
                                        width={1600}
                                        height={800}
                                        className={style.heart}
                                    />
                                :
                                    <Image
                                        src={'/assets/broken-heart-fill.svg'}
                                        alt=''
                                        width={1600}
                                        height={800}
                                        className={style.heart}
                                    />
                                }
                                Aww!
                                <input 
                                    type="radio" 
                                    name="" 
                                    id="" 
                                    // style={{display:"none"}} 
                                />
                            </label>
                        </div>
                        <label htmlFor=""
                            className={style.guestNumberRow}
                        >
                            <span
                                className={style.formSmallText}
                            >
                                Number of guests
                            </span>
                            <select 
                                name="" 
                                id=""
                                className={style.guestNumber}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                        <input type="text" name="" id="" placeholder='Name' className={style.inputFields}/>
                        <input type="tel" name="" id="" placeholder='Phone' className={style.inputFields}/>
                        <input type="email" name="" id="" placeholder='Email' className={style.inputFields}/>

                        <input type="submit" value="Respond" className={style.submitBtn}/>
                        
                    </form>
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