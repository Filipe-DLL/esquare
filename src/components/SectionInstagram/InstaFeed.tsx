import Image from 'next/image'
import Link from 'next/link'

import LogoInstagram from '@/assets/SectionInstagram/LogoInstagram.svg'

interface props {
  user: {
    id: string
    username: string
  }
  media: [
    {
      media_type: 'MAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
      media_url: string
      permalink: string
      id: string
    },
  ]
}

export default function InstaFeed({ user, media }: props) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">

        <Link
          className="flex items-center justify-center gap-3 md:w-9/12"
          href={"https://www.instagram.com/esquareengenharia/"}
        >
          <Image
            src={LogoInstagram}
            alt=""
            height={100}
            width={100}
            className="h-14 w-14"
          />
          <h1 className="text-2xl font-semibold md:text-lg">{user.username}</h1>
        </Link>

        <div className="flex w-[728px] flex-wrap items-center justify-start gap-1 md:w-full md:gap-0">
          {media.map(
            (media, index) =>
              index < 9 && (
                <Link
                  href={media.permalink}
                  key={media.id}
                  className="md:w-1/3"
                >
                  <Image
                    src={`${media.media_url}`}
                    alt=""
                    height={300}
                    width={300}
                    className="h-full w-60 md:w-full"
                  />
                </Link>
              ),
          )}
        </div>
      </div>
    </div >
  )
}
