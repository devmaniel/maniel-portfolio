<script>
  import ProjectModal from "./ProjectModal.svelte";

  
  import { Button, Modal } from 'flowbite-svelte';
  let defaultModal = false;

</script>

<div class="w-full mt-8">
  <div class="info h-full w-full">
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
      Introducing Modokard: An easy-to-use web app combining flashcards,
      Pomodoro timers, and progress tracking tools to help learners improve
      faster, while encouraging community interaction and goal-setting for
      effective, engaging study sessions of learners.
    </p>

    <h1 class="pt-5 text-gray text-sm sm:text-base mb-5">
      Tech stack: React, Node.js (Express), TailwindCSS, Shadcdn, MySQL
    </h1>

    <ProjectModal />
  </div>
</div>


<style>
</style>
