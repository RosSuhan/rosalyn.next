import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import HeroSection from "@/components/HeroSection/page";
import HomepageIntro from "@/components/Intro/homepageIntro";


export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <HomepageIntro/>
      <Footer/>
    </main>
  );
}
