import Brief from "./_components/brief";
import Footer from "./_components/footer";
import LaunchSection from "./_components/launch-section/launch-section";
// import Skills from "./_components/skills";
// import Summary from "./_components/summary";
import Experiences from "./_components/experiences/experiences";

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
