<script>
	import { page } from '$app/stores';
    import logo from '$lib/file/icon/contact.svg';
	import viewport from './useViewportAction.js';
	import { enhance } from "$app/forms";

	export let data2;
	let hiddench = "";
    let scrollY = 0;
    $: pathId = $page.route.id;

</script>
<!-- <hr class="vertical-line" style="height: 1px; border: none; transform: rotate(90deg); background-color: green; z-index: 100" />
<hr class="horizontal-line" style="position: absolute; top: 50%; height: 1px; width: 100%; border-collapse: collapse; border: none; background-color: green; z-index: 100 " /> -->
<header class="sticky top-0">
	
	<div class="absolute left-0 corner">
		<a href="/contact">
            <img src={logo} alt="Organizer"/>
		</a>
	</div>

	<nav>
        <svg class="smx" viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul>
            <li aria-current={$page.url.pathname === '/store/Ferrari' ? 'page' : undefined}>
                <a href="/store/Ferrari" class="text-[2.25vh]" class:active={pathId === "/store/Ferrari" || pathId === "/store/Bugatti" || pathId === "/store/Porsche"}>Shop</a>
            </li>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/" class="text-[2.25vh]" class:active={pathId == "/"}>Home</a>
            </li>
            <li aria-current={$page.url.pathname.startsWith('/cart') ? 'page' : undefined}>
                <a href="/cart" class="text-[2.25vh]" class:active={pathId == "/cart"}>Cart</a>
            </li>
        </ul>
        <svg class="smx" viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
    </nav>

    <div class="absolute right-0">
        <nav class="auth01">
            <svg class="smx" viewBox="0 0 2 3" aria-hidden="true">
                <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
            </svg>
			<!-- {#await data2 then} -->
				{#if !data2?.user}
					<ul>
						<li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
							<a href="/login" class="text-[2.25vh]" class:active={pathId === '/login'}>Login</a>
						</li>
						<li aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
							<a href="/register" class="text-[2.25vh]" class:active={pathId === '/register'}>Register</a>
						</li>
					</ul>
			 
				{:else}
				<ul>
					<li>
						<a href = "/" class="text-[2.25vh]">{data2?.user}</a>
					</li>
				</ul>
				<form action="/logout" method="Post" use:enhance>
					<button name = "logout" class="text-[2.25vh] logout">Logout	</button>
				</form>
				{/if}
			<!-- {/await} -->
        </nav>
    </div>
</header>

<style>
	.logout{
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 3.5rem;
		color: var(--color-text);
		font-family: 'Kode Mono', monospace;
		color: white;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		border-bottom: 3px solid transparent;
		-webkit-transition: ease 0.4s;
		background-color: rgb(0, 0, 0, 0.7)	}

	header {
		display: flex;
		justify-content: center;
		z-index: 999;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(0, 0, 0, 0.7);
	}

	svg.smx {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 3.5rem;
		color: var(--color-text);
        font-family: "Kode Mono", monospace;
        color: white;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
        border-bottom: 3px solid transparent;
        -webkit-transition: ease 0.4s;
	}

    nav a:hover{
        border-bottom: 3px solid red;
    }

    nav a.active{
        border-bottom: 3px solid red;
    }

	nav a:hover {
		color: rgba(146, 146, 146, 0.7);
	}

    nav button {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1.5rem;
		
        font-family: "Kode Mono", monospace;
        color: white;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
        border-bottom: 3px solid transparent;
        -webkit-transition: ease 0.4s;
	}

    nav button:hover{
        border-bottom: 3px solid red;
    }

	nav button:hover {
		color: rgba(146, 146, 146, 0.7);
	}

    nav.auth01{
        display: flex;
		--background: rgba(0, 0, 0, 0.7);
        float: right;
    }
    nav.auth01 ul{
        position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		background: var(--background);
		background-size: contain;
    }
    nav.auth01 li{
        position: relative;
        height: 100%;
    }
    @media (max-width: 1190px){
        nav {
            --background: rgba(0, 0, 0, 1);
        }
        nav.auth01 {
            --background: rgba(0, 0, 0, 1);
        }
    }
    @media (max-width: 1100px){
        nav {
            --background: rgba(0, 0, 0, 0.7);
        }
        nav.auth01 {
            display: none;
        }
    }
    @media (max-width: 720px){
        nav {
            --background: rgba(0, 0, 0, 0.7);
        }
        .corner {
            display: none;
        }
    }
</style>
