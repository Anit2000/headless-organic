import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'header',
      title: 'Header',
    }),
  ],
})
