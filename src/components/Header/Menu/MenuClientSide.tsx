'use client'

import Menu from '@/components/Header/Menu'
import { AlignJustify } from 'lucide-react'
import { useCallback, useState } from 'react'

export default function MenuClientSide() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <>
      <button onClick={openMenu} className={`hidden text-gray-50 sm:inline`}>
        <AlignJustify height={40} width={40} />
      </button>
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </>
  )
}
