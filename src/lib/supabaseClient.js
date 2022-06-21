import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://asxavyhsxwhcondolfht.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzeGF2eWhzeHdoY29uZG9sZmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA4MTkwMjEsImV4cCI6MTk2NjM5NTAyMX0.bkUJjDq8vnJ7RlWX2D-SHtYqBfGGQ4FOps5X1RZT2G8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
