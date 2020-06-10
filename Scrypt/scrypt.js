
let apiKey = "$2a$10$fFLgx9jmgVkDfvD3XPaHo.z9shUBKZuhJWsCyOleSak2VfH1zMmve";


getHouseInfo = (houseValue) => {
    axios.get("https://www.potterapi.com/v1/houses?key=$2a$10$fFLgx9jmgVkDfvD3XPaHo.z9shUBKZuhJWsCyOleSak2VfH1zMmve")
        .then(response => {
          //  console.log(response);
         //   console.log(response.data[0].mascot);
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



function showHouseInfo(responseArray, houseName){

   let gryf= responseArray.data[0].name;
   let raven = responseArray.data[1].name;
   let slyth= responseArray.data[2].name;
   let huff=  responseArray.data[3].name;

   if (houseName == gryf){
       console.log(responseArray.data[1].mascot);
       console.log("in func")
       console.log(houseName);
   }

   else{
       console.log("else")
   }


// 0 gryf
// 1 raven
// 2 slyth
//3 huffle


}


function myHouse(houseName) {

    console.log(houseName);

    if (houseName == "Gryffindor") {
        document.querySelector(".house_sigil").style.backgroundImage = "url('./assets/Gryffindor.png')";
    }

    else if (houseName == "Hufflepuff") {
        document.querySelector(".house_sigil").style.backgroundImage = "url('./assets/Hufflepuff.png')";

    }

    else if (houseName == "Slytherin") {
        document.querySelector(".house_sigil").style.backgroundImage = "url('./assets/Slytherin.png')";

    }

    else if (houseName == "Ravenclaw") {
        document.querySelector(".house_sigil").style.backgroundImage = "url('./assets/Ravenclaw.png')";

    }



};



//table