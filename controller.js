async function getChamp () {
  const url = "http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json"
  try {
    const response = await axios.get(url);
    displayChamp(response.data.data);
  } catch (e) {
    console.error(`Error: ${e}`)
  }
}

//Selecting champion display div
const champ = document.querySelector("#champ-container");

//Champions is the object.
//Iterating through each champion in my object champions 
//accessing the value of champion containing data
const displayChamp = champions => {
  for (const champion in champions) {
    //Aatrox is the key
    console.log(champions[champion].name);
  }
  // champions.forEach(champion => {
  //   const champName = document.createElement("h2");
  //   champName.innerHTML = champion.name;
  //   champ.appendChild(champName);
  // })
}

getChamp();
