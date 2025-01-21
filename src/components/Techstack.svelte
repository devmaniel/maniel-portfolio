<script>
</script>

<div class="border-2 px-5 pb-5 border-dashed border-gray pt-10 w-full text-focus-in ">
  <h1
    class="text-gray text-lg font-medium xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg"
  >
    Turning years of learning into creative, efficient web solutions—built from
    the ground up with passion and purpose
  </h1>

  <div
    class="parent h-96 mt-10 w-full grid

              xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
  >
    <!-- React -->
    <div
      class="div1
      xs:border-b-0 xs:border-r-2 xs:rounded-t-lg
      lg:rounded-tr-none
      
      sm:border-r-2
      md:border-r-0
       border-primary border-b-2 border-t-2 border-l-2 border-r-2 rounded-t-lg border-dashed flex items-center justify-center md:padding-0"
    >
      <div class="flex gap-2 items-center lg:p-0">
        <img
          src="/icons/react.svg"
          class="h-10 xl:h-16 lg:h-14 md:h-12 sm:h-10"
          alt="react-icon"
        />
        <p class="font-medium pt-2 text-4xl md:text-4xl sm:text-3xl">React</p>
      </div>
    </div>

    <!-- Svelte -->
    <div
      class="div2
      xss:border-b-0 xss:border-r-2
      xs:border-t-2
      sm:border-b-0 sm:border-t-2
    lg:border-r-0 lg:border-t-2
    border-primary border-l-2 border-r-2 border-t-none border-dashed flex items-center justify-center"
    >
      <div class="flex gap-2 items-center">
        <img
          src="/icons/svelte.svg"
          class="h-10 xl:h-16 lg:h-14 md:h-12 sm:h-10"
          alt="svelte-icon"
        />
        <p class="font-medium pt-2 text-4xl md:text-4xl sm:text-3xl">Svelte</p>
      </div>
    </div>

    <!-- Node.js (Express) -->
    <div
      class="div3 border-primary
      xs:border-l-2 xs:rounded-none
    lg:border-r-2 lg:border-t-2 lg:rounded-tr-lg lg:border-b-0
    md:border-r-0 md:border-t-2 md:border-l-2 md:rounded-none border-r-2 border-b-2 border-t-2 border-l-2 border-dashed flex items-center justify-center"
    >
      <div class="flex gap-2 items-center">
        <img
          src="/icons/express.svg"
          class="h-10 xl:h-16 lg:h-14 md:h-12 sm:h-10 p-2 border border-black rounded-full"
          alt="express-icon"
        />
        <p class="font-medium pt-2 text-4xl md:text-4xl sm:text-3xl">Express</p>
      </div>
    </div>

    <!-- PHP -->
    <div
      class="div4 border-b-2 border-l-2
      xs:border-r-2 xs:rounded-none
    lg:rounded-bl-lg lg:border-r-0
border-r-2 rounded-bl-none
    md:border-t-2
    md:rounded-none lg:border-t-2 md:border-l-2 md:border-r-2 border-primary border-dashed flex items-center justify-center"
    >
      <div class="flex gap-2 items-center">
        <img
          src="/icons/php.svg"
          class="h-10 xl:h-16 lg:h-14 md:h-12 sm:h-10"
          alt="php-icon"
        />
        <p class="font-medium pt-2 text-4xl md:text-4xl sm:text-3xl">PHP</p>
      </div>
    </div>

    <!-- TailwindCSS -->
    <div
      class="div5 border-l-2 border-b-2 border-r-2
    lg:rounded-none lg:border-l-2 lg:border-t-2
    md:border-r-0 md:rounded-bl-lg border-primary border-dashed flex items-center justify-center"
    >
      <div class="flex gap-2 items-center">
        <img
          src="/icons/tailwind.svg"
          class="h-10 xl:h-16 lg:h-14 md:h-12 sm:h-10"
          alt="tailwind-icon"
        />
        <p class="font-medium pt-2 text-4xl md:text-4xl sm:text-3xl">
          TailwindCSS
        </p>
      </div>
    </div>

    <!-- mySQL & noSQL -->
    <div
      class="div6 border-r-2 border-b-2 rounded-br-lg
      xs:border-l-2 xs:rounded-b-lg
      lg:rounded-bl-none lg:border-t-2
      border-primary md:border-l-2 border-dashed flex items-center justify-center
      border-l-2 rounded-bl-lg"
    >
      <div class="flex gap-2 items-center">
        <img
          src="/icons/db.svg"
          class="h-10 xl:h-16 lg:h-14 md:h-12 sm:h-10"
          alt="db-icon"
        />
        <p class="font-medium pt-2 text-4xl md:text-4xl sm:text-3xl">
          SQL/noSQL
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .parent {
    display: grid;
  }

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
