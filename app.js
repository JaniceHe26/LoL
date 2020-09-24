class App {
  constructor() {
    this.champions;
    this.selectEl = document.querySelector("#class-select");
    this.initialize();
  }
  
  async initialize() {
    this.champions = await this.getChampionData();
    console.log(this.champions);
    this.generateDropdown();
    this.selectEl.addEventListener('change', event => this.onChampionSelect(event));
    // this.onChampionSelect();
  }




  async getChampionData() {
    const url = "http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json"
    try {
      const response = await axios.get(url);
      return response.data.data;
    } catch (e) {
      console.error(`Error: ${e}`)
      return {};
    }
  }

  generateDropdown() {
    //Removing placeholder delete option
    document.querySelector("#loading").remove();
  
    for (const champion in this.champions) {
      const option = document.createElement("option");
      option.value = `${this.champions[champion].name}`;
      option.innerHTML = `${this.champions[champion].name}`;
      this.selectEl.appendChild(option);
    }
  }

  // onChampionSelect = event => {} 
  onChampionSelect(event) {
    if (!event) return; 
    //returns the champ name
    const championName = event.target.selectedOptions[0].value;
    // let grabChampion = this.champions.filter(champion => this.champions[champion] === championName);
    // this.displayChamp(grabChampion);
    //Grabbing champion data from champions object using name as the key.
    this.displayChamp(this.champions[championName]);
  }

  /**
   * Appends champion data onto our HTML.
   * @param {Object} champion 
   */
  displayChamp(champion) {
    const champContainer = document.querySelector(".champ-container");
    const name = document.createElement("h2");
    name.innerHTML = champion.name;
    champContainer.appendChild(name);
  }

  clearChampionData() {
    // while ()
  }
}

const init = new App();
