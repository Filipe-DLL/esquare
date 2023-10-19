import axios from 'axios'
import { cache } from 'react'

export const revalidate = 600 // revalidate the data at most every hour

export const getItem = cache(
  async (token: string | undefined, fields: string) => {
    const userUrl = `https://graph.instagram.com/me?fields=id,username&access_token=${token}`
    const mediaUrl = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`

    const user = await axios.get(userUrl)
    const media = await axios.get(mediaUrl)

    const response = [user, media]

    return response
  },
)
