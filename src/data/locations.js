import forest from "../assets/locations/forest.jpeg";
import home from "../assets/locations/home.jpeg";
import village from "../assets/locations/village.jpeg";

function LocationsData(updatePlayer) {
  this.updatePlayer = updatePlayer;
  this.locations = [
    {
      title: "Home",
      image: home,
      actions: [
        {
          name: "sleep",
          func: player =>
            this.updatePlayer({
              ...player,
              energy: player.energy + 2
            })
        },
        {
          name: "eat",
          func: player => {
            if (player.hasMushrooms()) {
              this.updatePlayer({
                ...player,
                energy: player.energy + 1,
                mushrooms: player.mushrooms - 1
              });
            }
          }
        }
      ]
    },
    {
      title: "Village",
      image: village,
      actions: [
        {
          name: "sell",
          func: player => {
            if (player.hasMushrooms()) {
              this.updatePlayer({
                ...player,
                money: player.money + 2,
                mushrooms: player.mushrooms - 1
              });
            }
          }
        }
      ]
    },
    {
      title: "Forest",
      image: forest,
      actions: [
        {
          name: "collect mushrooms",
          func: player => {
            if (player.hasEnergy()) {
              this.updatePlayer({
                ...player,
                mushrooms: player.mushrooms + 1,
                energy: player.energy - 1
              });
            }
          }
        },
        {
          name: "go deeper",
          func: player => {
            if (player.hasEnergy()) {
              this.updatePlayer({
                ...player,
                energy: player.energy - 1
              });
            }
          }
        }
      ]
    }
  ];
}
export default LocationsData;
