<script>
  import {
    EnvelopeSolid,
    PhoneSolid,
    LinkedinSolid,
  } from "flowbite-svelte-icons";
</script>

<main class="px-5 pt-5 pb-5">
  <!-- Title Section -->
  <h1 class="text-white text-4xl pt-6 font-bold mb-6 xs:mb-2">
    Want to reach out? <br /> Let's connect and make it happen!
  </h1>

  <ul class="flex gap-2 text-sm pt-2 font-extralight xs:text-xs lg:text-md">
    <li
      class="bg-primary-500
      xs:px-2 xs:py-2 xs:pr-1 xs:pl-1
      sm:px-2 sm:py-2 sm:pr-3 sm:pl-3
      lg:px-2 lg:py-2 lg:pr-5 lg:pl-5 flex items-center gap-2"
    >
      <EnvelopeSolid class="w-5 h-5 text-white" />
      devmaniel@gmail.com
    </li>
    <li
      class="bg-primary-500
      xs:px-2 xs:py-2 xs:pr-1 xs:pl-1
       sm:px-2 sm:py-2 sm:pr-3 sm:pl-3
      lg:px-2 lg:py-2 lg:pr-5 lg:pl-5 flex items-center gap-2"
    >
      <PhoneSolid class="w-5 h-5 text-white" />
      +6307 508 1249
    </li>
    <li class="flex items-center gap-2">
      <LinkedinSolid class="w-5 h-5 text-primary-500" />
      melco-maniel-gulbe
    </li>
  </ul>
</main>

<style>
  /* Add custom styles here if necessary */
</style>
