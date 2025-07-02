import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from '@/components/pages/HomePage'
import ServiceDetailPage from '@/components/pages/ServiceDetailPage'
import PortfolioItemPage from '@/components/pages/PortfolioItemPage'
import ContactPage from '@/components/pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  )
}

export default App