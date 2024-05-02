<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<p>Welcome, {data?.user}!</p>

<style>
	*{
		color: white;
	}
</style>
