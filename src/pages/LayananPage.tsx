"use client"
import { motion } from "framer-motion"
import { ServicesAccordion } from "../components/ServicesAccordion"

export const LayananPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-12"
    >
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-neutral-900 to-black">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Layanan <span className="text-green-400">HD Car Care</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Pilihan lengkap layanan perawatan kendaraan dengan teknologi terdepan dan harga terjangkau
          </motion.p>
        </div>
      </section>

      {/* Services Accordion */}
      <ServicesAccordion />
    </motion.div>
  )
}
