"use client"

import React, { useState, useRef } from "react"
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon, CheckIcon, XIcon } from "lucide-react"
import emailjs from "@emailjs/browser"

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  })

  // EmailJS Configuration - Replace these with your actual values
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID" // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID" // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY" // Replace with your public key

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    // Basic validation
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)

      console.log("Email sent successfully:", result.text)
      setSubmitStatus("success")

      // Reset form
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        vehicle: "",
        service: "",
        message: "",
      })

      // Reset form element
      form.current.reset()
    } catch (error) {
      console.error("Email sending failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset status after 5 seconds
  React.useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-neutral-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-green-400 mb-4">Hubungi Kami</h2>
          <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
            Konsultasi <span className="font-medium text-green-400">Gratis</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tim ahli kami siap membantu Anda memilih layanan terbaik untuk kendaraan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-800 rounded-xl shadow-lg p-8 border border-neutral-700">
            <h4 className="text-xl font-medium text-white mb-6">Kirim Pesan</h4>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center">
                <CheckIcon size={20} className="text-green-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-green-400 font-medium">Pesan berhasil dikirim!</p>
                  <p className="text-green-300 text-sm">Kami akan segera menghubungi Anda.</p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center">
                <XIcon size={20} className="text-red-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-red-400 font-medium">Gagal mengirim pesan</p>
                  <p className="text-red-300 text-sm">Silakan coba lagi atau hubungi via WhatsApp.</p>
                </div>
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Masukkan nama Anda"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="nama@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400"
                  placeholder="08xxxxxxxxxx"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2">
                  Informasi Kendaraan
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400"
                  placeholder="Contoh: Honda Civic 2020"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Layanan yang Diminati
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white"
                  disabled={isSubmitting}
                >
                  <option value="">Pilih layanan</option>
                  <option value="Premium Detailing">Premium Detailing</option>
                  <option value="Paint Protection Film">Paint Protection Film</option>
                  <option value="Ceramic Coating">Ceramic Coating</option>
                  <option value="Paint Correction">Paint Correction</option>
                  <option value="Interior Protection">Interior Protection</option>
                  <option value="Maintenance Package">Maintenance Package</option>
                  <option value="Konsultasi">Konsultasi</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400"
                  placeholder="Ceritakan kebutuhan Anda..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-green-600/50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <MailIcon size={20} className="mr-2" />
                    Kirim Email
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-neutral-800 rounded-xl shadow-lg p-8 border border-neutral-700">
              <h4 className="text-xl font-medium text-white mb-6">Informasi Kontak</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon size={24} className="mr-4 mt-1 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Alamat Workshop</p>
                    <p className="text-gray-300">Jl. Raya Dukuh Kupang No.6, Dukuh Pakis, Kec. Dukuhpakis</p>
                    <p className="text-gray-300">Surabaya, Jawa Timur 60225</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <PhoneIcon size={24} className="mr-4 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Telepon & WhatsApp</p>
                    <p className="text-gray-300">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MailIcon size={24} className="mr-4 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">info@hdcarcare.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <ClockIcon size={24} className="mr-4 mt-1 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Jam Operasional</p>
                    <p className="text-gray-300">Setiap Hari 08:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden border border-neutral-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.7643904411475!2d112.71702119999999!3d-7.280094200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb6beb3f3687%3A0xe2abeaeb82d35f2d!2sHD%20Car%20Care%20Surabaya%20Barat!5e1!3m2!1sid!2sid!4v1754981021540!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HD Car Care Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}