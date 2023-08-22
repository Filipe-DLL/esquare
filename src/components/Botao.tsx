import Link from 'next/link'

export default function Botao() {
  return (
    <Link href={'/zapzap'}>
      <div className="flex h-14 w-96 cursor-pointer items-center justify-center rounded-3xl bg-emerald-600 text-xl font-bold text-gray-50">
        SOLICITE UM ORÇAMENTO
      </div>
    </Link>
  )
}
