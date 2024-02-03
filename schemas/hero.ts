export default {
    name: 'hero',
    type: 'document',
    title: 'Hero',
    fields: [
        {
            name: 'heroTitle',
            type: 'string',
            title: 'Hero Title',
        },
        {
            name: 'heroDescription',
            type: 'string',
            title: 'Hero Description',
        },
        {
            name: 'firstHeroImage',
            type: 'image',
            title: 'First Hero Image',
            validation: (Rule:any) => Rule.required().assetRequired().error('This field is required'),
            fields: [
            {
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
            },
            ],
        },
        {
            name: 'secondHeroImage',
            type: 'image',
            title: 'Second Hero Image',
            validation: (Rule:any) => Rule.required().assetRequired().error('This field is required'),
            fields: [
            {
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
            },
            ],
        },
    ]
}