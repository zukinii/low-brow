<script>
	import Logo from '$lib/logo/Logo.svelte'
	import { user } from '$lib/sessionStore'
	import { signOut } from '$lib/supabaseFuncs'

	const links = [
		{
			name: 'About',
			url: '/about'
		}
	]
</script>

<header class="w-full bg-slate-400 p-2 text-red-500">
	<nav class="container flex flex-wrap gap-2">
		<a href="/"><Logo /></a>
		{#each links as link}
			<a href={link.url}>{link.name}</a>
		{/each}

		{#if $user}
			<button on:click={signOut}>Log out</button>
		{:else}
			<a href="/login">Log in</a>
		{/if}
	</nav>
</header>

<style lang="scss">
	a {
		&:hover {
			@apply text-red-700;
		}
	}

	nav {
		> :last-child {
			@apply mis-auto;
		}
	}
</style>
