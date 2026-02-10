import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        slug: "victoria-tours",
        title: "Victoria Tours: AI CRM",
        subtitle: "AI-Powered Visa Letter Automation Platform (SaaS)",
        category: "AI Development",
        year: "2025",
        featured: true,
        heroImage: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-tours/email-page.png",
        thumbnailImage: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-tours/email-page.png",
        description:
            "I engineered a custom AI CRM for Victoria Tours to centralize operations across 10 offices. Using Next.js, MongoDB, and Google Gemini, I automated support tickets and streamlined logistics for staff and travel agents. The system, scaled on AWS (EC2, SQS) to handle 100,000+ daily emails, empowered 50+ active users to manage complex tour data efficiently. This transformation reduced customer response times by 60% and digitized the entire recruitment and ticketing lifecycle.",
        role: "Lead AI Engineer | Next.js | AWS | Gemini API | Node.js | MongoDB",

        client: "Victoria Tours",
        images: [
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-tours/email-page.png",
                alt: "Victoria Tours AI CRM Email Page",
                caption: "Email Page",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-tours/tickets-dashboard.png",
                alt: "Tickets Dashboard",
                caption: "Tickets Dashboard",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-tours/ticket-page.png",
                alt: "Ticket Page",
                caption: "Ticket Page",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-tours/main-dashboard.png",
                alt: "Main Dashboard",
                caption: "Main Dashboard",
            },

        ],
        documents: [],
        links: [],
        tags: ["AI Development", "CRM Development", "Web Development", "DevOps"],
    },
    {
        slug: "victoria-visa-automation",
        title: "Victoria Tours: AI-Powered Visa Letter",
        subtitle: "Enterprise Visa Automation",
        category: "AI Development",
        year: "2026",
        featured: true,
        heroImage: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-visa-automation/hero.png",
        thumbnailImage: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-visa-automation/dashboard.png",
        description:
            "I engineered a high-scale visa automation platform handling 10,000+ monthly applications. Using Next.js and Google Gemini Vision, I built a system that extracts user data from documents, reducing manual entry by 95%. This efficiency gain allowed the client to scale operations significantly, directly driving $1M+ in annual revenue. The architecture utilizes AWS for reliability and MongoDB for data management, ensuring zero downtime during peak processing.",
        role: "AI Engineer | Next.js | MongoDB | AWS | Gemini API | Computer Vision",

        client: "Victoria Tours",
        images: [
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-visa-automation/hero.png",
                alt: "Victoria Tours Visa Automation Homepage",
                caption: "Automation Homepage",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-visa-automation/dashboard.png",
                alt: "Main Dashboard",
                caption: "Operational Dashboard",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-visa-automation/ocr-process.png",
                alt: "AI Document Processing",
                caption: "AI-Powered Document Extraction",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-visa-automation/analytics.png",
                alt: "Analytics View",
                caption: "Performance Metrics",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/victoria-visa-automation/results.png",
                alt: "Visa Processing Results",
                caption: "Final Generated Documents",
            },
        ],
        documents: [],
        links: [],
        tags: ["AI Model Integration", "Web Development", "Product Management", "Analytics Dashboard", "DevOps"],
    },
    {
        slug: "makemypackages",
        title: "MakeMyPackages",
        subtitle: "AI-Powered Travel Platform & Smart Itinerary Agent",
        category: "AI Development",
        year: "2026",
        featured: true,
        heroImage: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/makemypackages/hero.png",
        thumbnailImage: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/makemypackages/thumbnail.png",
        description:
            "Engineered MakeMyPackages, a production AI travel platform that boosted conversion rates by 60%. Built a 'Smart Travel Expert' using LangChain & Google Gemini for personalized planning. Developed a scalable app with Next.js 15, TypeScript, MongoDB, & AWS S3. Created pipelines for dynamic PDF itinerary generation & automated Resend emails. Integrated secure NextAuth v5, admin dashboard, & real-time currency APIs.",
        role: "AI Engineer | Next.js 15 | LangChain | Google Gemini | AWS S3 | TypeScript | Full Stack",

        client: "MakeMyPackages",
        images: [
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/makemypackages/hero.png",
                alt: "MakeMyPackages Homepage",
                caption: "AI-powered travel platform homepage",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/makemypackages/dashboard.png",
                alt: "Admin Dashboard",
                caption: "Comprehensive admin dashboard for managing bookings",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/makemypackages/ai-agent.png",
                alt: "Smart Travel Expert AI Agent",
                caption: "AI chatbot for personalized travel recommendations",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/makemypackages/itinerary.png",
                alt: "Dynamic Itinerary Generation",
                caption: "Automated PDF itinerary generation system",
            },
        ],
        documents: [
            {
                title: "Project Documentation",
                url: "/projects/makemypackages/documentation.pdf",
                type: "pdf",
            },
        ],
        links: [],
        tags: ["Web Application", "Dashboard", "AI Development", "AI Chatbot", "DevOps"],
    },

    {
        slug: "swiftvisa",
        title: "SwiftVisa",
        subtitle: "AI-Powered Visa Automation Platform with OCR",
        category: "AI App Development",
        year: "2026",
        featured: true,
        heroImage: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/swiftvisa/hero.png",
        thumbnailImage: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/swiftvisa/dashboard.png",
        description:
            "Developed SwiftVisa, a high-performance visa processing platform. Built with Next.js 15 and Google Gemini 1.5 Flash, it features automated passport OCR that eliminates manual data entry. The system offers robust Role-Based Access Control (RBAC) for applicants and agents, secure document storage via AWS S3, and async processing with AWS SQS. Integrated with Razorpay and Resend, this solution streamlines global travel documentation with enterprise-grade security and scalability.",
        role: "AI Engineer | Next.js 15 | Google Gemini | AWS | Full Stack Dev",

        client: "SwiftVisa",
        images: [
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/swiftvisa/hero.png",
                alt: "SwiftVisa Login Screen",
                caption: "Secure Authentication & Login",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/swiftvisa/dashboard.png",
                alt: "SwiftVisa Dashboard",
                caption: "Agent Dashboard with Analytics",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/swiftvisa/ocr-process.png",
                alt: "OCR Processing",
                caption: "AI-Powered Passport OCR",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/swiftvisa/mobile-view.png",
                alt: "Mobile Responsive View",
                caption: "Fully Responsive Mobile Interface",
            },
            {
                src: "https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/swiftvisa/admin-panel.png",
                alt: "Admin Panel",
                caption: "Comprehensive Admin Controls",
            },
        ],
        documents: [],
        links: [],
        tags: ["OCR Software", "AI App Development", "Web Development", "Next.js", "AWS", "Google Gemini"],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => p.slug);
}

export function getAdjacentProjects(
    currentSlug: string
): { prev: Project | null; next: Project | null } {
    const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
    if (currentIndex === -1) {
        return { prev: null, next: null };
    }

    return {
        prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
        next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
    };
}
