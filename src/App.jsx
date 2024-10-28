import ContentCreators from "./components/ContentCreators"
import DoItLive from "./components/DoItLive"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Personalized from "./components/Personalized"
import ReadyToCreate from "./components/ReadyToCreate"
import Secure from "./components/secure"
import Spokesperson from "./components/Spokesperson"
import VioletCard from "./components/VioletCard"


const App = () => {
  return (
    <main className="antialiased">
        <Navbar />
        <Hero />
        <Spokesperson />
        <ContentCreators />
        <VioletCard />
        <DoItLive />
        <Personalized />
        <Secure/>
        <ReadyToCreate/>
        <Footer />
    </main>
  )
}

export default App