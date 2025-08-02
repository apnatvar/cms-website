import { GlobalConfig } from 'payload'
import { VercelRedeployHook } from '@/hooks/vercelRedeployHook'

export const BlogPage: GlobalConfig = {
  slug: 'blog-page',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [() => VercelRedeployHook()],
  },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'text', required: true, defaultValue: 'Latest Blogs' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'video', type: 'upload', relationTo: 'media', required: true },
  ],
}
