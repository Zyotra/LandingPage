import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustedBySection from './components/TrustedBySection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import EnterpriseSection from './components/EnterpriseSection'
import EnterpriseCTASection from './components/EnterpriseCTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#1a1a22] text-white">
      <Navbar />
      <HeroSection />
      {/* <TrustedBySection />
      <FeaturesSection />
      <PricingSection /> */}
      <EnterpriseSection />
      <EnterpriseCTASection />
      <Footer />
    </div>
  )
}

export default App
