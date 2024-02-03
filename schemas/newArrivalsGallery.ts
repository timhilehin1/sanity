export default{
    name: 'newArrivalsGallery',
    type: 'document',
    title: 'New Arrivals Gallery',
    description: 'This is the gallery of new arrivals, customers can see how the newly arrived products match with different backgrounds and styles.',
    fields: [
        {
            name:'images',
            type:'array',
            title:'Images',
            description: 'Add the images that are part of this gallery.',
            validation: (Rule:any) => [
                Rule.required().min(3).error('you need to add at least 3 images to a gallery'),
              ],
            of:[{
              type:'image',
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
            }]
          }
    ]
}