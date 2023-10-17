import Brief from "./components/brief";
import Footer from "./components/footer";
import LaunchSection from "./components/launch-section/launch-section";
// import Skills from "./components/skills";
// import Summary from "./components/summary";
import Experiences from "./components/experiences/experiences";

export default function Home() {
  return (
    <>
      <LaunchSection />
      <Brief />
      <Experiences />
      {/* <Summary />
      <Skills /> */}
      <Footer />
    </>
  )
}
