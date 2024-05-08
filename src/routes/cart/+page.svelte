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
            <form id="form-{pid}-{pcolor}" method="post" use:enhance ></form>
                <input form="form-{pid}-{pcolor}" type="hidden" name="pid" value={pid} />
                <input form="form-{pid}-{pcolor}" type="hidden" name="p_name" value={name} />
                <input form="form-{pid}-{pcolor}" type="hidden" name="pcolor" value={pcolor} />
                <button form="form-{pid}-{pcolor}" id="rightcorner" type="submit">X</button>

            <td>
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src={img} />
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
                <p>฿{(price*quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </td>
        </tr>
    {:else}
        <span style="color: red;">* There are no products in the cart. </span>
    {/each}
</table>
<style>
	
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
		z-index: 20;
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
		background-color: rgb(51, 51, 51);
		display: block;
		align-items: center;
	}
	#text {
		width: 30vh;
		font-size: 3vh;
		padding-left: 3vh;
	}
</style>