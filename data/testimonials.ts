export interface Testimonial {
  id: string;
  quote: string;
  role: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "KK NEX TECH SOLUTION transformed our outdated e-commerce shop. Load speeds went under a second, and our checkout conversions surged by 3x! They communicate clearly and deliver code on time.",
    role: "Director of Marketing",
    rating: 5
  },
  {
    id: "t2",
    quote: "Building our fitness application with their developers was a fantastic experience. They structured an offline database sync that operates flawlessly. The app design looks modern and premium.",
    role: "Co-Founder",
    rating: 5
  },
  {
    id: "t3",
    quote: "We save countless hours every week. KK NEX TECH integrated our inventory scanners with our accounting databases. No more typing errors. An excellent team for custom business solutions.",
    role: "Chief Operating Officer",
    rating: 5
  },
  {
    id: "t4",
    quote: "Their performance ads management lowered our cost-per-lead by 42%. They focus on real business revenue rather than just vanity likes. Highly recommended for digital growth projects.",
    role: "Growth Manager",
    rating: 5
  }
];
