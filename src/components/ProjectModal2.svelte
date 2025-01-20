<script>
  import "../assets/stack.svg";

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
      <div class="relative bg-black text-black rounded-xl shadow">
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
          <h1 class="text-4xl font-bold">
            RecycleCraft: AI-Assisted Recycling Projects and Community Builds
          </h1>
          <p class="pt-2">
            <span class="rounded-full bg-blue-500 pl-2 pr-2 text-sm"
              >In Progress</span
            >
          </p>
          <div class="mt-4 flex items-center gap-4 pt-2">
            <!-- Displaying stack icon SVG -->
            <img
              src="/Stack-2--Streamline-Tabler-Filled.svg"
              class=" 
                 xs:h-11 xs:w-11
                md:h-11 md:w-11
                lg:h-12 lg:w-12
                rounded-lg p-2 text-white bg-white"
              alt="Tech stack icon"
            />
            <div class="flex flex-col">
              <h1 class=" xs:text-xs sm:text-lg lg:text-lg font-semibold">
                Tech Stack
              </h1>
              <h2
                class=" xs:text-xs sm:text-lg lg:text-md font-regular text-gray-500"
              >
                React, Laravel , TailwindCSS, ShadCDN, mySQL
              </h2>
            </div>
          </div>

          <div class="description mt-5">
            <h3 class="border-b pb-2">Description</h3>
            <p class="pt-2 font-extralight leading-6">
              RecycleCraft is a user-friendly web platform inspired by the
              concept of Minecraft’s crafting table, designed to promote
              sustainable recycling practices.
              <br /> <br />
              By entering recyclable materials, users receive AI-driven project suggestions
              or access community-submitted builds. The platform fosters creativity,
              learning, and collaboration, featuring detailed tutorials, gamified
              progression, and a strong focus on sustainability. It aligns with Sustainable
              Development Goal (SDG) 12: Responsible Consumption and Production.
            </p>

            <div class="p-5">
              <h1 class="text-2xl font-semibold text-white mb-4">
                Project Features
              </h1>
              <ul class="list-disc pl-6 space-y-3 text-white">
                <li>
                  <strong>Material Input System:</strong> Users input recyclable
                  materials to get tailored AI-generated or community-sourced project
                  ideas.
                </li>
                <li>
                  <strong>AI-Assisted Recommendations:</strong> Provides innovative
                  and practical recycling ideas based on materials entered.
                </li>
                <li>
                  <strong>Community Builds Gallery:</strong> Explore and contribute
                  to a collection of shared recycling projects, complete with material
                  lists and step-by-step guides.
                </li>
                <li>
                  <strong>Notion-Style Documentation:</strong> Each build includes
                  business-friendly, intuitive tutorials presented in a Notion-like
                  format for ease of learning and implementation.
                </li>
                <li>
                  <strong>Gamification and Skill Levels:</strong> Progress through
                  levels (Beginner to Grandmaster) by completing builds, encouraging
                  continued learning and skill enhancement.
                </li>
                <li>
                  <strong>Build Difficulty Ratings:</strong> Projects are labeled
                  by difficulty to help users find tasks matching their expertise.
                </li>
                <li>
                  <strong>Building Points System:</strong> Earn points for completed
                  projects, which can be redeemed for perks or additional features.
                </li>
                <li>
                  <strong>Collaboration and Sharing:</strong> Engage with the community
                  by sharing builds, offering feedback, and learning from others’
                  designs.
                </li>
                <li>
                  <strong>Sustainability Focus:</strong> Cultivates awareness and
                  practice of recycling and sustainable living through interactive
                  features.
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
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- Button to open modal -->
<button
  class="border rounded-md border-gray-300 p-5 mb-4 hover:bg-blue-300 transition duration-300 w-full text-left"
  aria-label="Modokard"
  on:click={toggleModal}
>
  <div class="flex justify-between">
    <h1 class="text-lg font-semibold text-white">RecycleCraft</h1>
    <div class="flex items-center">
      <!-- Static status label -->
      <div
        class="bg-blue-600 rounded-lg px-3 py-1 text-white text-sm flex items-center"
      >
        In Progress
      </div>
    </div>
  </div>

  <p class="font-extralight mt-2 text-justify">
    RecycleCraft is a user-friendly web platform inspired by the concept of
    Minecraft’s crafting table, designed to promote sustainable recycling
    practices. By entering recyclable materials, users receive AI-driven project
    suggestions or access community-submitted builds. The platform fosters
    creativity, learning, and collaboration, featuring detailed tutorials,
    gamified progression, and a strong focus on sustainability. It aligns with
    Sustainable Development Goal (SDG) 12: Responsible Consumption and
    Production.
  </p>
</button>
