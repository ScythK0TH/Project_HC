<script>
    let username = "";
    let password = "";

    // async function register() {
    //     const response = await fetch('/api/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ username, password })
    //     });
    //     const data = await response.json();
    //     console.log(data);
    // }
</script>

<form>
    <input type="text" bind:value="{username}" placeholder="Username" required><br>
    <input type="password" bind:value="{password}" placeholder="Password" required><br>
    <button type="submit" style="color: white;">Register</button>
</form>