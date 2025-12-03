import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EnterpriseCTASection from './components/EnterpriseCTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#1a1a22] text-white">
      <Navbar />
      {/* Main content with padding-top to account for fixed navbar */}
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <EnterpriseCTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
