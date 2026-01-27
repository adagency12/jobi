import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PerfectFor from '@/components/PerfectFor';
import AIAgents from '@/components/AIAgents';
import JobberIntegration from '@/components/JobberIntegration';
import MoreJobsLessStress from '@/components/MoreJobsLessStress';
import WhyJOBBEI from '@/components/WhyJOBBEI';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <PerfectFor />
      <AIAgents />
      <JobberIntegration />
      <MoreJobsLessStress />
      <WhyJOBBEI />
      <Footer />
      <ChatWidget />
    </>
  );
}
