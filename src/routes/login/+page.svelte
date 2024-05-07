<!-- Login.svelte -->
<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { enhance } from '$app/forms';
	export let form;

	let username = '';
	let password = '';
	let errorMessage = writable('');
</script>

<p>{$errorMessage}</p>
<form method="post" class="form-center" use:enhance>
	<p style="padding-bottom:1vh;" class="login-letter">LOGIN</p>
	<hr style="padding-bottom:1vh;" />
	<label for="uname">USERNAME</label>
	<input type="text" name="username" placeholder="Enter Username" />

	<label for="password">PASSWORD</label>
	<input type="password" name="password" placeholder="Enter Password" />

	<button class="login-button" type="submit">LOGIN</button><br>
	{#if form?.error}<span style="color: red;">* {form?.message}</span>{/if}
</form>

<style>
	.form-center {
		margin: auto;
		margin-top: 20vh;
	}
	label {
		color: rgb(0, 0, 0);
		font-size: 1rem;
		height: 100%;
		font-family: 'Kode Mono', monospace;
		display: inline;
		max-width: 2rem;
		padding: 10px;
		font-weight: 700;
	}
	.login-letter {
		color: rgb(0, 0, 0);
		font-size: 1.25rem;
		height: 100%;
		font-family: 'Kode Mono', monospace;
		font-weight: 700;
	}
	input {
		padding: 15px;
		border: 1px solid #ccc;
		border-radius: 3px;
		margin-bottom: 10px;
		width: 100%;
		box-sizing: border-box;
		font-family: 'Kode Mono', monospace;
		color: #2c3e50;
		font-size: 13px;
	}
	form {
		justify-content: center;
		width: 440px;
		margin: 50px auto;
		text-align: center;
		position: fixed;
		background: rgb(255, 255, 255);
		border: 0 none;
		border-radius: 8px;
		box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
		padding: 20px 30px;
		box-sizing: border-box;
		margin: 0 10%;
		position: static;
		font-family: 'Kode Mono', monospace;
	}

	.login-button {
		cursor: pointer;
		border: 0;
		border-radius: 4px;
		font-weight: 600;
		margin: 0 10px;
		width: 200px;
		padding: 5px 0;
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
		transition: 0.4s;
		margin-top: 15px;
	}
	.login-button {
		color: rgb(0, 0, 0);
		background-color: rgb(255, 255, 255);
		border: 1px solid rgb(0, 0, 0);
	}
	button:hover {
		color: rgb(255, 255, 255);
		box-shadow: 0 0 15px rgb(255, 0, 0);
		background-color: rgb(255, 0, 0);
		border: 1px solid rgb(255, 255, 255);
	}
</style>
