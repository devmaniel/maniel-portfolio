<script>
  // dependencies
  import "@fontsource-variable/roboto-slab";

  import Div1 from "./components/Div1.svelte";
  import Div2 from "./components/Div2.svelte";
  import Div3 from "./components/Div3.svelte";
  import Div4 from "./components/Div4.svelte";
  import Div5 from "./components/Div5.svelte";
  import Div6 from "./components/Div6.svelte";
  import Div7 from "./components/Div7.svelte";
  import Div8 from "./components/Div8.svelte";
  import Div9 from "./components/Div9.svelte";
  import Div10 from "./components/Div10.svelte";
  import Div11 from "./components/Div11.svelte";


  import "./styles/grid.css";
</script>

<main>
  <div class="parent-container lg:mx-auto max-w-screen-lg mt-5 mb-5 pl-2 pr-2">
    <div class="parent grid grid-cols-3 gap-4">
      <div class="div1 rounded-tl-xl text-white overflow-hidden">
        <Div1 />
      </div>
      <div
        class="div2 bg-[#212224]
        rounded-tr-lg text-white flex pl-5 items-center
        
        "
      >
        <Div2 />
      </div>
      <div class="div3  bg-[#212224] text-white flex  items-center px-9">
        <Div3 />
      </div>
      <div class="div4  bg-[#212224] text-white"><Div4 /></div>
      <div class="div5 bg-[#212224] text-white xs:mt-2 lg:mt-0"><Div5 /></div>
      <div class="div6 bg-[#212224] text-white"><Div6 /></div>
      <div class="div7 bg-[#212224] text-white"><Div9 /></div>
      <div class="div8 bg-[#212224] text-white"><Div8 /></div>
      <div class="div9 bg-[#212224] text-white"><Div7 /></div>
      <div class="div10 text-white "><Div10 /></div>
      <div class="div11 bg-[black] rounded-bl-2xl rounded-br-2xl text-white">
        <Div11 />
      </div>
    </div>
  </div>
</main>
