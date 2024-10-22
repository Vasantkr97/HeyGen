import ContentCreators from "./components/ContentCreators"
import DoItLive from "./components/DoItLive"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
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
    </main>
  )
}

export default App