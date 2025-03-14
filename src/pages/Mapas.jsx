// export default Mapas
import NavbarDestock from "../components/navbar-destock";
import donalberto from "../assets/img/mapas/don alberto.jpg";
import bellavista from "../assets/img/mapas/bellavista-altavista.jpg";
import casimiro from "../assets/img/mapas/casimiro.jpg";
import ceiba from "../assets/img/mapas/ceiba y altagracia.jpg";
import garupal1 from "../assets/img/mapas/g-etp-1.jpg";
import garupal21 from "../assets/img/mapas/g-etp-2.1.jpg";
import garupal2 from "../assets/img/mapas/g-etp-2.jpg";
import garupal3 from "../assets/img/mapas/g-etp-3.jpg";
import garupal4 from "../assets/img/mapas/g-etp-4.jpg";
import mareigua from "../assets/img/mapas/mareigua.jpg";
import villadariana1 from "../assets/img/mapas/villadariana1.jpg";
import villadariana2 from "../assets/img/mapas/villadariana2.jpg";
import villamirian from "../assets/img/mapas/villamirian.jpg";
import villataxy from "../assets/img/mapas/villataxy.jpg";

const images = [
  { src: donalberto, alt: "mapa don alberto", title: "Don Alberto" },
  {
    src: bellavista,
    alt: "mapa bellavista-altavista",
    title: "Bellavista-Altavista",
  },
  { src: casimiro, alt: "mapa casimiro", title: "Casimiro" },
  { src: ceiba, alt: "mapa ceiba y altagracia", title: "Ceiba y Altagracia" },
  { src: garupal1, alt: "mapa garupal1", title: "Garupal etapa 1" },
  { src: garupal21, alt: "mapa garupal2", title: "Garupal etapa 2" },
  { src: garupal2, alt: "mapa garupal2", title: "Garupal etapa 2" },
  { src: garupal3, alt: "mapa garupal3", title: "Garupal etapa 3" },
  { src: garupal4, alt: "mapa garupal4", title: "Garupal etapa 4" },
  { src: mareigua, alt: "mapa mareigua", title: "Mareigua" },
  {
    src: villadariana1,
    alt: "mapa villadariana1",
    title: "Villadariana etapa 1",
  },
  {
    src: villadariana2,
    alt: "mapa villadariana2",
    title: "Villadariana etapa 2",
  },
  { src: villamirian, alt: "mapa villamirian", title: "Villamirian" },
  { src: villataxy, alt: "mapa villataxy", title: "Villataxy" },
];

const renderImages = () => {
  return images.map((image, index) => (
    <div key={index} className="flex flex-col items-center ">
      <img className="imgmap transition-transform duration-300 ease-in-out transform hover:scale-150" src={image.src} alt={image.alt} />
      <h2 className="text-2xl">{image.title}</h2>
    </div>
  ));
};

const Mapas = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <NavbarDestock />
      </div>
      <div className="mx-12">
        <h1 className="text-center text-5xl pb-8 pt-6">Mapas</h1>
        <p className="text-center text-xl pb-16">PARA NUESTROS MENSAJEROS</p>
        <div className="flex justify-evenly gap-10 flex-wrap">
          {renderImages()}
        </div>
      </div> 
    </div>
  );
};

export default Mapas;
