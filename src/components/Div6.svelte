<script>
  const techStack = [
    // Frontend
    "React",
    "Svelte",
    "Tailwind CSS",
    // Backend
    "Node.js",
    "Express.js",
    "PHP",
    // Database
    "MySQL",
  ];
</script>

<main class="p-5">
  <h1 class="text-white text-xl font-semibold mb-4">Tech stack</h1>
  <div class="flex flex-wrap gap-2">
    {#each techStack as tech}
      <div
        class="border border-white rounded-lg px-3 py-1 text-white text-sm"
      >
        {tech}
      </div>
    {/each}
  </div>
</main>
