

// Bauhaus Color Palette
export const COLORS = {
  RED: '#D22730',
  BLUE: '#1D4E89',
  YELLOW: '#F4B400',
  BLACK: '#1A1A1A',
  WHITE: '#FFFFFF',
  GRAY: '#F2F2F2',
  DARK_GRAY: '#333333',
};

// Content
export const CONTENT = {
  hero: {
    title: "ERIC YIUM",
    manifesto: "Designing intuitive experiences for complex technology initiatives through research and design. I bridge the gap between user needs and business goals, with experience advising Fortune 500 clients on technology initiatives.",
    role: "RESEARCHER & DESIGNER"
  },
  professional: {
    title: "PROFESSIONAL WORK",
    subtitle: "Research. Design. Communication.",
    description: "A curated exhibit of problem-solving in the aerospace and defense industry.",
    action: "ACCESS ARCHIVE"
  },
  sideProjects: {
    title: "SKELETON QUEEN",
    subtitle: "Design. Logic. Multiplayer.",
    description: "From Figma prototype to shipped product. A server-authoritative multiplayer game built with React, Firebase, and AI-assisted workflows.",
    action: "ENTER LOBBY"
  },
  about: {
    title: "EXPERIENCE",
    subtitle: "Structural Chronology",
    description: "Contributions across government, finance, consulting, and aerospace sectors.",
    timeline: [
        {
            id: "04",
            company: "RTX (RAYTHEON)",
            title: "DESIGN & RESEARCH ASSOCIATE",
            summary: "Delivered actionable research reports for customer facing applications such as EngineXplorer (engine web visualization tool), and designed web components and screens for analyst applications.",
            type: "AEROSPACE",
            year: "2024"
        },
        {
            id: "03",
            company: "DELOITTE",
            title: "CONSULTANT",
            summary: "Developed and presented cyber strategy for four Fortune 500 clients with each project resulting in additional contracts of work.",
            type: "CONSULTING",
            year: "2021"
        },
        {
            id: "02",
            company: "GOLDMAN SACHS",
            title: "SUMMER ANALYST",
            summary: "Co-managed a settlements automation project with projected savings of $4.8 million annually.",
            type: "FINANCE",
            year: "2019"
        },
        {
            id: "01",
            company: "THE WHITE HOUSE",
            title: "IT INTERN",
            summary: "Configured the Salesforce back end and web form for the White House internship & Executive Office of the President internship applications.",
            type: "GOVT",
            year: "2018"
        }
    ]
  },
  projectsList: [
    {
      id: "01",
      title: "3D ENGINE VISUALIZATION",
      client: "AEROSPACE TECH",
      year: "RTX",
      category: "USABILITY TESTING",
      description: "A UX evaluation of a 3D engine visualization platform designed to support training, exploration, and decision-making across technical and executive audiences.",
      tags: ["USABILITY TESTING", "UX RESEARCH", "3D INTERACTION"],
      hasDetails: true,
      details: {
        problem: "With expansion of the platform to a wider audience, an understanding of how new users would experience the product independently and where usability risks existed was necessary to scale to less specialized users.",
        approach: "Conducted usability testing and free-explore sessions with 9 target users. Synthesized findings into a research report with 6 key insights.",
        outcomes: "Simplified introductory controls screen to surface only critical controls. Shifted instructional and detailed content to progressive, as-needed disclosure. Established a usability baseline to guide future releases and research."
      },
      visuals: [
        { 
          type: "3d-model", 
          caption: "Engine Cutaway Visualization",
          // TODO: Replace with your actual image path, e.g., "assets/engine-render.jpg"
          image: "" 
        },
        { 
          type: "ui-comparison", 
          caption: "Before & After: Control Simplification",
          // TODO: Replace with your actual image paths
          imageBefore: "", 
          imageAfter: "" 
        }
      ]
    },
    {
      id: "02",
      title: "COST SHEET RESEARCH",
      client: "INTERNAL FINANCE",
      year: "RTX",
      category: "USER RESEARCH",
      description: "Exploratory user research focused on identifying inefficiencies and constraints in a critical Excel-based financial analysis tool with over 100 interconnected tabs.",
      tags: ["USER RESEARCH", "WORKFLOW ANALYSIS", "FINANCIAL UX"],
      hasDetails: true,
      details: {
        problem: "While expert analysts have developed proficiency in using Cost Sheet, its scale, legacy structure, and customization-heavy workflows introduce inefficiencies that increase complexity and time required, increase error risk, and limit adaptability as business needs evolve.",
        approach: "Conducted 7 user interviews with financial analysts, focusing on understanding workflows, risks, and improvement ideas. Collated data using affinity mapping and synthesized findings into a research report with 3 key insights.",
        outcomes: "Established a clear baseline of inefficiencies, surfaced themes around performance constraints and cognitive load, and collected analyst-driven suggestions for future improvements."
      },
      visuals: [
        { type: "grid", caption: "Complexity of the Excel-based tool" },
        { 
          type: "persona", 
          caption: "Analyst Persona",
          // TODO: Replace with your actual image path
          image: "" 
        },
        { 
          type: "map", 
          caption: "Affinity Map of Feedback",
          // TODO: Replace with your actual image path
          image: "" 
        }
      ]
    },
    {
      id: "03",
      title: "UI DESIGN WORK",
      client: "VARIOUS",
      year: "RTX",
      category: "UI DESIGN",
      description: "A sample collection of UI-focused projects highlighting component design, forms, and interfaces. These examples emphasize clarity, scalability, and consistency across different product contexts, built within established design systems.",
      tags: ["UI DESIGN", "COMPONENT DESIGN", "FIGMA"],
      hasDetails: true,
      details: {
        problem: "Diverse product contexts required scalable and consistent interface elements to ensure clarity and reduce cognitive load across applications.",
        approach: "Leveraged established design systems to create high-fidelity mockups, focusing on component modularity, form usability validation, and accessibility.",
        outcomes: "Delivered production-ready UI components and validated interface designs through stakeholder review and user research findings."
      },
      visuals: [
        { type: "ui-portal", caption: "Centralized Portal Mockup" },
        { type: "ui-components", caption: "Form & Multi-select Components" },
        { type: "ui-finance", caption: "Financial App Redesign" }
      ]
    }
  ],
  sideProjectMobile: {
    title: "SKELETON QUEEN",
    subtitle: "MULTIPLAYER CARD SYSTEM",
    description: "A server-authoritative multiplayer web app. I acted as both Product Designer and Full-Stack Engineer, bridging the gap between Figma components and React state.",
    techStack: "FIGMA / FIREBASE / OPUS 4.5",
    concept: "Navigated the 'Cold Start' problem of serverless infrastructure by treating backend limitations as UX opportunities—implementing pre-emptive background pings and warming states to ensure a seamless lobby experience.",
    caseStudy: {
      meta: {
        role: "Product Designer & Developer (AI-Assisted)",
        stack: "React 18, Zustand, Firebase, CSS Modules",
        status: "Live Product",
        url: "https://skeleton-queen-e0397.web.app/"
      },
      hook: "While a case study could stop at mockups, I wanted to bridge the gap between vision and implementation. I took Skeleton Queen from a user problem to a fully deployed, server-authoritative multiplayer web app. By leveraging an AI-assisted workflow, I acted as both Designer and Product Engineer, proving I can design systems that are feasible, performant, and shippable.",
      sections: [
        {
          id: "problem",
          title: "THE PROBLEM",
          subtitle: "Game Flow vs. Logistical Friction",
          content: "Physical card games are fun, but the logistics kill the momentum. Manual shuffling and scorekeeping consume massive amounts of time, and complex rules create cognitive overload for new players.",
          keyPoints: ["Downtime due to manual admin", "Cognitive Overload for new players", "Opportunity: Automate admin to focus on strategy"]
        },
        {
          id: "insight",
          title: "USER INSIGHT",
          subtitle: "Designing for Every Experience Level",
          content: "Research into the physical game flow revealed distinct player archetypes with conflicting needs. I mapped these needs to specific feature sets.",
          archetypes: [
            { name: "The Newbie", need: "Guardrails, Help", feature: "Valid move constraints, help easily accessible" },
            { name: "The Infrequent", need: "Memory Aids", feature: "Just-in-Time tooltips" },
            { name: "The Regular", need: "Replayability", feature: "Animations & Splash Screens" },
            { name: "The GenZ", need: "Mobile-First", feature: "Rapid, snappy game loop" }
          ]
        },
        {
          id: "solution",
          title: "SYSTEM ARCHITECTURE",
          subtitle: "Component-Driven Design",
          content: "A complex multiplayer game cannot be built screen-by-screen; it requires a rigid system. I prioritized component architecture over one-off layouts. Animations aren't just decorative; they serve as state change and information notifiers.",
        },
        {
          id: "execution",
          title: "TECHNICAL EXECUTION",
          subtitle: "The AI-Assisted Workflow",
          content: "I treated AI models as execution tools, knowing that 'blind prompting' leads to imprecise results. I established a strict architecture-first workflow: defining shared states (Lobby, Bidding, Playing, Scoring), user flows, and information architecture before writing a single line of code. I also treated backend limitations (Cold Start) as UX problems, implementing 'warming' states to manage user perception.",
        },
        {
          id: "iteration",
          title: "FEEDBACK & ITERATION",
          subtitle: "Observational Testing",
          content: "The work doesn't stop at first ship. I conducted structured user interviews and observational testing during live gameplay sessions. Major fixes included 'Just-in-Time' contextual banners to reduce cognitive load during gameplay, and a 'Visual Anchoring' system to solve spatial disorientation in the lobby.",
        }
      ],
      takeaways: [
        "UX decisions don’t stop at the interface or user research",
        "Clarity and feedback are critical in multiplayer systems",
        "Designing for different experience levels improves accessibility",
        "Reusable systems scale better than screen-by-screen design",
        "AI-assisted development expands possibilities, but requires strong direction",
        "Feedback drives meaningful improvements and is critical in projects"
      ]
    }
  }
};