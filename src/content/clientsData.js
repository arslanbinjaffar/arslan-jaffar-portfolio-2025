const pixelLogo = new URL("../Assets/Projects/pixel tech logo.jpeg", import.meta.url).href;
const beyondLogo = new URL("../Assets/Projects/beyond tech logo.png", import.meta.url).href;
const voxLogo = new URL("../Assets/Projects/voxtasia-web.png", import.meta.url).href;
const amlLogo = new URL("../Assets/Projects/aml-watcher.png", import.meta.url).href;
const freelanceLogo = new URL("../Assets/Projects/freelance logo.jpg", import.meta.url).href;

export const clientGroups = [
  {
    id: "companies",
    clients: [
      { name: "PixelPK Technologies", logo: pixelLogo, url: null },
      { name: "Beyond Technologies", logo: beyondLogo, url: null },
      { name: "VoxtAsia", logo: voxLogo, url: "https://www.voxtasia.com/" },
      { name: "Enlatics (AML Watcher)", logo: amlLogo, url: "https://amlwatcher.com/" },
    ],
  },
  {
    id: "openSource",
    clients: [
      { name: "VoxtAsia GitHub", logo: voxLogo, url: "https://github.com/VoxtAsia" },
    ],
  },
  {
    id: "freelance",
    clients: [
      { name: "Freelance Clients", logo: freelanceLogo, url: null },
    ],
  },
  {
    id: "startups",
    clients: [
      { name: "Gigbase", logo: new URL("../Assets/Projects/gigbase.png", import.meta.url).href, url: "https://gigbase.io/" },
    ],
  },
];
