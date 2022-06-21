<script>
	import '../app.scss';
	import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="mb-auto flex flex-grow flex-col py-4">
		<slot />
	</main>

	<Footer />
</div>
