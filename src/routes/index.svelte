<script>
	import SparkelSvg from '/src/assets/images/sparkel.svg'
	import FacebookSvg from '/src/assets/images/facebook.svg'
	import InstaSvg from '/src/assets/images/insta.svg'
	import TuesSvg from '/src/assets/images/tues.svg'

	// for structured-data info check https://developers.google.com/search/docs/advanced/structured-data/event
</script>

<svelte:head>
	<title>LOW BROW EXHIBITION - extasier-kollektiv</title>
	<meta name="description" content="LOW BROW Exhibition - Art as spectacle of everyday life" />
	<meta name="theme-color" content="#F5FC00" />
	<!-- TODO: Add share image -->
	<meta property="og:image" content="http://example.com/logo.jpg" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<script type="application/ld+json">
		{
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "LOW BROW Exhibition",
      "startDate": "2022-07-16T16:00-22:00",
      "endDate": "2022-07-17T16:00-22:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "LOW BROW Exhibition",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sterneckstraße 22",
          "postalCode": "5020",
          "addressRegion": "Salzburg",
          "addressCountry": "Österreich"
        }
      },
      "image": [],
      "description": "Kunst als Spektakel des alltäglichen Lebens",
      "performer": {
        "@type": "PerformingGroup",
        "name": "EXTASIER KOLLEKTIV"
      },
      "organizer": {
        "@type": "Organization",
        "name": "EXTASIER KOLLEKTIV",
        "url": "https://extasier-kollektiv.at/"
      }
    }
	</script>
</svelte:head>

<div class="bg-primary font-copy text-black">
	<picture
		class="container fixed top-1/2 left-1/2 grid max-h-screen w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform place-items-center"
	>
		<source srcset="/src/assets/images/baby@2x.png 2x" />
		<img src="/src/assets/images/baby.png" alt="baby" />
	</picture>
	<div class="container relative z-10 flex min-h-screen flex-col justify-start">
		<header class="pbs-5 mbe-24 lg:pbs-10">
			<div class="header-bar">
				<SparkelSvg />
				<span
					class="text-center text-[min(6vw,1.75rem)] uppercase leading-[calc(30/28)] pbl-[0.125rem] mi-4 lg:text-[3.25rem] lg:leading-[calc(64/52)]"
					>ART AS SPECTACLE OF EVERYDAY LIFE</span
				>
				<SparkelSvg />
			</div>
			<h1 class="font-heading font-bold">
				<div
					class="translate-y-1 -translate-x-[0.125rem] transform text-[53vw] leading-[calc(155/202)] sm:text-[21rem] md:whitespace-nowrap md:text-[14rem] lg:text-[18.75rem] xl:-translate-x-2 xl:text-[24rem] 2xl:text-[29rem]"
				>
					LOW BROW
				</div>
				<div
					class="-translate-x-1 transform text-right text-[14vw] leading-none sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9.625rem]"
				>
					EXHIBITON
				</div>
			</h1>
		</header>
		<main>
			<section class="hidden mbe-52">
				<div>
					<div>16 – 22 H</div>
					<div>STERNECKSTR. 22, 5020</div>
				</div>
				<picture>
					<source srcset="/src/assets/images/logo_extasier_schwarz_600x600px@2x.png 2x" />
					<img
						src="/src/assets/images/logo_extasier_schwarz_600x600px.png"
						alt="Extasier Kollektiv"
					/>
				</picture>
				<SparkelSvg />
				<SparkelSvg />
				<div>
					<div>16.+17.</div>
					<div>JULY '22</div>
				</div>
				<SparkelSvg />
				<SparkelSvg />
			</section>
			<section class="mbe-44">
				<header class="copy-header">
					<h2>WE LIKE IT LOW BRO(W)</h2>
					<p>KUNST ALS SPEKTAKEL DES ALLTÄGLICHEN LEBENS.</p>
				</header>
				<p class="copy">
					<span class="bg-primary"
						>Diese Ausstellung widmen wir der vermeintlich intellektuell anspruchslosen Kunst:
						Low-Brow! Was macht Kunst zur Kunst? Braucht sie die weiße Wand und perfekte
						Inszenierung?</span
					>
				</p>
				<p class="copy">
					<span class="bg-primary"
						>Wir nehmen das in unserer Ausstellung selbst in die Hand und emanzipieren Schönes und
						Kunstvolles des alltäglichen Lebens durch die museale Zurschaustellung. Wir präsentieren
						Techniken und Werke, Materialien und Formate, die in uns die Frage aufrufen, ob sie
						kunstwürdig sind. In der LOW BROW-Ausstellung werden rund 30 Werke aus den Bereichen
						Bildhauerei, Malerei, Architektur, Publikation, Installation, digitale Formate und mehr,
						ausgestellt.</span
					>
				</p>
			</section>
			<section class="mbe-36">
				<header class="copy-header">
					<h2>EXTASIER- KOLLEKTIV</h2>
					<p>WIR STELLEN UNS VOR.</p>
				</header>
				<p class="copy">
					<span class="bg-primary"
						>Wir sind eine plurale Gruppe mit Headquarter in Salzburg, die sich aus den
						verschiedensten Disziplinen und Interessen zusammensetzt. Wir – Künstler*innen,
						Handwerk- we*innen, Arbeiter*innen, Reisende, Entwerfer*innen, Forscher*innen – haben
						uns alliiert und sind zusammen das Kunstkollektiv EXTASIER.</span
					>
				</p>
				<p class="copy">
					<span class="bg-primary"
						>Es geht nicht immer um den Ort, an dem Kunst passiert. Niemand gibt vor, was es ist
						oder wohin es geht: Die Kiste mit der Katze ist unser Schaffensraum! Wir wollen
						niemanden ausschließen, jedes Material verwenden, Fähigkeiten sowie Ideenlosigkeit
						zelebrieren und damit alle Facetten der Kunst neu beschreben – nichts erfüllen. Gerade
						durch die künstlerische Arbeit und Auseinandersetzung, wollen wir soziale und
						gesellschaftliche Thematiken, die uns alle betreffen können, sichtbar machen.</span
					>
				</p>
			</section>
		</main>
		<footer class="flex flex-col gap-6 mbs-auto pbe-5 lg:flex-row lg:pbe-10">
			<div class="flex gap-3 lg:gap-4">
				<a
					href="https://www.instagram.com/extasier.kollektiv/"
					target="_blank"
					class="footer-social"
				>
					<InstaSvg />
				</a>
				<a
					href="https://www.facebook.com/pages/category/Art/Extasier-Kollektiv-107480537508069/"
					target="_blank"
					class="footer-social"
				>
					<FacebookSvg />
				</a>
			</div>
			<div class="footer-logos">
				<picture>
					<source srcset="/src/assets/images/outside_the_box@2x.png 2x" />
					<img src="/src/assets/images/outside_the_box.png" alt="outside the box" />
				</picture>
				<picture>
					<source srcset="/src/assets/images/super@2x.png 2x" />
					<img src="/src/assets/images/super.png" alt="super" />
				</picture>
				<TuesSvg />
			</div>
		</footer>
	</div>
</div>

<style lang="scss">
	:global() {
		::selection {
			@apply bg-black text-primary;
		}
	}

	.header-bar {
		@apply flex items-center justify-center bg-black text-primary pi-4 mbe-4;

		&:global::selection {
			@apply bg-primary text-black;
		}

		:global(svg) {
			@apply h-6 w-6 shrink-0 fill-current lg:h-10 lg:w-10;
		}
	}

	.copy-header {
		@apply font-heading font-bold mbe-8;

		:global(h2) {
			@apply max-w-[242px] text-8xl leading-[calc(77/100)] mbe-2 lg:max-w-7xl lg:text-[15rem] lg:leading-[calc(272/353)] lg:mbe-3 2xl:text-[22rem] 2xl:mbe-6;
		}

		:global(p) {
			@apply text-5xl uppercase tracking-[0.96px] lg:text-7xl lg:leading-[calc(115/123)] lg:tracking-[2.46px] 2xl:text-9xl;
		}
	}

	.copy {
		@apply text-2xl leading-[calc(36/24)] lg:max-w-[754px] [&:not(:last-child)]:mbe-12 lg:[&:not(:last-child)]:mbe-8;
	}

	.footer-social {
		@apply grid h-12 w-12 place-items-center bg-black lg:h-[4.375rem] lg:w-[4.375rem];
	}

	.footer-logos {
		@apply flex flex-wrap gap-4;

		:global(svg) {
			@apply hidden;
		}
	}
</style>
