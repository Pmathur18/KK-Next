import { promises as fs } from "node:fs";
import path from "node:path";
import { blogPosts, type BlogPost } from "@/data/blog";
import { testimonials, type Testimonial } from "@/data/testimonials";

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

interface StoreFile {
  blogs: BlogPost[];
  deletedBlogSlugs: string[];
  testimonials: Testimonial[];
  contacts: ContactRecord[];
  careers: CareerRecord[];
}

const storePath = path.join(process.cwd(), "data", "admin-store.json");

const emptyStore: StoreFile = {
  blogs: [],
  deletedBlogSlugs: [],
  testimonials: [],
  contacts: [],
  careers: [],
};

async function ensureStore() {
  try {
    return JSON.parse(await fs.readFile(storePath, "utf8")) as StoreFile;
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
  };
}

export async function mutateAdminData(
  resource: "blogs" | "testimonials" | "contacts" | "careers",
  action: "create" | "update" | "delete",
  data: BlogPost | Testimonial | ContactRecord | CareerRecord
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

  await saveStore(store);
  return getAdminData();
}
