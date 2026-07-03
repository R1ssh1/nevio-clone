import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PipesTubesPage } from './pages/PipesTubesPage'
import { RoundBarsPage } from './pages/RoundBarsPage'
import { ProductsPage } from './pages/ProductsPage'
import { SheetsCoilsPage } from './pages/SheetsCoilsPage'
import { QualityPage } from './pages/QualityPage'
import { WiresPage } from './pages/WiresPage'
import Cursor from './components/Cursor'

import './App.css'

function App() {
  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/pipes-tubes" element={<PipesTubesPage />} />
          <Route path="/round-bars" element={<RoundBarsPage />} />
          <Route path="/sheets-coils" element={<SheetsCoilsPage />} />
          <Route path="/wires" element={<WiresPage />} />
          <Route path="/quality-policy" element={<QualityPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </Layout>
    </>
  )
}

export default App