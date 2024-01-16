import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      label: 'Title',
      initialValue: {
        title: 'Main Header',
      },
      readOnly: true,
    }),
    defineField({
      type: 'navigation',
      name: 'Navigation',
      label: 'Navigation',
    }),
    defineField({
      type: 'image',
      label: 'Logo',
      name: 'logo',
    }),
    defineField({
      type: 'navigation',
      name: 'navigationright',
      label: 'Navigation Right',
    }),
    defineField({
      type: 'boolean',
      name: 'search',
      label: 'Display Search',
    }),
    defineField({
      type: 'boolean',
      name: 'account',
      label: 'Display Account',
    }),
    defineField({
      type: 'boolean',
      name: 'cart',
      label: 'Display Cart',
    }),
  ],
})
