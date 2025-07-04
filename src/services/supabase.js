import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hvfzghwzbuogijaviwid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2ZnpnaHd6YnVvZ2lqYXZpd2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NDQ3MzcsImV4cCI6MjA2MDEyMDczN30.Ik8GeO1DpHgohP9SH_8btUW9svwA1OXsA1A0teBTVLk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
