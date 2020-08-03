class Road {
  constructor() {
    this.road = [];
  }

  getRoad() {
    return this.road;
  }

  addPlace(place) {
    return this.road.push(place);
  }

  getRoadBack() {
    return this.road.reverse();
  }
}

var camino = new Road();
["Abarrotes", "Estadio", "Parque", "Gasolinera"].forEach((lugar) => {
  camino.addPlace(lugar);
});

console.log(camino.getRoadBack());
