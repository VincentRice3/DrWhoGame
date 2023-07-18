function getRandomNumber(){
    randomNum =  Math.floor(Math.random() * 13);
    if(randomNum < 1){
        randomNum++;
    }
    return randomNum;
}

function changeBackground(lightValue){
    switch(lightValue){
        case false:
            document.body.style.backgroundColor = "white";
            break;
        case true:
            document.body.style.backgroundColor = "black";
            break;

    }
}

function changeLightbulbImage(){
    let lightStatus = document.getElementById("lightStatus").innerText;
    let lightValue;
    switch(lightStatus){
        case "Don't Close your eyes!":
            document.getElementById("off").style.display = "block";
            clearMonster();
            lightStatus = "Monsters are coming!";
            document.getElementById("lightStatus").innerText = lightStatus;
            document.getElementById("lightStatus").style.color = "white";
            document.getElementById("on").style.display = "none";
            lightValue = true;
            changeBackground(lightValue);
            break;
        case "Monsters are coming!":
            document.getElementById("on").style.display = "block";
            showMonster();

            lightStatus = "Don't Close your eyes!";

            document.getElementById("lightStatus").innerText = lightStatus;
            document.getElementById("lightStatus").style.color = "black";
            document.getElementById("off").style.display = "none";
            lightValue = false;
            changeBackground(lightValue);
            document.getElementById("lightbulb").style.visibility = "hidden";

            document.getElementById("sonicScrewDriver").style.visibility = "visible";

            break;
    }
}

function showMonster(){
    let boxNumber = "box" + getRandomNumber();
    let monsterNumber = "monster" + getRandomNumber();
    console.log(boxNumber);
    document.getElementById(boxNumber).innerHTML = `<img id="monster" src="images/${monsterNumber}.jpg" width="100%" height="100%" alt="">`
    document.getElementById(boxNumber).style.visibility = "visible";
    monsterVisibility = true;

}

function useScrewDriver(){
    document.body.style.backgroundColor = "blue";
    document.body.style.transitionDuration = "1s";
    //document.body.style.backgroundColor = "white";
    clearMonster();
    document.getElementById("sonicScrewDriver").innerHTML = `<p onclick="reset()" >Monsters Defeated! - Click here to return to normal</p>`
}

function reset(){
    document.body.style.backgroundColor = "white";
    document.body.style.transitionDuration = "1s";
    document.getElementById("lightbulb").style.visibility = "visible";
    document.getElementById("sonicScrewDriver").style.visibility = "hidden";
    document.getElementById("sonicScrewDriver").innerHTML = `<img onclick="useScrewDriver()" width="200px" src="images/sonicScrewDriver.jpg" alt="">  <p onclick="useScrewDriver()">Quick, use the sonic screwdriver!</p>`
}

function clearMonster(){
        document.getElementById("box1").style.visibility = "hidden";
        document.getElementById("box2").style.visibility = "hidden";
        document.getElementById("box3").style.visibility = "hidden";
        document.getElementById("box4").style.visibility = "hidden";
        document.getElementById("box5").style.visibility = "hidden";
        document.getElementById("box6").style.visibility = "hidden";
        document.getElementById("box7").style.visibility = "hidden";
        document.getElementById("box8").style.visibility = "hidden";
        document.getElementById("box9").style.visibility = "hidden";
        document.getElementById("box10").style.visibility = "hidden";
        document.getElementById("box11").style.visibility = "hidden";
        document.getElementById("box12").style.visibility = "hidden";

    }


