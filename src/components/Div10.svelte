<script>
  // Component logic goes here
</script>

<div class="h-full w-full flex justify-center">
  <!-- Component HTML goes here -->
  <div class="parent  h-full">
    <div class="div1 bg-[#56B9CC]"></div>
    <div class="div2 bg-blue-500"></div>
    <div class="div3 bg-green-500"></div>
    <div class="div4 bg-yellow-500"></div>
    <div class="div5 bg-purple-500"></div>
    <div class="div6 bg-pink-500"></div>
  </div>
</div>

<style>
  .parent {
    display: grid;
    grid-template-columns: repeat(4, 15px);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 0px;
  }

  .div1 {
    grid-area: 1 / 1 / 7 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 3 / 3;
  }
  .div3 {
    grid-area: 4 / 2 / 7 / 3;
  }
  .div4 {
    grid-area: 5 / 3 / 7 / 4;
  }
  .div5 {
    grid-area: 1 / 3 / 4 / 4;
  }
  .div6 {
    grid-area: 1 / 4 / 7 / 5;
  }

  /* Styles for tablet and mobile (below 1024px) */
  @media (max-width: 1023px) {
    .parent {
      display: grid;
      grid-template-columns: repeat(4, 15px);
      grid-template-rows: repeat(6, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 20px;
      width: 100% !important;
    }

    .div1 {
      grid-area: 1 / 1 / 7 / 10;
      height: 10px;
    }
    .div2 {
      grid-area: 2 / 1 / 10 / 9;
      height: 10px;
    }
    .div3 {
      grid-area: 2 / 10 / 5 / 9;
      margin-top: 0px;
      height: 10px;
    }
    .div4 {
      grid-area: 3 / 1 / 5 / 5;
      margin-top: 0px;
      height: 10px;
    }
    .div5 {
      grid-area: 3 / 10 / 5 / 5;
      margin-top: 0px;
      height: 10px;
    }
    .div6 {
      grid-area: 4 / 1 / 7 / 10;
      height: 10px;
      margin-top: 0px;
    }
  }
</style>
