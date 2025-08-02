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
    { name: 'mainText', type: 'text', required: true, defaultValue: '© 2023 BalaG Studios' },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    {
      name: 'links',
      type: 'array',
      fields: [
        { name: 'placeholder', type: 'text', required: true },
        { name: 'link', type: 'text', required: true },
      ],
    },
  ],
}
