import { ReactNode } from "react";

// Import page components
import Photography from "@/Page/Photography";
import Artegalery from "@/Page/Photography/Artegalery";
import Food from "@/Page/Photography/Food";
import Jpg from "@/Page/Photography/Jpg";
import Photoshoot from "@/Page/Photography/Photoshoot";
import Stills from "@/Page/Photography/Stills";
import Studio from "@/Page/Photography/Studio";

import Works from "@/Page/Works";
import Ilustration from "@/Page/Works/Ilustration";
import Publicidad from "@/Page/Works/Publicidad";
import Restauraciones from "@/Page/Works/Restauraciones";

import Info from "@/Page/Info";
import AboutMe from "@/Page/Info/About-me";
import AleVazquez from "@/Page/Info/AleVazquez";

import Modeling from "@/Page/Modelings/Modeling";

export interface RouteConfig {
  component: () => ReactNode;
  title: string;
}

export const routesMap: Record<string, Record<string, RouteConfig>> = {
  photography: {
    index: { component: Photography, title: "Fotografía" },
    artegalery: { component: Artegalery, title: "Arte Galería" },
    food: { component: Food, title: "Comida" },
    jpg: { component: Jpg, title: "JPG" },
    photoshoot: { component: Photoshoot, title: "Sesión Fotográfica" },
    stills: { component: Stills, title: "Stills" },
    studio: { component: Studio, title: "Estudio" },
  },
  works: {
    index: { component: Works, title: "Obras" },
    ilustration: { component: Ilustration, title: "Ilustración" },
    publicidad: { component: Publicidad, title: "Publicidad" },
    restauraciones: { component: Restauraciones, title: "Restauraciones" },
  },
  info: {
    index: { component: Info, title: "Información" },
    "about-me": { component: AboutMe, title: "Acerca de Mí" },
    "ale-vazquez": { component: AleVazquez, title: "Ale Vazquez" },
  },
  modeling: {
    index: { component: Modeling, title: "Modelado" },
  },
};
