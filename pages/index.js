import Head from 'next/head'
import Navbar from '../components/NavBar'

export default function Home() {
  return (
    <div className=" min-h-screen py-2">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>
      <Navbar />



      <h1>
        Hello Netflix
      </h1>
    </div>
  )
}
