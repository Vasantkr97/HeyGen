import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Spokesperson from "./components/Spokesperson"
import Hero1 from "./components/Hero1";
const App = () => {
  return (
    <main className="antialiased">
        <Navbar />
        <Hero />
        <Spokesperson />
    </main>
  )
}

export default App