"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { SparklesIcon, ShieldIcon, BikeIcon, GlassWaterIcon, ArrowRightIcon } from "lucide-react"

export const ServicesHome = () => {
  const services = [
    {
      icon: <SparklesIcon size={32} className="text-green-400" />,
      title: "Quick Service",
      description: "Layanan cepat untuk perawatan harian kendaraan Anda",
      features: ["HD Express Package", "Exterior & Interior Detailing", "Engine & Glass Detailing", "Premium Wash"],
      priceRange: "Mulai dari Rp 150.000",
      image:
        "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <ShieldIcon size={32} className="text-green-400" />,
      title: "Premium Service",
      description: "Layanan premium dengan perlindungan maksimal untuk kendaraan",
      features: ["HD Platinum Treatment", "HD Nano Ceramic Coating", "HD Total Detailing", "HD Nano Glass Protection"],
      priceRange: "Mulai dari Rp 1.500.000",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <BikeIcon size={32} className="text-green-400" />,
      title: "HD MotoCare",
      description: "Perawatan khusus untuk sepeda motor semua jenis",
      features: ["Nano Ceramic Motor", "Body Detailing Motor", "Quick Polish", "Maintenance untuk semua CC"],
      priceRange: "Mulai dari Rp 200.000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <GlassWaterIcon size={32} className="text-green-400" />,
      title: "Kaca Film",
      description: "Pemasangan kaca film berkualitas tinggi dengan garansi",
      features: ["Black Premium Series", "Black Titanium Series", "Black Platinum Series", "Clear Protection Film"],
      priceRange: "Mulai dari Rp 900.000",
      image:
        "https://images.unsplash.com/photo-1621630854548-55b25cfd9f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-neutral-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-green-400 mb-4">Layanan Kami</h2>
          <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
            Pilihan Layanan <span className="font-medium text-green-400">Terbaik</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai paket layanan sesuai kebutuhan dan budget Anda
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden border border-neutral-700 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-neutral-800/90 p-3 rounded-lg border border-neutral-600">
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-sm font-bold text-green-400 mb-4">{service.priceRange}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/layanan"
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 group"
          >
            Lihat Selengkapnya
            <ArrowRightIcon size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
