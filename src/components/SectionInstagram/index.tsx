import InstaFeed from './InstaFeed'

export default async function SectionInstagram() {
  const token = process.env.NEXT_INSTA_TOKEN
  const fields = 'media_type,media_url,permalink'

  const userUrl = await fetch(
    `https://graph.instagram.com/me?fields=id,username&access_token=${token}`,
    {
      next: {
        revalidate: 3600,
      },
    }, 
  )
  
  const mediaUrl = await fetch(
    `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  )

  const user = await userUrl.json()
  const media = await mediaUrl.json()

  return (
    <section className="animate__fadeIn animate__animated flex h-full flex-col items-center justify-start">
      <InstaFeed user={user} media={media.data} />
    </section>
  )
}
