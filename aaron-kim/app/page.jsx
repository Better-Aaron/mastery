//* components
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Work from '@/components/work';
import Reviews from '@/components/reviews';
import Cta from '@/components/cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
