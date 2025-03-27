export default {
    name: 'skill',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Skill Name',
        type: 'string',
        // validation: (Rule) => Rule.required(),
      },
      {
        name:'image',
        title:'Image',
        type:'image',
        options:{hotspot:true}
      },
      {
        name: 'proficiency',
        title: 'Proficiency Level (%)',
        type: 'number',
        // validation: (Rule) => Rule.min(0).max(100),
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: { source: "name", maxLength: 96 },
      },
      {
        name: "content",
        type: "array", // Ensure it's an array of block content
        title: "Content",
        of: [{ type: "block" }],
      },
    ],
  };
  