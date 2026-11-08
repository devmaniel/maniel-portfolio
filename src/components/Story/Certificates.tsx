import clsx from "clsx";

import { STORY_CERTIFICATES, type CertificateLogo } from "../../data/storyCertificates";
import { cssVars } from "./cssVars";
import { ArrowUpRight, Asterisk } from "./doodles";
import { useReveal } from "./useReveal";

const LOGO_SHAPE_CLASS: Record<CertificateLogo["shape"], string | undefined> = {
  wide: undefined,
  square: "sq",
  photo: "img",
};

function CertificatesTitle() {
  const { ref, isOn } = useReveal<HTMLHeadingElement>();
  return (
    <h2 ref={ref} className={clsx("roads-title certs-title title", isOn && "on")}>
      Also, Yes I read the docs.
      <Asterisk className="after" />
    </h2>
  );
}

export default function Certificates() {
  const { ref, isOn } = useReveal<HTMLUListElement>();
  return (
    <section className="wrap" id="certs">
      <div className="certs">
        <CertificatesTitle />
        <ul ref={ref} className={clsx("clist", isOn && "on")} aria-label="Certificates">
          {STORY_CERTIFICATES.map(({ name, href, logo }, index) => (
            <li key={name} style={cssVars({ "--i": index })}>
              <a className="cpill" href={href} target="_blank" rel="noopener noreferrer">
                <span className={clsx("logo", LOGO_SHAPE_CLASS[logo.shape])} aria-hidden="true">
                  <img src={logo.src} alt="" width={logo.width} height={logo.height} />
                </span>
                <span className="nm">{name}</span>
                <ArrowUpRight className="go" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
