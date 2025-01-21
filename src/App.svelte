<script>
  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import Modokard from './routes/Modokard.svelte';
  import RecycleCraft from './routes/RecycleCraft.svelte';

  const routes = {
    '/': Home,
    '/modokard': Modokard,
    '/recyclecraft': RecycleCraft
  };

  
</script>


<Router routes={routes} useHash={false} />
