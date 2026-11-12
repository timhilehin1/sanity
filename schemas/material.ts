import {uniqueName} from './uniqueName'

export default {
  name: 'material',
  type: 'document',
  title: 'Material',
  fields: [
    {
      name: 'materialName',
      type: 'string',
      title: 'Material name',
      validation: (Rule: any) =>
        Rule.required().error('Material name is required.').custom(uniqueName('materialName')),
    },
  ],
}
