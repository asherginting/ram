import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/hubungikami/index'
import TabsComponent from '@/components/tabs/TabsComponent'
import MobilBekas from '@/components/mobilbekas/index'


export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Hubungi Kami</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </Layout>
  )
}
