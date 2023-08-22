import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/navBar/reduzida-azul.svg'

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 h-16 w-full bg-zinc-300 shadow-default">
      <div className="mx-20 h-full">
        <nav className="flex h-full flex-row items-center justify-between">
          {/* logo */}
          <Link href={'/'}>
            <Image
              src={logo}
              alt="logo"
              height={32}
              className="cursor-pointer"
            />
          </Link>

          {/* navegação */}
          <ul className="flex flex-row gap-9 font-bold">
            <li className="cursor-pointer">
              <Link href={'/#Início'}>Início</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={'/#QuemSomos'}>Quem Somos</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={'/#Serviços'}>Serviços</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={'/#Projetos'}>Projetos</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={'/#Contato'}>Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
