<script>
  const navigateToModokard = () => {
    window.location.href = '/modokard';
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  };
</script>


<button
  class="bg-secondary text-white pl-10 pr-10 pt-2 pb-2 text-sm sm:text-base"
  aria-label="Modokard"
  on:click={navigateToModokard}
>
  More...
</button>
