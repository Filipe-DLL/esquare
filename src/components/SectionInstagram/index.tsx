import InstaFeed from '@/components/SectionInstagram/InstaFeed'
import axios from 'axios'

export default async function SectionInstagram() {
  const token = process.env.NEXT_INSTA_TOKEN
  const fields = 'media_type,media_url,permalink'

  const userUrl = `https://graph.instagram.com/me?fields=id,username&access_token=${token}`
  const mediaUrl = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`

  const user = await axios.get(userUrl)
  const media = await axios.get(mediaUrl)

  return (
    <section className="animate__fadeIn animate__animated flex h-full flex-col items-center justify-start">
      <InstaFeed user={user.data} media={media.data.data} />
    </section>
  )
}
