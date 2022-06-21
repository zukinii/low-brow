import { supabase } from '$lib/supabaseClient'

export const signOut = async () => {
	const { error } = await supabase.auth.signOut()
}
