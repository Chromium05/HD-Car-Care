import { Hero } from "../components/Hero"
import { ServicesHome } from "../components/ServicesHome"
import { About } from "../components/About"
import { Gallery } from "../components/Gallery"
import { Testimonials } from "../components/Testimonials"
import { Contact } from "../components/Contact"

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesHome />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  )
}
