import { promises as fs } from "node:fs";
import path from "node:path";
import { blogPosts, type BlogPost } from "@/data/blog";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { projects, type Project } from "@/data/portfolio";

export interface ContactRecord {
  id: string;
  createdAt: string;
  status: "new" | "contacted" | "qualified" | "closed";
  name: string;
  orgName: string;
  email: string;
  phone: string;
  socialLink?: string;
  services: string[];
  office: string;
  message: string;
  source: string[];
}

export interface CareerRecord {
  id: string;
  createdAt: string;
  status: "new" | "reviewing" | "interview" | "rejected" | "hired";
  name: string;
  email: string;
  role: string;
  portfolioUrl?: string;
  coverLetter: string;
}

export interface JobOpening {
  id: string;
  title: string;
  dept: string;
  loc: string;
  type: string;
  desc: string;
  reqs: string[];
  active: boolean;
}

interface StoreFile {
  blogs: BlogPost[];
  deletedBlogSlugs: string[];
  testimonials: Testimonial[];
  contacts: ContactRecord[];
  careers: CareerRecord[];
  portfolios: Project[];
  deletedPortfolioSlugs: string[];
  jobOpenings: JobOpening[];
}

const storePath = path.join(process.cwd(), "data", "admin-store.json");

const defaultJobOpenings: JobOpening[] = [
  { id: "p1", title: "Senior React Native Engineer", dept: "Engineering", loc: "Remote (India)", type: "Full-Time", desc: "We are seeking a senior mobile engineer to lead development on high-performance iOS/Android applications.", reqs: ["4+ years of professional React Native engineering.", "Deep familiarity with SQLite and data sync engines.", "Strict TypeScript standards and modular architecture."], active: true },
  { id: "p2", title: "Lead Frontend Developer (Next.js)", dept: "Engineering", loc: "Remote / Noida", type: "Full-Time", desc: "Join our core web engineering team and lead fast, accessible Next.js experiences.", reqs: ["3+ years engineering Next.js applications.", "Strong CSS and Tailwind skills.", "Experience with headless commerce APIs."], active: true },
  { id: "p3", title: "Social Advertising Specialist", dept: "Marketing", loc: "Remote (India)", type: "Full-Time", desc: "Manage high-growth paid social campaigns on Meta, Google, and LinkedIn.", reqs: ["2+ years running Meta or Google campaigns.", "Data-driven mindset focused on CPL and conversion metrics.", "Familiarity with Figma or Canva."], active: true },
];

const emptyStore: StoreFile = {
  blogs: [],
  deletedBlogSlugs: [],
  testimonials: [],
  contacts: [],
  careers: [],
  portfolios: [],
  deletedPortfolioSlugs: [],
  jobOpenings: defaultJobOpenings,
};

async function ensureStore() {
  try {
    const saved = JSON.parse(await fs.readFile(storePath, "utf8")) as Partial<StoreFile>;
    return { ...emptyStore, ...saved, deletedBlogSlugs: saved.deletedBlogSlugs || [], deletedPortfolioSlugs: saved.deletedPortfolioSlugs || [], portfolios: saved.portfolios || [], jobOpenings: saved.jobOpenings ?? defaultJobOpenings };
  } catch {
    await fs.writeFile(storePath, JSON.stringify(emptyStore, null, 2), "utf8");
    return emptyStore;
  }
}

async function saveStore(store: StoreFile) {
  await fs.writeFile(storePath, JSON.stringify(store, null, 2), "utf8");
  return store;
}

export async function getAdminData() {
  const store = await ensureStore();
  return {
    blogs: [...blogPosts.filter((post) => !store.deletedBlogSlugs.includes(post.slug)), ...store.blogs],
    testimonials: store.testimonials.length ? store.testimonials : testimonials,
    contacts: store.contacts,
    careers: store.careers,
    portfolios: [...projects.filter((item) => !store.deletedPortfolioSlugs.includes(item.slug)), ...store.portfolios],
    jobOpenings: store.jobOpenings,
  };
}

export async function getPublicContent() {
  const data = await getAdminData();
  return { blogs: data.blogs, portfolios: data.portfolios, jobOpenings: data.jobOpenings.filter((item) => item.active) };
}

export async function mutateAdminData(
  resource: "blogs" | "testimonials" | "contacts" | "careers" | "portfolios" | "jobOpenings",
  action: "create" | "update" | "delete",
  data: BlogPost | Testimonial | ContactRecord | CareerRecord | Project | JobOpening
) {
  const store = await ensureStore();

  if (resource === "blogs") {
    const post = data as BlogPost;
    if (action === "delete") {
      store.blogs = store.blogs.filter((item) => item.slug !== post.slug);
      if (blogPosts.some((item) => item.slug === post.slug) && !store.deletedBlogSlugs.includes(post.slug)) {
        store.deletedBlogSlugs.push(post.slug);
      }
    } else {
      store.blogs = store.blogs.filter((item) => item.slug !== post.slug).concat(post);
    }
  }

  if (resource === "testimonials") {
    const testimonial = data as Testimonial;
    if (action === "delete") {
      store.testimonials = (store.testimonials.length ? store.testimonials : testimonials).filter((item) => item.id !== testimonial.id);
    } else {
      const current = store.testimonials.length ? store.testimonials : testimonials;
      store.testimonials = current.filter((item) => item.id !== testimonial.id).concat(testimonial);
    }
  }

  if (resource === "contacts") {
    const contact = data as ContactRecord;
    store.contacts = action === "update"
      ? store.contacts.map((item) => item.id === contact.id ? contact : item)
      : store.contacts.concat(contact);
  }

  if (resource === "careers") {
    const career = data as CareerRecord;
    store.careers = action === "update"
      ? store.careers.map((item) => item.id === career.id ? career : item)
      : store.careers.concat(career);
  }

  if (resource === "portfolios") {
    const project = data as Project;
    if (action === "delete") {
      store.portfolios = store.portfolios.filter((item) => item.slug !== project.slug);
      if (projects.some((item) => item.slug === project.slug) && !store.deletedPortfolioSlugs.includes(project.slug)) {
        store.deletedPortfolioSlugs.push(project.slug);
      }
    } else {
      store.portfolios = store.portfolios.filter((item) => item.slug !== project.slug).concat(project);
    }
  }

  if (resource === "jobOpenings") {
    const opening = data as JobOpening;
    store.jobOpenings = action === "delete"
      ? store.jobOpenings.filter((item) => item.id !== opening.id)
      : store.jobOpenings.filter((item) => item.id !== opening.id).concat(opening);
  }

  await saveStore(store);
  return getAdminData();
}
