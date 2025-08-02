import { GlobalConfig } from 'payload'
import { VercelRedeployHook } from '@/hooks/vercelRedeployHook'

export const Links: GlobalConfig = {
  slug: 'links',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => VercelRedeployHook()],
  },
  fields: [
    { name: 'Facebook', type: 'text', required: true },
    { name: 'Instagram', type: 'text', required: true },
    { name: 'Twitter', type: 'text', required: true },
    { name: 'Whatsapp', type: 'text', required: true },
    { name: 'Youtube', type: 'text', required: true },
  ],
}
