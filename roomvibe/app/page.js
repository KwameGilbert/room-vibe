"use-client"


import ExploreHostelsMobile from "@/src/Components/Home-components/ExploreHostelsMobile";
import QuestionPage from "@/src/Components/Home-components/Faq";
import Filtering from "@/src/Components/Home-components/Filtering";
import Footer from "@/src/Components/Home-components/Footer";
import Hero from "@/src/Components/Home-components/Hero";
import HotHostel from "@/src/Components/Home-components/HotHostel";
import MobileNavbar from "@/src/Components/Home-components/MobileNavbar";
import Testimonials from "@/src/Components/Home-components/Testimonials";
import Navbar from "@/src/Components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Filtering/>
      <ExploreHostelsMobile/>
      <MobileNavbar/>
      <Hero/>
      <HotHostel/>
      <QuestionPage/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
