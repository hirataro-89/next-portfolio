'use client';

import { Stack } from '@mantine/core';
import { CTA } from './components/CTA';
import { DemoSection } from './components/DemoSection';
import { Features } from './components/Features';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';

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
