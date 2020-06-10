let apiKey = "$2a$10$fFLgx9jmgVkDfvD3XPaHo.z9shUBKZuhJWsCyOleSak2VfH1zMmve";

testFunction=() => {
    axios.get("https://www.potterapi.com/v1/sortingHat")
    .then(response => {
        let house=response.data
        document.querySelector(".house__title").innerHTML = house
    });
    
   
};

testFunction();



function myHouse(houseName){

    if ( houseName=="Gryffindor"){
        document.querySelector(".house_sigil").style.backgroundImage= "url('./assets/Gryffindor.png')";
    }

    else if (houseName=="Hufflepuff"){

    }

    else if (houseName=="Slytherin"){

    }

    else if (houseName=="Ravenclaw"){

    }

   

};
