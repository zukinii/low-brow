<script>
	import constants from '$lib/constants'
</script>

<div class="container">
	<section>
		<h1>About</h1>
		<p>
			This will be an app where you can send letters back- and forth with someone similar to you.
			You enter you interests and you get matched based on those. This way you already have
			something to write about. Inspirations include: <a
				href="https://popcannibal.com/kindwords/"
				target="_blank">Kind words</a
			>,
			<a href="https://en.wikipedia.org/wiki/Violet_Evergarden" target="_blank">Violet Evergarden</a
			>,
			<a href="https://violetfairy.itch.io/every-letter" target="_blank">Every Letter</a>.
		</p>
	</section>

	<section>
		<h2>Links</h2>
		<p>Join the <a href={constants.discordLink} target="_blank">Discord</a></p>
	</section>

	<section>
		<h2>Jobs</h2>
		<div>Currently looking for people to team up with:</div>
		<ul>
			<li>
				<details open>
					<summary>Head of Visual / Art Direction</summary>
					<p>
						You handle everything visual from app design, fonts, colors, spacing to drawing assets.
					</p>
				</details>
			</li>
			<li>
				<details open>
					<summary>Head of Marketing</summary>
					<p>
						You make sure people get to know the app. This includes paid and organic strategies.
					</p>
				</details>
			</li>
		</ul>
	</section>
</div>

<style>
	h1,
	h2 {
		@apply mb-4;
	}

	p {
		@apply max-w-prose;
	}

	section {
		@apply mb-8;
	}
</style>
