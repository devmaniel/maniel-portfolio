import type { Certificate } from "../data/certificates";

type CertificateCardProps = {
  certificate: Certificate;
  className?: string;
};

const CertificateCard = ({ certificate, className }: CertificateCardProps) => {
  const { image, name, link, isFull } = certificate;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`item glass block cursor-pointer no-underline text-inherit ${className ?? ""}`}
    >
      <div className="p-5 flex flex-col items-center gap-3">
        <img
          src={image}
          className={`h-30 border border-black rounded-lg w-full ${
            isFull ? "object-cover" : "bg-white p-2 object-contain"
          }`}
          alt={name}
        />

        <div className="w-full flex justify-center py-2">
          <h1 className="text-sm font-bold text-center">{name}</h1>
        </div>
      </div>
    </a>
  );
};

export default CertificateCard;
