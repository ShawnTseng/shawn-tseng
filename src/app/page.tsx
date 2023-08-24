import Brief from "./components/brief";
import Footer from "./components/footer";
import LaunchPage from "./components/launch-page";
import Navigation from "./components/navigation";
import Skills from "./components/skills";
import Summary from "./components/summary";
import Experiences from "./components/experiences/experiences";

export default function Home() {
  return (
    <>
      <Navigation />
      <LaunchPage />
      <Brief />
      <Experiences />
      <Summary />
      <Skills />
      <Footer />
    </>
  )
}
