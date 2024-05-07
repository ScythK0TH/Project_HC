<script>
	import Header from './Header.svelte';
	import "../app.css";
	export let data;
	$: data2 = data;
	</script>
	
	<div class="app">
	<Header bind:data2/>
	
	<main>
	<slot />
	</main>
	
	<footer>
	<p1 style="color: white;">Copyright © 2024 CS-Salty Inc. สงวนสิทธิ์ทุกประการ</p1>
	</footer>
	
	</div>
	
	<style>
	.app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	}
	
	main {
	flex: 1;
	display: block;
	flex-direction: column;
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
	}
	
	footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 12px;
	}
	
	@media (min-width: 480px) {
	footer {
	padding: 12px 0;
	}
	}
	</style>