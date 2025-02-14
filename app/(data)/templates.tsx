export default [
    {
        name: "Blog Title Generator",
        desc: "An AI tool that generates a blog title based on your blog information.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/3826/3826569.png",
        aiPrompt: "Generate five engaging blog titles based on the given niche and outline.",
        slug: "generate-blog-title",
        form: [
            { label: "Enter your blog niche", field: "input", name: "niche", required: true },
            { label: "Enter blog outline", field: "textarea", name: "outline" }
        ]
    },
    {
        name: "Blog Content Generator",
        desc: "An AI tool that generates detailed blog content based on your topic.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2593/2593510.png",
        aiPrompt: "Write a well-structured blog post based on the given niche and outline.",
        slug: "generate-blog-content",
        form: [
            { label: "Enter your blog niche", field: "input", name: "niche", required: true },
            { label: "Enter blog outline", field: "textarea", name: "outline" }
        ]
    },
    {
        name: "Blog Topic Ideas",
        desc: "Generates unique and trending blog topic ideas based on your niche.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/4660/4660439.png",
        aiPrompt: "Provide five unique blog topic ideas in bullet format based on the given niche.",
        slug: "generate-blog-topics",
        form: [
            { label: "Enter your blog niche", field: "input", name: "niche", required: true }
        ]
    },
    {
        name: "YouTube SEO Title Generator",
        desc: "Creates high-ranking YouTube video titles optimized for SEO.",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/3938/3938026.png",
        aiPrompt: "Generate five high-SEO YouTube video titles based on the given topic.",
        slug: "generate-youtube-title",
        form: [
            { label: "Enter your video topic", field: "input", name: "topic", required: true }
        ]
    },
    {
        name: "YouTube Video Description Generator",
        desc: "Creates engaging and SEO-friendly YouTube video descriptions.",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/16183/16183555.png",
        aiPrompt: "Generate an engaging and SEO-optimized YouTube video description.",
        slug: "generate-youtube-description",
        form: [
            { label: "Enter your video topic", field: "input", name: "topic", required: true },
            { label: "Enter key points to include", field: "textarea", name: "keyPoints" }
        ]
    },
    {
        name: "Social Media Post Generator",
        desc: "Creates engaging social media posts for platforms like Instagram, Twitter, and LinkedIn.",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/4612/4612366.png",
        aiPrompt: "Generate a creative and engaging social media post for the given topic and platform.",
        slug: "generate-social-media-post",
        form: [
            { label: "Enter your topic", field: "input", name: "topic", required: true },
            { label: "Select platform", field: "dropdown", name: "platform", options: ["Instagram", "Twitter", "LinkedIn"], required: true }
        ]
    },
    {
        name: "Instagram Caption Generator",
        desc: "Generates catchy Instagram captions based on your post content.",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/1409/1409946.png",
        aiPrompt: "Generate five engaging Instagram captions based on the given description.",
        slug: "generate-instagram-caption",
        form: [
            { label: "Enter post description", field: "textarea", name: "description", required: true }
        ]
    },
    {
        name: "Facebook Ad Copy Generator",
        desc: "Creates compelling ad copy for Facebook advertisements.",
        category: "Advertising",
        icon: "https://cdn-icons-png.flaticon.com/128/2504/2504903.png",
        aiPrompt: "Generate three high-converting Facebook ad copies based on the given product and target audience.",
        slug: "generate-facebook-ad",
        form: [
            { label: "Enter product/service name", field: "input", name: "product", required: true },
            { label: "Enter target audience", field: "textarea", name: "audience" }
        ]
    },
    {
        name: "Email Subject Line Generator",
        desc: "Generates attention-grabbing subject lines for emails.",
        category: "Email Marketing",
        icon: "https://cdn-icons-png.flaticon.com/128/2165/2165061.png",
        aiPrompt: "Generate five compelling email subject lines based on the given email content.",
        slug: "generate-email-subject",
        form: [
            { label: "Enter email content", field: "textarea", name: "emailContent", required: true }
        ]
    },
    {
        name: "LinkedIn Post Generator",
        desc: "Creates professional LinkedIn posts based on a given topic or idea.",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
        aiPrompt: "Generate a professional LinkedIn post with a strong opening and engagement-driven content based on the given topic.",
        slug: "generate-linkedin-post",
        form: [
            { label: "Enter your topic", field: "input", name: "topic", required: true }
        ]
    }
];
