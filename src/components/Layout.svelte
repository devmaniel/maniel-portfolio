<script>
  import Navbar from "./Partials/Navbar.svelte";
  import Hero from "./Hero.svelte";
  import Techstack from "./Techstack.svelte";
  import Projects from "./Projects.svelte";
  import Footer from "./Partials/Footer.svelte";
</script>

<nav class="px-5">
  <Navbar />
</nav>

<div class="hero">
  <Hero />
</div>

<div class="techstack mt-10">
  <Techstack />
</div>

<div class="project mt-12 mb-24">
  <Projects />
</div>

<footer>
  <Footer />
  
</footer>


<style>
</style>
