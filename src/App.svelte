<script>
  import Home from './routes/Home.svelte';
  import Modokard from './routes/Modokard.svelte';
  import RecycleCraft from './routes/RecycleCraft.svelte';

  let currentComponent = Home; // Default component

  // Function to check the current URL and set the appropriate component
  const updateComponent = () => {
    const path = window.location.pathname;

    if (path === '/modokard') {
      currentComponent = Modokard;
    } 
    else if (path === '/recyclecraft') {
      currentComponent = RecycleCraft;
    }else {
      currentComponent = Home;
    }
  };

  // Call the function once on load
  updateComponent();

  // Listen for URL changes
  window.addEventListener('popstate', updateComponent);
</script>

<!-- Render the current component -->
<svelte:component this={currentComponent} />
