<script>
  import Layout from "./components/Layout.svelte";
</script>

<main class="mx-auto max-w-screen-lg  ">
  <Layout />
</main>
<div class="gradient bg-primary text-focus-in   h-28 w-full"></div>

<style>
  .gradient {
    background: rgb(6, 64, 252);
    background: -moz-linear-gradient(
      180deg,
      rgba(6, 64, 252, 1) 24%,
      rgba(31, 83, 252, 1) 46%,
      rgba(232, 44, 25, 1) 72%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(6, 64, 252, 1) 24%,
      rgba(31, 83, 252, 1) 46%,
      rgba(232, 44, 25, 1) 72%
    );
    background: linear-gradient(
      180deg,
      rgba(6, 64, 252, 1) 24%,
      rgba(31, 83, 252, 1) 46%,
      rgba(232, 44, 25, 1) 72%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0640fc",endColorstr="#e82c19",GradientType=1);
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
