"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BriefcaseBusiness, FileText, Inbox, MessageSquareQuote, Pencil, Plus, Search, Trash2, Users, X } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import type { Testimonial } from "@/data/testimonials";
import type { CareerRecord, ContactRecord } from "@/lib/admin-store";

type Tab = "overview" | "contacts" | "careers" | "blogs" | "testimonials";
type AdminData = { blogs: BlogPost[]; testimonials: Testimonial[]; contacts: ContactRecord[]; careers: CareerRecord[] };

const emptyBlog: BlogPost = {
  slug: "", title: "", summary: "", content: "<p>Write the article body here.</p>", category: "Engineering", date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }), readTime: "5 min read", imageUrl: "/images/portfolio-architecture-v2.png", featured: false,
  author: { name: "KK Next Editorial", role: "KK Next Tech Solution", avatar: "/logo.png" },
};

const emptyTestimonial: Testimonial = { id: "", quote: "", role: "", rating: 5 };

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [data, setData] = useState<AdminData>({ blogs: [], testimonials: [], contacts: [], careers: [] });
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [blogEditor, setBlogEditor] = useState<BlogPost | null>(null);
  const [testimonialEditor, setTestimonialEditor] = useState<Testimonial | null>(null);
  const router = useRouter();

  const refresh = async () => {
    setLoading(true);
    const response = await fetch("/api/admin", { cache: "no-store" });
    if (response.status === 401) { router.replace("/admin/login"); return; }
    setData(await response.json());
    setLoading(false);
  };

  useEffect(() => {
    let active = true;
    fetch("/api/admin", { cache: "no-store" })
      .then((response) => response.json())
      .then((nextData: AdminData) => {
        if (active) {
          setData(nextData);
          setLoading(false);
        }
      });
    return () => { active = false; };
  }, []);

  const post = async (resource: string, action: string, item: unknown) => {
    const response = await fetch("/api/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ resource, action, data: item }) });
    if (response.status === 401) { router.replace("/admin/login"); return; }
    await refresh();
  };

  const logout = async () => { await fetch("/api/admin/auth", { method: "DELETE" }); router.replace("/admin/login"); };

  const filteredContacts = useMemo(() => data.contacts.filter((item) => `${item.name} ${item.orgName} ${item.email}`.toLowerCase().includes(query.toLowerCase())), [data.contacts, query]);
  const filteredCareers = useMemo(() => data.careers.filter((item) => `${item.name} ${item.role} ${item.email}`.toLowerCase().includes(query.toLowerCase())), [data.careers, query]);
  const filteredBlogs = useMemo(() => data.blogs.filter((item) => `${item.title} ${item.category}`.toLowerCase().includes(query.toLowerCase())), [data.blogs, query]);

  const nav = [
    ["overview", "Overview", Inbox], ["contacts", "Contact CRM", Users], ["careers", "Career Inbox", BriefcaseBusiness], ["blogs", "Blog Manager", FileText], ["testimonials", "Testimonials", MessageSquareQuote],
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-5 py-6 md:px-8 lg:flex-row">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:w-64 lg:shrink-0 rounded-3xl border border-purple-100 bg-slate-950 p-5 text-white shadow-xl">
          <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 font-black">KK</div>
            <div><p className="font-display text-lg font-extrabold">KK Admin</p><p className="text-xs text-slate-400">Operations workspace</p></div>
          </div>
          <nav className="flex gap-2 overflow-x-auto lg:flex-col">
            {nav.map(([id, label, Icon]) => <button key={id} onClick={() => { setTab(id); setQuery(""); }} className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold transition ${tab === id ? "bg-purple-600 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}><Icon className="h-4 w-4" />{label}</button>)}
          </nav>
          <div className="mt-8 hidden rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3 text-xs leading-relaxed text-amber-100 lg:block">Local admin mode is active. Add authentication and a hosted database before production launch.</div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div><p className="text-xs font-black uppercase tracking-[0.22em] text-purple-600">Admin workspace</p><h1 className="mt-1 font-display text-3xl font-black tracking-tight">{nav.find(([id]) => id === tab)?.[1]}</h1></div>
            <div className="flex items-center gap-3">{tab !== "overview" && tab !== "testimonials" && <div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search records..." className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-4 text-sm outline-none ring-purple-200 focus:ring-2 sm:w-72" /></div>}<button onClick={logout} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-slate-600 hover:border-red-200 hover:text-red-600">Sign out</button></div>
          </header>

          {loading ? <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500">Loading workspace…</div> : <>
            {tab === "overview" && <Overview data={data} setTab={setTab} />}
            {tab === "contacts" && <RecordsTable title="Contact inquiries" empty="No contact inquiries yet." headers={["Contact", "Services", "Office", "Status", "Received"]} rows={filteredContacts.map((item) => ({ id: item.id, cells: [<div key="contact"><p className="font-bold">{item.name}</p><p className="text-xs text-slate-500">{item.orgName} · {item.email}</p></div>, <span key="services">{item.services.join(", ")}</span>, <span key="office">{item.office}</span>, <StatusSelect key="status" value={item.status} onChange={(status) => post("contacts", "update", { ...item, status })} />, <span key="date">{new Date(item.createdAt).toLocaleDateString()}</span>] }))} />}
            {tab === "careers" && <RecordsTable title="Career applications" empty="No applications yet." headers={["Candidate", "Role", "Portfolio", "Status", "Received"]} rows={filteredCareers.map((item) => ({ id: item.id, cells: [<div key="candidate"><p className="font-bold">{item.name}</p><p className="text-xs text-slate-500">{item.email}</p></div>, <span key="role">{item.role}</span>, item.portfolioUrl ? <a key="portfolio" className="text-purple-600 hover:underline" href={item.portfolioUrl} target="_blank" rel="noreferrer">Open link</a> : <span key="portfolio">—</span>, <StatusSelect key="status" value={item.status} onChange={(status) => post("careers", "update", { ...item, status })} />, <span key="date">{new Date(item.createdAt).toLocaleDateString()}</span>] }))} />}
            {tab === "blogs" && <BlogManager posts={filteredBlogs} onNew={() => setBlogEditor({ ...emptyBlog, slug: `new-post-${Date.now()}` })} onEdit={setBlogEditor} onDelete={(item) => post("blogs", "delete", item)} />}
            {tab === "testimonials" && <TestimonialManager items={data.testimonials} onNew={() => setTestimonialEditor({ ...emptyTestimonial, id: `testimonial-${Date.now()}` })} onEdit={setTestimonialEditor} onDelete={(item) => post("testimonials", "delete", item)} />}
          </>}
        </main>
      </div>
      {blogEditor && <BlogEditor value={blogEditor} onClose={() => setBlogEditor(null)} onSave={async (item) => { await post("blogs", "update", item); setBlogEditor(null); }} />}
      {testimonialEditor && <TestimonialEditor value={testimonialEditor} onClose={() => setTestimonialEditor(null)} onSave={async (item) => { await post("testimonials", "update", item); setTestimonialEditor(null); }} />}
    </div>
  );
}

function Overview({ data, setTab }: { data: AdminData; setTab: (tab: Tab) => void }) {
  const cards = [["New inquiries", data.contacts.filter((item) => item.status === "new").length, "contacts"], ["Applications", data.careers.filter((item) => item.status === "new").length, "careers"], ["Published posts", data.blogs.length, "blogs"], ["Testimonials", data.testimonials.length, "testimonials"]] as const;
  return <div className="space-y-6"><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map(([label, value, id]) => <button key={label} onClick={() => setTab(id)} className="rounded-3xl border border-purple-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><p className="text-sm font-bold text-slate-500">{label}</p><p className="mt-3 font-display text-4xl font-black text-purple-700">{value}</p><p className="mt-3 text-xs font-bold text-purple-600">Open section →</p></button>)}</div><div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 p-8 text-white"><p className="text-xs font-black uppercase tracking-[0.2em] text-purple-300">Next step</p><h2 className="mt-2 max-w-xl font-display text-3xl font-black">Your customer and candidate activity now has one home.</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">Use Contact CRM to qualify inquiries, Career Inbox to manage applicants, Blog Manager to maintain insights, and Testimonials to keep social proof current.</p></div></div>;
}

function StatusSelect({ value, onChange }: { value: string; onChange: (value: string) => void }) { return <select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs font-bold text-slate-700 outline-none"><option>new</option><option>contacted</option><option>qualified</option><option>closed</option><option>reviewing</option><option>interview</option><option>rejected</option><option>hired</option></select>; }

function RecordsTable({ title, empty, headers, rows }: { title: string; empty: string; headers: string[]; rows: { id: string; cells: React.ReactNode[] }[] }) { return <section className="rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-100 p-5"><h2 className="font-display text-xl font-black">{title}</h2><p className="mt-1 text-sm text-slate-500">{rows.length} record{rows.length === 1 ? "" : "s"}</p></div>{rows.length === 0 ? <p className="p-10 text-center text-sm text-slate-500">{empty}</p> : <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr>{headers.map((header) => <th key={header} className="px-5 py-3">{header}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{rows.map((row) => <tr key={row.id} className="hover:bg-purple-50/30">{row.cells.map((cell, index) => <td key={index} className="px-5 py-4 align-middle">{cell}</td>)}</tr>)}</tbody></table></div>}</section>; }

function BlogManager({ posts, onNew, onEdit, onDelete }: { posts: BlogPost[]; onNew: () => void; onEdit: (post: BlogPost) => void; onDelete: (post: BlogPost) => void }) { return <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-5 flex items-center justify-between"><div><h2 className="font-display text-xl font-black">Blog posts</h2><p className="mt-1 text-sm text-slate-500">Create, update, feature, or remove articles.</p></div><button onClick={onNew} className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-purple-700"><Plus className="h-4 w-4" /> New post</button></div><div className="grid gap-4 md:grid-cols-2">{posts.map((post) => <article key={post.slug} className="flex gap-4 rounded-2xl border border-slate-200 p-4"><Image src={post.imageUrl} alt="" width={96} height={80} className="h-20 w-24 rounded-xl object-cover" /><div className="min-w-0 flex-1"><p className="text-xs font-bold text-purple-600">{post.category} · {post.readTime}</p><h3 className="mt-1 line-clamp-2 font-bold">{post.title}</h3><p className="mt-2 text-xs text-slate-500">{post.featured ? "Featured" : "Standard post"}</p></div><div className="flex shrink-0 flex-col gap-2"><button aria-label={`Edit ${post.title}`} onClick={() => onEdit(post)} className="rounded-lg p-2 text-slate-500 hover:bg-purple-50 hover:text-purple-600"><Pencil className="h-4 w-4" /></button><button aria-label={`Delete ${post.title}`} onClick={() => onDelete(post)} className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div></article>)}</div></section>; }

function TestimonialManager({ items, onNew, onEdit, onDelete }: { items: Testimonial[]; onNew: () => void; onEdit: (item: Testimonial) => void; onDelete: (item: Testimonial) => void }) { return <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-5 flex items-center justify-between"><div><h2 className="font-display text-xl font-black">Testimonials</h2><p className="mt-1 text-sm text-slate-500">Keep your client proof accurate and current.</p></div><button onClick={onNew} className="flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-purple-700"><Plus className="h-4 w-4" /> Add testimonial</button></div><div className="grid gap-4 md:grid-cols-2">{items.map((item) => <article key={item.id} className="rounded-2xl border border-slate-200 p-5"><div className="flex items-start justify-between gap-4"><p className="text-amber-500">{"★".repeat(item.rating)}</p><div className="flex gap-1"><button aria-label="Edit testimonial" onClick={() => onEdit(item)} className="rounded-lg p-2 text-slate-500 hover:bg-purple-50 hover:text-purple-600"><Pencil className="h-4 w-4" /></button><button aria-label="Delete testimonial" onClick={() => onDelete(item)} className="rounded-lg p-2 text-slate-500 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div></div><p className="mt-3 text-sm italic leading-relaxed text-slate-700">“{item.quote}”</p><p className="mt-4 text-xs font-black uppercase tracking-wider text-purple-600">{item.role}</p></article>)}</div></section>; }

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) { return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"><div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"><div className="mb-5 flex items-center justify-between"><h2 className="font-display text-2xl font-black">{title}</h2><button onClick={onClose} aria-label="Close editor" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><X className="h-5 w-5" /></button></div>{children}</div></div>; }

function BlogEditor({ value, onClose, onSave }: { value: BlogPost; onClose: () => void; onSave: (value: BlogPost) => void }) { const [form, setForm] = useState(value); const set = (key: keyof BlogPost, val: unknown) => setForm((current) => ({ ...current, [key]: val })); return <Modal title={value.title ? "Edit blog post" : "New blog post"} onClose={onClose}><form onSubmit={(e) => { e.preventDefault(); onSave(form); }} className="grid gap-4"><Field label="Title" value={form.title} onChange={(v) => set("title", v)} required /><Field label="Slug" value={form.slug} onChange={(v) => set("slug", v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""))} required /><div className="grid gap-4 sm:grid-cols-2"><Field label="Category" value={form.category} onChange={(v) => set("category", v)} /><Field label="Read time" value={form.readTime} onChange={(v) => set("readTime", v)} /></div><Field label="Summary" value={form.summary} onChange={(v) => set("summary", v)} required /><Field label="Cover image path" value={form.imageUrl} onChange={(v) => set("imageUrl", v)} /><label className="grid gap-1 text-sm font-bold text-slate-700">Article HTML<textarea value={form.content} onChange={(e) => set("content", e.target.value)} rows={8} className="rounded-xl border border-slate-200 p-3 font-mono text-xs outline-none focus:ring-2 focus:ring-purple-200" /></label><label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" checked={form.featured} onChange={(e) => set("featured", e.target.checked)} /> Featured post</label><div className="flex justify-end gap-3 pt-2"><button type="button" onClick={onClose} className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100">Cancel</button><button className="rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-purple-700">Save post</button></div></form></Modal>; }

function TestimonialEditor({ value, onClose, onSave }: { value: Testimonial; onClose: () => void; onSave: (value: Testimonial) => void }) { const [form, setForm] = useState(value); return <Modal title={value.quote ? "Edit testimonial" : "New testimonial"} onClose={onClose}><form onSubmit={(e) => { e.preventDefault(); onSave(form); }} className="grid gap-4"><label className="grid gap-1 text-sm font-bold text-slate-700">Quote<textarea required value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} rows={5} className="rounded-xl border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-purple-200" /></label><Field label="Role" value={form.role} onChange={(role) => setForm({ ...form, role })} /><label className="grid gap-1 text-sm font-bold text-slate-700">Rating<select value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} className="rounded-xl border border-slate-200 p-3"><option value={5}>5 stars</option><option value={4}>4 stars</option><option value={3}>3 stars</option></select></label><div className="flex justify-end gap-3"><button type="button" onClick={onClose} className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100">Cancel</button><button className="rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-purple-700">Save testimonial</button></div></form></Modal>; }

function Field({ label, value, onChange, required = false }: { label: string; value: string; onChange: (value: string) => void; required?: boolean }) { return <label className="grid gap-1 text-sm font-bold text-slate-700">{label}<input required={required} value={value} onChange={(e) => onChange(e.target.value)} className="rounded-xl border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-purple-200" /></label>; }
