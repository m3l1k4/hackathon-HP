
let apiKey = "$2a$10$fFLgx9jmgVkDfvD3XPaHo.z9shUBKZuhJWsCyOleSak2VfH1zMmve";

getApi=() => {
     axios.get("https://www.potterapi.com/v1/sortingHat")
    .then(response => {
        let house=response.data;
        document.querySelector(".house__title").innerHTML = house;
        myHouse(house);
    })
    
  
};

getApi(); 

//document.querySelector(".house__title").innerHTML = "house";

//myHouse();

function myHouse(houseName){
  
   console.log(houseName);

    if ( houseName=="Gryffindor"){
        document.querySelector(".house_sigil").style.backgroundImage= "url('./assets/Gryffindor.png')";
    }

    else if (houseName=="Hufflepuff"){
        document.querySelector(".house_sigil").style.backgroundImage= "url('./assets/Hufflepuff.png')";

    }

    else if (houseName=="Slytherin"){
        document.querySelector(".house_sigil").style.backgroundImage= "url('./assets/Slytherin.png')";

    }

    else if (houseName=="Ravenclaw"){
        document.querySelector(".house_sigil").style.backgroundImage= "url('./assets/Ravenclaw.png')";

    }

   

};
