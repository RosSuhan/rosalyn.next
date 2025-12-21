'use client'
import style from '@/css/hopeStockTake.module.css'
import clsx from 'clsx';
import Image from 'next/image'
import React, { useState } from 'react'

type Department = "" | "Coffee" | "Hope Art" | "Water" | "Welcome Desk" | "Attendance";
type ServiceSet = "" | "firstService" | "secondService"
// type Department = "Coffee"

type FormData = {
    leader: string;
    department: Department;
    coffeeMade: string;
    decafMade: string;
    milkUsed: string;
    coffeeReceived: string;
    coffeeClosingStock: string;
    decafCoffeeReceived: string;
    decafCoffeeClosingStock: string;
    rooibosReceived: string;
    rooibosClosingStock: string;
    jokoReceived: string;
    jokoClosingStock: string;
    milkReceived: string;
    milkClosingStock: string;
    hotChocolateReceived: string;
    hotChocolateClosingStock: string;
    youthHotChocolateReceived: string;
    youthHotChocolateClosingStock: string;
    wSugarReceived: string;
    wSugarClosingStock: string;
    bSugarReceived: string;
    bSugarClosingStock: string;
    sweetnerReceived: string;
    sweetnerClosingStock: string;
    coffeeFiltersReceived: string;
    coffeeFiltersClosingStock: string;
    coffeeCupsReceived: string;
    coffeeCupsClosingStock: string;
    coffeeCupsLidsReceived: string,
    coffeeCupsLidsClosingStock: string,
    stirringSticksReceived: string;
    stirringSticksClosingStock: string;
    waterCupsReceived: string;
    waterCupsClosingStock: string;
    bottel330mlReceived: string;
    bottel330mlClosingStock: string;
    full250ml: string;
    empty250ml: string;
    prayerRequestReceived: string;
    prayerRequestClosingStock: string;
    praiseReportReceived: string;
    praiseReportClosingStock: string;
    invitationReceived: string;
    invitationClosingStock: string;
    nextStepsReceived: string;
    nextStepsClosingStock: string;
    givingReceived: string;
    givingClosingStock: string;
    destinyReceived: string;
    destinyClosingStock: string;
    fullWelcomePacks: string;
    welcomeFormReceived: string;
    welcomeFormClosingStock: string;
    welcomeSleevesReceived: string;
    welcomeSleevesClosingStock: string;
    pensReceived: string;
    pensClosingStock: string;
    lolipopsReceived: string;
    lolipopsClosingStock: string;
    service: ServiceSet; 
    welcomePackGiven: string;
    volunteersRightBlock: string;
    volunteersLeftBlock: string;
    adultsRightBlock: string;
    adultsLeftBlock: string;
    kidsRightBlock: string;
    kidsLeftBlock: string;
    totsRightBlock: string;
    totsLeftBlock: string;
    parRoomAdult: string;
    parRoomTots: string;
    parRoomBabies: string;
    kidsVolunteers: string;
    kids: string;
    totsVolunteers: string;
    tots: string;
    beadedEaringsReceived: string;
    beadedEaringsSold: string;
    beadedEaringsClosing: string;
    beadedBraceletsReceived: string;
    beadedBraceletsSold: string;
    beadedBraceletsClosing: string;
    wovenBraceletsReceived: string;
    wovenBraceletsSold: string;
    wovenBraceletsClosing: string;
    wristKeychainReceived: string,
    wristKeychainSold: string,
    wristKeychainClosing: string,
    beadedNecklaceReceived: "",
    beadedNecklaceSold: string,
    beadedNecklaceClosing: string,
    shortNeclaceReceived: string,
    shortNeclaceSold: string,
    shortNeclaceClosing: string,
    sunglassChainsReceived: string,
    sunglassChainsSold: string,
    sunglassChainsClosing: string,
    beadedKeyringsReceived: string,
    beadedKeyringsSold: string,
    beadedKeyringsClosing: string,
    sixStringBeadedKeyringsReceived: string,
    sixStringBeadedKeyringsSold: string,
    sixStringBeadedKeyringsClosing: string,
    scrunchiesReceived: string,
    scrunchiesSold: string,
    scrunchiesClosing: string,
    bagsReceived: string,
    bagsSold: string,
    bagsClosing: string,
    shDiyBraceletsReceived: string,
    shDiyBraceletsSold: string,
    shDiyBraceletsClosing: string,
    shTShirtReceived: string,
    shTShirtSold: string,
    shTShirtClosing: string,
    comment: string,
}

export default function HopeFamilyStockTake(){
    const [ loading, setLoading ] = useState(false);
    const [ submitMessage, setSubmitMessage ] = useState('')
    const [ formData, setFormData ] = useState<FormData>({
        department: "",
        leader: "",
        coffeeMade: "",
        decafMade: "",
        milkUsed: "",
        coffeeReceived: "",
        coffeeClosingStock: "",
        decafCoffeeReceived: "",
        decafCoffeeClosingStock: "",
        rooibosReceived: "",
        rooibosClosingStock: "",
        jokoReceived: "",
        jokoClosingStock: "",
        milkReceived: "",
        milkClosingStock: "",
        hotChocolateReceived: "",
        hotChocolateClosingStock: "",
        youthHotChocolateReceived: "",
        youthHotChocolateClosingStock: "",
        wSugarReceived: "",
        wSugarClosingStock: "",
        bSugarReceived: "",
        bSugarClosingStock: "",
        sweetnerReceived: "",
        sweetnerClosingStock: "",
        coffeeFiltersReceived: "",
        coffeeFiltersClosingStock: "",
        coffeeCupsReceived: "",
        coffeeCupsClosingStock: "",
        coffeeCupsLidsReceived: "",
        coffeeCupsLidsClosingStock: "",
        stirringSticksReceived: "",
        stirringSticksClosingStock: "",
        waterCupsReceived: "",
        waterCupsClosingStock: "",
        bottel330mlReceived: "",
        bottel330mlClosingStock: "",
        full250ml: "",
        empty250ml: "",
        prayerRequestReceived: "",
        prayerRequestClosingStock: "",
        praiseReportReceived: "",
        praiseReportClosingStock: "",
        invitationReceived: "",
        invitationClosingStock: "",
        nextStepsReceived: "",
        nextStepsClosingStock: "",
        givingReceived: "",
        givingClosingStock: "",
        destinyReceived: "",
        destinyClosingStock: "",
        fullWelcomePacks: "",
        welcomeFormReceived: "",
        welcomeFormClosingStock: "",
        welcomeSleevesReceived: "",
        welcomeSleevesClosingStock: "",
        pensReceived: "",
        pensClosingStock: "",
        lolipopsReceived: "",
        lolipopsClosingStock: "",
        service: "",
        welcomePackGiven: "",
        volunteersRightBlock: "",
        volunteersLeftBlock: "",
        adultsRightBlock: "",
        adultsLeftBlock: "",
        kidsRightBlock: "",
        kidsLeftBlock: "",
        totsRightBlock: "",
        totsLeftBlock: "",
        parRoomAdult: "",
        parRoomTots: "",
        parRoomBabies: "",
        kidsVolunteers: "",
        kids: "",
        totsVolunteers: "",
        tots: "",
        beadedEaringsReceived: "",
        beadedEaringsSold: "",
        beadedEaringsClosing: "",
        beadedBraceletsReceived: "",
        beadedBraceletsSold: "",
        beadedBraceletsClosing: "",
        wovenBraceletsReceived: "",
        wovenBraceletsSold: "",
        wovenBraceletsClosing: "",
        wristKeychainReceived: "",
        wristKeychainSold: "",
        wristKeychainClosing: "",
        beadedNecklaceReceived: "",
        beadedNecklaceSold: "",
        beadedNecklaceClosing: "",
        shortNeclaceReceived: "",
        shortNeclaceSold: "",
        shortNeclaceClosing: "",
        sunglassChainsReceived: "",
        sunglassChainsSold: "",
        sunglassChainsClosing: "",
        beadedKeyringsReceived: "",
        beadedKeyringsSold: "",
        beadedKeyringsClosing: "",
        sixStringBeadedKeyringsReceived: "",
        sixStringBeadedKeyringsSold: "",
        sixStringBeadedKeyringsClosing: "",
        scrunchiesReceived: "",
        scrunchiesSold: "",
        scrunchiesClosing: "",
        bagsReceived: "",
        bagsSold: "",
        bagsClosing: "",
        shDiyBraceletsReceived: "",
        shDiyBraceletsSold: "",
        shDiyBraceletsClosing: "",
        shTShirtReceived: "",
        shTShirtSold: "",
        shTShirtClosing: "",
        comment: "",
    })

    const SUBMIT_GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbxUsWGlJ2ZhkUD-lvcnohmBQ7ej4y_FGdT8VMV6gKnqwf8AllonZCGD4CU3I1Nhsahg-g/exec'

    async function handleSentForm (e:React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            await fetch(SUBMIT_GOOGLE_FORM_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })

            console.log(formData);
            setSubmitMessage("Thank you for taking stock and helping us excell in excellence.")
            setLoading(false)

            setTimeout(() => {
                formReset();
                setSubmitMessage("");
            }, 5000);
        } catch (err){
            console.error(err);
            setSubmitMessage("Something went wrong, Please try again.")
            setLoading(false);
        }
    }

    function formReset() {
        setFormData({
            department: "",
            leader: "",
            coffeeMade: "",
            decafMade: "",
            milkUsed: "",
            coffeeReceived: "",
            coffeeClosingStock: "",
            decafCoffeeReceived: "",
            decafCoffeeClosingStock: "",
            rooibosReceived: "",
            rooibosClosingStock: "",
            jokoReceived: "",
            jokoClosingStock: "",
            milkReceived: "",
            milkClosingStock: "",
            hotChocolateReceived: "",
            hotChocolateClosingStock: "",
            youthHotChocolateReceived: "",
            youthHotChocolateClosingStock: "",
            wSugarReceived: "",
            wSugarClosingStock: "",
            bSugarReceived: "",
            bSugarClosingStock: "",
            sweetnerReceived: "",
            sweetnerClosingStock: "",
            coffeeFiltersReceived: "",
            coffeeFiltersClosingStock: "",
            coffeeCupsReceived: "",
            coffeeCupsClosingStock: "",
            coffeeCupsLidsReceived: "",
            coffeeCupsLidsClosingStock: "",
            stirringSticksReceived: "",
            stirringSticksClosingStock: "",
            waterCupsReceived: "",
            waterCupsClosingStock: "",
            bottel330mlReceived: "",
            bottel330mlClosingStock: "",
            full250ml: "",
            empty250ml: "",
            prayerRequestReceived: "",
            prayerRequestClosingStock: "",
            praiseReportReceived: "",
            praiseReportClosingStock: "",
            invitationReceived: "",
            invitationClosingStock: "",
            nextStepsReceived: "",
            nextStepsClosingStock: "",
            givingReceived: "",
            givingClosingStock: "",
            destinyReceived: "",
            destinyClosingStock: "",
            fullWelcomePacks: "",
            welcomeFormReceived: "",
            welcomeFormClosingStock: "",
            welcomeSleevesReceived: "",
            welcomeSleevesClosingStock: "",
            pensReceived: "",
            pensClosingStock: "",
            lolipopsReceived: "",
            lolipopsClosingStock: "",
            service: "",
            welcomePackGiven: "",
            volunteersRightBlock: "",
            volunteersLeftBlock: "",
            adultsRightBlock: "",
            adultsLeftBlock: "",
            kidsRightBlock: "",
            kidsLeftBlock: "",
            totsRightBlock: "",
            totsLeftBlock: "",
            parRoomAdult: "",
            parRoomTots: "",
            parRoomBabies: "",
            kidsVolunteers: "",
            kids: "",
            totsVolunteers: "",
            tots: "",
            beadedEaringsReceived: "",
            beadedEaringsSold: "",
            beadedEaringsClosing: "",
            beadedBraceletsReceived: "",
            beadedBraceletsSold: "",
            beadedBraceletsClosing: "",
            wovenBraceletsReceived: "",
            wovenBraceletsSold: "",
            wovenBraceletsClosing: "",
            wristKeychainReceived: "",
            wristKeychainSold: "",
            wristKeychainClosing: "",
            beadedNecklaceReceived: "",
            beadedNecklaceSold: "",
            beadedNecklaceClosing: "",
            shortNeclaceReceived: "",
            shortNeclaceSold: "",
            shortNeclaceClosing: "",
            sunglassChainsReceived: "",
            sunglassChainsSold: "",
            sunglassChainsClosing: "",
            beadedKeyringsReceived: "",
            beadedKeyringsSold: "",
            beadedKeyringsClosing: "",
            sixStringBeadedKeyringsReceived: "",
            sixStringBeadedKeyringsSold: "",
            sixStringBeadedKeyringsClosing: "",
            scrunchiesReceived: "",
            scrunchiesSold: "",
            scrunchiesClosing: "",
            bagsReceived: "",
            bagsSold: "",
            bagsClosing: "",
            shDiyBraceletsReceived: "",
            shDiyBraceletsSold: "",
            shDiyBraceletsClosing: "",
            shTShirtReceived: "",
            shTShirtSold: "",
            shTShirtClosing: "",
            comment: "",
        })
    }

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return(
        <main
            className={style.pageSection}
        >
            <section
                className={style.heroSection}
            >
                <Image
                    src={"/assets/Hope-Family-Logo-1.webp"}
                    alt=''
                    width={200}
                    height={63}
                    className={style.hopeFamilyLogo}
                    loading='eager'
                />
                <h2
                    className={style.hopeFamilyName}
                >
                    Mossel Bay Stock
                </h2>
            </section>

            <section
                className={style.formSection}
            >
                
                <form
                    className={style.stockForm}
                    onSubmit={handleSentForm}
                >
                    <fieldset
                        className={clsx(formData.department === "" ? style.activeFieldset : style.hide)}
                    >
                        <input 
                            type="text" 
                            name='leader'
                            placeholder={'Your name'}
                            value={formData.leader}
                            onChange={handleOnChange}
                            className={style.formInput}
                        />

                        <h3
                            className={style.formQuestion}
                        >
                            What area are you doing stock for?
                        </h3>

                        <select 
                            id='department'
                            name='department'
                            value={formData.department}
                            onChange={handleOnChange}
                            className={style.stockFormSelect}
                            required
                        >
                            <option value="">Select your Department</option>
                            <option value="Coffee">Coffee</option>
                            <option value="Water">Water</option>
                            <option value="Welcome Desk">Welcome Desk</option>
                            <option value="Hope Art">Hope Art</option>
                            <option value="Attendance">Attendance</option>
                        </select>
                    </fieldset>

                    {formData.department === "Coffee" && (
                        <fieldset
                            className={style.activeFieldset}
                        >
                            <h3>
                                Coffee Department
                            </h3>

                            {/* Totals served */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Total served for the day?
                                </span>

                                <input 
                                    name='coffeeMade'
                                    type="text"
                                    placeholder='Coffee'
                                    value={formData.coffeeMade}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='decafMade'
                                    type="text"
                                    placeholder='Decaf'
                                    value={formData.decafMade}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='milkUsed'
                                    type="text"
                                    placeholder='Milk'
                                    value={formData.milkUsed}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* Coffee */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Coffee
                                </span>

                                <input 
                                    name='coffeeReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.coffeeReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='coffeeClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.coffeeClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* decaf Coffee */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Decaf Coffee
                                </span>

                                <input 
                                    name='decafCoffeeReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.decafCoffeeReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='decafCoffeeClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.decafCoffeeClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* rooibos tea */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Rooibos Tea
                                </span>

                                <input 
                                    name='rooibosReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.rooibosReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='rooibosClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.rooibosClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Joko */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Joko Tea
                                </span>

                                <input 
                                    name='jokoReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.jokoReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='jokoClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.jokoClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Milk */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Milk
                                </span>

                                <input 
                                    name='milkReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.milkReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='milkClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.milkClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* hot chocolate */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Hot Chocolate
                                </span>

                                <input 
                                    name='hotChocolateReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.hotChocolateReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='hotChocolateClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.hotChocolateClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* youth hot chocolate */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Youth Hot Chocolate
                                </span>

                                <input 
                                    name='youthHotChocolateReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.youthHotChocolateReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='youthHotChocolateClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.youthHotChocolateClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* White sugar */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    White Sugar
                                </span>

                                <input 
                                    name='wSugarReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.wSugarReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='wSugarClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.wSugarClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* brown sugar */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Brown Sugar
                                </span>

                                <input 
                                    name='bSugarReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.bSugarReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='bSugarClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.bSugarClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* sweetner */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Sweetner
                                </span>

                                <input 
                                    name='sweetnerReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.sweetnerReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='sweetnerClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.sweetnerClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* coffee filters */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Coffee Filters
                                </span>

                                <input 
                                    name='coffeeFiltersReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.coffeeFiltersReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='coffeeFiltersClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.coffeeFiltersClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* coffee cups */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Coffee Cups
                                </span>

                                <input 
                                    name='coffeeCupsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.coffeeCupsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='coffeeCupsClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.coffeeCupsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* coffee cups lids*/}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Coffee Cups Lids
                                </span>

                                <input 
                                    name='coffeeCupsLidsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.coffeeCupsLidsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='coffeeCupsLidsClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.coffeeCupsLidsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* stirring Sticks */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Stirring Sticks
                                </span>

                                <input 
                                    name='stirringSticksReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.stirringSticksReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='stirringSticksClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.stirringSticksClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* water cups */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Water Cups
                                </span>

                                <input 
                                    name='waterCupsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.waterCupsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='waterCupsClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.waterCupsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Comment
                                </span>

                                <textarea 
                                    name="comment" 
                                    id="comment"
                                    placeholder='Comment'
                                    onChange={handleOnChange}
                                    value={formData.comment}
                                    className={style.textArea}
                                    rows={5}
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className={style.submitBtn}
                            >
                                {loading ? "Sending stock count" : "Submit"}
                            </button>
                        </fieldset>
                    )}

                    {formData.department === "Water" && (
                        <fieldset
                            className={style.activeFieldset}
                        >
                            <h3>
                                Water
                            </h3>

                            {/* 330ml Water bottels */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    330ml Water
                                </span>

                                <input 
                                    name='bottel330mlReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.bottel330mlReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='bottel330mlClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.bottel330mlClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* 250ml water */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    250ml Water
                                </span>

                                <input 
                                    name='full250ml'
                                    type="text"
                                    placeholder='Full Bottels'
                                    value={formData.full250ml}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='empty250ml'
                                    type="text"
                                    placeholder='Empty bottels'
                                    value={formData.empty250ml}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            <textarea 
                                    name="comment" 
                                    id="comment"
                                    placeholder='Comment'
                                    onChange={handleOnChange}
                                    value={formData.comment}
                                    className={style.textArea}
                                    rows={5}
                                ></textarea>

                            <button 
                                type="submit"
                                className={style.submitBtn}
                            >
                                {loading ? "Sending stock count" : "Submit"}
                            </button>
                        </fieldset>
                    )}

                    {formData.department === "Welcome Desk" && (
                        <fieldset
                            className={style.activeFieldset}
                        >
                            <h3>
                                Welcome Desk
                            </h3>

                            {/* welcome packs */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Welcome Packs
                                </span>
                                
                                <input 
                                    name='fullWelcomePacks'
                                    type="text"
                                    placeholder='Full Welcome Packs'
                                    value={formData.fullWelcomePacks}
                                    onChange={handleOnChange}
                                    className={style.formInput}
                                />

                                <input 
                                    name='welcomeFormReceived'
                                    type="text"
                                    placeholder='Forms Received'
                                    value={formData.welcomeFormReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='welcomeFormClosingStock'
                                    type="text"
                                    placeholder='Forms Closing'
                                    value={formData.welcomeFormClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='welcomeSleevesReceived'
                                    type="text"
                                    placeholder='Sleeves Received'
                                    value={formData.welcomeSleevesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='welcomeSleevesClosingStock'
                                    type="text"
                                    placeholder='Sleeves Closing'
                                    value={formData.welcomeSleevesClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='pensReceived'
                                    type="text"
                                    placeholder='Pens Received'
                                    value={formData.pensReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='pensClosingStock'
                                    type="text"
                                    placeholder='Pens Closing'
                                    value={formData.pensClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='lolipopsReceived'
                                    type="text"
                                    placeholder='Lolipops Received'
                                    value={formData.lolipopsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='lolipopsClosingStock'
                                    type="text"
                                    placeholder='Lolipops Closing'
                                    value={formData.lolipopsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* prayer request */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Prayer Request Cards
                                </span>

                                <input 
                                    name='prayerRequestReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.prayerRequestReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='prayerRequestClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.prayerRequestClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* praise report */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Praise Report Cards
                                </span>

                                <input 
                                    name='praiseReportReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.praiseReportReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='praiseReportClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.praiseReportClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* invitations */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Invitation Cards
                                </span>

                                <input 
                                    name='invitationReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.invitationReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='invitationClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.invitationClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* next steps */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Next Steps Forms
                                </span>

                                <input 
                                    name='nextStepsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.nextStepsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='nextStepsClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.nextStepsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* giving */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Giving Envelopes
                                </span>

                                <input 
                                    name='givingReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.givingReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='givingClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.givingClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* destiny booklet */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    My Destiny Booklet
                                </span>

                                <input 
                                    name='destinyReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.destinyReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='destinyClosingStock'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.destinyClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            <textarea 
                                    name="comment" 
                                    id="comment"
                                    placeholder='Comment'
                                    onChange={handleOnChange}
                                    value={formData.comment}
                                    className={style.textArea}
                                    rows={5}
                                ></textarea>

                            <button 
                                type="submit"
                                className={style.submitBtn}
                            >
                                {loading ? "Sending stock count" : "Submit"}
                            </button>
                        </fieldset>
                    )}

                    {formData.department === "Attendance" && (
                        <fieldset
                            className={style.activeFieldset}
                        >
                            <h3
                                style={{width:"100%", margin:"0"}}
                            >
                                Attendance
                            </h3>

                            <select 
                                id='service'
                                name='service'
                                value={formData.service}
                                onChange={handleOnChange}
                                className={style.stockFormSelect}
                                required
                            >
                                <option value="">Select Service</option>
                                <option value="firstService">First Service</option>
                                <option value="secondService">Second Service</option>
                            </select>

                            {/* Auditorium */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Auditorium
                                </span>

                                <input 
                                    name='welcomePackGiven'
                                    type="text"
                                    placeholder='How many pack were given out?'
                                    value={formData.welcomePackGiven}
                                    onChange={handleOnChange}
                                    className={style.formInput}
                                />

                                <input 
                                    name='volunteersRightBlock'
                                    type="text"
                                    placeholder='Volunteers Right Block'
                                    value={formData.volunteersRightBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='volunteersLeftBlock'
                                    type="text"
                                    placeholder='Volunteers Left Block'
                                    value={formData.volunteersLeftBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='adultsRightBlock'
                                    type="text"
                                    placeholder='Adults Right Block'
                                    value={formData.adultsRightBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='adultsLeftBlock'
                                    type="text"
                                    placeholder='Adults Left Block'
                                    value={formData.adultsLeftBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='kidsRightBlock'
                                    type="text"
                                    placeholder='Kids Right Block'
                                    value={formData.kidsRightBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='kidsLeftBlock'
                                    type="text"
                                    placeholder='Kids Left Block'
                                    value={formData.kidsLeftBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='totsRightBlock'
                                    type="text"
                                    placeholder='Tots Right Block'
                                    value={formData.totsRightBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='totsLeftBlock'
                                    type="text"
                                    placeholder='Tots Left Block'
                                    value={formData.totsLeftBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Parents Room */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Parents Room
                                </span>

                                <input 
                                    name='parRoomAdult'
                                    type="text"
                                    placeholder='Parents'
                                    value={formData.parRoomAdult}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='parRoomTots'
                                    type="text"
                                    placeholder='Tots'
                                    value={formData.parRoomTots}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='parRoomBabies'
                                    type="text"
                                    placeholder='Babies'
                                    value={formData.parRoomBabies}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Kids Church */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Kids Church
                                </span>

                                <input 
                                    name='kidsVolunteers'
                                    type="text"
                                    placeholder='Volunteers'
                                    value={formData.kidsVolunteers}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='kids'
                                    type="text"
                                    placeholder='Kids'
                                    value={formData.kids}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* tots Church */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Tots Church
                                </span>

                                <input 
                                    name='totsVolunteers'
                                    type="text"
                                    placeholder='Volunteers'
                                    value={formData.totsVolunteers}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='tots'
                                    type="text"
                                    placeholder='Tots'
                                    value={formData.tots}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            <button 
                                type="submit"
                                className={style.submitBtn}
                            >
                                {loading ? "Sending stock count" : "Submit"}
                            </button>
                        </fieldset>
                    )}

                    {formData.department === "Hope Art" && (
                        <fieldset
                            className={style.activeFieldset}
                        >
                            <h3
                                style={{width:"100%", margin:"0"}}
                            >
                                Hope Art
                            </h3>

                            {/* beaded earings */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Beaded Earings
                                </span>

                                <input 
                                    name='beadedEaringsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.beadedEaringsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedEaringsSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.beadedEaringsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedEaringsClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.beadedEaringsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* beaded bracelets */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Beaded Bracelets
                                </span>

                                <input 
                                    name='beadedBraceletsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.beadedBraceletsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedBraceletsSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.beadedBraceletsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedBraceletsClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.beadedBraceletsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* woven bracelets */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Beaded Bracelets
                                </span>

                                <input 
                                    name='wovenBraceletsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.wovenBraceletsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wovenBraceletsSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.wovenBraceletsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wovenBraceletsClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.wovenBraceletsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* wrist keychain */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Wrist Keychain
                                </span>

                                <input 
                                    name='wristKeychainReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.wristKeychainReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wristKeychainSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.wristKeychainSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wristKeychainClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.wristKeychainClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* beaded necklace */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    beaded necklace
                                </span>

                                <input 
                                    name='beadedNecklaceReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.beadedNecklaceReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedNecklaceSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.beadedNecklaceSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedNecklaceClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.beadedNecklaceClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* short necklace */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Short necklace
                                </span>

                                <input 
                                    name='shortNeclaceReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.shortNeclaceReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shortNeclaceSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.shortNeclaceSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shortNeclaceClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.shortNeclaceClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* sunglass chains */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Sunglass Chains
                                </span>

                                <input 
                                    name='sunglassChainsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.sunglassChainsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='sunglassChainsSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.sunglassChainsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='sunglassChainsClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.sunglassChainsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* beaded keyrings */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Beaded Keyrings
                                </span>

                                <input 
                                    name='beadedKeyringsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.beadedKeyringsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedKeyringsSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.beadedKeyringsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedKeyringsClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.beadedKeyringsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* 6 string beaded keyrings */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    6 String Beaded Keyrings
                                </span>

                                <input 
                                    name='sixStringBeadedKeyringsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.sixStringBeadedKeyringsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='sixStringBeadedKeyringsSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.sixStringBeadedKeyringsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='sixStringBeadedKeyringsClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.sixStringBeadedKeyringsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* Scrunchies */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Scrunchies
                                </span>

                                <input 
                                    name='scrunchiesReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.scrunchiesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='scrunchiesSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.scrunchiesSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='scrunchiesClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.scrunchiesClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* Bags */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Bags
                                </span>

                                <input 
                                    name='bagsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.bagsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='bagsSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.bagsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='bagsClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.bagsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* SH DIY Bracelets */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    SH DIY Bracelets
                                </span>

                                <input 
                                    name='shDiyBraceletsReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.shDiyBraceletsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shDiyBraceletsSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.shDiyBraceletsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shDiyBraceletsClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.shDiyBraceletsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* SH t-shirt */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    SH T-Shirt
                                </span>

                                <input 
                                    name='shTShirtReceived'
                                    type="text"
                                    placeholder='Received'
                                    value={formData.shTShirtReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shTShirtSold'
                                    type="text"
                                    placeholder='Sold'
                                    value={formData.shTShirtSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shTShirtClosing'
                                    type="text"
                                    placeholder='Closing'
                                    value={formData.shTShirtClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            <textarea 
                                    name="comment" 
                                    id="comment"
                                    placeholder='Comment'
                                    onChange={handleOnChange}
                                    value={formData.comment}
                                    className={style.textArea}
                                    rows={5}
                                ></textarea>

                            <button 
                                type="submit"
                                className={style.submitBtn}
                            >
                                {loading ? "Sending stock count" : "Submit"}
                            </button>
                        </fieldset>
                    )}
                </form>

                {submitMessage ? 
                    <p
                        className={style.message}
                    >
                        {submitMessage}
                    </p>
                : null }
            </section>
            <footer
                className={style.footer}
            >
                <p>{new Date().getFullYear()}</p>
            </footer>
        </main>
    )
}