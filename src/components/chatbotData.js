// chatbotData.js - Separate file for bot responses and suggestions

export const botResponses = {
    // Pricing related responses
    pricing: "We offer three plans: Basic (Free), Pro (up to $12/month), and Enterprise (custom pricing). The Pro plan includes advanced analytics, 3 team members, and 10GB storage. Would you like more details on a specific plan?",
    
    // Features related responses
    features: "Jam Analytics offers smart workflow generation, seamless integrations, custom analytics dashboards, automated task management, role-based access control, and real-time collaboration. Which feature would you like to know more about?",
    
    // Workflow responses
    workflow: "Our AI-powered workflow generation helps you create and optimize business processes automatically. Just describe your needs, and our system will generate custom workflows for you!",
    
    // Integration responses
    integration: "Our Seamless Integration Hub allows you to connect Jam Analytics with your existing tools and software. What specific integration are you interested in?",
    
    // Analytics responses
    analytics: "Our Custom Analytics Dashboard provides real-time insights and reporting. You can track KPIs, visualize data, and make data-driven decisions all in one place.",
    
    // Launch/availability responses
    launch: "We're launching soon! Join our waitlist on the homepage to be notified as soon as we go live and get early access.",
    
    // Trial responses
    trial: "Both our Pro and Enterprise plans come with a 14-day free trial. No credit card required to start!",
    
    // Team size responses
    team: "The Basic plan includes 1 team member, Pro includes 3 team members, and Enterprise offers custom team sizes. Need more seats? The Enterprise plan is perfect for larger teams.",
    
    // Storage responses
    storage: "The Basic plan includes 500MB storage, Pro includes 10GB, and Enterprise offers custom storage options based on your needs.",
    
    // Support responses
    support: "Basic users get community support, Pro users receive priority support, and Enterprise clients enjoy dedicated support with SLA guarantees. How else can I assist you?",
    
    // How it works responses
    howItWorks: "It's simple! 1) Describe your business needs, 2) Our AI generates a custom solution, and 3) You launch and customize in real-time. Would you like a demo?",
    
    // Demo responses
    demo: "You can watch our product demo directly from the homepage. It shows how Jam Analytics works in action!",
    
    // Security responses
    security: "We take security seriously with role-based access control, encryption, and regular security audits. Your data is safe with us!",
    
    // Contact responses
    contact: "You can contact our sales team through the 'Contact Sales' button on the pricing page, or visit our Contact page in the footer.",
    
    // Additional responses
    greeting: "Hello! How can I help you learn more about Jam Analytics today?",
    thanks: "You're welcome! Feel free to ask if you have any other questions about Jam Analytics.",
    
    // New responses
    api: "Yes, we offer a comprehensive API that allows you to integrate Jam Analytics into your existing systems. Our documentation provides full details on endpoints and authentication.",
    
    mobile: "Jam Analytics works on all devices! We have responsive web design and native mobile apps for iOS and Android that give you full functionality on the go.",
    
    dataExport: "You can export your data in multiple formats including CSV, JSON, and PDF. Pro and Enterprise plans include scheduled exports and API access.",
    
    onboarding: "We provide personalized onboarding for all plans. Pro users get video tutorials and Enterprise clients receive dedicated onboarding sessions with our customer success team.",
    
    customization: "Jam Analytics is highly customizable! You can personalize dashboards, create custom reports, and design workflows that match your exact business needs.",
    
    // Default response
    default: "I'm not sure I understand. Would you like to know about our features, pricing, or how Jam Analytics works?"
  };
  
  export const suggestionsByTopic = {
    // Pricing follow-ups
    pricing: [
      "Tell me about the Pro plan",
      "What's included in Enterprise?",
      "Is there a free trial?",
      "How many team members can I add?"
    ],
    
    // Features follow-ups
    features: [
      "Tell me about workflows",
      "How do integrations work?",
      "Explain analytics dashboards",
      "What about security?"
    ],
    
    // Workflow follow-ups
    workflow: [
      "How customizable are workflows?",
      "Can I integrate with my tools?",
      "Show me an example",
      "What about pricing?"
    ],
    
    // Integration follow-ups
    integration: [
      "Which tools can I integrate?",
      "Is there an API?",
      "How hard is setup?",
      "Tell me about pricing"
    ],
    
    // Analytics follow-ups
    analytics: [
      "Can I customize dashboards?",
      "What metrics are available?",
      "How does reporting work?",
      "What plan includes analytics?"
    ],
    
    // Launch follow-ups
    launch: [
      "How do I join the waitlist?",
      "Will there be early access?",
      "What features at launch?",
      "Tell me about pricing"
    ],
    
    // Trial follow-ups
    trial: [
      "What's included in the trial?",
      "Do I need a credit card?",
      "Can I cancel anytime?",
      "What happens after 14 days?"
    ],
    
    // Team size follow-ups
    team: [
      "Pro plan details",
      "Enterprise plan details",
      "Can I add more members later?",
      "How do roles work?"
    ],
    
    // Storage follow-ups
    storage: [
      "Can I upgrade storage?",
      "What's the file size limit?",
      "Tell me about pricing",
      "Enterprise storage options"
    ],
    
    // Support follow-ups
    support: [
      "How quick is priority support?",
      "What's included in SLA?",
      "Community support details",
      "Enterprise support options"
    ],
    
    // How it works follow-ups
    howItWorks: [
      "Can I see a demo?",
      "Tell me about pricing",
      "What integrations are available?",
      "Is there onboarding support?"
    ],
    
    // Demo follow-ups
    demo: [
      "How do I get started?",
      "Tell me about pricing",
      "Is there a free trial?",
      "Book a personalized demo"
    ],
    
    // Security follow-ups
    security: [
      "How is data stored?",
      "Do you have certifications?",
      "Role-based access details",
      "Enterprise security options"
    ],
    
    // Contact follow-ups
    contact: [
      "What's your email?",
      "Do you have phone support?",
      "Book a demo",
      "Tell me about pricing"
    ],
    
    // New suggestion categories
    api: [
      "What API endpoints are available?",
      "How is authentication handled?",
      "Are there rate limits?",
      "Is there API documentation?"
    ],
    
    mobile: [
      "Is there an iOS app?",
      "Is there an Android app?",
      "What features work on mobile?",
      "Can I use offline mode?"
    ],
    
    dataExport: [
      "What export formats are available?",
      "Can I schedule exports?",
      "Are there data limits?",
      "How do I access the API?"
    ],
    
    customization: [
      "Can I create custom dashboards?",
      "How do I build custom workflows?",
      "Can I add my branding?",
      "Enterprise customization options"
    ],
    
    // Default follow-ups for welcome message or unclear context
    default: [
      "What pricing plans do you offer?",
      "Tell me about your features",
      "When are you launching?",
      "How does it work?"
    ]
  };