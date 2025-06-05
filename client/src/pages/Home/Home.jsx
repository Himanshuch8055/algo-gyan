import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import PlatformsSection from './sections/PlatformsSection';
import CTASection from './sections/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* <PlatformsSection /> */}
      <CTASection />
    </div>
  );
}
