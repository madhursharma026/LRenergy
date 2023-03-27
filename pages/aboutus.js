import News from "./Components/News";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OurTeam from "./Components/OurTeam";
import OurProjects from "./Components/OurProject";
import CarouselSection from "./Components/CarouselSection";
import AboutUsSection from "./Components/AboutUsSection/AboutUsSection";

export default function AboutUs() {
  return (
    <>
      <Header />
      <CarouselSection />
      <AboutUsSection />
      <OurProjects />
      <OurTeam />
      <News />
      <Footer />
    </>
  )
}
