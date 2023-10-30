import { createClient } from "@supabase/supabase-js";


export const supabase = createClient
(
 "https://avhqsutntlcolmkxxlku.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2aHFzdXRudGxjb2xta3h4bGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5Nzk0NzcsImV4cCI6MjAxMzU1NTQ3N30.uWTQHXhE-M6AVGVThraOl0Hf2SylGYU0K1vi12NpIAI"
)