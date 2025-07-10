type DivCertificatesType = {
  certificate_img: string;
  certificate_name: string;
};

const DivCertificates = ({
  certificate_img,
  certificate_name,
}: DivCertificatesType) => {
  return (
    <>
      <div className="p-5   flex flex-col items-center gap-3 ">
        <img
          src={certificate_img}
          className="h-30 border border-black bg-white rounded-lg p-2 w-full"
          alt="Samplebg"
        />


        <div className="h-30 w-full flex justify-center  py-2">
          <h1 className="text-sm font-bold text-center ">{certificate_name}</h1>
        </div>
        
      </div>
    </>
  );
};

export default DivCertificates;
