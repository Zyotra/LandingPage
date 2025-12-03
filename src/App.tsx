import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import EnterpriseCTASection from './components/EnterpriseCTASection'
import Footer from './components/Footer'
import Documentation from './pages/Documentation'
import Blog from './pages/Blog'
import ApiReference from './pages/ApiReference'
import VpsInstances from './pages/VpsInstances'
import AutoScaling from './pages/AutoScaling'
import LoadBalancing from './pages/LoadBalancing'
import Monitoring from './pages/Monitoring'
import SolutionsStartups from './pages/SolutionsStartups'
import SolutionsEnterprise from './pages/SolutionsEnterprise'
import SolutionsDevelopers from './pages/SolutionsDevelopers'
import EnterprisePage from './pages/EnterprisePage'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#1a1a22] text-white">
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
          <Route path="/platform/autoscaling" element={<AutoScaling />} />
          <Route path="/platform/loadbalancing" element={<LoadBalancing />} />
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
    </div>
  )
}

export default App
