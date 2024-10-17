import ContentCreators from "./components/ContentCreators"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Spokesperson from "./components/Spokesperson"


const App = () => {
  return (
    <main className="antialiased">
        <Navbar />
        <Hero />
        <Spokesperson />
        <ContentCreators />
    </main>
  )
}

export default App