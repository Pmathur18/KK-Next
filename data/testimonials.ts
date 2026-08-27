export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "KK NEX TECH SOLUTION transformed our outdated e-commerce shop. Load speeds went under a second, and our checkout conversions surged by 3x! They communicate clearly and deliver code on time.",
    name: "Ananya Sen",
    role: "Director of Marketing",
    company: "Aurora Fashion House",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t2",
    quote: "Building our fitness application with their developers was a fantastic experience. They structured an offline database sync that operates flawlessly. The app design looks modern and premium.",
    name: "Dr. Rohan Joshi",
    role: "Co-Founder",
    company: "FitQuest Global",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t3",
    quote: "We save countless hours every week. KK NEX TECH integrated our inventory scanners with our accounting databases. No more typing errors. An excellent team for custom business solutions.",
    name: "Amit Mehra",
    role: "Chief Operating Officer",
    company: "Apex Manufacturing Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t4",
    quote: "Their performance ads management lowered our cost-per-lead by 42%. They focus on real business revenue rather than just vanity likes. Highly recommended for digital growth projects.",
    name: "Neha Nair",
    role: "Growth Manager",
    company: "Nexus Wealth Advisors",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    rating: 5
  }
];
