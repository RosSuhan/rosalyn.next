'use client'
import style from '@/css/hopeStockTake.module.css'
import clsx from 'clsx';
import Image from 'next/image'
import React, { useState } from 'react'

type Department = "" | "Coffee" | "Hope Art" | "Water" | "Welcome Desk" | "Hope Kids" | "Attendance" | "Merchandice" | "General Cleaning";
type ServiceSet = "" | "firstService" | "secondService"
// type Department = "Coffee"

type FormData = {
    comment: string,
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
    annointingOilReceived: string;
    annointingOilClosingStock: string;
    tissuesReceived: string,
    tissuesClosingStock: string,
    hallsReceived: string;
    hallsClosingStock: string;
    gumReceived: string;
    gumClosingStock: string;
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
    beadedNecklaceReceived: string,
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
    standardAnimalReceived: string,
    standardAnimalsSold: string,
    standardAnimalClosing: string,
    ornamentsReceived: string,
    ornamentsSold: string,
    ornamentsClosing: string,
    babyAnimalReceived: string,
    babyAnimalsSold: string,
    babyAnimalClosing: string,
    welcomePacksFormsReceived: string,
    baptismCertificate: string,
    baptismCertStickers: string,
    babyDedicationCert: string,
    leadershipManuals: string,
    discoveryBooklets: string,
    lanPocketReceived: string,
    lanPocketSold: string,
    lanPocketClosing: string,
    lanVolReceived: string,
    lanVolSold: string,
    lanVolClosing: string,
    lanKidReceived: string,
    lanKidSold: string,
    lanKidClosing: string,
    whShirtKidsReceived: string,
    whShirtKidsSold: string,
    whShirtKidsClosing: string,
    whShirtXSReceived: string,
    whShirtXSSold: string,
    whShirtXSClosing: string,
    whShirtSReceived: string,
    whShirtSSold: string,
    whShirtSClosing: string,
    whShirtMReceived: string,
    whShirtMSold: string,
    whShirtMClosing: string,
    whShirtLReceived: string,
    whShirtLSold: string,
    whShirtLClosing: string,
    whShirtXLReceived: string,
    whShirtXLSold: string,
    whShirtXLClosing: string,
    whShirt2XLReceived: string,
    whShirt2XLSold: string,
    whShirt2XLClosing: string,
    whShirt3XLReceived: string,
    whShirt3XLSold: string,
    whShirt3XLClosing: string,
    whShirt4XLReceived: string,
    whShirt4XLSold: string,
    whShirt4XLClosing: string,
    whStickersReceived: string,
    whStickersClosingStock: string,
    hbStickersReceived: string, 
    hbStickersClosingStock: string,
    fjbookReceived: string,
    fjbookClosingStock: string,
    prprReceived: string,
    prprClosingStock: string,
    printReceived: string,
    printClosingStock: string,
    riceCakeReceived: string,
    riceCakeClosingStock: string,
    wetwipesReceived: string,
    wetwipesClosingStock: string,
    kidsTissuesReceived: string,
    kidsTissuesClosingStock: string,
    redBalloonReceived: string,
    redBalloonClosingStock: string,
    blueBalloonReceived: string,
    blueBalloonClosingStock: string,
    greenBalloonReceived: string,
    greenBalloonClosingStock: string,
    orangeBalloonReceived: string,
    orangeBalloonClosingStock: string,
    blackBagsReceived: string,
    blackBagsClosingStock: string,
    smallToiletBinBagsReceived: string,
    smallToiletBinBagsClosingStock: string,
    toiletBlocksReceived: string,
    toiletBlocksClosingStock: string,
    latexGlovesReceived: string,
    latexGlovesClosingStock: string,
    dishSpongesReceived: string,
    dishSpongesClosingStock: string,
    dishClothReceived: string,
    dishClothClosingStock: string,
    dryingClothReceived: string,
    dryingClothClosingStock: string,
    kitchenPaperTowelsReceived: string,
    kitchenPaperTowelsClosingStock: string,
    handPaperTowelsReceived: string,
    handPaperTowelsClosingStock: string,
    toiletPaperReceived: string,
    toiletPaperClosingStock: string,
    autoAirFreshnerReceived: string,
    autoAirFreshnerClosingStock: string,
    airFreshnerReceived: string,
    airFreshnerClosingStock: string,
    handSoapReceived: string,
    handSoapClosingStock: string,
    dishwashingLiquidReceived: string,
    dishwashingLiquidClosingStock: string,
    vinegarReceived: string,
    vinegarClosingStock: string,
    allPurposeCleanerReceived: string,
    allPurposeCleanerClosingStock: string,
    germdeoReceived: string,
    germdeoClosingStock: string,
    wbShirtKidsReceived: string,
    wbShirtKidsSold: string,
    wbShirtKidsClosing: string,
    wbShirtXSReceived: string,
    wbShirtXSSold: string,
    wbShirtXSClosing: string,
    wbShirtSReceived: string,
    wbShirtSSold: string,
    wbShirtSClosing: string,
    wbShirtMReceived: string,
    wbShirtMSold: string,
    wbShirtMClosing: string,
    wbShirtLReceived: string,
    wbShirtLSold: string,
    wbShirtLClosing: string,
    wbShirtXLReceived: string,
    wbShirtXLSold: string,
    wbShirtXLClosing: string,
    wbShirt2XLReceived: string,
    wbShirt2XLSold: string,
    wbShirt2XLClosing: string,
    wbShirt3XLReceived: string,
    wbShirt3XLSold: string,
    wbShirt3XLClosing: string,
    wbShirt4XLReceived: string,
    wbShirt4XLSold: string,
    wbShirt4XLClosing: string,
}

export default function HopeFamilyStockTake(){
    const [ loading, setLoading ] = useState(false);
    const [ submitMessage, setSubmitMessage ] = useState('')
    const [ formData, setFormData ] = useState<FormData>({
        department: "",
        leader: "",
        comment: "",        
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
        annointingOilReceived: "",
        annointingOilClosingStock: "",
        tissuesReceived: "",
        tissuesClosingStock: "",
        hallsReceived: "",
        hallsClosingStock: "",
        gumReceived: "",
        gumClosingStock: "",
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
        standardAnimalReceived: "",
        standardAnimalsSold: "",
        standardAnimalClosing: "",
        ornamentsReceived: "",
        ornamentsSold: "",
        ornamentsClosing: "",
        babyAnimalReceived: "",
        babyAnimalsSold: "",
        babyAnimalClosing: "",
        welcomePacksFormsReceived: "",
        baptismCertificate: "",
        baptismCertStickers: "",
        babyDedicationCert: "",
        leadershipManuals: "",
        discoveryBooklets: "",
        lanPocketReceived: "",
        lanPocketSold: "",
        lanPocketClosing: "",
        lanVolReceived: "",
        lanVolSold: "",
        lanVolClosing: "",
        lanKidReceived: "",
        lanKidSold: "",
        lanKidClosing: "",
        whShirtKidsReceived: "",
        whShirtKidsSold: "",
        whShirtKidsClosing: "",
        whShirtXSReceived: "",
        whShirtXSSold: "",
        whShirtXSClosing: "",
        whShirtSReceived: "",
        whShirtSSold: "",
        whShirtSClosing: "",        
        whShirtMReceived: "",
        whShirtMSold: "",
        whShirtMClosing: "",        
        whShirtLReceived: "",        
        whShirtLSold: "",        
        whShirtLClosing: "",        
        whShirtXLReceived: "",        
        whShirtXLSold: "",
        whShirtXLClosing: "",        
        whShirt2XLReceived: "",        
        whShirt2XLSold: "",        
        whShirt2XLClosing: "",        
        whShirt3XLReceived: "",
        whShirt3XLSold: "",        
        whShirt3XLClosing: "",        
        whShirt4XLReceived: "",        
        whShirt4XLSold: "",        
        whShirt4XLClosing: "",    
        whStickersReceived: "",
        whStickersClosingStock: "",
        hbStickersReceived: "", 
        hbStickersClosingStock: "",
        fjbookReceived: "",
        fjbookClosingStock: "",
        prprReceived: "",
        prprClosingStock: "",
        printReceived: "",
        printClosingStock: "",
        riceCakeReceived: "",
        riceCakeClosingStock: "",
        wetwipesReceived: "",
        wetwipesClosingStock: "",
        kidsTissuesReceived: "",
        kidsTissuesClosingStock: "",
        redBalloonReceived: "",
        redBalloonClosingStock: "",
        blueBalloonReceived: "",
        blueBalloonClosingStock: "",
        greenBalloonReceived: "",
        greenBalloonClosingStock: "",
        orangeBalloonReceived: "",
        orangeBalloonClosingStock: "",   
        blackBagsReceived: "",
        blackBagsClosingStock: "", 
        smallToiletBinBagsReceived: "",
        smallToiletBinBagsClosingStock: "",
        toiletBlocksReceived: "",
        toiletBlocksClosingStock: "",
        latexGlovesReceived: "",
        latexGlovesClosingStock: "",
        dishSpongesReceived: "",
        dishSpongesClosingStock: "",
        dishClothReceived: "",
        dishClothClosingStock: "",
        dryingClothReceived: "",
        dryingClothClosingStock: "",
        kitchenPaperTowelsReceived: "",
        kitchenPaperTowelsClosingStock: "",
        handPaperTowelsReceived: "",
        handPaperTowelsClosingStock: "",
        toiletPaperReceived: "",
        toiletPaperClosingStock: "",
        autoAirFreshnerReceived: "",
        autoAirFreshnerClosingStock: "",
        airFreshnerReceived: "",
        airFreshnerClosingStock: "",
        handSoapReceived: "",
        handSoapClosingStock: "",
        dishwashingLiquidReceived: "",
        dishwashingLiquidClosingStock: "",
        vinegarReceived: "",
        vinegarClosingStock: "",
        allPurposeCleanerReceived: "",
        allPurposeCleanerClosingStock: "",
        germdeoReceived: "",
        germdeoClosingStock: "",
        wbShirtKidsReceived: "",
        wbShirtKidsSold: "",
        wbShirtKidsClosing: "",
        wbShirtXSReceived: "",
        wbShirtXSSold: "",
        wbShirtXSClosing: "",
        wbShirtSReceived: "",
        wbShirtSSold: "",
        wbShirtSClosing: "",
        wbShirtMReceived: "",
        wbShirtMSold: "",
        wbShirtMClosing: "",
        wbShirtLReceived: "",
        wbShirtLSold: "",
        wbShirtLClosing: "",
        wbShirtXLReceived: "",
        wbShirtXLSold: "",
        wbShirtXLClosing: "",
        wbShirt2XLReceived: "",
        wbShirt2XLSold: "",
        wbShirt2XLClosing: "",
        wbShirt3XLReceived: "",
        wbShirt3XLSold: "",
        wbShirt3XLClosing: "",
        wbShirt4XLReceived: "",
        wbShirt4XLSold: "",
        wbShirt4XLClosing: "",
    })

    const SUBMIT_GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbyL30MF8P4jDAvZmrsHQOIAI7OPz-Lpv1-GGbWwRjZ3PjZQSHKsOe1LueqOeeyEndqlVw/exec'

    async function handleSentForm (e:React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        const cleanedData = Object.fromEntries(
            Object.entries(formData).filter(([_, value]) => value !== "")
        );

        try {
            await fetch(SUBMIT_GOOGLE_FORM_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(cleanedData)
            })

            console.log(cleanedData);
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
            annointingOilReceived: "",
            annointingOilClosingStock: "",
            tissuesReceived: "",
            tissuesClosingStock: "",
            hallsReceived: "",
            hallsClosingStock: "",
            gumReceived: "",
            gumClosingStock: "",
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
            standardAnimalReceived: "",
            standardAnimalsSold: "",
            standardAnimalClosing: "",
            ornamentsReceived: "",
            ornamentsSold: "",
            ornamentsClosing: "",
            babyAnimalReceived: "",
            babyAnimalsSold: "",
            babyAnimalClosing: "",
            welcomePacksFormsReceived: "",
            baptismCertificate: "",
            baptismCertStickers: "",
            babyDedicationCert: "",
            leadershipManuals: "",
            discoveryBooklets: "",
            lanPocketReceived: "",
            lanPocketSold: "",
            lanPocketClosing: "",
            lanVolReceived: "",
            lanVolSold: "",
            lanVolClosing: "",
            lanKidReceived: "",
            lanKidSold: "",
            lanKidClosing: "",
            whShirtKidsReceived: "",
            whShirtKidsSold: "",
            whShirtKidsClosing: "",
            whShirtXSReceived: "",
            whShirtXSSold: "",
            whShirtXSClosing: "",
            whShirtSReceived: "",
            whShirtSSold: "",
            whShirtSClosing: "",
            whShirtMReceived: "",
            whShirtMSold: "",
            whShirtMClosing: "",
            whShirtLReceived: "",
            whShirtLSold: "",
            whShirtLClosing: "",
            whShirtXLReceived: "",
            whShirtXLSold: "",
            whShirtXLClosing: "",
            whShirt2XLReceived: "",
            whShirt2XLSold: "",
            whShirt2XLClosing: "",
            whShirt3XLReceived: "",
            whShirt3XLSold: "",
            whShirt3XLClosing: "",
            whShirt4XLReceived: "",
            whShirt4XLSold: "",
            whShirt4XLClosing: "",
            whStickersReceived: "",
            whStickersClosingStock: "",
            hbStickersReceived: "", 
            hbStickersClosingStock: "",
            fjbookReceived: "",
            fjbookClosingStock: "",
            prprReceived: "",
            prprClosingStock: "",
            printReceived: "",
            printClosingStock: "",
            riceCakeReceived: "",
            riceCakeClosingStock: "",
            wetwipesReceived: "",
            wetwipesClosingStock: "",
            kidsTissuesReceived: "",
            kidsTissuesClosingStock: "",
            redBalloonReceived: "",
            redBalloonClosingStock: "",
            blueBalloonReceived: "",
            blueBalloonClosingStock: "",
            greenBalloonReceived: "",
            greenBalloonClosingStock: "",
            orangeBalloonReceived: "",
            orangeBalloonClosingStock: "",
            blackBagsReceived: "",
            blackBagsClosingStock: "",            
            smallToiletBinBagsReceived: "",
            smallToiletBinBagsClosingStock: "",
            toiletBlocksReceived: "",
            toiletBlocksClosingStock: "",
            latexGlovesReceived: "",
            latexGlovesClosingStock: "",
            dishSpongesReceived: "",
            dishSpongesClosingStock: "",
            dishClothReceived: "",
            dishClothClosingStock: "",
            dryingClothReceived: "",
            dryingClothClosingStock: "",
            kitchenPaperTowelsReceived: "",
            kitchenPaperTowelsClosingStock: "",
            handPaperTowelsReceived: "",
            handPaperTowelsClosingStock: "",
            toiletPaperReceived: "",
            toiletPaperClosingStock: "",
            autoAirFreshnerReceived: "",
            autoAirFreshnerClosingStock: "",
            airFreshnerReceived: "",
            airFreshnerClosingStock: "",
            handSoapReceived: "",
            handSoapClosingStock: "",
            dishwashingLiquidReceived: "",
            dishwashingLiquidClosingStock: "",
            vinegarReceived: "",
            vinegarClosingStock: "",
            allPurposeCleanerReceived: "",
            allPurposeCleanerClosingStock: "",
            germdeoReceived: "",
            germdeoClosingStock: "",
            wbShirtKidsReceived: "",
            wbShirtKidsSold: "",
            wbShirtKidsClosing: "",
            wbShirtXSReceived: "",
            wbShirtXSSold: "",
            wbShirtXSClosing: "",
            wbShirtSReceived: "",
            wbShirtSSold: "",
            wbShirtSClosing: "",
            wbShirtMReceived: "",
            wbShirtMSold: "",
            wbShirtMClosing: "",
            wbShirtLReceived: "",
            wbShirtLSold: "",
            wbShirtLClosing: "",
            wbShirtXLReceived: "",
            wbShirtXLSold: "",
            wbShirtXLClosing: "",
            wbShirt2XLReceived: "",
            wbShirt2XLSold: "",
            wbShirt2XLClosing: "",
            wbShirt3XLReceived: "",
            wbShirt3XLSold: "",
            wbShirt3XLClosing: "",
            wbShirt4XLReceived: "",
            wbShirt4XLSold: "",
            wbShirt4XLClosing: "",
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
                            required
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
                            <option value="Hope Kids">Hope Kids</option>
                            <option value="Hope Art">Hope Art</option>
                            <option value="Attendance">Attendance</option>
                            <option value="Merchandice">Merchandice</option>
                            <option value="General Cleaning">General Cleaning Products</option>
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Coffee'
                                    value={formData.coffeeMade}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='decafMade'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Decaf'
                                    value={formData.decafMade}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='milkUsed'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.coffeeReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='coffeeClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.decafCoffeeReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='decafCoffeeClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.rooibosReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='rooibosClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.jokoReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='jokoClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.milkReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='milkClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.hotChocolateReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='hotChocolateClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.youthHotChocolateReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='youthHotChocolateClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.wSugarReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='wSugarClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.bSugarReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='bSugarClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.sweetnerReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='sweetnerClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.coffeeFiltersReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='coffeeFiltersClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.coffeeCupsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='coffeeCupsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.coffeeCupsLidsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='coffeeCupsLidsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.stirringSticksReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='stirringSticksClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.waterCupsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='waterCupsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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

                    {formData.department === "General Cleaning" && (
                        <fieldset
                            className={style.activeFieldset}
                        >
                            <h3>General Cleaning Products</h3>

                            {/* Black Bags */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Black bags
                                </span>

                                <input 
                                    name='blackbagsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.blackBagsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='blackBagsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.blackBagsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Small Toilet Bin Bags */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Small Toilet Bin bags
                                </span>

                                <input 
                                    name='smallToiletBinBagsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.smallToiletBinBagsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='smallToiletBinBagsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.smallToiletBinBagsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                             {/* Toilet Block Pack */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Toilet Block Pack
                                </span>

                                <input 
                                    name='toiletBlocksReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.toiletBlocksReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='toiletBlocksClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.toiletBlocksClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* latex gloves */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Latex Gloves
                                </span>

                                <input 
                                    name='latexGlovesReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.latexGlovesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='latexGlovesClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.latexGlovesClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Dish Sponges */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Dish Sponges
                                </span>

                                <input 
                                    name='dishSpongesReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.dishSpongesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='dishSpongesClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.dishSpongesClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Drying Clothes */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Dish Clothes
                                </span>

                                <input 
                                    name='dishClothReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.dishClothReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='dishClothClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.dishClothClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Drying Clothes */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Drying Clothes
                                </span>

                                <input 
                                    name='dryingClothReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.dryingClothReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='dryingClothClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.dryingClothClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Kitchen Paper Towels */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Kitchen Paper Towels
                                </span>

                                <input 
                                    name='kitchenPaperTowelsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.kitchenPaperTowelsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='kitchenPaperTowelsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.kitchenPaperTowelsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Hand Paper Towels */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Hand Paper Towels
                                </span>

                                <input 
                                    name='handPaperTowelsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.handPaperTowelsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='handPaperTowelsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.handPaperTowelsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Toilet Paper */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Toilet Paper
                                </span>

                                <input 
                                    name='toiletPaperReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.toiletPaperReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='toiletPaperClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.toiletPaperClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Automatic Air Freshner */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Automatic Air Freshner
                                </span>

                                <input 
                                    name='autoAirFreshnerReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.autoAirFreshnerReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='autoAirFreshnerClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.autoAirFreshnerClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Air Freshner */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Air Freshner
                                </span>

                                <input 
                                    name='airFreshnerReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.airFreshnerReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='airFreshnerClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.airFreshnerClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* 5L Hand Soap */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    5L Hand Soap
                                </span>

                                <input 
                                    name='handSoapReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.handSoapReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='handSoapClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.handSoapClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* 5L Dishwashing Soap */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    5L Dishwashing Liquid
                                </span>

                                <input 
                                    name='dishwashingLiquidReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.dishwashingLiquidReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='dishwashingLiquidClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.dishwashingLiquidClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* 5L Vinigar */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    5L Vinegar
                                </span>

                                <input 
                                    name='vinegarReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.vinegarReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='vinegarClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.vinegarClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* 5L All Purpose Cleaner */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    5L All Purpose Cleaner 
                                </span>

                                <input 
                                    name='allPurposeCleanerReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.allPurposeCleanerReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='allPurposeCleanerClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.allPurposeCleanerClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* 5L Germdeo */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    5L Germdeo
                                </span>

                                <input 
                                    name='germdeoReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.germdeoReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='germdeoClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.germdeoClosingStock}
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

                    {formData.department === "Hope Kids" && (
                        <fieldset
                            className={style.activeFieldset}
                        >
                            <h3>
                                Hope Kids
                            </h3>

                            {/* wh stickers */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Welcome Home Stickers
                                </span>

                                <input 
                                    name='whStickersReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.whStickersReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='whStickersClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.whStickersClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* hb stickers */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Happy Birthday Stickers
                                </span>

                                <input 
                                    name='hbStickersReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.hbStickersReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='hbStickersClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.hbStickersClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* follow Jesus booklet */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Follow Jesus Booklet with leaflet
                                </span>

                                <input 
                                    name='fjbookReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.fjbookReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='fjbookClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.fjbookClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* prayer request / praise report */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Prayer Request / Praise Report
                                </span>

                                <input 
                                    name='prprReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.prprReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='prprClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.prprClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* printer roll */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Printer Rolls
                                </span>

                                <input 
                                    name='printReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.printReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='printClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.printClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Rice cakes */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Rice Cakes
                                </span>

                                <input 
                                    name='riceCakeReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.riceCakeReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='riceCakeClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.riceCakeClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* wetwipes */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Wetwipes
                                </span>

                                <input 
                                    name='wetwipesReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.wetwipesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='wetwipesClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.wetwipesClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* tissues */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Tissues
                                </span>

                                <input 
                                    name='kidsTissuesReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.kidsTissuesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='kidsTissuesClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.kidsTissuesClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* balloons */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Balloons
                                </span>

                                <input 
                                    name='redBalloonReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Red Balloons Received'
                                    value={formData.redBalloonReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='redBalloonClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Red Balloons Closing'
                                    value={formData.redBalloonClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='blueBalloonReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Blue Balloons Received'
                                    value={formData.blueBalloonReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='blueBalloonClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Blue Balloons Closing'
                                    value={formData.blueBalloonClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='greenBalloonReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Green Balloons Received'
                                    value={formData.greenBalloonReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='greenBalloonClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Green Balloons Closing'
                                    value={formData.greenBalloonClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='orangeBalloonReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Orange Balloons Received'
                                    value={formData.orangeBalloonReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='orangeBalloonClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Orange Balloons Closing'
                                    value={formData.orangeBalloonClosingStock}
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.bottel330mlReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='bottel330mlClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Full Bottels'
                                    value={formData.full250ml}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='empty250ml'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    name='welcomePacksFormsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='How many filled in forms returned?'
                                    value={formData.welcomePacksFormsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='fullWelcomePacks'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Full Welcome Packs'
                                    value={formData.fullWelcomePacks}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='welcomeFormReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Forms Received'
                                    value={formData.welcomeFormReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='welcomeFormClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Forms Closing'
                                    value={formData.welcomeFormClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='welcomeSleevesReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sleeves Received'
                                    value={formData.welcomeSleevesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='welcomeSleevesClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sleeves Closing'
                                    value={formData.welcomeSleevesClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='pensReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Pens Received'
                                    value={formData.pensReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='pensClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Pens Closing'
                                    value={formData.pensClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='lolipopsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Lolipops Received'
                                    value={formData.lolipopsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='lolipopsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Lolipops Closing'
                                    value={formData.lolipopsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* prayer boxes */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Prayer Boxes
                                </span>

                                <input 
                                    name='annointingOilReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Annointing Oil Received'
                                    value={formData.annointingOilReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='annointingOilClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Annointing Oil Closing'
                                    value={formData.annointingOilClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='tissuesReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Tissues Received'
                                    value={formData.tissuesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='tissuesClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Tissues Closing'
                                    value={formData.tissuesClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='hallsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Halls Received'
                                    value={formData.hallsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='hallsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Halls Closing'
                                    value={formData.hallsClosingStock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='gumReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Gum Received'
                                    value={formData.gumReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='gumClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Gum Closing'
                                    value={formData.gumClosingStock}
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.prayerRequestReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='prayerRequestClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.praiseReportReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='praiseReportClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.invitationReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='invitationClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.nextStepsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='nextStepsClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.givingReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='givingClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.destinyReceived}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='destinyClosingStock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='How many pack were given out?'
                                    value={formData.welcomePackGiven}
                                    onChange={handleOnChange}
                                    className={style.formInput}
                                />

                                <input 
                                    name='volunteersLeftBlock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Volunteers Left Block'
                                    value={formData.volunteersLeftBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='volunteersRightBlock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Volunteers Right Block'
                                    value={formData.volunteersRightBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='adultsLeftBlock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Adults Left Block'
                                    value={formData.adultsLeftBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='adultsRightBlock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Adults Right Block'
                                    value={formData.adultsRightBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='kidsLeftBlock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Kids Left Block'
                                    value={formData.kidsLeftBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='kidsRightBlock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Kids Right Block'
                                    value={formData.kidsRightBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='totsLeftBlock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Tots Left Block'
                                    value={formData.totsLeftBlock}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='totsRightBlock'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Tots Right Block'
                                    value={formData.totsRightBlock}
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Parents'
                                    value={formData.parRoomAdult}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='parRoomTots'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Tots'
                                    value={formData.parRoomTots}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='parRoomBabies'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Volunteers'
                                    value={formData.kidsVolunteers}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='kids'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Volunteers'
                                    value={formData.totsVolunteers}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name='tots'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.beadedEaringsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedEaringsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.beadedEaringsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedEaringsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.beadedBraceletsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedBraceletsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.beadedBraceletsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedBraceletsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    Woven Bracelets
                                </span>

                                <input 
                                    name='wovenBraceletsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.wovenBraceletsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wovenBraceletsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.wovenBraceletsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wovenBraceletsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.wristKeychainReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wristKeychainSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.wristKeychainSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wristKeychainClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.beadedNecklaceReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedNecklaceSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.beadedNecklaceSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedNecklaceClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.shortNeclaceReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shortNeclaceSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.shortNeclaceSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shortNeclaceClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.sunglassChainsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='sunglassChainsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.sunglassChainsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='sunglassChainsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.beadedKeyringsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedKeyringsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.beadedKeyringsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='beadedKeyringsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.sixStringBeadedKeyringsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='sixStringBeadedKeyringsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.sixStringBeadedKeyringsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='sixStringBeadedKeyringsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.scrunchiesReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='scrunchiesSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.scrunchiesSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='scrunchiesClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.scrunchiesClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* Standard animals */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Standard Animals
                                </span>

                                <input 
                                    name='standardAnimalReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.standardAnimalReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='standardAnimalsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.standardAnimalsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='standardAnimalClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.standardAnimalClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* baby animals */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Baby Animals
                                </span>

                                <input 
                                    name='babyAnimalReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.babyAnimalReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='babyAnimalsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.babyAnimalsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='babyAnimalClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.babyAnimalClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* Ornaments */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Ornaments
                                </span>

                                <input 
                                    name='ornamentsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.ornamentsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='ornamentsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.ornamentsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='ornamentsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Closing'
                                    value={formData.ornamentsClosing}
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.bagsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='bagsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.bagsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='bagsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.shDiyBraceletsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shDiyBraceletsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.shDiyBraceletsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shDiyBraceletsClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Received'
                                    value={formData.shTShirtReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shTShirtSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Sold'
                                    value={formData.shTShirtSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='shTShirtClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
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

                    {formData.department === "Merchandice" && (
                        <fieldset
                            className={style.activeFieldset}
                        >
                            <h3>
                                Merchandice
                            </h3>

                            {/* Certificates */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Certificates
                                </span>

                                <input 
                                    name='baptismCertificate'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Baptism Certificate'
                                    value={formData.baptismCertificate}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='baptismCertStickers'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Baptism Stickers'
                                    value={formData.baptismCertStickers}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='babyDedicationCert'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Baby Dedication'
                                    value={formData.babyDedicationCert}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* Manuals and books */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Books and Manuals
                                </span>

                                <input 
                                    name='leadershipManuals'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Leadership Manuals'
                                    value={formData.leadershipManuals}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />

                                <input 
                                    name="discoveryBooklets"
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Discovery Booklets'
                                    value={formData.discoveryBooklets}
                                    onChange={handleOnChange}
                                    className={style.stockInput}
                                />
                            </div>

                            {/* Lanyards */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Lanyards
                                </span>
                                
                                <input 
                                    name='lanPocketReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Pockets Received'
                                    value={formData.lanPocketReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='lanPocketSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Pockets Sold'
                                    value={formData.lanPocketSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='lanPocketClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Pockets Closing'
                                    value={formData.lanPocketClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='lanVolReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Volunteer Received'
                                    value={formData.lanVolReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='lanVolSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Volunteer Sold'
                                    value={formData.lanVolSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='lanVolClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Volunteer Closing'
                                    value={formData.lanVolClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='lanKidReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Kids Received'
                                    value={formData.lanKidReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='lanKidSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Kids Sold'
                                    value={formData.lanVolReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='lanKidClosing'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Kids Closing'
                                    value={formData.lanKidClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* Welcome Home Shirts */}
                            {/* kids */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Welcome Home Shirts
                                </span>

                                <input 
                                    name='whShirtKidsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='9-10 Received'
                                    value={formData.whShirtKidsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtKidsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='9-10 Sold'
                                    value={formData.whShirtKidsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtKidsClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='9-10 Closing'
                                    value={formData.whShirtKidsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* XS */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='whShirtXSReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='XS Received'
                                    value={formData.whShirtXSReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtXSSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='XS Sold'
                                    value={formData.whShirtXSSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtXSClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='XS Closing'
                                    value={formData.whShirtXSClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* S */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='whShirtSReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Small Received'
                                    value={formData.whShirtSReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtSSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Small Sold'
                                    value={formData.whShirtSSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtSClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Small Closing'
                                    value={formData.whShirtSClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* M */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='whShirtMReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Medium Received'
                                    value={formData.whShirtMReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtMSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Medium Sold'
                                    value={formData.whShirtMSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtMClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Medium Closing'
                                    value={formData.whShirtMClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* L */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='whShirtLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Large Received'
                                    value={formData.whShirtLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Large Sold'
                                    value={formData.whShirtLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Large Closing'
                                    value={formData.whShirtLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* XL */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='whShirtXLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='X-Large Received'
                                    value={formData.whShirtXLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtXLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='X-Large Sold'
                                    value={formData.whShirtXLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirtXLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='X-Large Closing'
                                    value={formData.whShirtXLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* 2XL */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='whShirt2XLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='2X-Large Received'
                                    value={formData.whShirt2XLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirt2XLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='2X-Large Sold'
                                    value={formData.whShirt2XLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirt2XLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='2X-Large Closing'
                                    value={formData.whShirt2XLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* 3XL */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='whShirt3XLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='3X-Large Received'
                                    value={formData.whShirt3XLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirt3XLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='3X-Large Sold'
                                    value={formData.whShirt3XLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirt3XLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='3X-Large Closing'
                                    value={formData.whShirt3XLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* 4XL */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='whShirt4XLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='4X-Large Received'
                                    value={formData.whShirt4XLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirt4XLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='4X-Large Sold'
                                    value={formData.whShirt4XLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='whShirt4XLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='4X-Large Closing'
                                    value={formData.whShirt4XLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>

                            {/* Baptism Shirts */}
                            {/* kids */}
                            <div
                                className={style.stockRow}
                            >
                                <span
                                    className={style.stockItem}
                                >
                                    Baptism Shirts
                                </span>

                                <input 
                                    name='wbShirtKidsReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='9-10 Received'
                                    value={formData.wbShirtKidsReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtKidsSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='9-10 Sold'
                                    value={formData.wbShirtKidsSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtKidsClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='9-10 Closing'
                                    value={formData.wbShirtKidsClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* XS */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='wbShirtXSReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='XS Received'
                                    value={formData.wbShirtXSReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtXSSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='XS Sold'
                                    value={formData.wbShirtXSSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtXSClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='XS Closing'
                                    value={formData.wbShirtXSClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* S */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='wbShirtSReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Small Received'
                                    value={formData.wbShirtSReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtSSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Small Sold'
                                    value={formData.wbShirtSSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtSClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Small Closing'
                                    value={formData.wbShirtSClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* M */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='wbShirtMReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Medium Received'
                                    value={formData.wbShirtMReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtMSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Medium Sold'
                                    value={formData.wbShirtMSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtMClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Medium Closing'
                                    value={formData.wbShirtMClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* L */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='wbShirtLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Large Received'
                                    value={formData.wbShirtLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Large Sold'
                                    value={formData.wbShirtLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='Large Closing'
                                    value={formData.wbShirtLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* XL */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='wbShirtXLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='X-Large Received'
                                    value={formData.wbShirtXLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtXLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='X-Large Sold'
                                    value={formData.wbShirtXLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirtXLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='X-Large Closing'
                                    value={formData.wbShirtXLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* 2XL */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='wbShirt2XLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='2X-Large Received'
                                    value={formData.wbShirt2XLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirt2XLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='2X-Large Sold'
                                    value={formData.wbShirt2XLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirt2XLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='2X-Large Closing'
                                    value={formData.wbShirt2XLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* 3XL */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='wbShirt3XLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='3X-Large Received'
                                    value={formData.wbShirt3XLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirt3XLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='3X-Large Sold'
                                    value={formData.wbShirt3XLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirt3XLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='3X-Large Closing'
                                    value={formData.wbShirt3XLClosing}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />
                            </div>
                            {/* 4XL */}
                            <div
                                className={style.stockRow}
                            >
                                <input 
                                    name='wbShirt4XLReceived'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='4X-Large Received'
                                    value={formData.wbShirt4XLReceived}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirt4XLSold'
                                    type="text"
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='4X-Large Sold'
                                    value={formData.wbShirt4XLSold}
                                    onChange={handleOnChange}
                                    className={style.stockUsed}
                                />

                                <input 
                                    name='wbShirt4XLClosing'
                                    type="text" 
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    placeholder='4X-Large Closing'
                                    value={formData.wbShirt4XLClosing}
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