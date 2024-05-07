<script>
	import { enhance } from '$app/forms';
	export let form;
	let username = '';
	let password = '';

</script>

<form name="myForm" class="form-center" method="post" use:enhance>
	<p class="login-letter" style="padding-bottom:1vh;">REGISTER</p>
	<hr style="padding-bottom:1vh;" />

	<label for="uname">USERNAME</label>
	<input
		name="username"
		id="username"
		bind:value={username}
		type="text"
		placeholder="Enter Username"
		required
	/><br />
	<label for="psw">CREATE PASSWORD</label>
	<input
		bind:value={password}
		name="password"
		id="password"
		type="password"
		placeholder="Enter Password"
		required
	/><br />
	<label for="c_psw">CONFIRM PASSWORD</label>
	<input
		name="c_password"
		id="c_password"
		type="password"
		placeholder="Please Comfirm Your Password"
		required
	/><br />
	<br />
	<button type="submit" class="regis-button">REGISTER</button><span
		style="color:red; margin-left: 2mm;"
	></span><br>
	{#if form?.error}<span style="color:red">* {form?.message}</span>{/if}
</form>

<style>
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
		color: #000000;
		font-size: 1.25rem;
		height: 100%;
		font-family: 'Kode Mono', monospace;
		font-weight: 700;
	}
	.form-center {
		margin: auto;
		margin-top: 20vh;
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
	.regis-button {
		cursor: pointer;
		border: 0;
		border-radius: 4px;
		font-weight: 600;
		margin: 0 10px;
		width: 200px;
		padding: 5px 0;
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
		transition: 0.4s;
	}
	.regis-button {
		color: rgb(0, 0, 0);
		background-color: rgb(255, 255, 255);
		border: 1px solid rgb(0, 0, 0);
	}
	button:hover {
		color: rgb(255, 255, 255);
		box-shadow: 0 0 20px rgb(255, 0, 0);
		background-color: rgb(255, 0, 0);
		border: 1px solid rgb(255, 255, 255);
	}
</style>
