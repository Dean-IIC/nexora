// Types matching supabase/migrations/20261125000000_init.sql.
// Regenerate after schema changes:
//   npx supabase gen types typescript --project-id <id> --schema public > lib/supabase/database.types.ts

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      registrations: {
        Row: {
          id: string;
          created_at: string;
          team_name: string;
          leader_name: string;
          leader_email: string;
          leader_phone: string;
          institution: string;
          track: Database["public"]["Enums"]["hackathon_track"];
          team_size: number;
          members: string[];
          problem_statement: string;
          idea_abstract: string;
          github_url: string | null;
          agreed_to_rules: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          team_name: string;
          leader_name: string;
          leader_email: string;
          leader_phone: string;
          institution: string;
          track: Database["public"]["Enums"]["hackathon_track"];
          team_size: number;
          members?: string[];
          problem_statement: string;
          idea_abstract: string;
          github_url?: string | null;
          agreed_to_rules: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["registrations"]["Insert"]>;
        Relationships: [];
      };
      contact_messages: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          subject: string;
          message: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          subject: string;
          message: string;
        };
        Update: Partial<Database["public"]["Tables"]["contact_messages"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { hackathon_track: "edge-iot" | "cyber-security" };
    CompositeTypes: { [_ in never]: never };
  };
};

export type RegistrationInsert = Database["public"]["Tables"]["registrations"]["Insert"];
export type ContactMessageInsert = Database["public"]["Tables"]["contact_messages"]["Insert"];
