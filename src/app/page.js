"use client";

import "@/styles/globals.css";

import ClientTestimonials from "@/components/ui/ClientTestimonials";
import ContactUs from "@/components/ui/ContactUsSection";
import ContactUsSection from "@/components/ui/ContactUsSection";
import DevtechTape from '@/components/ui/DevtechTape'
import DottedLine from '@/assets/SVGs/Dotted-Line-for-Section.svg';
import Founder from "@/components/ui/Founder.jsx";
import GsapAnimejs from '@/components/ui/AnimatedGradientBg'
import Hero from "@/components/ui/Hero";
import HeroSection from "@/components/ui/Hero";
import HowWeWork from "@/components/ui/HowWeWork";
import Image from "next/image";
import MilestoneSection from "@/components/ui/MilestoneSection";
import Noise from '@/assets/Taxture.png'
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import ProjectsSection from "@/components/ui/ProjectShowcase";
import ServicesSection from "@/components/ui/Services";
import Subscription from "@/components/ui/Subscription";
import TechnologySolutions from "@/components/ui/Services";
import Techrain from '@/components/ui/Techrain'
import TestimonialSection from "@/components/ui/ClientTestimonials";

// import OurLocations from "@/components/OurLocation";










export default function Home() {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Main content sections wrapped in fragment */}
      <>
        <section id="home" style={{ scrollMarginTop: '100px' }}>
          <HeroSection />
        </section>
        <section id="services" style={{ scrollMarginTop: '100px' }}>
          <ServicesSection />
        </section>
        <section id="projects" style={{ scrollMarginTop: '100px' }}>
          <ProjectsSection />
        </section>
        <section id="milestone" style={{ scrollMarginTop: '100px' }}>
          <MilestoneSection />
        </section>
        <section id="testimonials" style={{ scrollMarginTop: '100px' }}>
          <ClientTestimonials />
        </section>
        <section id="members" style={{ scrollMarginTop: '100px' }}>
          <Founder />
        </section>
        <section id="contact" style={{ scrollMarginTop: '100px' }}>
          <ContactUsSection />
        </section>
        {/* <OurLocations /> */}
      </>
    </div>
  );
}
