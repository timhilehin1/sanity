export default {
    title: 'Discount',
    name: 'discount',
    type: 'document',
    fields: [
      {
        name:'products',
        type:'array',
        title:'Products',
        description: 'Select the products that are part of this discount.',
        validation: (Rule:any) => [
            Rule.required().min(3).error('You need to add at least 3 products to a discount'),
            Rule.max(3).warning('You can only have 3 products in a discount')
          ],
        // validation: (Rule : any) => Rule.required().min(3).max(3).error('You can only have 5 products in a discount'),
        of:[{
          type:'reference',
          to:[{type:'discountProduct'}]

        }]
      }
    ]
  }