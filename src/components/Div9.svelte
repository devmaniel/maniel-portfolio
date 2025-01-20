<script>
  import { Timeline, TimelineItem } from 'flowbite-svelte';

  // Define the education data
  const education = [
    {
      title: "Global Reciprocal Colleges (GRC)",
      date: "July 2021 – Current",
      description: "Bachelor of Science in Information Technology (BSIT)",
    },
    {
      title: "Our Lady of Lourdes Colleges - Valenzuela",
      date: "2019 – 2021",
      description: "Information and Communication Technology (ICT) Strand"
    },
    {
      title: "Parada National High School",
      date: "2015 – 2019",
      description: ""
    },
    {
      title: "Parada Elementary School",
      date: "2009 – 2015",
      description: ""
    }
  ];
</script>

<div class="h-[350px] overflow-y-scroll">
  <h1 class="text-white text-xl font-semibold mb-4 px-5 pt-5">Education</h1>
  <div class="px-10 mt-5">
    <Timeline>
      {#each education as edu}
        <TimelineItem  date={edu.date}>
          <h3 class="text-white">{edu.title}</h3>  <!-- Make title white -->
          <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">{edu.description}</p>
          {#if edu.isCurrent}
            <span class="text-primary-600">Currently enrolled</span>
          {/if}
        </TimelineItem>
      {/each}
    </Timeline>
  </div>
</div>
