<script>
	import img1 from '$lib/file/images/white.png';
	import img2 from '$lib/file/images/blue.png';
	import img3 from '$lib/file/images/red.png';
	import img4 from '$lib/file/images/yellow.png';
	import img5 from '$lib/file/images/black.png';
</script>
<svelte:head>
	<title>Contact Hypecar</title>
</svelte:head>

<!-- svelte-ignore a11y-missing-content -->
<div class="gridsys">
	<a
		href="contact/credits#section-one"
		class="box box-1"
		style="--img: url({img1});"
		data-text="Purinut Satronkit"
	></a>
	<a
		href="contact/credits#section-two"
		class="box box-2"
		style="--img: url({img2});"
		data-text="Thanaphon Unsap"
	></a>
	<a
		href="contact/credits#section-three"
		class="box box-3"
		style="--img: url({img3});"
		data-text="Sirayuth Chotithammaporn"
	></a>
	<a
		href="contact/credits#section-four"
		class="box box-4"
		style="--img: url({img4});"
		data-text="Pacharadanai Kurakanog"
	></a>
	<a
		href="contact/credits#section-five"
		class="box box-5"
		style="--img: url({img5});"
		data-text="Anantasin Lapvisuthisaroj"
	></a>
</div>

<style>
	@import url(https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap);

	.gridsys {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 1em;
		margin: auto;
		margin-top: 15vh;
		width: 800px;
		height: 500px;
		transition: all 400ms;
	}

	.gridsys:hover .box {
		filter: grayscale(100%) opacity(24%);
	}

	.box {
		position: relative;
		background: var(--img) center center;
		background-size: cover;
		transition: all 400ms;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.gridsys .box:hover {
		filter: grayscale(0%) opacity(100%);
	}

	.gridsys:has(.box-1:hover) {
		grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
	}

	.gridsys:has(.box-2:hover) {
		grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
	}

	.gridsys:has(.box-3:hover) {
		grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
	}

	.gridsys:has(.box-4:hover) {
		grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
	}

	.gridsys:has(.box-5:hover) {
		grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
	}

	.box:nth-child(odd) {
		transform: translateY(-16px);
	}
	.box:nth-child(even) {
		transform: translateY(16px);
	}
	.box::after {
		content: attr(data-text);
		position: absolute;
		bottom: 20px;
		background: #000;
		color: #fff;
		padding: 10px 10px 10px 14px;
		letter-spacing: 4px;
		text-transform: uppercase;
		transform: translateY(60px);
		font-family: 'KODE MONO';
		opacity: 0;
		transition: all 400ms;
	}
	.box:hover::after {
		transform: translateY(0);
		opacity: 1;
		transition-delay: 400ms;
	}
</style>
