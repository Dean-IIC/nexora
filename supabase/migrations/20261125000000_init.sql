-- Nexora 2.0 — registrations and contact messages.
-- RLS is enabled on every table. The public (anon) role may INSERT only;
-- nobody can read rows through the public API. Organisers read data from the
-- Supabase dashboard or with the service role on a trusted server.

create type public.hackathon_track as enum ('edge-iot', 'cyber-security');

create table public.registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  team_name text not null check (char_length(team_name) between 2 and 60),
  leader_name text not null check (char_length(leader_name) between 2 and 80),
  leader_email text not null check (leader_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  leader_phone text not null check (leader_phone ~ '^\+?[0-9 ]{10,15}$'),
  institution text not null check (char_length(institution) between 2 and 120),
  track public.hackathon_track not null,
  team_size smallint not null check (team_size between 2 and 4),
  members text[] not null default '{}' check (cardinality(members) <= 3),
  problem_statement text not null check (char_length(problem_statement) between 3 and 20),
  idea_abstract text not null check (char_length(idea_abstract) between 50 and 1500),
  github_url text check (github_url is null or github_url ~* '^https://'),
  agreed_to_rules boolean not null check (agreed_to_rules)
);

create unique index registrations_leader_email_key on public.registrations (lower(leader_email));
create unique index registrations_team_name_key on public.registrations (lower(team_name));

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 80),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  subject text not null check (char_length(subject) between 3 and 120),
  message text not null check (char_length(message) between 10 and 2000)
);

alter table public.registrations enable row level security;
alter table public.contact_messages enable row level security;

create policy "Anyone can register a team"
  on public.registrations for insert
  to anon, authenticated
  with check (true);

create policy "Anyone can send a contact message"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

-- No SELECT/UPDATE/DELETE policies: rows are write-only for the public API.
revoke select, update, delete on public.registrations from anon, authenticated;
revoke select, update, delete on public.contact_messages from anon, authenticated;
