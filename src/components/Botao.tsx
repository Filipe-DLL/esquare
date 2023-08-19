import Link from "next/link";

export default function Botao() {
  return (
    <Link href={'/zapzap'} >
      <div className="w-96 h-14 bg-emerald-600 rounded-3xl flex items-center justify-center text-gray-50 font-bold text-xl cursor-pointer">
        SOLICITE UM ORÇAMENTO
      </div>
    </Link>

  )
}
