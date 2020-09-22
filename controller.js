//Store Champions as a global variable
let champions;

async function getChamp () {
  const url = "http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json"
  try {
    const response = await axios.get(url);
    //Stored locally in this function
    champions = response.data.data;
    console.log(champions);
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

const generateDropdown = () => {
  const select = document.querySelector("#class-select");
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
    console.log(champions[champion].name);
    //"Fighter would replace option.value of the selected"
    //Replace "Fighter" with value.value
    if (filterChamp(champions[champion], "Fighter")) {
      const champName = document.createElement("h2");
      champName.innerHTML = champions[champion].name;
      champ.appendChild(champName);
    }
  }
}


const filterChamp = (champ, type) => {
  return champ.tags.includes(type);
  //response.data.data["Aatrox"].tags.includes("Fighter")
}

//Sort By Tag Functions

//.map function


  // champions.forEach(champion => {
  //   const champName = document.createElement("h2");
  //   champName.innerHTML = champion.name;
  //   champ.appendChild(champName);
  // })

