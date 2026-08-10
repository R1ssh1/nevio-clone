import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Layout } from './components/Layout'
import { BrochureDownload } from './components/BrochureDownload'
import { ScrollToTop } from './components/ScrollToTop'
import { ScrollProgress } from './components/ScrollProgress'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PipesTubesPage } from './pages/PipesTubesPage'
import { RoundBarsPage } from './pages/RoundBarsPage'
import { ProductsPage } from './pages/ProductsPage'
import { SheetsCoilsPage } from './pages/SheetsCoilsPage'
import { QualityPage } from './pages/QualityPage'
import { WiresPage } from './pages/WiresPage'
import { FlangesPage } from './pages/FlangesPage'
import { ForgedFittingsPage } from './pages/ForgedFittingsPage'
import { ButtweldFittingsPage } from './pages/ButtweldFittingsPage'
import { FastenersPage } from './pages/FastenersPage'
import { HollowSectionsPage } from './pages/HollowSectionsPage'
import { SpecializedProductsPage } from './pages/SpecializedProductsPage'

import { ProductDetailPage } from './pages/ProductDetailPage'
import Cursor from './components/Cursor'

import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      {/* Custom cursor */}
      <Cursor />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />

          <Route path="/products/pipes-tubes" element={<PipesTubesPage />} />
          <Route path="/products/pipes-tubes/:id" element={<ProductDetailPage />} />
          
          <Route path="/products/round-bars" element={<RoundBarsPage />} />
          <Route path="/products/round-bars/:id" element={<ProductDetailPage />} />
          
          <Route path="/products/sheets-coils" element={<SheetsCoilsPage />} />
          <Route path="/products/sheets-coils/:id" element={<ProductDetailPage />} />
          
          <Route path="/products/wires" element={<WiresPage />} />
          <Route path="/products/wires/:id" element={<ProductDetailPage />} />
          
          <Route path="/products/flanges" element={<FlangesPage />} />
          <Route path="/products/flanges/:id" element={<ProductDetailPage />} />
          
          <Route path="/products/forged-fittings" element={<ForgedFittingsPage />} />
          <Route path="/products/forged-fittings/:id" element={<ProductDetailPage />} />
          
          <Route path="/products/buttweld-fittings" element={<ButtweldFittingsPage />} />
          <Route path="/products/buttweld-fittings/:id" element={<ProductDetailPage />} />
          
          <Route path="/products/fasteners" element={<FastenersPage />} />
          <Route path="/products/fasteners/:id" element={<ProductDetailPage />} />
          
          {/* Hollow Sections — page kept for backward compat, removed from nav */}
          <Route path="/products/hollow-sections" element={<HollowSectionsPage />} />
          <Route path="/products/hollow-sections/:id" element={<ProductDetailPage />} />

          {/* Specialized Products */}
          <Route path="/products/specialized-products" element={<SpecializedProductsPage />} />
          <Route path="/products/specialized-products/:id" element={<ProductDetailPage />} />

          <Route path="/quality-policy" element={<QualityPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* Catch-all: handles any /products/:category/:slug combination (incl. SEO-enriched slugs) */}
          <Route path="/products/:category/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <div className="container" style={{ marginBottom: '60px' }}>
          <BrochureDownload />
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export default App