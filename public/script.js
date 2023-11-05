const displayCPU = async () => {
  let cpuJSON = await getCPU();
  let cpuContainer = document.getElementById("container");

  if (cpuJSON == "") {
    console.log("JSON not loaded");
    return;
  }

  cpuJSON.forEach((cpus) => {
    let section = document.createElement("section");
    section.classList.add("cpu-style");
    cpuContainer.appendChild(section);

    let h3 = document.createElement("h3");
    h3.classList.add("typography");
    h3.innerText = cpus.name;
    section.appendChild(h3);

    let img = document.createElement("img");
    img.src = "http://localhost:3000/" + cpus.img;
    section.appendChild(img);

    let speed = document.createElement("p");
    speed.classList.add("typography");
    speed.innerText = `Speed: ${cpus.speed} GHz`;
    section.appendChild(speed);

    let cores = document.createElement("p");
    cores.classList.add("typography");
    cores.innerText = `Cores: ${cpus.cores}`;
    section.appendChild(cores);

    let threads = document.createElement("p");
    threads.classList.add("typography");
    threads.innerText = `Threads: ${cpus.threads}`;
    section.appendChild(threads);

    let p = document.createElement("p");
    p.classList.add("typography");
    p.innerText = "Compatible Motherboards:";
    section.appendChild(p);

    let ul = document.createElement("ul");
    section.appendChild(ul);

    cpus.motherboards.forEach((motherboards) => {
      let li = document.createElement("li");
      li.classList.add("typography", "cpu-list");
      li.innerText = motherboards;
      ul.appendChild(li);
    });
  });
};

const getCPU = async () => {
  try {
    return (await fetch("http://localhost:3000/api/cpus")).json();
  } catch (error) {
    console.log("error");
  }
};

window.onload = () => {
  displayCPU();
};
