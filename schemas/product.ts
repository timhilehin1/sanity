const calculateDiscountPercentage = (document: any) => {
  if (
    document.discount &&
    document.productPrice !== undefined &&
    document.discountPrice !== undefined
  ) {
    const percentage =
      ((document.productPrice - document.discountPrice) / document.productPrice) * 100
    return percentage.toFixed(2) // Adjust the number of decimal places as needed
  }
  return undefined
}
export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'productName',
      type: 'string',
      title: 'Product Name',
      validation: (Rule: any) => Rule.required().error('Product Name is required.'),
    },

    {
      name: 'discountStatus',
      type: 'boolean',
      title: 'Discount Status',
    },

    {
      name: 'productPrice',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.required().error('Product Price is required.'),
    },

    {
      name: 'discountPrice',
      type: 'number',
      title: 'Discount Price',
    },

    // {
    //   name: 'discountPercentage',
    //   type: 'number',
    //   title: 'Discount Percentage',
    //   readOnly: true,
    //   description:
    //     'This field is automatically calculated based on the discount price and the product price.',
    //   options: {
    //     input: ({document}: any) => {
    //       console.log('Document:', document)
    //       // Custom logic for calculating the field value
    //       const calculatedValue = calculateDiscountPercentage(document)
    //       console.log('Calculated Value:', calculatedValue)
    //       return calculatedValue
    //     },
    //   },
    // },
    //just calculate the discount percentage in the frontend

    {
      name: 'productDescription',
      type: 'string',
      title: 'Product Description',
      validation: (Rule: any) => Rule.required().error('Product Description is required.'),
    },
    {
      name: 'availabilityStatus',
      type: 'boolean',
      title: 'Availability Status',
    },

    {
      name: 'productCategory',
      type: 'array',
      title: 'Product Category',
      description: 'Select the categories that this product belongs to',
      of: [{type: 'reference', to: [{type: 'category'}]}], //type of data in this array is reference and the reference should only be to the category document i guess
      validation: (Rule: any) =>
        Rule.required().error('A product must have at least one category.'),
    },

    {
      name: 'productSection',
      type: 'array',
      title: 'Product Section',
      description:
        'Select the sections that this product belongs to e.g New Arrivals, Trending, etc.',
      of: [{type: 'reference', to: [{type: 'section'}]}], //type of data in this array is reference and the reference should only be to the section document
      validation: (Rule: any) => Rule.required().error('A product must have at least one section.'),
    },

    {
      name: 'productSize',
      type: 'array',
      title: 'Product Size',
      description: 'Select the sizes available for this product',
      of: [{type: 'reference', to: [{type: 'size'}]}],
    },

    {
      name:'productTest',
      type:'string',
      title:'Product Test'
    },

    {
      name: 'productColor',
      type: 'array',
      title: 'Product Color',
      description: 'Select the colors available for this product',
      of: [{type: 'reference', to: [{type: 'color'}]}],
    },
    {
      name: 'productsAvailable',
      type: 'number',
      title: 'Number of Products Available',
      description: 'Enter the number of products available for this product',
      validation: (Rule: any) => Rule.required().error('Product Quantity is required.'),
    },

    {
      name: 'noOfItemsSold',
      type: 'number',
      title: 'Number of Items Sold',
      description: 'Number of items sold cannot be greater than the number of products available.',
      validation: (Rule: any) =>
        Rule.required()
          .error('Number of Items Sold is required.')
          .custom((value: any, context: any) => {
            // Access the value of 'productQuantity' in the same document
            const productsAvailable = context.parent.productsAvailable
            // Check if 'noOfItemsSold' is greater than 'productQuantity'
            if (value > productsAvailable) {
              return 'Number of items sold cannot be greater than the number of products available.'
            }

            // If the validation passes, return true
            return true
          }),
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (document: any, options: any) => `${document.productName}`,
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
              // Editing this field will be hidden behind an "Edit"-button
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
