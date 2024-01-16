import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'object',
  fields: [
    defineField({
      name: 'linkedList',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Link',
          name: 'link',
          fields: [
            {name: 'title', type: 'string', title: 'Link Title'},
            {
              name: 'url',
              type: 'reference',
              title: 'Link Url',
              to: [{type: 'product'}, {type: 'collection'}],
            },
          ],
        },
      ],
    }),
  ],
})
