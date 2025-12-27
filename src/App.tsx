import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EnterpriseCTASection from './components/EnterpriseCTASection'
import Footer from './components/Footer'
import Documentation from './pages/Documentation'
import Blog from './pages/Blog'
import ApiReference from './pages/ApiReference'
import VpsInstances from './pages/VpsInstances'
import DatabaseTools from './pages/DatabaseTools'
import Monitoring from './pages/Monitoring'
import SolutionsStartups from './pages/SolutionsStartups'
import SolutionsEnterprise from './pages/SolutionsEnterprise'
import SolutionsDevelopers from './pages/SolutionsDevelopers'
import EnterprisePage from './pages/EnterprisePage'
import { ContactProvider } from './context/ContactContext'
import ContactModal from './components/ContactModal'
import ChatButton from './components/ChatButton'

function App() {
  return (
    <ContactProvider>
      <div className="w-full min-h-screen bg-[#1a1a22] text-white relative">
        <Navbar />
        {/* Main content with padding-top to account for fixed navbar */}
        <main className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <EnterpriseCTASection />
              </>
            } />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/api" element={<ApiReference />} />
            
            {/* Platform Routes */}
            <Route path="/platform/vps" element={<VpsInstances />} />
            <Route path="/platform/database" element={<DatabaseTools />} />
            <Route path="/platform/monitoring" element={<Monitoring />} />

            {/* Solutions Routes */}
            <Route path="/solutions/startups" element={<SolutionsStartups />} />
            <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
            <Route path="/solutions/developers" element={<SolutionsDevelopers />} />
            
            {/* Top Level Enterprise Route */}
            <Route path="/enterprise" element={<EnterprisePage />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal />
        <ChatButton />
      </div>
    </ContactProvider>
  )
}

export default App
