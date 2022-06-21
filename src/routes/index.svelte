<script>
	import { user } from '$lib/sessionStore'
	import { supabase } from '$lib/supabaseClient'
	import Auth from '$lib/login/Login.svelte'
	import Profile from './Profile.svelte'

	user.set(supabase.auth.user())

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user)
	})
</script>

<div class="container">
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
</div>
