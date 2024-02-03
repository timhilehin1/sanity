export default {
  name: 'color',
  type: 'document',
  title: 'Colors',
  fields: [
    {
      name: 'colorName',
      type: 'string',
      title: 'Color name',
      validation: (Rule: any) => Rule.required().error('Color name is required.'),
    },

    {
      name: 'colorCode',
      type: 'string',
      title: 'Color Code',
    },
  ],
}
