import Card from './Card'
import '../Style/Card.css'
import '../Style/index.css'
import MRSPC from "../assets/MRSPC.jpg"
import TFL from "../assets/TFL.jpeg"
import ATL from "../assets/ATL.jpg"
import CDS from "../assets/CDS.jpg"
import BGT from "../assets/BGT.jpg"
import CRT from "../assets/CRT.jpeg"
import Header from './Header'

function App() {
  const formattage = (jour, heure) => {
      return `202407${jour}T${String(heure-2).padStart(2, '0')}0000Z`
  }

  // Tableau d'objets contenant les informations des cartes
  const cardsData = [
    {
      img: MRSPC,
      alt: "Image représentative du Musée de l'Air et de l'Espace",
      title: "Musée de l'Air et de l'Espace",
      desc: "Le musée de l'Air et de l'Espace du Bourget est le plus important musée aéronautique de France. Fondé en 1919, il est le plus ancien et l'un des plus grands du monde.",
      descr: "Découverte du musée de l'air et de l'espace",
      loc: "Aéroport de Paris-Le Bourget, 93352 Le Bourget",
      jour: "02",
      DDB: formattage("02", "13"),
      DDF: formattage("02", "14")
    },
    {
      img: TFL,
      alt: "Image représentative la Tour Eiffel",
      title: "Tour Eiffel",
      desc: "La tour Eiffel est une tour de fer puddlé de 330 m de hauteur située à Paris, à l’extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7ᵉ arrondissement. Son adresse officielle est 5, avenue Anatole-France.",
      descr: "Découverte du 2e étage de la Tour Eiffel et balade à Paris",
      loc: "Av. Gustave Eiffel, 75007 Paris",
      //jour: "??",
      //DDB: formattage("03", "10"),
      //DDF: formattage("03", "11")
    },
    {
      img: ATL,
      alt: "Image représentative l'Atelier des Lumières",
      title: "Atelier des Lumières",
      desc: "L’Atelier des Lumières est un centre d’art numérique situé au 38 rue Saint-Maur dans le 11ᵉ arrondissement de Paris. Créé par Culturespaces, il a ouvert ses portes le 13 avril 2018.",
      descr: "Découverte de l'Atelier des Lumières à Paris",
      loc: "38 Rue Saint-Maur, 75011 Paris",
      //jour: "??",
      //DDB: formattage("04", "15"),
      //DDF: formattage("04", "16")
    },
    {
      img: CDS,
      alt: "Image représentative de la Cité des Sciences",
      title: "La Cité des Sciences",
      desc: "La Cité des sciences et de l'industrie est un établissement français spécialisé dans la diffusion de la culture scientifique et technique.",
      descr: "Découverte des expositions et activités présentes à la Cité des Sciences",
      loc: "30 Av. Corentin Cariou, 75019 Paris",
      jour: "10",
      DDB: formattage("10", "11"),
      DDF: formattage("10", "17")
    },
    {
      img: BGT,
      alt: "Image représentative du Parc des Bagatelles",
      title: "Le Parc des Bagatelles",
      desc: "La roseraie de Bagatelle, située dans le parc de Bagatelle au Bois de Boulogne est l'une des roseraies les plus importantes et les plus anciennes de France.",
      descr: "Balade dans le beau Parc des Bagatelles",
      loc: "42 Rte de Sèvres À Neuilly, 75016 Paris",
      //jour: "",
      //DDB: "",
      //DDF: "" 
    },
    {
      img: CRT,
      alt: "Image représentative de la Fondation Cartier",
      title: "La Fondation Cartier",
      desc: "La Fondation Cartier pour l’art contemporain a été créée en 1984 par la Maison Cartier et son président Alain-Dominique Perrin. Institution privée entièrement consacrée à l’art contemporain",
      descr: "Découverte des expositions de la Fondation Cartier pour l'Art Contemporain",
      loc: "261 Bd Raspail, 75014 Paris",
      //jour: "",
      //DDB: "",
      //DDF: "" 
    }

  ];

  return (
    <>
    <Header />
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card 
          key={index}
          img={card.img}
          alt={card.alt}
          title={card.title}
          desc={card.desc}
          descr={card.descr}
          loc={card.loc}
          jour={card.jour}
          DDB={card.DDB}
          DDF={card.DDF}
        />
      ))}
    </div>
    </>
  )
}

export default App
