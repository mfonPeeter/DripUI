import Head from 'next/head'
import Link from 'next/link'
import ComponentListing from '../components/other/ComponentListing'
import HeroSection from '../components/other/HeroSection'


export default function Home() {

  return (
    <div className="">
      <Head>
        <title>DripUI - Tailwind Components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <HeroSection />

        <section>
          <h2 className='text-3xl'>Components</h2>
          <p className="mt-2 text-lg text-drip-gray-dark">UI Tailwind CSS components, that will help you save your time</p>

          <ComponentListing featured={6}/>
  
        </section>
      </main>

      
    </div>
  )
}