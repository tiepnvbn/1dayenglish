import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import Solution from '@/components/landing/Solution';
import Curriculum from '@/components/landing/Curriculum';
import Mentors from '@/components/landing/Mentors';
import SocialProof from '@/components/landing/SocialProof';
import Offer from '@/components/landing/Offer';
import RegisterForm from '@/components/landing/RegisterForm';
import Footer from '@/components/landing/Footer';
import MobileCta from '@/components/landing/MobileCta';
import SalesPop from '@/components/landing/SalesPop';

// Trang chủ: ghép 8 section của Landing Page
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Curriculum />
        <Mentors />
        <SocialProof />
        <Offer />
        <RegisterForm />
      </main>
      <Footer />
      <MobileCta />
      <SalesPop />
    </>
  );
}
