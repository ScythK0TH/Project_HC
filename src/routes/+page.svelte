<script>
    // @ts-nocheck
    /** @type {import('./$types').PageData} */
    export let data;
    import Scroller from "@sveltejs/svelte-scroller";
    import viewport from './useViewportAction.js';
	import bgvid1 from '$lib/file/vid/vid1.mp4';
    import bgvid2 from '$lib/file/vid/vid2.mp4';
    import bgvid3 from '$lib/file/vid/vid3.mp4';
    import bgvid4 from '$lib/file/vid/vid4.mp4';
    import scrollIcon from '$lib/file/icon/scrollsvg.svg'
    
    // @ts-ignore
    let index, offset, progress;
    let bgvid = bgvid1;
    let textdot = "";
    let intemp = 0;
    let textpro = "Loading";
    let hiddench = "";
    let hiddench1 = "";
    let hiddench2 = "";
    let destroyload = "";

    $: if (progress<=0){
        textpro = "Loading";
        textdot = ""
    } else if (index<3){
        textpro = "Loading";
        textdot = " "+Math.floor(progress*100)+"%";
    } else if (index==3){
        textpro = "Completed!";
        textdot = ""
    }

    $: if (progress>1.5){
        destroyload = "hidden";
    }
    /* if (index>intemp && index<=3) {
        intemp = index
        textdot = textdot+".";
    } else if (index<=intemp) {
        intemp = index
        textdot = textdot.slice(1); */

    function ho1(){
        bgvid = bgvid1;
    }

    function ho2(){
        bgvid = bgvid2;
    }

    function ho3(){
        bgvid = bgvid3
    }

    function ho4(){
        bgvid = bgvid4;
    }

    
</script>

<svelte:head>
	<title>Hypecar</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="flex h-[80vh] shrink-0 flex-col items-center justify-center">
	<video use:viewport on:enterViewport={() => hiddench1 = "showcheck1"} on:exitViewport={() => hiddench1 = ""} class="hiddencheck1 {hiddench1} absolute -z-10 h-full w-full object-cover" style="filter: brightness(55%);" muted autoplay loop playsinline disablepictureinpicture src={bgvid}> </video>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div use:viewport on:enterViewport={() => hiddench1 = "showcheck1"} on:exitViewport={() => hiddench1 = ""} class="hiddencheck1 {hiddench1} flex items-end items-center"><h1 class="h-pro">H</h1><h1 class="h-pro" on:mouseover={ho2}>Y</h1><h1 class="h-pro">P</h1><h1 class="h-pro" on:mouseover={ho3}>E</h1><h1 class="h-pro">C</h1><h1 class="h-pro" on:mouseover={ho4}>A</h1><h1 class="h-pro">R</h1></div>
    {#if data?.user}
        <p1 use:viewport on:enterViewport={() => hiddench1 = "showcheck1"} on:exitViewport={() => hiddench1 = ""} class="hiddencheck1 {hiddench1} submenu absolute mt-[25vh]">Welcome Back, {data?.user}!</p1>
    {:else}
        <p1 use:viewport on:enterViewport={() => hiddench1 = "showcheck1"} on:exitViewport={() => hiddench1 = ""} class="hiddencheck1 {hiddench1} submenu absolute mt-[25vh]">By Professional Oscar</p1>
    {/if}
    <!-- svelte-ignore a11y-missing-attribute -->
    <img id="sdic" use:viewport on:enterViewport={() => hiddench2 = "showcheck2"} on:exitViewport={() => hiddench2 = ""} class="hiddencheck2 {hiddench2} absolute mt-[105vh]" src={scrollIcon}/>
</section>

<div style="height: 120vh;">
</div>

<Scroller top="{0.35}" bottom="{0.8}" bind:index bind:offset bind:progress>
    <div
     use:viewport 
     on:enterViewport={() => hiddench = "showcheck"} 
     on:exitViewport={() => hiddench = ""}
     slot="background"
     class="hiddencheck {hiddench} {destroyload}">
        <p class="text-center items-end" style="color: white;">
          {textpro}{textdot}
        </p>
        <!-- <p style="color:white;">Section {index + 1} is currently active.</p> -->
        <div class="flex items-center justify-center">
            <progress value={progress || 0}></progress>
        </div>
    </div>
    
      <div class="{destroyload}" slot="foreground">
        <section style="color: white;"></section>
        <section style="color: white;"></section>
        <section style="color: white;"></section>
        <section style="color: white;"></section>
      </div>
</Scroller>
    <div class="{destroyload} scroll-height">

    </div>

<style>
    #sdic{
        width: 5vh;
        opacity: 0;
        animation: interact 2s infinite ease;
    }
    
    [slot="foreground"] section {
        height: 50vh;
    }
    [slot="background"] {
		/* background-color: rgba(255, 255, 255, 0.05);
		border-top: 2px solid #ffffff;
		border-bottom: 2px solid #ffffff; */
        font-family: "Kode Mono", monospace;
		font-size: 3vh;
		overflow: hidden;
		padding: 1em;
	}
    progress[value] {
        color: white; /* the progress color */
        background: black; /* the background color */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        width: 300px;
        margin: 0 10px;
        border-radius: 10em;
        background: black;
    }
    progress[value]::-webkit-progress-bar {
        border-radius: 10em;
        background: black;
    }
    progress[value]::-webkit-progress-value {
        border-radius: 10em;
        background: white;
    }
    progress[value]::-moz-progress-bar {
        border-radius: 10em;
        background: white;
    }
    .text-templat{
        color: white;
        top: 1000px;
        position: relative;
    }
    .scroll-height{
        height: 500vh;
    }
	p1,h1 {
		color: white;
        text-align: center;
	}
    .submenu{
        font-family: "Kode Mono", monospace;
        letter-spacing: 0.1ch;
    }
    .h-pro{
        font-size: 190px;
        font-family: "Kode Mono", monospace;
        transition: ease 0.125s;
    }
    .h-pro:hover{
        font-family: "Kode Mono", monospace;
        color: transparent;
        -webkit-text-stroke: 2px white;
        text-shadow: none;
        font-size: 225px;
    }
    @media (max-width: 770px){
        .h-pro{
            font-size: 120px;
        }
        .h-pro:hover{
            font-family: "Kode Mono", monospace;
            color: transparent;
            -webkit-text-stroke: 2px white;
            text-shadow: none;
            font-size: 155px;
        }
    }
    @keyframes interact{
        50%{opacity: 1;}
    }
</style>
