import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahuji</title>
        <meta name="description" content="Developed by Ashish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
