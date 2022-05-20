import Officer from "../src/components/Atoms/Officer/Officer";

export default {
  title: "Atoms/Officer",
  component: Officer,
};

export const WithoutImage = {
  args: {
    name: "Patrick Matayabas",
    position: "Sysdev Director",
    haveBorder: true,
    // imageSrc: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
  },
};

export const WithImage = {
  args: {
    name: "Patrick Matayabas",
    position: "Sysdev Director",
    imageSrc:
      "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
  },
};
