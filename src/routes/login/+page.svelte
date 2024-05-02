<script>
  /** @type {import('./$types').ActionData} */
  export let form;
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { enhance } from "$app/forms";

  let username = '';
  let password = '';

  // async function handleSubmit() {
  //   const response = await fetch('/api/login', {
  //           method: 'POST',
  //           headers: {
  //               'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({ username, password })
  //       });
  //       const data = await response.json();
  //       console.log(data);
  // }
</script>

<main>
  <h1 style="color: white">Login</h1>
  <form method="post" use:enhance>
    <input type="text" name="username" placeholder="Username" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <button type="submit" style="color: white;">Login</button>
    {#if form?.error}<span style="color: red;">* {form?.message}</span>{/if}
  </form>
</main>
