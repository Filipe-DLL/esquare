import { Webhook } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Webhook className="animate-spin" size={100} />
    </div>
  )
}
