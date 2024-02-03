export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'testimonialName',
      type: 'string',
      title: 'Testimonial Name',
      validation: (Rule: any) => Rule.required().error('Enter the name of the testimonial'),
    },

    {
      name: 'testimonialDesignation',
      type: 'string',
      title: 'Testimonial Designation',
      validation: (Rule: any) => Rule.required().error('Enter the designation of the testimonial'),
    },

    {
      name: 'testimonialImage',
      type: 'image',
      title: 'Testimonial Image',
      validation: (Rule: any) => Rule.required().assetRequired().error('This field is required'),
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },

    {
      name: 'testimonialText',
      type: 'text',
      title: 'Testimonial Text',
      validation: (Rule: any) => Rule.required().error('Enter the testimonial text'),
    },
  ],
}
