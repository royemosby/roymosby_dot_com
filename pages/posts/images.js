import Image from 'next/image'
import Layout from '../../components/layout'

const title="LOOKADITT!"

export default function Images(){
  return (
    <Layout title={title}>
      <Image height={250} width={250} src="/images/01.png"></Image>
      <Image height={250} width={250} src="/images/02.png"></Image>

    </Layout>
  )
}