<script>
	import RecycleCraft from './RecycleCraft.svelte';
</script>

<main
  class="mx-auto max-w-screen-lg border-gray px-5 border-l-2 border-r-2 border-dashed"
>
  <div class="p-6 pt-5 h-full text-black">
    <ul class="flex gap-2 text-sm mb-7 mt-7 font-light">
      <li>
        <a href="/">Home</a>
      </li>
      <li>/</li>
      <li>
        <p class="text-gray">RecycleCraft</p>
      </li>
    </ul>

    <h1 class="text-4xl font-bold">Project: RecycleCraft</h1>
    <p class="pt-2">
      <span
        class="rounded-full bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 text-sm"
        >In Progress</span
      >
    </p>
    <div class="mt-4 flex items-center gap-4 pt-2">
      <!-- Displaying stack icon SVG -->
      <img
        src="/Stack-2--Streamline-Tabler-Filled.svg"
        class=" 
             h-10
            rounded-lg p-2 text-white bg-primary"
        alt="Tech stack icon"
      />
      <div class="flex flex-col">
        <h1 class=" text-lg font-semibold">Tech Stack</h1>
        <h2 class=" text:md font-regular text-gray">
          React, Laravel, TailwindCSS, ShadCDN, mySQL
        </h2>
      </div>
    </div>

    <div class="description mt-10">
      <h3 class="border-b text-2xl font-semibold pb-2">Description</h3>
      <p class="pt-2 font-light leading-6">
        RecycleCraft is a user-friendly web platform inspired by the concept of
        Minecraft’s crafting table, designed to promote sustainable recycling
        practices.
        <br /> <br />
        By entering recyclable materials, users receive AI-driven project suggestions
        or access community-submitted builds. The platform fosters creativity, learning,
        and collaboration, featuring detailed tutorials, gamified progression, and
        a strong focus on sustainability.
      </p>
    </div>

    <div class="pt-5">
      <h1 class="text-xl font-semibold text-semibold mb-4">Project Features</h1>
      <ul class="list-disc pl-6 space-y-3 text-black">
        <li>
          <strong>Material Input System:</strong> Users input recyclable materials
          to get tailored AI-generated or community-sourced project ideas.
        </li>
        <li>
          <strong>AI-Assisted Recommendations:</strong> Provides innovative and practical
          recycling ideas based on materials entered.
        </li>
        <li>
          <strong>Community Builds Gallery:</strong> Explore and contribute to a
          collection of shared recycling projects, complete with material lists and
          step-by-step guides.
        </li>
        <li>
          <strong>Notion-Style Documentation:</strong> Each build includes business-friendly,
          intuitive tutorials presented in a Notion-like format for ease of learning
          and implementation.
        </li>
        <li>
          <strong>Gamification and Skill Levels:</strong> Progress through levels
          (Beginner to Grandmaster) by completing builds, encouraging continued learning
          and skill enhancement.
        </li>
        <li>
          <strong>Build Difficulty Ratings:</strong> Projects are labeled by difficulty
          to help users find tasks matching their expertise.
        </li>
        <li>
          <strong>Building Points System:</strong> Earn points for completed projects,
          which can be redeemed for perks or additional features.
        </li>
        <li>
          <strong>Collaboration and Sharing:</strong> Engage with the community by
          sharing builds, offering feedback, and learning from others’ designs.
        </li>
        <li>
          <strong>Sustainability Focus:</strong> Cultivates awareness and practice
          of recycling and sustainable living through interactive features.
        </li>
      </ul>
    </div>
  </div>

  <div class="project-images flex flex-col gap-5 mt-5">
    <img
      src="/recyclecraft/Crafting UI with Data hover materialss.png"
      alt="RecycleKraft"
      class="h-[400px] rounded-md w-full"
    />
  </div>
</main>

<style>
</style>
