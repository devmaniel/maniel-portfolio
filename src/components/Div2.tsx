import picture1 from "../assets/picture1.jpg";
import applePhoto from "../assets/apple_photograph.png";

const Div2 = () => {
  return (
    <div
      className="
        w-full
        aspect-[3/2]
        h-full
        max-w-full
        rounded-xl
        bg-cover
        bg-center
        overflow-hidden
      "
      style={{ backgroundImage: `url(${picture1})` }}
    >
      <div className="flex w-full justify-between items-center p-3">
        <img src={applePhoto} className="h-8 w-8" alt="Apple Gallery" />
      </div>
    </div>
  );
};

export default Div2;
