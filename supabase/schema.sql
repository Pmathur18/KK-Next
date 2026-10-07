create table if not exists public.admin_content (
  resource text not null check (resource in ('blogs', 'testimonials', 'contacts', 'careers', 'portfolios', 'jobOpenings')),
  item_id text not null,
  payload jsonb not null,
  is_deleted boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  primary key (resource, item_id)
);

create or replace function public.set_admin_content_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists admin_content_updated_at on public.admin_content;
create trigger admin_content_updated_at
before update on public.admin_content
for each row execute function public.set_admin_content_updated_at();

alter table public.admin_content enable row level security;

-- All access is server-side through SUPABASE_SERVICE_ROLE_KEY.
-- No public/browser policy is intentionally created for this admin table.
