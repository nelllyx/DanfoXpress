import HeroSection from './HeroSection.jsx'
import RouteFinderSection from './RouteFinderSection.jsx'
import ElectricProgramSection from './ElectricProgramSection.jsx'
import HowItWorksSection from './HowItWorksSection.jsx'
import WhyProgramSection from './WhyProgramSection.jsx'

export default function Landing() {
  return (
    <div className="flex w-full flex-col gap-16 sm:gap-24 md:gap-32">
      <HeroSection />
      <RouteFinderSection />
      <ElectricProgramSection />
      <HowItWorksSection />
      <WhyProgramSection />
    </div>
  )
}
