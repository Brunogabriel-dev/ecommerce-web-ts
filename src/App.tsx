import Category from "./components/Category"
import FeatureSectionBreakFast from "./components/FeatureSectionBreakFast"
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
     <FeatureSectionBreakFast />
    </main>
  )
}

export default App