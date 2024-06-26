import { ArrowLeft, ArrowRight, Grid2x2, Menu } from "lucide-react";
import Link from "next/link";

import { projectData } from '@/data/projectData';

interface dataType {
  id: number;
}

export default function NavProjects({ id }: dataType) {
  return (
    <>
      <div className="w-full h-24 -mb-6 flex items-center justify-around bg-zinc-300 text-azulPetrolio">
        {
          id <= 1 ?
            <div></div>
            :
            <Link href={`/projetos/${id - 1}`} >
              <ArrowLeft size={32} />
            </Link>
        }
        <Link href={'/projetos'} >
          <Grid2x2 size={32} />
        </Link>
        {
          id >= (projectData.length - 1) ?
            <div></div>
            :
            <Link href={`/projetos/${id + 1}`} >
              <ArrowRight size={32} />
            </Link>
        }
      </div>
    </>
  )
}
