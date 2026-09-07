import Social_Link_Div from "./Contact Buttons/Social_Link_Div";
import { Highlighter } from "./ui/highlighter";

const Div1 = () => {
  return (
    <div className="rounded-xl  item1 flex justify-center flex-col gap-2 bg-white shadow-xl p-5">
      <div className="flex gap-1 items-center">
        <div className="rounded-full bg-[#007AFF] w-2 h-2 md:w-4 md:h-4 lg:w-4 lg:h-4"></div>
        <div className="rounded-full bg-[#A34FA6] w-2 h-2 md:w-4 md:h-4 lg:w-4 lg:h-4"></div>
        <div className="rounded-full bg-[#2BF27E] w-2 h-2 md:w-4 md:h-4 lg:w-4 lg:h-4"></div>
      </div>

      <p className="h-full pt-5 text-3xl/10 text-black ">
        Hi,{" "}
        <Highlighter action="highlight" color="#A8D3FF" isView>
          <span className="text-[#007AFF] font-bold">I'm Melco Maniel Gulbe</span>
        </Highlighter>
        , a{" "}
        <Highlighter action="underline" color="#A34FA6" strokeWidth={2} isView>
          <span className="font-semibold">software engineer</span>
        </Highlighter>{" "}
        at White Cloak Technologies, Inc.
        <br />
        I'm passionate about creative arts, in-depth research, uncovering how things
        work, and{" "}
        <Highlighter
          action="circle"
          color="#2BF27E"
          strokeWidth={3}
          padding={8}
          iterations={2}
          animationDuration={900}
          multiline={false}
          isView
        >
          <span className="font-semibold">crafting efficient solutions</span>
        </Highlighter>
        .
      </p>

      <Social_Link_Div />
    </div>
  );
};

export default Div1;
