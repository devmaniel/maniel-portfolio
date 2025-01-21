<script>
  import ProjectModal2 from "./ProjectModal2.svelte";
</script>

<div class="w-full mt-8 flex flex-col sm:flex-row justify-between">
  <div class="info w-full">
    <div
      class="h-[270px] w-full bg-cover bg-center bg-primary rounded-lg mt-5 mb-4 text-center flex items-center justify-center text-white font-bold 
      text-4xl"
      style="background-image: url('/gradients.svg');"
    >
    Work in progress
    </div>
    <p
      class="status p-1.5 text-xs rounded-lg border-gray border-dashed border text-blue-700 w-24 sm:w-24 md:w-24 lg:w-24 text-center"
    >
      In Progress
    </p>

    <p
      class="w-full text-xl leading-relaxed font-book pt-5 pr-5 pb-5 border-b-2 border-gray border-dashed"
    >
      RecycleCraft is a user-friendly web platform inspired by the concept of
      Minecraft’s crafting table, designed to promote sustainable recycling
      practices. By entering recyclable materials, users receive AI-driven
      project suggestions or access community-submitted builds. The platform
      fosters creativity, learning, and collaboration, featuring detailed
      tutorials, gamified progression, and a strong focus on sustainability.
    </p>

    <h1 class="pt-5 text-gray text-sm sm:text-base">
      Tech stack: React, Laravel, TailwindCSS, Shadcdn, MySQL
    </h1>

     <ProjectModal2 />
  </div>
</div>

<style>
</style>
