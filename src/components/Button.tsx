import Link from 'next/link'

export default function Button() {
  return (
    <Link href={'https://api.whatsapp.com/send?phone=5588981861972'}>
      <div className="m-auto flex h-full w-full cursor-pointer items-center  justify-center rounded-3xl bg-emerald-800 text-center text-xl font-bold text-gray-50 transition-all ease-in-out hover:bg-emerald-700">
        SOLICITE UM ORÇAMENTO
      </div>
    </Link>
  )
}
