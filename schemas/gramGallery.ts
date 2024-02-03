export default {
  name: 'gramGalleryImages',
  type: 'document',
  title: 'Gram Gallery',
  fields: [
    {
      name: 'gramGalleryTitle',
      type: 'string',
      title: 'Gram Gallery Title',
    },
    {
      name: 'gramGalleryDescription',
      type: 'string',
      title: 'Gram Gallery Description',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Gram Gallery Images',
      description: 'Add the images that are part of this gallery.',
      validation: (Rule: any) => [
        Rule.required().min(4).error('you need to add at least four(4) images to a gallery'),
      ],
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
    },
  ],
}
