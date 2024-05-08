<script>
	import { enhance } from '$app/forms';
	/** @type {import('./$types').PageData} */
	export let data;

	$: imagesA = data.resultArray;
	let imageShowIndex = 0;
</script>

<div id="title">
	<h3 style="padding-top: 5vh; color: White; font-size:7vh;">MY CART</h3>
</div>

<table style="position:relative;" class="klang">
	{#each data.resultArray as { name, price, pcolor, quantity, img, pid }}
		<tr style="padding:2vh; position:relative;" id="list">
			<form id="form-{pid}-{pcolor}" method="post" action="?/deletion" use:enhance></form>
			<input form="form-{pid}-{pcolor}" type="hidden" name="pid" value={pid} />
			<input form="form-{pid}-{pcolor}" type="hidden" name="p_name" value={name} />
			<input form="form-{pid}-{pcolor}" type="hidden" name="pcolor" value={pcolor} />
			<button form="form-{pid}-{pcolor}" id="rightcorner" type="submit">X</button>

			<td>
				<!-- svelte-ignore a11y-missing-attribute -->
				<img style="border-radius:1vh;" src={img} />
			</td>
			<td id="text">
				<p>{name}</p>
				<table>
					<tr>
						<td><div class="inline" style="margin-right:1vh;">color :</div></td>
						<td><div class="inline" id={pcolor}></div></td>
					</tr>
				</table>
				<p>{quantity} units</p>
				<p>฿{(price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
			</td>
		</tr>
	{:else}
		<span style="color: red;">* There are no products in the cart. </span>
	{/each}
</table>
	{#if !(data.resultArray == 0)}
		<div class="w-[20vh] m-auto pt-[3vh] pb-[3vh]">
			<form action="?/OnBuy" method="post" use:enhance>
				<button class="button-85 mt-[1vh] w-full h-full">BUY NOW</button>
			</form>
		</div>
	{/if}

<style>
	.button-85 {
		font-family: 'Kode Mono';
		font-size: 2vh;
		font-weight: bolder;
		padding: 0.6em 2em;
		border: none;
		outline: none;
		color: rgb(255, 255, 255);
		background: #111;
		cursor: pointer;
		position: relative;
		z-index: 0;
		border-radius: 10px;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		transition: all 0.5s;
	}

	.button-85:before {
		content: '';
		background: linear-gradient(
			45deg,
			rgb(255,0,0),
			rgb(125,0,0),
			rgb(255,0,0),
			rgb(125,0,0),
			rgb(255,0,0)

		);
		position: absolute;
		top: -2px;
		left: -2px;
		background-size: 400%;
		z-index: -1;
		filter: blur(5px);
		-webkit-filter: blur(5px);
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		animation: glowing-button-85 20s linear infinite;
		transition: opacity 0.3s ease-in-out;
		border-radius: 10px;
	}

	@keyframes glowing-button-85 {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 400% 0;
		}
		100% {
			background-position: 0 0;
		}
	}

	.button-85:after {
		z-index: -1;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #222;
		left: 0;
		top: 0;
		border-radius: 10px;
		transition: all 0.5s;
	}

	.button-85:hover:after {
		background-color: red;
		color: #ff0000;
		transition: all 0.5s;
	}

	#White {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(135deg, White 0%, White 100%);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}
	#Black {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(135deg, Black 0%, Black 100%);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}
	#Red {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(135deg, red 0%, red 100%);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}
	#Green {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(135deg, green 0%, green 100%);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}
	#Blue {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(135deg, blue 0%, blue 100%);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}

	#rightcorner {
		color: white;
		right: 0;
		position: absolute;
		z-index: 9;
		margin-top: -1vh;
		padding-right: 1vh;
	}
	#title {
		font-size: 20vh;
		color: white;
		text-align: center;
		font-family: 'Kode Mono', monospace;
		font-weight: 600;
	}
	.klang {
		margin: auto;
		border-collapse: separate;
		border-spacing: 0 1vh;
		font-family: 'Kode Mono', monospace;
		color: white;
		font-weight: 500;
	}
	img {
		height: 27vh;
		width: 43vh;
	}
	#list {
		margin-top: 3vh;
		background-color: rgba(31, 31, 31, 0.705);
		border: solid rgba(51, 51, 51, 0.568);
		border-radius: 1vh;
		display: block;
		align-items: center;
	}
	#text {
		width: 30vh;
		font-size: 3vh;
		padding-left: 3vh;
	}
</style>
