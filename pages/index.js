import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import ClaimForm from '../components/ClaimForm'
import Features from '../components/Features'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Auto File Claim - Professional Accident Assistance</title>
        <meta name="description" content="Professional Accident Assistance. We handle the paperwork so you can focus on recovery." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Stats />
        <HowItWorks />
        <ClaimForm />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
