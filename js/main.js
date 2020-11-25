const initGame = () => {
    console.log("Init Game");
    const images= [
      "1.png",  "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"
    ]
    let play = document.querySelector('#play');
    let init = document.querySelector('.init');//we need to hide this element
    let game = document.querySelector('.game');//we need to show this element
    let cards = document.querySelector('.card');
    let points = document.querySelector('.score-points');

    play.addEventListener("click", () => {
        init.style.display = "none";
        game.style.display = "block";

    });
}

initGame()