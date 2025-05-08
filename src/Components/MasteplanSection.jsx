import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import LoteoSVG from "../assets/img/loteo.svg"; // Vista previa
import LoteoJPG from "../assets/img/loteo.jpg"; // Imagen ampliada
import { useEffect } from "react";

const MasteplanSection = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => Fancybox.unbind("[data-fancybox]");
  }, []);

  return (
    <section id="masterplan">
      <article className="contenedor">
        <h2>Masterplan</h2>
        <p>Sitios desde UF 1.000. Haz un recorrido en 360º y elige el tuyo.</p>
        <div className="loteo">
            <a href={LoteoJPG} data-fancybox>
                <img
                src={LoteoSVG}
                alt="Loteo"
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    cursor: "zoom-in",
                }}
                />
            </a>
        </div>
      </article>
    </section>
  );
};

export default MasteplanSection;
