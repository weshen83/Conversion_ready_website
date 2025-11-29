
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ListProduct, PackCategory } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PERSONA_MAP: Record<string, PackCategory[]> = {
  "Marketer / Agency": ["Revenue Rescue", "Competitor & Intent", "Growth & Funding"],
  "Sales Leader": ["Tech & Ops", "Personnel Shock", "Growth & Funding"],
  "Recruiter": ["Personnel Shock", "Growth & Funding"],
  "Founder": ["Growth & Funding", "Competitor & Intent", "Tech & Ops"],
};

// Expanded mapping to ensure all packs are reachable via verticals
const VERTICAL_MAP: Record<string, PackCategory[]> = {
  "E-commerce": ["Revenue Rescue", "Competitor & Intent"],
  "SaaS & Tech": ["Tech & Ops", "Personnel Shock", "Growth & Funding", "Competitor & Intent"],
  "Retail & Local": ["Revenue Rescue", "Competitor & Intent"], // Covers Unclaimed Local, Franchise Expander
  "Professional Services": ["Growth & Funding", "Personnel Shock", "Tech & Ops"] // Covers Legacy ERP, Agency lists
};

export function filterProducts(
  products: ListProduct[],
  persona: string | null,
  vertical: string | null,
  department: string | null,
  source: string | null,
  searchQuery: string = ""
): ListProduct[] {
  let filtered = products;

  // 1. Filter by Persona (Role)
  if (persona && PERSONA_MAP[persona]) {
    const allowedPacks = PERSONA_MAP[persona];
    filtered = filtered.filter((p) => allowedPacks.includes(p.pack));
  }

  // 2. Filter by Vertical (Industry)
  if (vertical && VERTICAL_MAP[vertical]) {
    const allowedPacks = VERTICAL_MAP[vertical];
    filtered = filtered.filter(p => allowedPacks.includes(p.pack));
  }

  // 3. Filter by Department (Tag based)
  if (department) {
    filtered = filtered.filter(p => p.tags.some(tag => tag.toLowerCase() === department.toLowerCase()));
  }

  // 4. Filter by Source (Tag based or Verification Method)
  if (source) {
    filtered = filtered.filter(p => 
        p.tags.some(tag => tag.toLowerCase() === source.toLowerCase()) || 
        p.verification_method.some(vm => vm.toLowerCase().includes(source.toLowerCase()))
    );
  }

  // 5. Filter by Search Query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.pain_point.toLowerCase().includes(q) || 
      p.hero_headline.toLowerCase().includes(q) ||
      p.slug.includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  return filtered;
}
