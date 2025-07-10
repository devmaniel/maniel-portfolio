import cover from "../assets/Starry_Night_Over_the_Rhone.jpg";

const Div3 = () => {
  return (
    <>
      <div className="item glass item3 bg-red-500 p-5 flex h-full flex-col gap-2 ">
        <div
          className="music-bg w-full h-full border-5  bg-cover
        bg-center
        overflow-hidden border-white  bg-amber-200"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>

        <div>
          <p className="font-bold">Starry Night Over the Rhône</p>
          <p className="text-sm italic">Painting by Vincent van Gogh</p>
        </div>

      
      </div>
    </>
  );
};

export default Div3;
