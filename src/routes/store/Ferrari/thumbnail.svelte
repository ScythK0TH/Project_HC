<script>
	export let name;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="thumbnail-cont" style="cursor: pointer;" on:click>
	<p class="sample cursor">{name}</p>
</div>

<style>
	/* Six columns side by side */
	.thumbnail-cont {
		width: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		color: black;
		font-weight: 700;
	}
	.thumbnail-cont:hover{
		background-color: red;
		color: white;
	}
	/* Add a transparency effect for thumnbail images */
	.sample {
		opacity: 1;
	}

	.sample:hover {
		opacity: 1;
	}

	.cursor {
		cursor: pointer;
	}
</style>
