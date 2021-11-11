import Head from "next/head";
import Download from "../components/Download";
import Everywhere from "../components/Everywhere";
import Kids from "../components/Kids";
import Main from "../components/Main";
import Tv from "../components/TV";

export default function Home() {
  return (
    <div className=" min-h-screen py-2">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>

      <Main />
      <Tv />
      <Download />
      <Everywhere />
      <Kids />
    </div>
  );
}
