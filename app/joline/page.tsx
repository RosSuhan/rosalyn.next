'use client'
import { useState, useRef } from 'react'
import style from './joline.module.css'
import clsx from 'clsx'

export default function Joline(){
    const [ selectedCut, setSelectedCut ] = useState<string | null>(null)
    const [ selectedPrice, setSelectedPrice ] = useState<number | null>(null)
    const [ selectedPayment, setSelectedPayment ] = useState<string | null>(null)
    const [ loading, setLoading ] =useState(false)
    const submittingRef = useRef(false)

    const today = new Date().toISOString().split('T')[0]

    const displayDate = new Date().toLocaleDateString('en-GB',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const cuts = [
        { label: "Man", value: "Man", price: 120 },
        { label: "Kop & Baard", value: "KopBaard", price: 150 },
        { label: "Vol Kop Skeer", value: "VolKopSkeer", price: 80 },
        { label: "Bles Kop", value: "BlesKop", price: 70 },
        { label: "Kind", value: "Kind", price: 90 },
        { label: "Pensionaris", value: "Pensionaris", price: 90 }
    ]

    const payments = [
        { label: "Kontant", value: "Kontant" },
        { label: "Kaart", value: "Kredit" }
    ]

    const HAIRCUT_GOOGLE_URL = 'https://script.google.com/macros/s/AKfycbzUfvhvKnxxn0PAWlkag8F98zeTdVK4pjxNCoqOd7esI4JDA7KMd53hkOC4O0B5PgSW3Q/exec'

    async function handleSubmitButton(e:React.FormEvent) {
        e.preventDefault();

        if(submittingRef.current) return

        submittingRef.current = true

        setLoading(true)

        const formData = {
            today,
            selectedCut,
            selectedPayment,
            selectedPrice,
        }

        try {
            await fetch(HAIRCUT_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(formData)
            })

            console.log(formData)
            setTimeout(() => {
                requestFormReset();
                
            }, 500);
        } catch (err) {
            console.error(err);
        }
        submittingRef.current = false
        setLoading(false)
    }

    function requestFormReset(){
        setSelectedCut(null);
        setSelectedPayment(null);
        setSelectedPrice(null)
    }
    
    return(
        <main
            className={style.mainPage}
        >
            <form
                className={style.form}
                onSubmit={handleSubmitButton}
            >
                <div
                    className={style.dateRow}
                >
                    {displayDate}
                </div>

                <div
                    className={style.cutButtonRow}
                >
                    {cuts.map((cut) => (
                        <label
                            key={cut.value}
                            className={clsx(selectedCut === cut.value ? style.activeCutButton : style.cutButton)}
                            onClick={() => {
                                setSelectedCut(cut.value)
                                setSelectedPrice(cut.price)
                            }}
                        >
                            <input 
                                type="radio" 
                                name="cutType"
                                className={style.radioCircle}
                                value={cut.value}
                            />
                            {cut.label}
                        </label>
                    ))}
                </div>

                <div
                    className={style.payButtonRow}
                >
                    {payments.map((payment) => (
                        <label
                            key={payment.value}
                            className={clsx(selectedPayment === payment.value ? style.activeCutButton : style.cutButton)}
                            onClick={() => setSelectedPayment(payment.value)}
                    >
                        <input 
                            type="radio" 
                            name="paymentType"
                            className={style.radioCircle}
                        />
                        {payment.label}
                    </label>
                    ))}
                </div>

                <div
                    className={style.submitButtonRow}
                >
                    <button 
                        type="submit"
                        className={style.submitButton}
                        disabled={loading}
                    >
                        {loading ? "Besig..." : "Stuur"}
                    </button>
                </div>
            </form>
        </main>
    )
}