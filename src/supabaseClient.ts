import {createClient} from "@supabase/supabase-js";

export const supabaseUrl = 'https://tfzosqloquobjmszssig.supabase.co';
export const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmem9zcWxvcXVvYmptc3pzc2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjc3MzAsImV4cCI6MjA3MjkwMzczMH0.Ptm4I5OgLb0lCYDgIX-5vQtJhwFA3OlEpBLQpXNoKd0';


export const supabase = createClient(supabaseUrl, supabaseAnonKey)
