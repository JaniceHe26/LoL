class App {
  constructor() {
    this.champions;
    this.selectEl = document.querySelector("#class-select");
    this.champContainer = document.querySelector(".champ-container");
    this.initialize();
  }
  
  async initialize() {
    this.champions = await this.getChampionData();
    console.log(this.champions);
    this.generateDropdown();
    this.selectEl.addEventListener('change', event => this.onChampionSelect(event));
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
    this.clearChampionData();
    const championName = event.target.selectedOptions[0].value;
    this.displayChamp(this.champions[championName.replace(/\s/g, '')]);
  }

  appendChampionDataToChampContainer(elementType, className, content) {
    const element = document.createElement(elementType);
    element.className = className;
    element.innerHTML = content;
    this.champContainer.appendChild(element);
  }

  /**
   * Appends champion data onto our HTML.
   * @param {Object} champion 
   */
  displayChamp(champion) {
    this.appendChampionDataToChampContainer("h2", "champion-name", champion.name);
    this.appendChampionDataToChampContainer("h4", "champion-title", champion.title);
    this.appendChampionDataToChampContainer("p", "champion-about", champion.blurb);
  }

  clearChampionData() {
    while (this.champContainer.lastChild) {
      this.champContainer.removeChild(this.champContainer.lastChild);
    }
  }
}

const init = new App();
