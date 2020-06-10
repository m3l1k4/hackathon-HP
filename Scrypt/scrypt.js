
let apiKey = "$2a$10$fFLgx9jmgVkDfvD3XPaHo.z9shUBKZuhJWsCyOleSak2VfH1zMmve";


getHouseInfo = (houseValue) => {
    axios.get("https://www.potterapi.com/v1/houses?key=$2a$10$fFLgx9jmgVkDfvD3XPaHo.z9shUBKZuhJWsCyOleSak2VfH1zMmve")
        .then(response => {
            //  console.log(response);
            console.log(response.data[0].mascot);
            console.log("this is from axios")
            console.log(houseValue);
            showHouseInfo(response, houseValue);
        })


};



getSortingHat = () => {
    axios.get("https://www.potterapi.com/v1/sortingHat")
        .then(response => {
            let house = response.data;
            document.querySelector(".house__title").innerHTML = house;
            myHouse(house);
            getHouseInfo(house);
        })


};

getSortingHat();



function showHouseInfo(responseArray, houseName) {

    let gryf = responseArray.data[0].name;
    let raven = responseArray.data[1].name;
    let slyth = responseArray.data[2].name;
    let huff = responseArray.data[3].name;
    console.log("this is in function")
    console.log(houseName);
    console.log(slyth);

    if (houseName == gryf) {
        gryfMascot = responseArray.data[0].mascot;
        gryfGhost = responseArray.data[0].houseGhost;
        gryfHead = responseArray.data[0].headOfHouse;
        document.querySelector(".house__mascot").innerHTML = gryfMascot;
        document.querySelector(".house__head").innerHTML = gryfHead;
        document.querySelector(".house__ghost").innerHTML = gryfGhost;

    }

    else if (houseName == raven) {

        ravenMascot = responseArray.data[1].mascot;
        ghost = responseArray.data[1].houseGhost;
        head = responseArray.data[1].headOfHouse;

        document.querySelector(".house__mascot").innerHTML = ravenMascot;
        document.querySelector(".house__head").innerHTML =head;
        document.querySelector(".house__ghost").innerHTML =ghost;

    }

    else if (houseName == slyth) {

        slythMascot = responseArray.data[2].mascot;
        ghost = responseArray.data[2].houseGhost;
        head = responseArray.data[2].headOfHouse;
        document.querySelector(".house__mascot").innerHTML = slythMascot;
        document.querySelector(".house__head").innerHTML =head;
        document.querySelector(".house__ghost").innerHTML =ghost;

    }

    else if (houseName == huff) {

        huffMascot = responseArray.data[3].mascot;
        ghost = responseArray.data[3].houseGhost;
        head = responseArray.data[3].headOfHouse;
        document.querySelector(".house__mascot").innerHTML = huffMascot;
        document.querySelector(".house__head").innerHTML =head;
        document.querySelector(".house__ghost").innerHTML =ghost;

    }

}


// 0 gryf
// 1 raven
// 2 slyth
//3 huffle





function myHouse(houseName) {

    console.log(houseName);

    if (houseName == "Gryffindor") {
        document.querySelector(".house__sigil").style.backgroundImage = "url('./assets/Gryffindor.png')";
    }

    else if (houseName == "Hufflepuff") {
        document.querySelector(".house__sigil").style.backgroundImage = "url('./assets/Hufflepuff.png')";

    }

    else if (houseName == "Slytherin") {
        document.querySelector(".house__sigil").style.backgroundImage = "url('./assets/Slytherin.png')";

    }

    else if (houseName == "Ravenclaw") {
        document.querySelector(".house__sigil").style.backgroundImage = "url('./assets/Ravenclaw.png')";

    }



};



//table