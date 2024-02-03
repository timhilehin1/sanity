// only one document should be added to the deals collection
export default {
  name: 'deals',
  type: 'document',
  title: 'Deal',
  validation: (Rule: any) => Rule.required().error('You can only have one deal of the day'),

  fields: [
    {
      name: 'productName',
      type: 'string',
      title: 'Deal Name',
      validation: (Rule: any) => Rule.required().error('Deal name is required.'),
    },

    {
      name: 'productPrice',
      type: 'number',
      title: 'Deal Price',
      validation: (Rule: any) => Rule.required().error('Deal price is required.'),
    },

    {
      name: 'discountPrice',
      type: 'number',
      title: 'Discount Price',
    },
    {
      name: 'productDescription',
      type: 'string',
      title: 'Deal Description',
      validation: (Rule: any) => Rule.required().error('Deal description is required.'),
    },
    {
      name: 'availabilityStatus',
      type: 'boolean',
      title: 'Availability Status',
    },
    {
      name: 'productSize',
      type: 'array',
      title: 'Deal Size',
      description: 'Select the sizes available for this product',
      of: [{type: 'reference', to: [{type: 'size'}]}],
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (document: any, options: any) => `${document.dealName}`,
        maxLength: 200, // Set a maximum length for the slug
      },
      validation: (Rule: any) => Rule.required().error('Slug is required.'),
    },

    {
      name: 'productImages',
      type: 'array',
      title: 'Product Images',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            },
          ],
        },
      ],
      validation: (Rule: any) =>
        Rule.required()
          .min(1)
          .max(7)
          .error('You must provide between 1 and 7 images for the product.'),
    },
  ],
}
