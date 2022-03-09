import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Faq from '../components/Homepage/Faq'
import Header from '../components/Homepage/Header'
import Roadmap from '../components/Homepage/Roadmap'
import Schedule from '../components/Homepage/Schedule'
import Team from '../components/Homepage/Team'
import Utility from '../components/Homepage/Utility'
import Footer from '../components/Navbar/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Kaiju Kongz</title>
        <meta name="description" content="Kaiju Kongz is a 3333 NFT collection with a real-time burn phase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Header />
    <Utility />
    <Roadmap />
    <Team />
    <Schedule />
    <Faq />
    <Footer />
    </div>
  )
}

export default Home
