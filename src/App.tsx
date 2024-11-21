import BannerSection from "./components/BannerSection"
import BlogSection from "./components/BlogSection"
import Category from "./components/Category"
import FeatureSection from "./components/FeatureSection"
import FeatureSectionBreakFast from "./components/FeatureSectionBreakFast"
import FeatureSectionFruits from "./components/FeatureSectionFruits"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"

const App = () => {
  return (
    <main>
     <Navbar />
     <Hero />
     <Category />
     <FeatureSectionFruits />
     <FeatureSectionBreakFast />
     <BannerSection/>
     <BlogSection />
     <Newsletter/>
     <FeatureSection/>
    </main>
  )
}

export default App