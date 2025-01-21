<script>


  let isOpen = false;

  const toggleModal = () => {
    isOpen = !isOpen;
  };

  const closeModal = () => {
    isOpen = false;
  };
</script>

{#if isOpen}
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
    role="button"
    aria-label="Close modal"
    tabindex="0"
    on:click={closeModal}
    on:keydown={(e) => e.key === "Enter" && closeModal()}
  ></div>

  <!-- Modal -->
  <div
    class="fixed inset-x-0 top-0 z-50 w-full overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center"
  >
    <div class="relative w-full max-w-4xl max-h-full rounded-2xl p-4">
      <div class="relative bg-black text-white rounded-xl shadow">
        <div class="flex items-center justify-between p-4">
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            on:click={closeModal}
          >
            <svg
              class="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-6 mt-[-30px] text-white">
          <h1 class="text-4xl font-bold">Project: Modokard</h1>
          <p class="pt-2">
            <span class="rounded-full bg-blue-500  pl-4 pr-4 pt-2 pb-2 text-sm"
              >In Progress</span
            >
          </p>
          <div class="mt-4 flex items-center gap-4 pt-2">
            <!-- Displaying stack icon SVG -->
            <img
              src="/Stack-2--Streamline-Tabler-Filled.svg"
              class=" 
               h-10
              rounded-lg p-2 text-white bg-white"
              alt="Tech stack icon"
            />
            <div class="flex flex-col">
              <h1 class=" text-lg font-semibold">
                Tech Stack
              </h1>
              <h2
                class=" text:md font-regular text-gray-500"
              >
                React, Node.js (Express), TailwindCSS, ShadCDN, mySQL
              </h2>
            </div>
          </div>

          <div class="description mt-5">
            <h3 class="border-b pb-2">Description</h3>
            <p class="pt-2 font-light leading-6">
              <span class="font-bold"
                >Introducing Modokard an easy-to-use web application</span
              >
              designed to help learners improve faster. The platform combines
              <span class="font-bold"
                >flashcards for quick, repetitive learning with Pomodoro timers</span
              >
              to help users manage their study time effectively.
              <br />
              <br />
              The <span class="font-bold">interface is engaging</span> and
              <span class="font-bold">encourages community interaction</span>,
              where users can discuss and share ideas about different flashcard
              collections.
              <span class="font-bold"
                >The app also includes helpful tracking features like heatmaps,
                pie charts, and line charts to show users their progress.</span
              > This makes learning more enjoyable and helps users stay motivated
              and on track, whether they're studying alone or with others.
            </p>
          </div>

          <div class="project-images flex flex-col gap-5 mt-5">
            <img
              src="/modokard/84222c70-6f0a-4806-8304-dec904692389-1.png"
              alt="Modokard 1"
              class="h-[300px] rounded-md w-full"
            />
            <img
              src="/modokard/84222c70-6f0a-4806-8304-dec904692389-2.png"
              alt="Modokard 2"
              class="h-[300px] rounded-md w-full"
            />
            <img
              src="/modokard/84222c70-6f0a-4806-8304-dec904692389-3.png"
              alt="Modokard 3"
              class="h-[300px] rounded-md w-full"
            />
            <img
              src="/modokard/84222c70-6f0a-4806-8304-dec904692389-4.png"
              alt="Modokard 4"
              class="h-[300px] rounded-md w-full"
            />
            <img
              src="/modokard/84222c70-6f0a-4806-8304-dec904692389-5.png"
              alt="Modokard 5"
              class="h-[300px] rounded-md w-full"
            />
            <img
              src="/modokard/84222c70-6f0a-4806-8304-dec904692389-6.png"
              alt="Modokard 6"
              class="h-[300px] rounded-md w-full"
            />
            <img
              src="/modokard/84222c70-6f0a-4806-8304-dec904692389-7.png"
              alt="Modokard 7"
              class="h-[300px] rounded-md w-full"
            />
            <img
              src="/modokard/84222c70-6f0a-4806-8304-dec904692389-8.png"
              alt="Modokard 8"
              class="h-[300px] rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Button to open modal -->

<button
  class="mt-5 bg-secondary text-white pl-10 pr-10 pt-2 pb-2 text-sm sm:text-base"
  aria-label="Modokard"
  on:click={toggleModal}
>
  More...
</button>
