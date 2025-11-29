
export type PackCategory = 
  | "Revenue Rescue" 
  | "Tech & Ops" 
  | "Personnel Shock" 
  | "Growth & Funding" 
  | "Competitor & Intent";

export type SignalPayload = 
  | { 
      type: "ECOM_SPEND"; 
      ad_spend: string;       
      pixel_status: "MISSING" | "MISFIRE" | "OK"; 
      platform: string;       
    }
  | { 
      type: "TECH_GAP"; 
      tool_missing: string;   
      risk_level: "CRITICAL" | "HIGH" | "MEDIUM";
      traffic_vol?: string;   
    }
  | { 
      type: "ROLE_CHANGE"; 
      role: string;           
      status: "VACANT" | "NEW_HIRE" | "DEPARTURE";
      days_ago: number;       
    }
  | { 
      type: "GROWTH_EVENT"; 
      event_name: string;     
      amount?: string;        
      hiring_velocity?: string;
    }
  | { 
      type: "INTENT_SIGNAL"; 
      signal_key: 
        | "REVIEW" 
        | "LOCATION" 
        | "KEYWORD"
        | "SPEED_SCORE"
        | "REVIEW_COUNT"
        | "TRAFFIC_DROP"
        | "LAST_POST"
        | "GMB_STATUS"
        | "CHAT_STATUS"
        | "SOCIAL_POST"
        | "EVENT_RSVP"
        | "CERTIFICATION"
        | "LOCATIONS";
      value: string;          
      context: string;        
    };

export interface ListProduct {
  id: string;
  slug: string;
  pack: PackCategory;
  title: string;
  pain_point: string;         
  signal_strength: "High" | "Medium" | "Low";
  verification_method: string[]; 
  tags: string[]; // New field for granular filtering
  
  payload: SignalPayload;

  hero_headline: string;
  execution_brief: {
    hook: string;             
    outreach_window: string;  
    why_it_works: string;     
  };

  wizard_config: {
    filters: {
      id: string;
      label: string;
      options: string[];
    }[];
  };
}
