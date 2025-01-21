<script>
  const currentYear = new Date().getFullYear();

  
</script>

<footer
  class="w-full pt-8 text-focus-in border-gray border-dashed border-t-2 border-l-2 border-r-2 rounded-t-lg pb-8"
>
  <div class="max-w-screen-xl g">
    <h1 class="text-3xl pb-10 text-secondary text-center font-bold">
      Want to reach out? Let's connect and make it happen!
    </h1>
    <!-- Navigation Links -->
    <nav class="flex flex-wrap items-center justify-center gap-6 mb-7">
      <p
        class="border-r pr-6 border-gray last:border-none flex items-center gap-2"
      >
        <img src="/icons/phone.svg" alt="Phone Icon" class="w-5 h-5" />
        (+63) 9075081249
      </p>
      <p
        class="border-r pr-6 border-gray last:border-none flex items-center gap-2"
      >
        <img src="/icons/email.svg" alt="Email Icon" class="w-5 h-5" />
        devmaniel@gmail.com
      </p>
      <p
        class="border-r pr-6 border-gray last:border-none flex items-center gap-2"
      >
        <img src="/icons/github.svg" alt="GitHub Icon" class="w-5 h-5" />
        <a
          href="https://github.com/yourusername"
          class="text-gray-600 hover:text-gray-900"
        >
          devmaniel
        </a>
      </p>
      <a
        href="https://www.linkedin.com/in/melco-maniel/"
        target="_blank" 
        class="border-r pr-6 border-gray last:border-none flex items-center gap-2"
      >
        <img src="/icons/linkedin.svg" alt="LinkedIn Icon" class="w-5 h-5" />
        melco-maniel
      </a>
      <a
        href="/publics/melco-maniel-gulbe.pdf"
        download="melco-maniel-gulbe.pdf"
        class="text-secondary underline"
      >
        Download my resume
      </a>
    </nav>

    <!-- Copyright -->
    <div class="text-center text-gray-500 text-sm">
      © {currentYear} Maniel Melco. All rights reserved.
    </div>
  </div>
</footer>

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
