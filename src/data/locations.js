import forest from "../assets/locations/forest.jpeg";
import home from "../assets/locations/home.jpeg";
import village from "../assets/locations/village.jpeg";

function LocationsData(updatePlayer) {
  this.updatePlayer = updatePlayer;

  // actions
  let action_sleep = {
    name: "sleep",
    func: player =>
        this.updatePlayer({
          ...player,
          energy: player.energy + 2
        })
  };

  let action_eat = {
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
  };

  let action_sell = {
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
  };

  let action_pick_mushrooms = {
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
  };

  this.locations = [
    {
      title: "Home",
      image: home,
      actions: [action_sleep, action_eat]
    },
    {
      title: "Village",
      image: village,
      actions: [action_sell]
    },
    {
      title: "Forest",
      image: forest,
      actions: [action_pick_mushrooms]
    }
  ];
}

export default LocationsData;
