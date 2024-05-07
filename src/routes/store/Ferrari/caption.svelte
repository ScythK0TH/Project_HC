<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
  </script>
  
<button class="prev" on:click={() => dispatch("prevClick")}
  >&#10094;</button
>
<button class="next" on:click={() => dispatch("nextClick")}
  >&#10095;</button
>
  
  <style>
    button{
      z-index: 20;
    }

    .prev,.next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      padding: 16px;
      margin-top: -50px;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
  
    .next {
      right:0;
    }
  
    .prev:hover,
    .next:hover {
      background-color: rgba(241, 12, 12, 0.8);
    }
  
    button {
      float: right;
    }
    
  </style>
  