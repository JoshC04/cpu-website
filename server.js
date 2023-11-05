const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/cpus", (req, res) => {
  const cpus = [];
  cpus[0] = {
    name: "Intel Core i5-13400",
    speed: 4.6,
    cores: 6,
    threads: 16,
    motherboards: ["H610M-HDV", "B660M Pro RS", "PRIME H610M-E D4-CSM"],
    img: "images/IntelCorei5-13400.jpg",
  };
  cpus[1] = {
    name: "AMD Ryzen 7 7800X3D",
    speed: 5,
    cores: 8,
    threads: 16,
    motherboards: [
      "Gigabyte B650 AORUS ELITE AX",
      "ASRock B650M Pro RS WiFi",
      "Asus ROG STRIX B650-A GAMING WIFI",
    ],
    img: "images/AMDRyzen77800X3D.jpg",
  };
  cpus[2] = {
    name: "AMD Ryzen 9 7950X3D",
    speed: 4.2,
    cores: 16,
    threads: 32,
    motherboards: [
      "GIGABYTE X670E AORUS Master",
      "NZXT N7 B650E Gaming Wi-Fi 6",
      "ASUS ROG Crosshair X670E Extreme",
    ],
    img: "images/AMDRyzen97950X3D.jpg",
  };
  cpus[3] = {
    name: "Intel Core i5-13600K",
    speed: 3.5,
    cores: 14,
    threads: 20,
    motherboards: [
      "Gigabyte Z790 AORUS ELITE AX",
      "MSI MAG Z790 TOMAHAWK WIFI",
      "MSI PRO B760-P WIFI DDR4",
    ],
    img: "images/IntelCorei5-13600K.jpg",
  };
  cpus[4] = {
    name: "Intel Core i3-12100F",
    speed: 2.5,
    cores: 4,
    threads: 8,
    motherboards: [
      "Gigabyte Z790 AORUS ELITE AX",
      "MSI MAG Z790 TOMAHAWK WIFI",
      "ASRock B660M Pro RS",
    ],
    img: "images/IntelCorei3-12100F.jpg",
  };

  res.json(cpus);
});

app.listen(3000, () => {
  console.log("listening");
});
