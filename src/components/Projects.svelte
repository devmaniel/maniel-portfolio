<script>
   import ProjectInfo1 from "./Project_info1.svelte";
   import ProjectInfo2 from "./Project_info2.svelte";

</script>

<div class="px-5 text-focus-in">
   <h1 class="
   
    text-gray font-bold text-3xl
   lg:text-4xl 
  ">Projects</h1>


   <ProjectInfo1 />
   <ProjectInfo2  />
</div>

<style>

   
  .text-focus-in {
    animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  @keyframes text-focus-in {
    0% {
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0);
      opacity: 1;
    }
  }
  
</style>
