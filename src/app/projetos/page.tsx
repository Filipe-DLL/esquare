import WhatsAppButton from '@/components/WhatsAppButton'

export default function Page() {
  return (
    <>
      <WhatsAppButton />
      <h1 className="animate__fadeIn animate__animated flex h-screen items-center justify-center text-6xl font-semibold">
        Pagina com todos os Projetos
      </h1>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  }
}
