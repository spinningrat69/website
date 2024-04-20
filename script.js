let count = 0;
let cooldown = false;


async function getSigmaCounter() {
  const response = await fetch("https://api.down-syndro.me:42069/api/count");
  const text = await response.text();
  console.log(text);
  
}

setInterval(getSigmaCounter, 2500);

async function increaseSigmaCounter() {
    if (!cooldown) {
        let audio = document.getElementById("sigmaSound");
        audio.currentTime = 0;
        audio.play();
        count++;
        document.getElementById("count").textContent = count;
        cooldown = true;
        setTimeout(() => {
            cooldown = false;
        }, 2500);
        
        fetch("https://api.down-syndro.me:42069/api/count", {
            method: "POST",
        })
    }
}
      
