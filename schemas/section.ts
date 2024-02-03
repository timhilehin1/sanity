export default{
    name: 'section',
    type: 'document',
    title: 'Section',
    description: 'This shows the section that each product belongs to, e.g New Arrivals, Trending, etc.',
    fields: [
        {
          name: 'sectionName',
          type: 'string',
          title: 'Section Name',
          validation:(Rule:any)=>Rule.uppercase().error('Please enter the section name in uppercase'),
        },
      ],
}