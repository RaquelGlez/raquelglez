import {
  Playfair_Display,
  Raleway,
  Lato,
  Exo,
  Rubik_Doodle_Triangles,
} from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const lato = Lato({ subsets: ["latin"], weight: ["100", "300"] });

export const exo = Exo({
  subsets: ["latin"],
  weight: ["400"],
});
export const rubik = Rubik_Doodle_Triangles({
  subsets: ["latin"],
  weight: ["400"],
});
