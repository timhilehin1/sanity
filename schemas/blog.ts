export default {
  title: 'Blog',
  name: 'blog',
  type: 'document',
  fields: [
    {
      name: 'blogTitle',
      type: 'string',
      title: 'Blog Title',
    },
    {
      name: 'blogDescription',
      type: 'string',
      title: 'Blog Description',
    },
    {
      name: 'blogDate',
      type: 'date',
      title: 'Blog Date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'blogContent',
      type: 'array',
      title: 'Blog Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            },
          ],
        },
      ],
    },
    {
      name: 'blogAuthor',
      type: 'string',
      title: 'Blog Author',
    },
    {
      name: 'blogSlug',
      type: 'slug',
      title: 'Blog Slug',
      options: {
        source: 'blogTitle',
        maxLength: 96,
      },
    },
    {
      name: 'blogImage',
      type: 'image',
      title: 'Blog Image',
      validation: (Rule: any) => Rule.required().assetRequired().error('This field is required'),
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
