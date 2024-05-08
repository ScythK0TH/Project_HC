<script>
	import { page } from '$app/stores';
	import Caption from './caption.svelte';
	import Thumbnail from './thumbnail.svelte';
	import { enhance } from '$app/forms';

	/** @type {import('./$types').PageData} */
	export let data;

	$: pathId = $page.route.id;

	$: imagesA = data.resultArray;

	let imageShowIndex = 0;
	//$: console.log(imageShowIndex);
	//เปลี่ยนชื่อภาพเมื่อกดคลิก

	$: Product = imagesA[imageShowIndex];
	//การตั่งตัวแปรเมื่อมีการเปลี่ยนทุกรอบหรือมันคือตัวเปลี่ยนแปลงเมื่อมี action
	//$: console.log(Product.pid)

	//  เลื่อนภาพ
	const nextSlide = () => {
		if (imageShowIndex == imagesA.length - 1) {
			imageShowIndex = 0;
		} else {
			imageShowIndex += 1;
		}
	};
	const prevSlide = () => {
		if (imageShowIndex == 0) {
			imageShowIndex = imagesA.length - 1;
		} else {
			imageShowIndex -= 1;
		}
	};

	// ภาพข้างล่าง
	const goToSlide = (number) => (imageShowIndex = number);

	let count = 1;
	let IsDisabled = true;

	function resetCount() {
		IsDisabled = false;
		count = 1;
	}

	function handleSubmit() {
		IsDisabled = true;
	}
</script>

<nav style="padding-top:4vh; margin-left: 4.05%;" class="auth01">
	<ul>
		<li aria-current={$page.url.pathname === '/store/Ferrari' ? 'page' : undefined}>
			<a href="/store/Ferrari" class="text-[2.25vh]" class:active={pathId === '/store/Ferrari'}
				>FERRARI</a
			>
		</li>
		<li aria-current={$page.url.pathname === '/store/Bugatti' ? 'page' : undefined}>
			<a href="/store/Bugatti" class="text-[2.25vh]" class:active={pathId === '/store/Bugatti'}
				>BUGATTI</a
			>
		</li>
		<li aria-current={$page.url.pathname === '/store/Porsche' ? 'page' : undefined}>
			<a href="/store/Porsche" class="text-[2.25vh]" class:active={pathId === '/store/Porsche'}
				>PORSCHE</a
			>
		</li>
	</ul>
</nav>

<!-- แสดงภาพ -->
<div class="ss-container">
	{#each imagesA as { imageid, img }}
		<div class="mySlides fade" class:show={imageid === imageShowIndex}>
			<img src={img} />
			<!-- เลื่อนหน้าหลัง -->
		</div>
		<!-- <p class="mySlides numbertext" class:show={imageid === imageShowIndex}>
			NO. {imageid + 1} / {imagesA.length}
		</p> -->
	{/each}
	<form method="post" use:enhance on:submit|preventDefault={handleSubmit}>
		<div class="info">
			<p id="titlep">{imagesA[imageShowIndex].name}</p>
			<p>฿{(imagesA[imageShowIndex].price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
			<p class="describe">{imagesA[imageShowIndex].description}</p>

			<input type="hidden" name="pid" value={Product.id} />

			<div style="padding-top: 2vh; padding-bottom: 2vh;" class="container">
				<div class="line"></div>
				<label class="label" for="alien">
					<input id="alien" type="radio" name="pcolor" value="Red" on:click={resetCount} required />
					<div class="button" id="red">
						<span class="shadow"></span>
						<span class="edge"></span>
						<span class="front text"></span>
					</div>
				</label>
				<label class="label" for="bear">
					<input
						id="bear"
						type="radio"
						name="pcolor"
						value="Green"
						on:click={resetCount}
						required
					/>
					<div class="button" id="green">
						<span class="shadow"></span>
						<span class="edge"></span>
						<span class="front text"></span>
					</div>
				</label>
				<label class="label" for="mickey">
					<input
						id="mickey"
						type="radio"
						name="pcolor"
						value="Blue"
						on:click={resetCount}
						required
					/>
					<div class="button" id="blue">
						<span class="shadow"></span>
						<span class="edge"></span>
						<span class="front text"></span>
					</div>
				</label>
				<label class="label" for="white">
					<input
						id="white"
						type="radio"
						name="pcolor"
						value="White"
						on:click={resetCount}
						required
					/>
					<div class="button" id="White">
						<span class="shadow"></span>
						<span class="edge"></span>
						<span class="front text"></span>
					</div>
				</label>
				<label class="label" for="black">
					<input
						id="black"
						type="radio"
						name="pcolor"
						value="Black"
						on:click={resetCount}
						required
					/>
					<div class="button" id="Black">
						<span class="shadow"></span>
						<span class="edge"></span>
						<span class="front text"></span>
					</div>
				</label>
			</div>
			<button type="submit" style="color: white;" {IsDisabled}>Add to cart</button><br />
			{#if imagesA[imageShowIndex].stock == 0}<p style="color: red">Sorry Out Of Stock</p>{:else}<p>
					{imagesA[imageShowIndex].stock} In Stock
				</p>{/if}
		</div>
	</form>
</div>
<Caption on:prevClick={prevSlide} on:nextClick={nextSlide} />
<div class="thumbnails-row" style="padding-left: 4.05%;">
	{#each imagesA as { imageid, name }}
		<Thumbnail {name} on:click={() => goToSlide(imageid)} />
	{/each}
</div>

<style>
	.mySlides {
		max-width: 1275px;
		margin-right: 2vh;
	}
	.ss-container {
		position: relative;
		display: flex;
		margin-left: 4%;
	}
	[IsDisabled='true'] {
		background-color: #999;
		pointer-events: none;
	}
	[IsDisabled='false'] {
		pointer-events: all;
	}
	input {
		padding: 0.5rem;
		font-size: 1.5rem;
		box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
	}
	p {
		font-size: 1.5rem;
		color: #222;
		margin: 2rem 0 1rem;
		font-family: 'Kode Mono', monospace;
		color: rgb(255, 255, 255);
		font-weight: 700;
	}

	.thumbnails-row {
		width: 100%;
		display: flex;
		align-self: flex-end;
		font-family: 'Kode Mono', monospace;
	}

	/* .numbertext {
		font-family: 'Kode Mono', monospace;
		word-spacing: -3px;
		border-bottom: solid red 1px;
		background-color: rgba(0, 0, 0, 0.61);
		padding: 4px;
		margin-top: 0px;
		margin-left: 127.1vh;
		float: right;
		color: #f2f2f2;
		font-size: 12px;
	} */

	.info {
		text-align: center;
		background: #1f1e1ec7;
		right: 14vh;
		max-width: 50vh;
		height: 717px;
		border: 3px solid #333; /* เปลี่ยนสีเส้นขอบ */
		border-radius: 10px; /* เพิ่มรัศมีของเส้นขอบเพื่อทำมุมโค้ง */
		padding: 2vh; /* เพิ่ม Padding เพื่อระยะห่างที่ดีขึ้น */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 3.5rem;
		font-family: 'Kode Mono', monospace;
		color: white;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		border-bottom: 3px solid transparent;
		-webkit-transition: ease 0.4s;
	}

	nav a:hover::after {
		width: 100%;
	}

	nav a::after {
		content: '';
		position: absolute;
		border-radius: inherit;
		width: 0%;
		height: 3px;
		background: red;
		left: 0;
		bottom: 0;
		z-index: -1;
		transition: all 0.25s ease;
		left: 50%;
		transform: translateX(-50%);
	}

	nav a.active {
		border-bottom: 3px solid red;
	}

	nav a:hover {
		color: rgba(146, 146, 146, 0.7);
	}

	nav.auth01 ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		background: var(--background);
		background-size: contain;
	}
	nav.auth01 li {
		position: relative;
		height: 100%;
	}

	@media (max-width: 1821px) {
		.ss-container {
			position: relative;
			display: flex;
			flex-wrap: wrap;
		}
		.mySlides {
			max-width: 1700px;
			margin-right: 5vh;
		}
		.info {
			margin-right: 5vh;
			max-width: 1700px;
		}
		.info p {
			font-size: 3vh;
		}
		#titlep {
			font-size: 5vh;
		}
	}

	@media (max-width: 1190px) {
		nav {
			--background: rgba(0, 0, 0, 1);
		}
		nav.auth01 {
			--background: rgba(0, 0, 0, 1);
		}
	}
	@media (max-width: 1100px) {
		nav {
			--background: rgba(0, 0, 0, 0.7);
		}
		nav.auth01 {
			display: none;
		}
	}
	@media (max-width: 720px) {
		nav {
			--background: rgba(0, 0, 0, 0.7);
		}
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.label {
		position: relative;
		margin: 0 10px;
		cursor: pointer;
	}
	#red {
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
	#green {
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
	#blue {
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

	.button::before,
	.button::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transition: all 0.3s ease;
	}

	.button::before {
		background-color: rgba(139, 139, 139, 0.25);
		transform: scale(0.9);
		opacity: 0;
	}

	.button::after {
		background-color: rgba(255, 255, 255, 0.388);
		transform: scale(1.1);
		opacity: 0;
	}

	.label input {
		display: none;
	}

	.label input:checked + .button::before {
		transform: scale(1.2);
		opacity: 1;
	}

	.label input:checked + .button::after {
		animation: pulse 1.5s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1.1);
			opacity: 1;
		}

		50% {
			transform: scale(1.5);
			opacity: 0;
		}

		100% {
			transform: scale(1.1);
			opacity: 1;
		}
	}
	button {
		padding: 15px 25px;
		border: unset;
		border-radius: 15px;
		color: #e8e8e8;
		z-index: 1;
		background: #333;
		position: relative;
		font-weight: 1000;
		font-size: 17px;
		-webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
		box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
		transition: all 250ms;
		overflow: hidden;
		font-family: 'Kode Mono', monospace;
		margin-top: 20px;
	}

	button::before {
		content: '';
		position: absolute;
		bottom: 0; /* เปลี่ยนจาก top: 0 เป็น bottom: 0 */
		left: 0;
		height: 0; /* เปลี่ยนจาก height: 100% เป็น height: 0 */
		width: 100%;
		border-radius: 15px;
		background-color: red;
		z-index: -1;
		-webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
		box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
		transition: all 250ms;
	}

	button:hover::before {
		height: 100%;
	}
</style>
