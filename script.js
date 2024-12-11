const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user-result img");
const cpuResult = document.querySelector(".cpu-result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option-image");


optionImages.forEach((image,index) =>{
    image.addEventListener('click',(e) => {
        image.classList.add('active');

        userResult.src = cpuResult.src = "pics/rock.png";
        result.textContent = "Wait..."


        optionImages.forEach((image2,index2) => {
            index !== index2 &&  image2.classList.remove('active');
        });

        gameContainer.classList.add("start");
        
        let time = setTimeout(() => {
           gameContainer.classList.remove("start");

        let imageSrc  = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImages = ["pics/rock.png","pics/paper.png","pics/scissors.png"];

        cpuResult.src = cpuImages[randomNumber];
         
        let cpuValue = ["R", "P", "S"][randomNumber];
        let userValue = ["R","P","S"][index];

        let outComes = {
            RR: "Draw",
            RP: "Cpu",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "Cpu",
            SS: "Draw",
            SR: "Cpu",
            SP: "User"
        }

        let outComeValue = outComes[userValue + cpuValue];

        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
       }, 2500);

    });
});