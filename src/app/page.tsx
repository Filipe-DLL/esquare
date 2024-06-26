import SectionInstagram from '@/assets/SectionInstagram/SectionInstagram'
import SectionContatos from '@/components/SectionContatos'
import SectionInicio from '@/components/SectionInicio'
import SectionProjetos from '@/components/SectionProjetos'
import SectionQuemSomos from '@/components/SectionQuemSomos'
import SectionServiços from '@/components/SectionServiços'
import SectionValores from '@/components/SectionValores'



export default function Home() {
  return (
    <div className="animate__fadeIn animate__animated flex h-full min-h-screen flex-col items-center justify-center">
      <SectionInicio />
      <SectionQuemSomos />
      <SectionServiços />
      <SectionProjetos />
      <SectionValores />
      <SectionInstagram />
      <SectionContatos />
    </div>
  )
}
