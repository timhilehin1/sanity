export default {
  name: 'businessInformation',
  type: 'document',
  title: 'Business Information',
  fields: [
    {
      name: 'businessName',
      type: 'string',
      title: 'Business Name',
      validation: (Rule: any) => Rule.required().error('Business name is required'),
    },
    {
      name: 'businessAddress',
      type: 'string',
      title: 'Business Address',
      validation: (Rule: any) => Rule.required().error('Business address is required'),
    },
    {
      name: 'businessEmail',
      type: 'string',
      title: 'Business Email',
      validation: (Rule: any) => Rule.required().error('Business email is required'),
    },
    {
      name: 'businessPhone',
      type: 'string',
      title: 'Business Phone Number',
      validation: (Rule: any) => Rule.required().error('Business phone number is required'),
    },
    {
      name: 'businessFacebook',
      title: 'Business Facebook',
      type: 'url',
      validation: (Rule:any) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
    {
      name: 'businessInstagram',
      type: 'url',
      validation: (Rule:any) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
      title: 'Business Instagram',
    },
    {
      name: 'businessTwitter',
      type: 'url',
      validation: (Rule:any) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
      title: 'Business Twitter',
    },
    {
      name: 'businessLinkedIn',
      type: 'url',
      validation: (Rule:any) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
      title: 'Business LinkedIn',
    },
    {
      name: 'businessDescription',
      type: 'string',
      title: 'Business Description',
    },
    {
      name: 'businessLogo',
      type: 'image',
      title: 'Business Logo',
      // validation: (Rule: any) => Rule.required().assetRequired().error('This field is required'),
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
