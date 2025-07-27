import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: ({ req }) => req.user?.role === 'admin',
    read: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [{ name: 'role', type: 'select', required: true, options: ['user', 'admin'] }],
}
