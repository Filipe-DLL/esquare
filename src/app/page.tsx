import Contato from "@/components/Contato";
import Inicio from "@/components/Inicio";
import NavBar from "@/components/NavBar";
import Projetos from "@/components/Projetos";
import Serviços from "@/components/Serviços";
import SobreNos from "@/components/SobreNos";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <Inicio />
      <SobreNos />
      <Serviços />
      <Projetos />
      <Contato />
    </div>
  )
}
