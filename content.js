/**
 * ========================================
 * WEBSITE CONTENT — EDIT THIS FILE
 * ========================================
 *
 * To update your website, change the text below.
 * Save the file, push to GitHub, and changes go live.
 *
 * TIPS:
 * - Keep quotes around all text: "your text here"
 * - For links, update both 'text' and 'url'
 * - To highlight text, set 'highlight' to: "peach", "blue", or "lavender"
 * - Set highlight to "" (empty) for no highlight
 *
 * SECTIONS IN THIS FILE:
 *   1. Personal info + Hello intro
 *   2. About content (main text, background, beyond work)
 *   3. Social links
 *   4. Experiences (work/research history)
 *   5. Projects (fallback — Supabase is primary source)
 *   6. Thoughts (Substack posts — update as you publish)
 *   7. Footer
 */


const CONTENT = {

    // ==========================================
    // 1. PERSONAL INFO
    // ==========================================
    name: "Tharun K M",

  
    helloIntro: `I work at the intersection of data, economics, and public systems — trying to understand how things actually work, and what the numbers reveal when you look carefully enough.
    <br><br>
    I am based in Mumbai, India. You can reach me on <a href="https://in.linkedin.com/in/tharun-k-m-b51285361" target="_blank">LinkedIn</a> or by <a href="mailto:tharunkm1983@gmail.com">email</a>.`,

    // ==========================================
    // 2. ABOUT SECTION
    // ==========================================


    aboutContent: {
        intro: ``,

        mainText: `I am a researcher and analyst with training in <a href="https://in.linkedin.com/in/tharun-k-m-b51285361" target="_blank" class="highlight blue">economics, data science, business intelligence and public policy</a>.`,

        learnAboutMe: {
            title: `A few places to learn more about my work:`,
            items: [
                { text: "Research and projects on GitHub", url: "https://github.com/tharunkm-83", source: "GitHub", highlight: "blue" },
                { text: "Writing on Substack", url: "https://substack.com/@tharunkm", source: "Substack", highlight: "peach" },
                { text: "Professional profile on LinkedIn", url: "https://in.linkedin.com/in/tharun-k-m-b51285361", source: "LinkedIn", highlight: "lavender" }
            ]
        },

      corporateStory: {
            title: "My interests, explained",
           subtitle: "Research interests: applied data science · complex systems · development economics · tech policy",
 
             paragraphs: [
                 ]
     },

        background: {
            title: "Background",
            items: [
                `🔹 Interdisciplinary training in <strong>economics, data science, and sustainability</strong> — I work across these areas rather than staying neatly inside any one of them.`,
                `🔹 Comfortable with both <strong>econometric methods</strong> (regression analysis, index construction, survey microdata) and <strong>computational approaches</strong> (machine learning, simulation, geospatial data processing).`,
                `🔹 I have worked with large-scale administrative and survey datasets including <strong>PLFS</strong>, gridded climate data from IMD and IPCC-aligned sources, and urban infrastructure records across Indian cities.`,
                `🔹 Native Kannada speaker, based in India. I write in English about the things I find interesting — economics, technology, geopolitics, and the occasional long detour into something completely unrelated.`
            ]
        },

        beyondWork: {
            title: "Outside the work",
            items: [
                {
                    emoji: "📖",
                    label: "Reading, widely",
                    // ---- INTROSPECTION NOTE ----
                    // Replace this with what you actually read.
                    // The most compelling version is specific: not "I read economics"
                    // but the actual books, papers, or writers that have changed
                    // how you think about something.
                    // ----------------------------
                    text: "I read across development economics, history of technology, political economy, and science writing. I am drawn to work that takes complexity seriously without hiding behind it."
                },
                {
                    emoji: "✍️",
                    label: "Writing",
                    text: "I write on Substack — mostly about ideas at the intersection of technology, policy, and how institutions work. The writing is exploratory rather than authoritative; I use it to think through things I don't yet fully understand."
                },
                {
                    emoji: "🌐",
                    label: "Geopolitics and systems thinking",
                    // ---- INTROSPECTION NOTE ----
                    // This is a guess based on your stated interests.
                    // If geopolitics is a genuine interest, add a sentence that
                    // makes it specific — a region, a question, a framing
                    // that you actually find compelling. Specificity is what
                    // separates "I'm interested in geopolitics" from something
                    // that makes a reader lean in.
                    // ----------------------------
                    text: "I find myself drawn to questions about how states and systems interact at scale — trade, infrastructure, governance capacity, the geography of development. Less interested in the day-to-day and more in the structural patterns."
                },
                {
                    emoji: "🤔",
                    label: "Decision-making and learning",
                    text: "I think about how people and institutions update their beliefs — and why they often don't, even with good evidence. This comes up in research methodology, in policy design, and in everyday life."
                }
            ]
        }
    },

    // Contact line (keeping for backwards compatibility with script.js)
    contactLine: ``,


    uniqueAbilities: [
    ],

     Name in Kannada (hover effect on your name on the landing page)
    nameKannada: "ತರುಣ್ ಕೆ. ಎಂ.",

    // ==========================================
    // 3. SOCIAL LINKS (top-right icons)
    // ==========================================
    socialLinks: {
        linkedin: "https://in.linkedin.com/in/tharun-k-m-b51285361",
        twitter: "x.com/@zealover_9293",
        substack: "https://substack.com/@tharunkm",
        github: "https://github.com/tharunkm-83",
        email: "tharunkm1983@gmail.com",
    },

    // ==========================================
    // 4. EXPERIENCES (Work / Research tab)
    // ==========================================

    // ---- INTROSPECTION NOTE (delete before going live) ----
    // Each experience entry has a briefDescription (shown on the card)
    // and an expandedContent (shown when clicked, accepts HTML).
    // The best brief descriptions are one sentence that says what you
    // actually *did*, not just where you worked or what the project was called.
    // Ask: if someone reads only this one sentence, what do they know?
    // -------------------------------------------------------

    experiences: [
        {
            title: "Urban Transport Sustainability Research",
            company: "EMPRI",
            companyUrl: "www.empri.karnataka.gov.in",
            date: "June - July 2025",
            briefDescription: `Built a composite sustainability index for 11 Urban Local Bodies across India (2016–2024), integrating transport, environmental, infrastructure, and safety indicators to enable longitudinal cross-city comparison.`,
            expandedContent: `
                <h4>Urban Transport Sustainability Index</h4>
                <p>★ <strong>Problem:</strong> Existing urban transport assessments in India tend to be siloed — either focused on infrastructure alone or environmental metrics alone. This project built a multi-pillar composite index that enables comparison across cities and over time.</p>
                <p>★ <strong>Methodology:</strong> Indicator selection, normalisation, and weighted aggregation across four pillars: environment, infrastructure, mobility, and safety. Data sourced from administrative transport records and publicly available urban datasets.</p>
                <p>★ <strong>Scope:</strong> 11 Urban Local Bodies, 2016–2024, enabling both cross-sectional and longitudinal analysis of urban transport performance.</p>
               // <p>★ <strong>Output:</strong> Time-series index with disaggregated pillar scores, visualised for policy-facing presentation.</p>
                <p><a href="https://github.com/tharunkm-83" target="_blank" class="project-cta highlight blue">View on GitHub →</a></p>
            `
        },
        {
            title: "Gendered Inclusion and Exclusion in Digital India",
            company: "Dissertation Work",
            companyUrl: "www.tiss.ac.in",
            date: "2025 — Present",
            briefDescription: `Currently working on a final-year dissertation project performing econometric analysis of women’s digital financial adoption in India using NFHS-5, applying Logistic Regression and PCA`,
            expandedContent: `
                <h4>Digital Public Infrastructure — Governance and Inclusion</h4>
                <p>★ <strong>Focus:</strong> How DPI systems (identity, payments, data exchange layers) are designed, where they succeed and fail at inclusion, and what governance frameworks make them accountable to the people they serve.</p>
                <p>★ <strong>Approach:</strong> Literature review, comparative analysis of DPI deployments across India and comparable contexts, and engagement with primary documentation from implementing agencies.</p>
                <p>★ <strong>Questions driving the work:</strong> What does "inclusion" actually mean in the context of digital infrastructure? When does interoperability serve citizens and when does it serve the state? How do we measure governance capacity in these systems?</p>
                <p>★ <strong>Status:</strong> Ongoing. Research notes and early writing available on Substack.</p>
                <p><a href="https://substack.com/techpolicyanalyst" target="_blank" class="project-cta highlight blue">Read related writing →</a></p>
            `
        },
        {
            title: "Rural and Urban Fieldwork",
            company: "Field Researcher at TISS",
            companyUrl: "www.tiss.ac.in",
            date: "2023-24",
            briefDescription: `Part of a field data collection exercise in Rural Immersion Fieldwork in Tuljapur, Maharashtra and an Urban Immersion Fieldwork in Sarnath, UP`,
            expandedContent: `
                <h4>Wage Determinants — PLFS Microdata Analysis</h4>
                <p>★ <strong>Data:</strong> Periodic Labour Force Survey (PLFS) — a large-scale nationally representative household survey conducted by MOSPI.</p>
                <p>★ <strong>Methods:</strong> OLS and log-linear regression (Mincer earnings framework), controlling for education level, industry classification, employment type (regular wage / casual / self-employed), gender, and geography.</p>
                <p>★ <strong>Findings:</strong> Documented significant wage penalties associated with informal employment, and regional variation in returns to education — with implications for labour market policy and skilling programmes.</p>
                <p>★ <strong>Tools:</strong> Stata (data cleaning, regression, output tables), Excel for preliminary exploration.</p>
                <p><a href="https://github.com/tharunkm-83" target="_blank" class="project-cta highlight peach">View on GitHub →</a></p>
            `
        },
        

    ],

    // ==========================================
    // 5. PROJECTS (fallback if Supabase is not connected)
    // Supabase is the primary source. This array is a backup.
    // If you are using Supabase, keep this array in sync manually
    // or just leave it empty — Supabase will populate the section.
    // ==========================================
    projects: [
        {
            name: "Urban Transport Sustainability Index",
            highlight: "blue",
            briefDescription: "Composite index measuring transport sustainability across 11 Urban Local Bodies in India (2016–2024), covering environment, infrastructure, mobility, and safety.",
            url: "https://github.com/tharunkm-83",
            expandedContent: `
                <p>★ Multi-pillar composite index enabling cross-city and longitudinal comparison of urban transport performance across India.</p>
                <p>★ Methodology: indicator selection, normalisation, and weighted aggregation across four pillars. Data from administrative transport records and urban infrastructure datasets.</p>
                <p>★ Scope: 11 Urban Local Bodies, 2016–2024.</p>
                <p><a href="https://github.com/tharunkm-83" target="_blank" class="project-cta highlight blue">View on GitHub →</a></p>
            `
        },
        {
            name: "Airport Runway Congestion Simulation",
            highlight: "lavender",
            briefDescription: "M/M/C queueing model and discrete-event simulation in Python to identify runway congestion thresholds and inform slot scheduling policy.",
            url: "https://github.com/tharunkm-83",
            expandedContent: `
                <p>★ Applied M/M/C queueing framework with Poisson arrivals and exponential service times to model runway throughput.</p>
                <p>★ Discrete-event simulation (SimPy) used to test realistic traffic patterns and identify non-linear congestion thresholds.</p>
                <p>★ Findings have direct relevance for slot allocation policy and infrastructure capacity planning.</p>
                <p><a href="https://github.com/tharunkm-83" target="_blank" class="project-cta highlight lavender">View on GitHub →</a></p>
            `
        },
        {
            name: "Wage Determination Analysis (PLFS)",
            highlight: "peach",
            briefDescription: "Regression analysis on Periodic Labour Force Survey microdata examining demographic and structural determinants of wages in India.",
            url: "https://github.com/tharunkm-83",
            expandedContent: `
                <p>★ Log-linear regression analysis using Stata on PLFS data, controlling for education, sector, employment type, gender, and geography.</p>
                <p>★ Documented informal employment wage penalties and regional variation in returns to education.</p>
                <p><a href="https://github.com/tharunkm-83" target="_blank" class="project-cta highlight peach">View on GitHub →</a></p>
            `
        },
        {
            name: "Rainfall Data Visualisation (NetCDF)",
            highlight: "blue",
            briefDescription: "Processed gridded IPCC-aligned climate data for India and generated animated temporal visualisations of rainfall distribution.",
            url: "https://github.com/tharunkm-83",
            expandedContent: `
                <p>★ Processed NetCDF precipitation datasets using xarray and netCDF4 in Python.</p>
                <p>★ Generated animated GIF visualisations of seasonal and inter-annual rainfall variability across Indian districts.</p>
                <p>★ Tools: Python (xarray, matplotlib, cartopy, imageio).</p>
                <p><a href="https://github.com/tharunkm-83" target="_blank" class="project-cta highlight blue">View on GitHub →</a></p>
            `
        },
        {
            name: "Human Activity Recognition (HAR)",
            highlight: "lavender",
            briefDescription: "ML classification project on accelerometer and gyroscope sensor data, involving feature engineering, model selection, and evaluation on the UCI HAR benchmark.",
            url: "https://github.com/tharunkm-83",
            expandedContent: `
                <p>★ Feature extraction from raw time-series sensor data; trained and evaluated Random Forest and SVM classifiers.</p>
                <p>★ Cross-validation, feature importance analysis, and confusion matrix evaluation on UCI HAR benchmark dataset.</p>
                <p>★ Tools: Python (scikit-learn, pandas, seaborn).</p>
                <p><a href="https://github.com/tharunkm-83" target="_blank" class="project-cta highlight lavender">View on GitHub →</a></p>
            `
        }
    ],

    // ==========================================
    // 6. THOUGHTS — Substack posts
    // The Substack RSS feed will populate this section automatically
    // if script.js is configured to fetch it.
    // This array is a manual fallback / override.
    //
    // ---- INTROSPECTION NOTE (delete before going live) ----
    // The section intro below the heading "Thoughts" is where you
    // say why you write. Not the LinkedIn answer. The actual reason.
    // Who are you writing for? What kind of reader do you imagine?
    // Replace the section-intro text in index.html accordingly.
    // -------------------------------------------------------
    //
    // Add your Substack posts here as you publish them.
    // Format: { year: "2025", title: "Post title", url: "full URL" }
    // ==========================================
    thoughts: [
        // Add your Substack posts here. Examples:
        { year: "2025", title: "Digital Public Goods: The Promise Doesn't Match the Practice", url: "https://techpolicystackanalyst.substack.com/p/digital-public-goods-the-promise?r=6o8kmn" },
        { year: "2025", title: "Digital Public Goods and the SDGs", url: "https://techpolicystackanalyst.substack.com/p/digital-public-goods-and-the-sdgs?r=6o8kmn" },
    ],

    // ==========================================
    // Kept for structural compatibility — not rendered in your 4-section site
    // ==========================================
    philosophy: {
        quote: "",
        paragraphs: []
    },

    contentWorthConsuming: [],
    funFacts: [],
    photos: { polaroids: [], film: [], digital: [] },
    contentCalendar: [],
    communities: [],
    coolThings: [],

    // ==========================================
    // 7. FOOTER
    // ==========================================
    footer: "Built with curiosity. Updated as things change."

};
