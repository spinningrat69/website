let cooldown = false;


async function getSigmaCounter() {
  const response = await fetch("https://api.down-syndro.me:42069/api/count");
  const text = await response.text();
  document.getElementById("count").textContent = text;
}

// hack to make the shit load instantly
getSigmaCounter();

setInterval(getSigmaCounter, 2500);

async function increaseSigmaCounter() {
    if (!cooldown) {
        let audio = document.getElementById("sigmaSound");
        audio.currentTime = 0;
        audio.play();
        cooldown = true;
        setTimeout(() => {
            cooldown = false;
        }, 2500);
        
        fetch("https://api.down-syndro.me:42069/api/count", {
            method: "POST",
        })
    }
}
      
