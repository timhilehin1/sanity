export default {
  name: 'discountProduct',
  type: 'document',
  title: 'Discount Product',
  fields: [
    {
      name: 'productName',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'discountPercentage',
      type: 'string',
      title: 'Discount Percentage',
    },
    {
      name: 'darkMode',
      type: 'boolean',
      title: 'Dark Mode',
    },

    {
      name: 'productImage',
      type: 'image',
      title: 'Product Image',
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
}
