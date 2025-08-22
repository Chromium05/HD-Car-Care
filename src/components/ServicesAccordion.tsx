"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon, MessageCircleIcon } from "lucide-react"

interface Treatment {
  name: string
  subtitle?: string // Make subtitle optional
  prices: { [key: string]: string }
}

interface Service {
  title: string
  subtitle: string
  description: string
  image: string
  treatments: Treatment[]
}

export const ServicesAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const services: Service[] = [
    {
      title: "Quick Service",
      subtitle: "Layanan Cepat & Praktis",
      description: "Solusi perawatan harian untuk kendaraan Anda dengan hasil maksimal dalam waktu singkat.",
      image:
        "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      treatments: [
        {
          name: "HD Express Package",
          prices: { small: "Rp 900.000", medium: "Rp 1.200.000", large: "Rp 1.500.000", luxury: "Rp 1.800.000" },
        },
        {
          name: "Exterior Detailing",
          prices: { small: "Rp 400.000", medium: "Rp 500.000", large: "Rp 600.000", luxury: "Rp 700.000" },
        },
        {
          name: "Interior Detailing",
          prices: { small: "Rp 300.000", medium: "Rp 400.000", large: "Rp 500.000", luxury: "Rp 600.000" },
        },
        {
          name: "Engine Detailing",
          prices: { small: "Rp 200.000", medium: "Rp 300.000", large: "Rp 400.000", luxury: "Rp 500.000" },
        },
        {
          name: "Glass Detailing",
          prices: { small: "Rp 150.000", medium: "Rp 200.000", large: "Rp 250.000", luxury: "Rp 300.000" },
        },
        {
          name: "Premium Wash",
          prices: { small: "Rp 150.000", medium: "Rp 150.000", large: "Rp 250.000", luxury: "Rp 250.000" },
        },
      ],
    },
    {
      title: "Premium Service",
      subtitle: "Perlindungan & Perawatan Premium",
      description: "Layanan premium dengan teknologi terdepan untuk perlindungan maksimal kendaraan Anda.",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      treatments: [
        {
          name: "HD Platinum",
          prices: { small: "Rp 4.500.000", medium: "Rp 5.500.000", large: "Rp 6.500.000", luxury: "Rp 8.500.000" },
        },
        {
          name: "HD Nano Ceramic",
          prices: { small: "Rp 3.500.000", medium: "Rp 4.250.000", large: "Rp 4.750.000", luxury: "Rp 6.500.000" },
        },
        {
          name: "HD Total Detailing",
          prices: { small: "Rp 1.500.000", medium: "Rp 1.800.000", large: "Rp 2.000.000", luxury: "Rp 2.500.000" },
        },
        {
          name: "HD Nano Glass",
          prices: { small: "Rp 1.000.000", medium: "Rp 1.250.000", large: "Rp 1.500.000", luxury: "Rp 1.750.000" },
        },
        {
          name: "Maintenance NC",
          prices: { small: "Rp 500.000", medium: "Rp 500.000", large: "Rp 600.000", luxury: "Rp 600.000" },
        },
        {
          name: "Re-Nano/Panel",
          prices: { small: "Rp 500.000", medium: "Rp 500.000", large: "Rp 500.000", luxury: "Rp 500.000" },
        },
      ],
    },
    {
      title: "HD MotoCare",
      subtitle: "Perawatan Khusus Motor",
      description: "Layanan perawatan motor profesional untuk semua jenis dan kapasitas mesin.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      treatments: [
        {
          name: "Nano Ceramic",
          prices: {
            ">150cc": "Rp 750.000",
            "250cc": "Rp 1.000.000",
            "500cc": "Rp 1.250.000",
            "1000cc<": "Rp 2.000.000",
          },
        },
        {
          name: "Body Detailing",
          prices: { ">150cc": "Rp 400.000", "250cc": "Rp 500.000", "500cc": "Rp 600.000", "1000cc<": "Rp 750.000" },
        },
        {
          name: "Quick Polish",
          prices: { ">150cc": "Rp 200.000", "250cc": "Rp 250.000", "500cc": "Rp 300.000", "1000cc<": "Rp 500.000" },
        },
        {
          name: "Extra Box",
          prices: { all: "Rp 500.000 per box" },
        },
        {
          name: "Vespa Piaggio",
          prices: { all: "Rp 1.000.000 (semua varian)" },
        },
        {
          name: "Maintenance NC",
          prices: { ">150cc": "Rp 200.000", "250cc": "Rp 250.000", "500cc": "Rp 300.000", "1000cc<": "Rp 500.000" },
        },
      ],
    },
    {
      title: "Kaca Film",
      subtitle: "Perlindungan Kaca Premium",
      description: "Pemasangan kaca film berkualitas tinggi dengan berbagai pilihan tingkat perlindungan.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iIJn3TVYH0jkuufDOkDZP6SfzPJl8t.png",
      treatments: [
        {
          name: "Black Premium/Titanium",
          subtitle: "Medium Infrared & UV Reject Series",
          prices: {
            small: "Rp 1.350.000 - Rp 4.100.000",
            medium: "Rp 1.450.000 - Rp 4.400.000",
            large: "Rp 1.550.000 - Rp 4.900.000",
            luxury: "Rp 2.050.000 - Rp 6.100.000",
          },
        },
        {
          name: "Black Platinum/Clear",
          subtitle: "High Infrared & UV Reject Series",
          prices: {
            small: "Rp 3.400.000 - Rp 7.500.000",
            medium: "Rp 3.600.000 - Rp 8.100.000",
            large: "Rp 3.700.000 - Rp 8.800.000",
            luxury: "Rp 5.000.000 - Rp 11.300.000",
          },
        },
      ],
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const whatsappMessage = (serviceName: string) => {
    return `Halo HD Car Care, saya tertarik dengan layanan ${serviceName}. Bisa minta informasi lebih detail?`
  }

  return (
    <section className="py-12 px-6 md:px-12 bg-black">
      <div className="container mx-auto max-w-4xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-6 bg-neutral-900 rounded-xl overflow-hidden border border-neutral-700"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full p-6 text-left hover:bg-neutral-800 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-green-400 text-sm font-medium">{service.subtitle}</p>
                </div>
                <motion.div animate={{ rotate: openAccordion === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDownIcon size={24} className="text-green-400" />
                </motion.div>
              </div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence>
              {openAccordion === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-neutral-700">
                    {/* Hero Image */}
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    {/* Treatments */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Daftar Layanan & Harga:</h4>

                      {service.treatments.map((treatment, treatmentIndex) => (
                        <div key={treatmentIndex} className="bg-neutral-800 rounded-lg p-4 border border-neutral-600">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-white">{treatment.name}</h5>
                              {treatment.subtitle && <p className="text-sm text-gray-400">{treatment.subtitle}</p>}
                            </div>
                            <a
                              href={`https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage(treatment.name))}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors mt-2 md:mt-0"
                            >
                              <MessageCircleIcon size={16} className="mr-2" />
                              WhatsApp
                            </a>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                            {Object.entries(treatment.prices).map(([size, price]) => (
                              <div key={size} className="text-center p-2 bg-neutral-700 rounded">
                                <div className="text-green-400 font-medium capitalize">{size}</div>
                                <div className="text-white">{price}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Service CTA */}
                    <div className="mt-6 text-center">
                      <a
                        href={`https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage(service.title))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105"
                      >
                        <MessageCircleIcon size={20} className="mr-2" />
                        Konsultasi {service.title}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
