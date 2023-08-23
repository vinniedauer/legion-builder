import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ]
})