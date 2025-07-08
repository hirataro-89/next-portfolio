import { Stack } from '@mantine/core';
import { DemoSection } from '@/components/TopComponents/DemoSection';
import { CTA } from '../components/TopComponents/CTA';
import { Features } from '../components/TopComponents/Features';
import { Hero } from '../components/TopComponents/Hero';
import { Testimonials } from '../components/TopComponents/Testimonials';

export default function HomePage() {
  return (
    <Stack gap={0}>
      <Hero />
      <Features />
      <DemoSection />
      <Testimonials />
      <CTA />
    </Stack>
  );
}
