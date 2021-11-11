import Head from 'next/head'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className=" min-h-screen py-2">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>

      <Main />

      
    </div>
  )
}
