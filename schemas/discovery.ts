export default {
  name: 'discovery',
  type: 'document',
  title: 'Discovery',
  description: 'Add eye catching images to your home page.',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'Add the images that are part of this discovery gallery.',
      validation: (Rule: any) => [
        Rule.required().min(2).error('you need to add at least 2 images to a gallery'),
        Rule.max(2).error('You can only have 2 images in a gallery'),
      ],
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                metadata: ['dimensions'],
                storeOriginalFilename: false,
                // Specify the required dimensions
                constraints: {
                  width: 580,
                  height: 90,
                },
              },
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
    },
  ],
}
