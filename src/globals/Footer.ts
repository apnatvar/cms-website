import { GlobalConfig } from 'payload'
import { VercelRedeployHook } from '@/hooks/vercelRedeployHook'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => VercelRedeployHook()],
  },
  fields: [
    { name: 'copyright', type: 'text', required: true, defaultValue: '© 2025 BalaG Studios' },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'address', type: 'textarea' },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'text' },
  ],
}
