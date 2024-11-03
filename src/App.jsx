import AllYouNeed from "./components/AllYouNeed"
import ContentCreators from "./components/ContentCreators"
import DoItLive from "./components/DoItLive"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Personalized from "./components/Personalized"
import ReadyToCreate from "./components/ReadyToCreate"
import Secure from "./components/Secure"
import Spokesperson from "./components/Spokesperson"
import VioletCard from "./components/VioletCard"


const App = () => {
  return (
    <main className="antialiased">
        <Navbar />
        <Hero />
        <Spokesperson />
        <ContentCreators />
        <AllYouNeed />
        <VioletCard />
        <DoItLive />
        <Personalized />
        <Secure />
        <ReadyToCreate/>
        <Footer />
    </main>
  )
}

export default App