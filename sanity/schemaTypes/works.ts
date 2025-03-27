export default {
    name: "work",
    title: "Works",
    type: "document",
    fields: [
        {
            name: "projectName",
            title: "Project Name",
            type: "string"
        },
        {
            name: "stacks",
            title: "Stacks Used",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "projectName" }
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true }
        },
        {
            name: "liveDemo",
            title: "Live Demo URL",
            type: "url"
        },
        {
            name: "github",
            title: "GitHub Repository",
            type: "url"
        }
    ]
};
