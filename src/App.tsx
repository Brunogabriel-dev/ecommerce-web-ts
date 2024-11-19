import Category from "./components/Category"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main>
     <Navbar />
     <Hero />
     <Category />
     <FeatureSectionFruits />
    </main>
  )
}

export default App