<script>
  import ProjectModal from "../components/ProjectModal.svelte";
  import ProjectModal2 from "./ProjectModal2.svelte";

  // Declare an object array with title, link, description, and status
  const projects = [
    {
      title: "Modokard",
      link: "https://example.com/modokard", // Replace with the actual link
      description:
        "A full-stack flashcard learning system integrating Pomodoro with spaced repetition to enhance learning. Developed with Figma, React, and TailwindCSS, supported by a Node.js, Express, and MySQL backend for user data management.",
      status: "In Progress", // Status of the project
    },
    {
      title: "RecycleCraft",
      link: "https://example.com/recyclecraft", // Replace with the actual link
      description:
        "A sustainable crafting platform using AI-driven material suggestions and community-driven project sharing. Built with React, Express, MySQL, and features gamification for skill progression.",
      status: "In Progress", // Status of the project
    },
  ];

  let isModalOpen = false;

  const toggleModal = (title) => {
    if (title === "Modokard") {
      isModalOpen = !isModalOpen;
    }
  };
</script>

<main class="p-5">
  <h1 class="text-white text-xl font-semibold mb-4">Projects</h1>

  

  <div class="mt-5">
    <!-- Render the list of projects -->
    <ProjectModal />
    <ProjectModal2 />
  </div>

  
</main>

<style>
  /* Custom styles for project list rendering */
  main {
    background-color: #212224;
  }
</style>
