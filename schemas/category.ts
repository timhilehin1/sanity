import {uniqueName} from './uniqueName'

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      type: 'string',
      title: 'Category Name',
      validation: (Rule: any) => Rule.required().custom(uniqueName('categoryName')),
    },
  ],
}
