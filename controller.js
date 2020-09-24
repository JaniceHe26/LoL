//Store Champions as a global variable
let champions;

async function getChamp () {
  const url = "http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json"
  try {
    const response = await axios.get(url);
    //Stored locally in this function
    champions = response.data.data;
    //console.log(champions);
    generateDropdown();
    // displayChamp(response.data.data);
    // champValues(response.data.data);
  } catch (e) {
    console.error(`Error: ${e}`)
  }
}
getChamp();

//Selecting champion display div
const champ = document.querySelector(".champ-container");

// const grabOptionValue = value => {
//   let dropDown = document.querySelector(".option-value");
//   return dropDown.value;
// }
const select = document.querySelector("#class-select");

const onChampionSelect = event => {
  //This returns me their name; => "Anivia"
  return event.target.selectedOptions[0].value;
    //returns the champ name
    // let grabChampion = this.champions.filter(champion => this.champions[champion] === championName);
    // this.displayChamp(grabChampion);
    //Grabbing champion data from champions object using name as the key.
}

select.onchange = onChampionSelect;


/**
 * Generate Drop down with champion's name. 
 */
const generateDropdown = () => {
  //give me keys
  for (const champion in champions) {
    const option = document.createElement("option");
    option.value = `${champions[champion].name}`;
    option.innerHTML = `${champions[champion].name}`;
    select.appendChild(option);
  }
}

//Champions is the object.
//Iterating through each champion in my object champions 
//accessing the value of champion containing data
const displayChamp = (champions) => {
  //let value = queryselector for the dropDown.
  for (const champion in champions) {
    //Aatrox is the key
    //console.log(champions[champion].name);
    //"Fighter would replace option.value of the selected"
    //Replace "Fighter" with value.value
    if (filterChamp(champions[champion], "Fighter")) {
      const champName = document.createElement("h2");
      champName.innerHTML = champions[champion].name;
      champ.appendChild(champName);
    }
  }

    // const name = document.createElement("h2");
    // name.className = "champion-name";
    // name.innerHTML = champion.name;
    // this.champContainer.appendChild(name);

    // const title = document.createElement("h4");
    // title.className = "champion-title";
    // title.innerHTML = champion.title;

    // const image = document.createElement("img");
    // image.className = "champion-image";
    // image.src = champion.image.sprite;
    // this.champContainer.appendChild(image);

    // const description = document.createElement("p");
    // description.className = "champion-about";
    // description.innerHTML = champion.blurb;
    // this.champContainer.appendChild(description);
}


const filterChamp = (champ, type) => {
  return champ.tags.includes(type);
  //response.data.data["Aatrox"].tags.includes("Fighter")
}

//Sort By Tag Functions

  
  // .map function
  // champions.forEach(champion => {
  //   const champName = document.createElement("h2");
  //   champName.innerHTML = champion.name;
  //   champ.appendChild(champName);
  // })

