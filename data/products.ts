
import { ListProduct } from "../types";

export const products: ListProduct[] = [
  // --- PACK A: REVENUE RESCUE (1-10) ---
  {
    id: "001",
    slug: "bleeding-pixel",
    pack: "Revenue Rescue",
    title: "The Bleeding Pixel",
    pain_point: "Active Ad Spend (> $10k/mo) but Attribution is Broken",
    signal_strength: "High",
    verification_method: ["Meta Ad Library", "BuiltWith API"],
    tags: ["Marketing", "E-commerce", "Ad Spend", "Shopify", "Pixel", "Direct Dials", "High Intent"],
    hero_headline: "Identify DTC brands spending $10k+ on ads with broken pixels.",
    execution_brief: {
      hook: "I recorded a 30s video showing exactly where your pixel is misfiring.",
      outreach_window: "Immediate (Daily Ad Spend = Daily Loss)",
      why_it_works: "Loss aversion. They are paying for traffic they cannot measure. It hurts physically."
    },
    payload: { type: "ECOM_SPEND", ad_spend: "$10k+", pixel_status: "MISSING", platform: "Shopify" },
    wizard_config: {
      filters: [
        { id: "min_spend", label: "Min Ad Spend", options: ["$1k+", "$5k+", "$10k+"] },
        { id: "tech_exclude", label: "Exclude Tech", options: ["TripleWhale", "Northbeam"] }
      ]
    }
  },
  {
    id: "002",
    slug: "mobile-sloth",
    pack: "Revenue Rescue",
    title: "The Mobile Sloth",
    pain_point: "Paying for traffic to a site with Mobile Score < 30",
    signal_strength: "High",
    verification_method: ["Google PageSpeed API"],
    tags: ["Marketing", "E-commerce", "SEO", "Performance", "Ad Spend", "Google"],
    hero_headline: "Brands paying CPMs to send traffic to a white screen.",
    execution_brief: {
      hook: "Your mobile load time is 6s. You are losing 40% of paid clicks before they load.",
      outreach_window: "Immediate",
      why_it_works: "Vanity metric vs Reality. They see 'Ad Clicks' but don't realize the bounce rate."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "SPEED_SCORE", value: "12/100", context: "Google PSI" },
    wizard_config: {
      filters: [
        { id: "severity", label: "Speed Severity", options: ["Critical (<20)", "Poor (<30)"] },
        { id: "spend", label: "Min Ad Spend", options: ["$1k+", "$5k+"] }
      ]
    }
  },
  {
    id: "003",
    slug: "abandoned-cart-ghost",
    pack: "Revenue Rescue",
    title: "The Abandoned Cart Ghost",
    pain_point: "Shopify Plus stores (High Vol) leaking 20% revenue",
    signal_strength: "Medium",
    verification_method: ["BuiltWith", "Cart Simulation"],
    tags: ["Marketing", "E-commerce", "Shopify Plus", "Email Marketing", "Technographic", "Retention"],
    hero_headline: "Shopify Plus Brands with no Email/SMS recovery flows.",
    execution_brief: {
      hook: "I abandoned a cart 24h ago and never got an email. You're leaving $50k/mo on the table.",
      outreach_window: "Anytime",
      why_it_works: "Fear of missing out on 'free money'. The ROI of fixing this is instant."
    },
    payload: { type: "TECH_GAP", tool_missing: "Klaviyo/ESP", risk_level: "HIGH", traffic_vol: "Shopify Plus" },
    wizard_config: {
      filters: [
        { id: "revenue", label: "Revenue Band", options: ["$1M+", "$10M+"] },
        { id: "exclude", label: "Exclude Tools", options: ["Klaviyo", "Attentive", "Postscript"] }
      ]
    }
  },
  {
    id: "004",
    slug: "reviewless-scaler",
    pack: "Revenue Rescue",
    title: "The Reviewless Scaler",
    pain_point: "Ad spend increasing trend + <50 Reviews on site",
    signal_strength: "Medium",
    verification_method: ["Semrush", "Site Scrape"],
    tags: ["Marketing", "E-commerce", "Social Proof", "Ad Spend", "Growth", "Brand"],
    hero_headline: "Scaling Brands increasing Ad Spend but having < 50 Reviews.",
    execution_brief: {
      hook: "Your ads are scaling, but your social proof isn't. CPA is going to skyrocket.",
      outreach_window: "Immediate",
      why_it_works: "They know trust is the bottleneck. You are selling the solution to 'Scaling Fatigue'."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "REVIEW_COUNT", value: "12 Reviews", context: "Ad Spend +20%" },
    wizard_config: {
      filters: [
        { id: "count", label: "Review Count", options: ["<10", "<50", "<100"] },
        { id: "trend", label: "Ad Trend", options: ["Increasing"] }
      ]
    }
  },
  {
    id: "005",
    slug: "seo-ghost",
    pack: "Revenue Rescue",
    title: "The SEO Ghost",
    pain_point: "Organic Traffic dropped >20% in last Google Update",
    signal_strength: "High",
    verification_method: ["Semrush API"],
    tags: ["Marketing", "SEO", "Content", "Traffic Drop", "Crisis", "Agency"],
    hero_headline: "E-com Brands that lost >20% Organic Traffic in the last update.",
    execution_brief: {
      hook: "I see the exact day Google hit you. Here is the fix for that specific algorithm update.",
      outreach_window: "Within 30 days",
      why_it_works: "Panic. They lost 'free revenue' and are desperate to get it back."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "TRAFFIC_DROP", value: "-45%", context: "Last 90 Days" },
    wizard_config: {
      filters: [
        { id: "drop", label: "Drop Severity", options: [">20%", ">40%", ">60%"] },
        { id: "da", label: "Min Authority", options: ["DA 20+", "DA 40+"] }
      ]
    }
  },
  {
    id: "006",
    slug: "generic-lander",
    pack: "Revenue Rescue",
    title: "The Generic Lander",
    pain_point: "Running Ads to Homepage (not a specific Landing Page)",
    signal_strength: "High",
    verification_method: ["FB Ad Library", "URL Analysis"],
    tags: ["Marketing", "CRO", "Ad Spend", "Design", "Landing Page", "Performance"],
    hero_headline: "E-com Brands sending Paid Traffic to Homepages — killing conversion.",
    execution_brief: {
      hook: "Show ads pointing to generic homepages vs specific PDPs.",
      outreach_window: "Immediate",
      why_it_works: "Friction costs money. They know they need better LPs."
    },
    payload: { type: "ECOM_SPEND", ad_spend: "$5k+", pixel_status: "OK", platform: "Homepage Link" },
    wizard_config: {
      filters: [
        { id: "spend", label: "Min Ad Spend", options: ["$1k+", "$5k+"] }
      ]
    }
  },
  {
    id: "007",
    slug: "stockout-victim",
    pack: "Revenue Rescue",
    title: "The Stockout Victim",
    pain_point: "Running Ads to products that are 'Out of Stock'",
    signal_strength: "High",
    verification_method: ["Ad Library", "Page Scrape"],
    tags: ["Marketing", "Operations", "Inventory", "Ad Spend", "E-commerce"],
    hero_headline: "Brands running Paid Ads to Out-of-Stock Products.",
    execution_brief: {
      hook: "URGENT: You are paying for traffic to a 'Sold Out' button.",
      outreach_window: "< 24 Hours",
      why_it_works: "Literally lighting money on fire. 0% conversion rate."
    },
    payload: { type: "ECOM_SPEND", ad_spend: "Active", pixel_status: "OK", platform: "Product OOS" },
    wizard_config: {
      filters: [
        { id: "spend", label: "Min Ad Spend", options: ["$1k+"] }
      ]
    }
  },
  {
    id: "008",
    slug: "social-ghost",
    pack: "Revenue Rescue",
    title: "The Social Ghost",
    pain_point: "Running Ads but inactive on IG/TikTok > 30 days",
    signal_strength: "Medium",
    verification_method: ["Social Scrape"],
    tags: ["Marketing", "Social Media", "Content", "Brand Awareness", "Ad Spend"],
    hero_headline: "Brands running Ads but Ghosting Organic Social (>30 days).",
    execution_brief: {
      hook: "Ads say 'buy', profile says 'we might be closed'.",
      outreach_window: "Immediate",
      why_it_works: "Low trust equals high CAC."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "LAST_POST", value: "45 Days Ago", context: "Instagram" },
    wizard_config: {
      filters: [
        { id: "platform", label: "Ghost Platform", options: ["Instagram", "TikTok"] },
        { id: "days", label: "Days Silent", options: [">30 days", ">60 days"] }
      ]
    }
  },
  {
    id: "009",
    slug: "unclaimed-local",
    pack: "Revenue Rescue",
    title: "The Unclaimed Local",
    pain_point: "Brick & Mortar chains running ads but GMB unclaimed",
    signal_strength: "High",
    verification_method: ["Google Maps API"],
    tags: ["Marketing", "Local SEO", "Retail", "Brick & Mortar", "Google Maps", "SMB"],
    hero_headline: "Retail Chains/SMBs with Unclaimed Google Business Profiles.",
    execution_brief: {
      hook: "Your Google Map listing is unclaimed and vulnerable.",
      outreach_window: "Immediate",
      why_it_works: "They are invisible to local search/Near Me traffic."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "GMB_STATUS", value: "Unclaimed", context: "Maps Badge" },
    wizard_config: {
      filters: [
        { id: "niche", label: "Vertical", options: ["Retail", "Dental", "Gym"] },
        { id: "locs", label: "Min Locations", options: ["1", "3+", "10+"] }
      ]
    }
  },
  {
    id: "010",
    slug: "video-void",
    pack: "Revenue Rescue",
    title: "The Video Void",
    pain_point: "E-com brands >$5M revenue with no TikTok/Reels content",
    signal_strength: "Medium",
    verification_method: ["StoreLeads", "Social Check"],
    tags: ["Marketing", "Content", "Video", "TikTok", "Creative", "E-commerce"],
    hero_headline: "$5M+ E-com Brands with Zero Short-Form Video Presence.",
    execution_brief: {
      hook: "You have $5M+ rev but are invisible to Gen Z.",
      outreach_window: "Immediate",
      why_it_works: "Video is the only way to lower CAC in 2025."
    },
    payload: { type: "ECOM_SPEND", ad_spend: "Unknown", pixel_status: "OK", platform: "No TikTok" },
    wizard_config: {
      filters: [
        { id: "rev", label: "Min Revenue", options: ["$1M+", "$5M+", "$10M+"] }
      ]
    }
  },

  // --- PACK B: TECH & OPS (11-20) ---
  {
    id: "011",
    slug: "franken-stack",
    pack: "Tech & Ops",
    title: "The Franken-Stack",
    pain_point: "Running Salesforce AND HubSpot simultaneously",
    signal_strength: "High",
    verification_method: ["BuiltWith"],
    tags: ["Operations", "RevOps", "SaaS", "Salesforce", "HubSpot", "Technographic"],
    hero_headline: "SaaS Companies running Salesforce AND HubSpot simultaneously.",
    execution_brief: {
      hook: "Are you struggling with the sync logic between Sales and Marketing?",
      outreach_window: "Anytime",
      why_it_works: "Data silos and double billing. RevOps teams hate this."
    },
    payload: { type: "TECH_GAP", tool_missing: "Single Source of Truth", risk_level: "HIGH", traffic_vol: "Sync Conflict" },
    wizard_config: {
      filters: [
        { id: "combo", label: "Conflict Combo", options: ["SFDC+HubSpot", "SFDC+Marketo"] },
        { id: "size", label: "Company Size", options: ["50-200", "200-500"] }
      ]
    }
  },
  {
    id: "012",
    slug: "migration-window",
    pack: "Tech & Ops",
    title: "The Migration Window",
    pain_point: "Dropped a major tool (Segment) or installed 'Migration' tool",
    signal_strength: "High",
    verification_method: ["BuiltWith History"],
    tags: ["Engineering", "Data", "Migration", "SaaS", "Technographic", "Churn"],
    hero_headline: "Companies that Dropped a Major Tool (e.g. Segment) in last 30 days.",
    execution_brief: {
      hook: "Saw the stack change—migrating to a new CDP?",
      outreach_window: "Last 30 days",
      why_it_works: "Migrations are messy and they need help now."
    },
    payload: { type: "TECH_GAP", tool_missing: "Segment.io", risk_level: "MEDIUM", traffic_vol: "Churned Tool" },
    wizard_config: {
      filters: [
        { id: "tool", label: "Tool Dropped", options: ["Segment", "HubSpot", "Salesforce"] },
        { id: "geo", label: "Location", options: ["US", "UK", "EU"] }
      ]
    }
  },
  {
    id: "013",
    slug: "spreadsheet-scaler",
    pack: "Tech & Ops",
    title: "The Spreadsheet Scaler",
    pain_point: "Growing Sales Team (>5 Reps) but no CRM detected",
    signal_strength: "Medium",
    verification_method: ["LinkedIn", "BuiltWith"],
    tags: ["Sales", "Operations", "CRM", "SMB", "Growth", "Technographic"],
    hero_headline: "Companies with >5 Sales Reps but No Detectable CRM.",
    execution_brief: {
      hook: "How are you tracking these 5 reps without a CRM?",
      outreach_window: "Immediate",
      why_it_works: "They can't forecast revenue. Chaos scales linearly."
    },
    payload: { type: "TECH_GAP", tool_missing: "CRM", risk_level: "HIGH", traffic_vol: "8 Sales Reps" },
    wizard_config: {
      filters: [
        { id: "reps", label: "Min Sales Reps", options: ["5+", "10+", "20+"] },
        { id: "ind", label: "Industry", options: ["Manufacturing", "Services"] }
      ]
    }
  },
  {
    id: "014",
    slug: "security-risk",
    pack: "Tech & Ops",
    title: "The Security Risk",
    pain_point: "Series B+ companies without a CISO or SOC2",
    signal_strength: "High",
    verification_method: ["Crunchbase", "LinkedIn"],
    tags: ["Engineering", "Security", "Compliance", "Series B", "Executive"],
    hero_headline: "Series B+ Startups with No CISO or Security Head.",
    execution_brief: {
      hook: "Investors expect SOC2 by Series B. You have no security head.",
      outreach_window: "Immediate",
      why_it_works: "One failed audit kills the quarter."
    },
    payload: { type: "TECH_GAP", tool_missing: "CISO / SOC2", risk_level: "CRITICAL", traffic_vol: "Series B" },
    wizard_config: {
      filters: [
        { id: "stage", label: "Funding Stage", options: ["Series B", "Series C"] }
      ]
    }
  },
  {
    id: "015",
    slug: "overlay-trap",
    pack: "Tech & Ops",
    title: "The Overlay Trap",
    pain_point: "Revenue >$20M using generic Accessibility overlays",
    signal_strength: "High",
    verification_method: ["BuiltWith"],
    tags: ["Engineering", "Compliance", "Legal", "Accessibility", "Enterprise"],
    hero_headline: "$20M+ Revenue Companies utilizing Generic Accessibility Overlays.",
    execution_brief: {
      hook: "That overlay might not protect you from ADA lawsuits.",
      outreach_window: "Immediate",
      why_it_works: "Legal liability scare + high revenue targets."
    },
    payload: { type: "TECH_GAP", tool_missing: "Native Remediation", risk_level: "HIGH", traffic_vol: "UserWay Detected" },
    wizard_config: {
      filters: [
        { id: "rev", label: "Min Revenue", options: ["$10M+", "$50M+"] },
        { id: "tool", label: "Overlay Tool", options: ["UserWay", "AccessiBe"] }
      ]
    }
  },
  {
    id: "016",
    slug: "analytics-blindspot",
    pack: "Tech & Ops",
    title: "The Analytics Blindspot",
    pain_point: "High Traffic >100k/mo but no Server-Side Tracking",
    signal_strength: "Medium",
    verification_method: ["Semrush", "BuiltWith"],
    tags: ["Marketing", "Data", "Analytics", "Technographic", "High Traffic"],
    hero_headline: "High-Traffic Sites (>100k/mo) with No Server-Side Tracking.",
    execution_brief: {
      hook: "You are missing 20% of your data to AdBlockers.",
      outreach_window: "Immediate",
      why_it_works: "Inaccurate board reporting drives action."
    },
    payload: { type: "TECH_GAP", tool_missing: "GTM Server-Side", risk_level: "MEDIUM", traffic_vol: "500k/mo" },
    wizard_config: {
      filters: [
        { id: "traffic", label: "Min Traffic", options: ["100k+", "500k+"] }
      ]
    }
  },
  {
    id: "017",
    slug: "chatbot-fail",
    pack: "Tech & Ops",
    title: "The Chatbot Fail",
    pain_point: "Active Chat Widget but 'Offline' during business hours",
    signal_strength: "High",
    verification_method: ["Claygent Test"],
    tags: ["Sales", "Support", "CX", "Technographic", "Automation"],
    hero_headline: "Companies with Unresponsive Chat Widgets during business hours.",
    execution_brief: {
      hook: "I tried to chat at 2pm and you were 'Away'.",
      outreach_window: "Immediate",
      why_it_works: "Bad CX kills leads. They are paying for Intercom for nothing."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "CHAT_STATUS", value: "Offline (2pm)", context: "Intercom" },
    wizard_config: {
      filters: [
        { id: "tz", label: "Timezone", options: ["EST", "PST", "GMT"] },
        { id: "tech", label: "Widget", options: ["Intercom", "Drift"] }
      ]
    }
  },
  {
    id: "018",
    slug: "legacy-erp",
    pack: "Tech & Ops",
    title: "The Legacy ERP",
    pain_point: "Manufacturing Co on SAP/Oracle hiring 'Transformation' roles",
    signal_strength: "High",
    verification_method: ["LinkedIn Jobs", "BuiltWith"],
    tags: ["Operations", "Engineering", "Manufacturing", "Enterprise", "Digital Transformation", "Legacy"],
    hero_headline: "Manufacturing Companies on Legacy ERPs hiring for Digital Transformation.",
    execution_brief: {
      hook: "Saw the 'Digital Transformation' role—migrating off the legacy SAP?",
      outreach_window: "Immediate",
      why_it_works: "Technical debt is their #1 blocker."
    },
    payload: { type: "TECH_GAP", tool_missing: "Modern ERP", risk_level: "MEDIUM", traffic_vol: "SAP R/3" },
    wizard_config: {
      filters: [
        { id: "erp", label: "Target ERP", options: ["SAP", "Oracle"] },
        { id: "ind", label: "Industry", options: ["Manufacturing", "Logistics"] }
      ]
    }
  },
  {
    id: "019",
    slug: "cloud-spender",
    pack: "Tech & Ops",
    title: "The Cloud Spender",
    pain_point: "Hiring 'FinOps' or 'Cloud Cost' roles",
    signal_strength: "High",
    verification_method: ["LinkedIn Jobs"],
    tags: ["Engineering", "Finance", "Cloud", "AWS", "Hiring", "Cost Reduction"],
    hero_headline: "Tech Companies hiring FinOps / Cloud Cost Engineers.",
    execution_brief: {
      hook: "Hiring for FinOps usually means the AWS bill just hit a record high.",
      outreach_window: "Immediate",
      why_it_works: "Direct financial pain. Every month is wasted cash."
    },
    payload: { type: "ROLE_CHANGE", role: "FinOps Manager", status: "VACANT", days_ago: 5 },
    wizard_config: {
      filters: [
        { id: "cloud", label: "Provider", options: ["AWS", "Azure", "GCP"] }
      ]
    }
  },
  {
    id: "020",
    slug: "open-source-user",
    pack: "Tech & Ops",
    title: "The Open Source User",
    pain_point: "Enterprise (>500 emp) using Open Source tool versions",
    signal_strength: "Medium",
    verification_method: ["BuiltWith"],
    tags: ["Engineering", "Enterprise", "Technographic", "Open Source", "Security"],
    hero_headline: "Enterprises (>500 Employees) running Open Source (OSS) Infrastructure.",
    execution_brief: {
      hook: "You're too big to run Metabase OSS without an SLA.",
      outreach_window: "Immediate",
      why_it_works: "Security and Support compliance risks."
    },
    payload: { type: "TECH_GAP", tool_missing: "Enterprise License", risk_level: "MEDIUM", traffic_vol: "OSS Detected" },
    wizard_config: {
      filters: [
        { id: "tool", label: "OSS Tool", options: ["Metabase", "Airbyte", "PostHog"] },
        { id: "size", label: "Min Employees", options: ["200+", "500+", "1000+"] }
      ]
    }
  },

  // --- PACK C: PERSONNEL SHOCK (21-30) ---
  {
    id: "021",
    slug: "new-sheriff",
    pack: "Personnel Shock",
    title: "The New Sheriff (CMO)",
    pain_point: "New CMO Hired < 90 Days Ago (Reviewing Contracts)",
    signal_strength: "High",
    verification_method: ["LinkedIn Sales Nav"],
    tags: ["Marketing", "Executive", "Hiring", "Series B", "Decision Maker"],
    hero_headline: "Get Series B+ Companies where the CMO started <90 days ago.",
    execution_brief: {
      hook: "Send a 'First 90 Days' audit playbook.",
      outreach_window: "Days 1-90",
      why_it_works: "New execs have a mandate to change things."
    },
    payload: { type: "ROLE_CHANGE", role: "Chief Marketing Officer", status: "NEW_HIRE", days_ago: 14 },
    wizard_config: {
      filters: [
        { id: "time", label: "Time Window", options: ["<30 days", "<60 days", "<90 days"] },
        { id: "fund", label: "Funding", options: ["Series B+", "Public"] }
      ]
    }
  },
  {
    id: "022",
    slug: "empty-chair",
    pack: "Personnel Shock",
    title: "The Empty Chair",
    pain_point: "VP Sales left < 30 days ago (No replacement)",
    signal_strength: "High",
    verification_method: ["LinkedIn Departures"],
    tags: ["Sales", "Executive", "Churn", "Leadership", "Crisis"],
    hero_headline: "Companies where the VP of Sales / CRO just left (<30 Days).",
    execution_brief: {
      hook: "Who is steering the ship? Need interim help?",
      outreach_window: "Immediate",
      why_it_works: "Leadership vacuums cause panic. They need stability."
    },
    payload: { type: "ROLE_CHANGE", role: "VP Sales", status: "DEPARTURE", days_ago: 7 },
    wizard_config: {
      filters: [
        { id: "role", label: "Role Vacated", options: ["VP Sales", "CRO"] },
        { id: "size", label: "Company Size", options: ["50-200", "200+"] }
      ]
    }
  },
  {
    id: "023",
    slug: "sdr-surge",
    pack: "Personnel Shock",
    title: "The SDR Surge",
    pain_point: "Hiring >5 SDRs Simultaneously",
    signal_strength: "High",
    verification_method: ["LinkedIn Jobs"],
    tags: ["Sales", "Hiring", "Growth", "SaaS", "Entry Level"],
    hero_headline: "Companies hiring >5 SDRs simultaneously—building a war room.",
    execution_brief: {
      hook: "You have 5 new reps starting. You need data seats.",
      outreach_window: "Immediate",
      why_it_works: "High cash burn. If reps don't ramp fast, the VP Sales gets fired."
    },
    payload: { type: "ROLE_CHANGE", role: "SDR / BDR", status: "NEW_HIRE", days_ago: 2 },
    wizard_config: {
      filters: [
        { id: "count", label: "Min Open Roles", options: ["3+", "5+", "10+"] }
      ]
    }
  },
  {
    id: "024",
    slug: "first-hr-hire",
    pack: "Personnel Shock",
    title: "The First HR Hire",
    pain_point: "Reached 50 employees and hired 'Head of People'",
    signal_strength: "High",
    verification_method: ["LinkedIn Growth"],
    tags: ["HR", "Operations", "Startup", "Growth", "First Hire"],
    hero_headline: "Growing Startups (50 Employees) hiring their First Head of People.",
    execution_brief: {
      hook: "Moving from founder-led payroll to systems?",
      outreach_window: "First 60 Days",
      why_it_works: "They are buying the entire HR stack (Payroll/Benefits) from scratch."
    },
    payload: { type: "ROLE_CHANGE", role: "Head of People", status: "NEW_HIRE", days_ago: 10 },
    wizard_config: {
      filters: [
        { id: "size", label: "Company Size", options: ["30-50", "50-100"] }
      ]
    }
  },
  {
    id: "025",
    slug: "mass-exodus",
    pack: "Personnel Shock",
    title: "The Mass Exodus",
    pain_point: ">15% of Engineering/Sales talent left in 6 months",
    signal_strength: "Medium",
    verification_method: ["LinkedIn Insights"],
    tags: ["HR", "Engineering", "Sales", "Churn", "Risk", "Recruiting"],
    hero_headline: "Companies suffering >15% Attrition in Engineering/Sales.",
    execution_brief: {
      hook: "Saw the team contracted—need help backfilling or outsourcing?",
      outreach_window: "Immediate",
      why_it_works: "Brain drain delays projects. They are desperate for bodies."
    },
    payload: { type: "ROLE_CHANGE", role: "Engineering Team", status: "DEPARTURE", days_ago: 30 },
    wizard_config: {
      filters: [
        { id: "dept", label: "Department", options: ["Engineering", "Sales"] },
        { id: "rate", label: "Attrition %", options: [">10%", ">20%"] }
      ]
    }
  },
  {
    id: "026",
    slug: "internal-promote",
    pack: "Personnel Shock",
    title: "The Internal Promote",
    pain_point: "Director promoted to VP (First-time exec)",
    signal_strength: "High",
    verification_method: ["LinkedIn Changes"],
    tags: ["Sales", "Marketing", "Executive", "Promotion", "Leadership"],
    hero_headline: "Newly Promoted Executives (Director -> VP).",
    execution_brief: {
      hook: "Congrats on the bump. Need a playbook for the first 90 days?",
      outreach_window: "First 30 Days",
      why_it_works: "Imposter syndrome. They want to prove they deserved the promotion."
    },
    payload: { type: "ROLE_CHANGE", role: "VP Sales", status: "NEW_HIRE", days_ago: 1 },
    wizard_config: {
      filters: [
        { id: "role", label: "Target Role", options: ["VP Sales", "VP Marketing", "C-Level"] }
      ]
    }
  },
  {
    id: "027",
    slug: "founder-handoff",
    pack: "Personnel Shock",
    title: "The Founder Handoff",
    pain_point: "Founder changed title to 'Chairman' or hired 'CRO'",
    signal_strength: "High",
    verification_method: ["LinkedIn Titles"],
    tags: ["Executive", "Sales", "Founder", "Startup", "Leadership Change"],
    hero_headline: "Startups where the Founder is Stepping Back from Sales.",
    execution_brief: {
      hook: "Big step handing off the sales process. Do you have a playbook written down?",
      outreach_window: "Immediate",
      why_it_works: "Founder magic doesn't scale. Processes break immediately."
    },
    payload: { type: "ROLE_CHANGE", role: "CRO", status: "NEW_HIRE", days_ago: 5 },
    wizard_config: {
      filters: [
        { id: "trig", label: "Trigger", options: ["First CRO Hire", "Founder->Chairman"] }
      ]
    }
  },
  {
    id: "028",
    slug: "boomerang",
    pack: "Personnel Shock",
    title: "The Boomerang",
    pain_point: "Executive left and came back < 2 years later",
    signal_strength: "Low",
    verification_method: ["LinkedIn History"],
    tags: ["Executive", "Leadership", "Product", "Retention", "Culture"],
    hero_headline: "Companies where a Key Executive 'Boomeranged' (Left and Returned).",
    execution_brief: {
      hook: "Welcome back. Guessing the mandate is to fix what broke?",
      outreach_window: "First 30 Days",
      why_it_works: "They have high authority and a mandate to clean up messes."
    },
    payload: { type: "ROLE_CHANGE", role: "VP Product", status: "NEW_HIRE", days_ago: 12 },
    wizard_config: {
      filters: [
        { id: "role", label: "Target Role", options: ["C-Suite", "VP"] }
      ]
    }
  },
  {
    id: "029",
    slug: "remote-shift",
    pack: "Personnel Shock",
    title: "The Remote Shift",
    pain_point: "Posted first 'Remote' job after being 'On-site'",
    signal_strength: "High",
    verification_method: ["Job Locations"],
    tags: ["HR", "Operations", "Remote Work", "Compliance", "Hiring"],
    hero_headline: "Companies hiring their First Remote Roles — compliance gaps.",
    execution_brief: {
      hook: "Saw the remote role—using an EOR for that or setting up an entity?",
      outreach_window: "Immediate",
      why_it_works: "Compliance risks (Nexus) and culture shifts."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Remote Policy Shift", amount: "First Remote Hire" },
    wizard_config: {
      filters: [
        { id: "geo", label: "Base Location", options: ["USA", "UK"] }
      ]
    }
  },
  {
    id: "030",
    slug: "layoff-survivor",
    pack: "Personnel Shock",
    title: "The Layoff Survivor",
    pain_point: "Layoffs 3mo ago + Hiring Sales again",
    signal_strength: "High",
    verification_method: ["Layoffs.fyi", "LinkedIn"],
    tags: ["HR", "Sales", "Engineering", "Recovery", "Efficiency", "Hiring"],
    hero_headline: "Companies that Did Layoffs (3mo ago) and are Hiring Again.",
    execution_brief: {
      hook: "Rebuilding lean? We help you do more with less.",
      outreach_window: "Immediate",
      why_it_works: "Efficiency obsession. They are terrified of over-hiring again."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Hiring Rebound", amount: "Post-Layoff" },
    wizard_config: {
      filters: [
        { id: "role", label: "Hiring For", options: ["Sales", "Engineering"] }
      ]
    }
  },

  // --- PACK D: GROWTH & FUNDING (31-40) ---
  {
    id: "031",
    slug: "fresh-series-a",
    pack: "Growth & Funding",
    title: "The Fresh Series A",
    pain_point: "Raised >$5M in last 90 days + Hiring First RevOps",
    signal_strength: "High",
    verification_method: ["Crunchbase", "LinkedIn"],
    tags: ["Finance", "Sales", "Operations", "Fundraising", "Series A", "Growth"],
    hero_headline: "Verified Series A Startups (>$5M Raised) Hiring their First RevOps Role.",
    execution_brief: {
      hook: "Investors expect 3x growth. You need infrastructure.",
      outreach_window: "Days 1-60",
      why_it_works: "Money in bank + admitting process is broken."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Series A Round", amount: "$12M", hiring_velocity: "Hiring RevOps" },
    wizard_config: {
      filters: [
        { id: "amt", label: "Funding Amount", options: [">$5M", ">$10M"] },
        { id: "role", label: "Hiring Role", options: ["RevOps", "Sales Ops"] }
      ]
    }
  },
  {
    id: "032",
    slug: "international-expansion",
    pack: "Growth & Funding",
    title: "The International Expansion",
    pain_point: "US Company hiring first role in UK/Europe",
    signal_strength: "High",
    verification_method: ["Job Locations"],
    tags: ["Operations", "Legal", "Expansion", "International", "Hiring", "UK/EU"],
    hero_headline: "US Companies hiring their First Employees in Europe/UK.",
    execution_brief: {
      hook: "Expanding across the pond? Need help with GDPR/Entity setup?",
      outreach_window: "Immediate",
      why_it_works: "Complex legal and operational hurdles."
    },
    payload: { type: "GROWTH_EVENT", event_name: "New Market Entry", amount: "UK Expansion" },
    wizard_config: {
      filters: [
        { id: "dest", label: "Target Region", options: ["UK", "Europe", "APAC"] }
      ]
    }
  },
  {
    id: "033",
    slug: "new-hq",
    pack: "Growth & Funding",
    title: "The New HQ",
    pain_point: "Posted 'Office Manager' or changed HQ address",
    signal_strength: "High",
    verification_method: ["LinkedIn Jobs"],
    tags: ["Operations", "Facilities", "Office", "Relocation", "Hiring"],
    hero_headline: "Companies hiring Office Managers — signaling a new office.",
    execution_brief: {
      hook: "Opening a new space? We handle the IT/Furniture setup.",
      outreach_window: "Immediate",
      why_it_works: "Physical offices need physical things immediately."
    },
    payload: { type: "ROLE_CHANGE", role: "Office Manager", status: "NEW_HIRE", days_ago: 3 },
    wizard_config: {
      filters: [
        { id: "city", label: "Target City", options: ["NY", "SF", "Austin"] }
      ]
    }
  },
  {
    id: "034",
    slug: "product-hunt-launch",
    pack: "Growth & Funding",
    title: "The Product Hunt Launch",
    pain_point: "Launched #1-5 on Product Hunt last week",
    signal_strength: "High",
    verification_method: ["Product Hunt API"],
    tags: ["Product", "Marketing", "Launch", "SaaS", "Traffic Spike"],
    hero_headline: "Startups that ranked Top 5 on Product Hunt this week.",
    execution_brief: {
      hook: "Congrats on #1. Bet the support inbox is flooded.",
      outreach_window: "First 7 Days",
      why_it_works: "Traffic spike creates retention and support chaos."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Product Hunt #1", amount: "Traffic Spike" },
    wizard_config: {
      filters: [
        { id: "rank", label: "Rank Range", options: ["Top 5", "Top 10"] }
      ]
    }
  },
  {
    id: "035",
    slug: "conference-sponsor",
    pack: "Growth & Funding",
    title: "The Conference Sponsor",
    pain_point: "Sponsored SaaStr/WebSummit (High Spend)",
    signal_strength: "High",
    verification_method: ["Event Sites"],
    tags: ["Marketing", "Sales", "Events", "Sponsorship", "Budget", "SaaS"],
    hero_headline: "Companies that Sponsored [Event Name] — active marketing spend.",
    execution_brief: {
      hook: "Saw the booth at SaaStr. Need help closing those leads?",
      outreach_window: "14 Days Pre/Post",
      why_it_works: "ROI pressure is high. They need to convert event leads."
    },
    payload: { type: "ECOM_SPEND", ad_spend: "$50k Event", pixel_status: "OK", platform: "SaaStr Annual" },
    wizard_config: {
      filters: [
        { id: "event", label: "Which Event?", options: ["SaaStr", "Dreamforce", "WebSummit"] }
      ]
    }
  },
  {
    id: "036",
    slug: "podcast-launcher",
    pack: "Growth & Funding",
    title: "The Podcast Launcher",
    pain_point: "Launched a Podcast <3 episodes (Needs editing)",
    signal_strength: "High",
    verification_method: ["ListenNotes API"],
    tags: ["Marketing", "Content", "Podcast", "Brand", "Media"],
    hero_headline: "Companies that Just Launched a Podcast (<3 Episodes).",
    execution_brief: {
      hook: "Heard the trailer. Need help with the edit/booking?",
      outreach_window: "First 30 Days",
      why_it_works: "Podfade risk is real. They are overwhelmed by production."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Podcast Launch", amount: "Ep 1 Released" },
    wizard_config: {
      filters: [
        { id: "cat", label: "Category", options: ["Business", "Tech"] }
      ]
    }
  },
  {
    id: "037",
    slug: "inc-5000",
    pack: "Growth & Funding",
    title: "The Inc 5000",
    pain_point: "Made the list for the first time (Ego + Cash)",
    signal_strength: "High",
    verification_method: ["Inc List"],
    tags: ["Executive", "Finance", "Growth", "Award", "Private Equity"],
    hero_headline: "Inc 5000 Winners — the fastest growing private companies.",
    execution_brief: {
      hook: "Congrats on the growth. Does the infrastructure match the revenue?",
      outreach_window: "Year-Round",
      why_it_works: "Growth breaks systems. They have cash to fix it."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Inc 5000 Award", amount: "Rank #420" },
    wizard_config: {
      filters: [
        { id: "rank", label: "Rank", options: ["Top 500", "Top 1000", "All"] }
      ]
    }
  },
  {
    id: "038",
    slug: "m-and-a-target",
    pack: "Growth & Funding",
    title: "The M&A Target",
    pain_point: "Acquired a smaller company <6 months ago",
    signal_strength: "High",
    verification_method: ["Crunchbase"],
    tags: ["Executive", "Finance", "M&A", "Integration", "Operations"],
    hero_headline: "Companies that Acquired a Company (<6 Months ago).",
    execution_brief: {
      hook: "Integration chaos? We help merge the tech stacks.",
      outreach_window: "Months 1-6",
      why_it_works: "Duplicate tools and culture clashes."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Acquisition", amount: "Integration Phase" },
    wizard_config: {
      filters: [
        { id: "size", label: "Acquirer Size", options: [">100", ">1000"] }
      ]
    }
  },
  {
    id: "039",
    slug: "high-volume-hirer",
    pack: "Growth & Funding",
    title: "The High-Volume Hirer",
    pain_point: ">20% headcount growth projected via Job Posts",
    signal_strength: "High",
    verification_method: ["LinkedIn Jobs"],
    tags: ["HR", "Recruiting", "Growth", "Hiring", "Operations"],
    hero_headline: "Companies projecting >20% Headcount Growth.",
    execution_brief: {
      hook: "That many open roles = onboarding nightmare.",
      outreach_window: "Immediate",
      why_it_works: "They need laptops, software seats, and training fast."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Hiring Surge", amount: "+25% Growth" },
    wizard_config: {
      filters: [
        { id: "growth", label: "Min Growth %", options: [">10%", ">20%", ">50%"] }
      ]
    }
  },
  {
    id: "040",
    slug: "rebrand",
    pack: "Growth & Funding",
    title: "The Rebrand",
    pain_point: "Changed domain name or logo recently",
    signal_strength: "Medium",
    verification_method: ["Whois", "LinkedIn"],
    tags: ["Marketing", "Brand", "SEO", "Design", "Identity"],
    hero_headline: "Established Companies (>50 Emp) that recently Rebranded.",
    execution_brief: {
      hook: "Hope the 301 redirects are holding up the SEO.",
      outreach_window: "Months 1-3",
      why_it_works: "Rebrands risk traffic loss. They are anxious."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Domain Change", amount: "New Identity" },
    wizard_config: {
      filters: [
        { id: "emp", label: "Min Employees", options: ["50+", "100+"] }
      ]
    }
  },

  // --- PACK E: COMPETITOR & INTENT (41-50) ---
  {
    id: "041",
    slug: "bad-reviewer",
    pack: "Competitor & Intent",
    title: "The Bad Reviewer",
    pain_point: "Left a 1-Star Review for your Competitor",
    signal_strength: "High",
    verification_method: ["G2", "Capterra"],
    tags: ["Sales", "Intent", "Competitor", "G2", "SaaS"],
    hero_headline: "Companies leaving Negative Reviews (1-2 Stars) for your competitor.",
    execution_brief: {
      hook: "Saw you hated [Competitor]. We fixed that specific bug.",
      outreach_window: "Immediate",
      why_it_works: "Active detractors. Pre-sold on switching."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "REVIEW", value: "1-Star", context: "G2 Crowd" },
    wizard_config: {
      filters: [
        { id: "comp", label: "Which Competitor?", options: ["Salesforce", "HubSpot"] },
        { id: "rate", label: "Min Rating", options: ["1 Star", "< 3 Stars"] }
      ]
    }
  },
  {
    id: "042",
    slug: "alternative-seeker",
    pack: "Competitor & Intent",
    title: "The 'Alternative' Seeker",
    pain_point: "Ranking for '[Competitor] Alternatives'",
    signal_strength: "High",
    verification_method: ["Semrush"],
    tags: ["Marketing", "Intent", "SEO", "PPC", "Competitor", "High Intent"],
    hero_headline: "Companies actively searching/bidding for '[Competitor] Alternatives'.",
    execution_brief: {
      hook: "Evaluating switches? Here is how we stack up.",
      outreach_window: "Immediate",
      why_it_works: "They are in the 'Evaluation' phase of the funnel."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "KEYWORD", value: "HubSpot Alternatives", context: "PPC Bid" },
    wizard_config: {
      filters: [
        { id: "kw", label: "Competitor Keyword", options: ["HubSpot", "Salesforce"] }
      ]
    }
  },
  {
    id: "043",
    slug: "forum-complainer",
    pack: "Competitor & Intent",
    title: "The Forum Complainer",
    pain_point: "Founders posting about 'Problem X' on Reddit/Twitter",
    signal_strength: "Medium",
    verification_method: ["Social Listening"],
    tags: ["Product", "Founder", "Social", "Reddit", "Twitter", "Problem Aware"],
    hero_headline: "Founders/Execs actively complaining about [Problem] on Social.",
    execution_brief: {
      hook: "Saw your tweet about Stripe fees. We have a fix.",
      outreach_window: "24-48 Hours",
      why_it_works: "High emotion. Direct context."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "SOCIAL_POST", value: "Negative Sentiment", context: "Twitter" },
    wizard_config: {
      filters: [
        { id: "kw", label: "Keywords", options: ["Sucks", "Expensive", "Slow"] },
        { id: "plat", label: "Platform", options: ["Twitter", "Reddit"] }
      ]
    }
  },
  {
    id: "044",
    slug: "webinar-attendee",
    pack: "Competitor & Intent",
    title: "The Webinar Attendee",
    pain_point: "Registered for a Competitor's Webinar",
    signal_strength: "High",
    verification_method: ["LinkedIn Events"],
    tags: ["Sales", "Marketing", "Event", "Education", "Competitor"],
    hero_headline: "Leads who registered for [Competitor's] LinkedIn Event.",
    execution_brief: {
      hook: "Saw you RSVP'd to the SEO webinar. Interested in that topic?",
      outreach_window: "48 Hours",
      why_it_works: "Active education mode implies intent."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "EVENT_RSVP", value: "Registered", context: "LinkedIn" },
    wizard_config: {
      filters: [
        { id: "url", label: "Event URL", options: ["Paste URL"] }
      ]
    }
  },
  {
    id: "045",
    slug: "newsletter-sponsor",
    pack: "Competitor & Intent",
    title: "The Newsletter Sponsor",
    pain_point: "Companies sponsoring B2B Newsletters",
    signal_strength: "High",
    verification_method: ["Sponsorgap"],
    tags: ["Marketing", "Ad Spend", "Sponsorship", "Media", "Brand"],
    hero_headline: "Companies actively Sponsoring B2B Newsletters.",
    execution_brief: {
      hook: "Saw your ad in Morning Brew. We have better CPA.",
      outreach_window: "Immediate",
      why_it_works: "They have budget and like niche channels."
    },
    payload: { type: "ECOM_SPEND", ad_spend: "Sponsorship", pixel_status: "OK", platform: "Newsletter" },
    wizard_config: {
      filters: [
        { id: "niche", label: "Niche", options: ["Tech", "Finance"] }
      ]
    }
  },
  {
    id: "046",
    slug: "course-buyer",
    pack: "Competitor & Intent",
    title: "The Course Buyer",
    pain_point: "Employees posting certificates for 'HubSpot Academy'",
    signal_strength: "High",
    verification_method: ["LinkedIn Certs"],
    tags: ["HR", "Education", "Certification", "Technographic", "Adoption"],
    hero_headline: "Companies where employees just got Certified in [Tool].",
    execution_brief: {
      hook: "Congrats on the cert. Doubling down on HubSpot?",
      outreach_window: "First 30 Days",
      why_it_works: "Signaling internal adoption and upskilling."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "CERTIFICATION", value: "HubSpot Admin", context: "LinkedIn" },
    wizard_config: {
      filters: [
        { id: "cert", label: "Which Cert?", options: ["HubSpot", "Salesforce", "AWS"] }
      ]
    }
  },
  {
    id: "047",
    slug: "community-builder",
    pack: "Competitor & Intent",
    title: "The Community Builder",
    pain_point: "SaaS companies launching a Slack/Circle community",
    signal_strength: "High",
    verification_method: ["Jobs", "Site Scan"],
    tags: ["Marketing", "Community", "PLG", "Hiring", "Customer Success"],
    hero_headline: "Companies hiring Community Managers — launching Slack/Circle.",
    execution_brief: {
      hook: "Spinning up a community? We help with engagement.",
      outreach_window: "Immediate",
      why_it_works: "PLG strategy requires community management."
    },
    payload: { type: "ROLE_CHANGE", role: "Head of Community", status: "NEW_HIRE", days_ago: 5 },
    wizard_config: {
      filters: [
        { id: "plat", label: "Platform", options: ["Circle", "Slack", "Discord"] }
      ]
    }
  },
  {
    id: "048",
    slug: "not-hiring-but-growing",
    pack: "Competitor & Intent",
    title: "The 'Not Hiring' but Growing",
    pain_point: "Revenue growing + Team size stable (Burnout risk)",
    signal_strength: "Medium",
    verification_method: ["Semrush", "LinkedIn"],
    tags: ["Operations", "Efficiency", "Growth", "Automation", "SaaS"],
    hero_headline: "Companies with Growing Traffic but Flat Headcount.",
    execution_brief: {
      hook: "Doing more with less? Automate the rest.",
      outreach_window: "Immediate",
      why_it_works: "Efficiency pressure. Perfect for automation pitch."
    },
    payload: { type: "GROWTH_EVENT", event_name: "Efficient Growth", amount: "Traffic +30%" },
    wizard_config: {
      filters: [
        { id: "ind", label: "Industry", options: ["SaaS", "Agency"] }
      ]
    }
  },
  {
    id: "049",
    slug: "franchise-expander",
    pack: "Competitor & Intent",
    title: "The Franchise Expander",
    pain_point: "Brick & Mortar opening >3 new locations in 6 months",
    signal_strength: "High",
    verification_method: ["Google Maps"],
    tags: ["Operations", "Retail", "Expansion", "Local", "Real Estate"],
    hero_headline: "Franchise/Retail Chains opening >3 New Locations recently.",
    execution_brief: {
      hook: "Opening in Dallas? We handle local SEO/Signage.",
      outreach_window: "Immediate",
      why_it_works: "New locations need CapEx immediately."
    },
    payload: { type: "INTENT_SIGNAL", signal_key: "LOCATIONS", value: "+3 New", context: "Google Maps" },
    wizard_config: {
      filters: [
        { id: "vert", label: "Vertical", options: ["Food", "Retail", "Gym"] }
      ]
    }
  },
  {
    id: "050",
    slug: "help-wanted-dev",
    pack: "Competitor & Intent",
    title: "The 'Help Wanted' Dev",
    pain_point: "Non-tech companies hiring their first Developer",
    signal_strength: "High",
    verification_method: ["Jobs Industry Mismatch"],
    tags: ["Engineering", "SMB", "Hiring", "Outsourcing", "Agency"],
    hero_headline: "Non-Tech Companies (Retail, Construction) hiring First Developer.",
    execution_brief: {
      hook: "Don't build in-house. It's a trap. Outsourcing is safer.",
      outreach_window: "Immediate",
      why_it_works: "They don't know how to manage devs."
    },
    payload: { type: "TECH_GAP", tool_missing: "Engineering Team", risk_level: "HIGH", traffic_vol: "First Hire" },
    wizard_config: {
      filters: [
        { id: "ind", label: "Target Industry", options: ["Construction", "Retail"] }
      ]
    }
  }
];
