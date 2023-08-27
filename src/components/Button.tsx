import Link from 'next/link'

export default function Button() {
  return (
    <Link
      href={
        'https://api.whatsapp.com/message/KW72DIRAMB7NL1?autoload=1&app_absent=0'
      }
    >
      <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-emerald-800 text-xl font-bold text-gray-50 transition-all hover:bg-emerald-700">
        SOLICITE UM ORÇAMENTO
      </div>
    </Link>
  )
}
