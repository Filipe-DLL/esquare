import { getItem } from '@/utils/get-item'

import InstaFeed from './InstaFeed'

export default async function SectionInstagram() {
  const token = process.env.NEXT_INSTA_TOKEN
  const fields = 'media_type,media_url,permalink'

  const item = await getItem(token, fields)

  return (
    <section className="animate__fadeIn animate__animated flex h-full flex-col items-center justify-start">
      <InstaFeed user={item[0].data} media={item[1].data.data} />
    </section>
  )
}
