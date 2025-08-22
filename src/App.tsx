import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import Footer  from "./components/Footer"
import { WhatsAppButton } from "./components/WhatsAppButton"
import { HomePage } from "./pages/HomePage"
import { LayananPage } from "./pages/LayananPage"

export function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/layanan" element={<LayananPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}
