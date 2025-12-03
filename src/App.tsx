import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustedBySection from './components/TrustedBySection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#1a1a22] text-white">
      <Navbar />
      <HeroSection />
      {/* <TrustedBySection />
      <FeaturesSection />
      <PricingSection /> */}
      <Footer />
    </div>
  )
}

export default App
