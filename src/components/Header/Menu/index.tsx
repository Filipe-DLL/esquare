import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/Header/reduzida-cinza.svg'

interface MenuProps {
  isVisible: boolean
  onClose: () => void
}

export default function Menu({ isVisible, onClose }: MenuProps) {
  return (
    <div
      className={`${isVisible ? 'flex flex-col' : 'hidden'}
         animate__fadeIn animate__animated animate__faster fixed inset-0 top-0 h-full w-full bg-black bg-opacity-60 backdrop-blur-sm min-md:hidden`}
      onClick={onClose}
    >
      <div className="animate__animated animate__slideInDown flex h-96 w-full flex-col items-start justify-between bg-azulPetrolio px-5 pb-5 pt-3">
        <div className="flex w-full items-center justify-between">
          <Link href={'/'}>
            <Image
              src={logo}
              alt="logo"
              height={32}
              className="cursor-pointer"
            />
          </Link>

          <button
            onClick={onClose}
            className="hidden h-10 w-10 text-gray-50 md:inline"
          >
            <X height={40} width={40} />
          </button>
        </div>
        <ul
          className="flex w-full flex-col items-center justify-center gap-9 text-xl font-bold text-gray-50"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
            <Link href={'/#Início'} onClick={onClose}>
              Início
            </Link>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
            <Link href={'/#QuemSomos'} onClick={onClose}>
              Quem Somos
            </Link>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
            <Link href={'/#Serviços'} onClick={onClose}>
              Serviços
            </Link>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
            <Link href={'/#Projetos'} onClick={onClose}>
              Projetos
            </Link>
          </li>
          <li className="cursor-pointer transition-all ease-in-out hover:text-gray-400 hover:opacity-95">
            <Link href={'/#Contato'} onClick={onClose}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
