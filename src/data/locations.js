import forest from "../assets/locations/forest.jpeg";
import home from "../assets/locations/home.jpeg";
import village from "../assets/locations/village.jpeg";

import { eat, sleep, sell, collect, goDeeper } from './playerMethods';

const LocationsData = [
  {
    title: "Home",
    image: home,
    actions: [
      {
        name: "sleep",
        func: sleep
      },
      {
        name: "eat",
        func: eat
      }
    ]
  },
  {
    title: "Village",
    image: village,
    actions: [
      {
        name: "sell",
        func: sell
      }
    ]
  },
  {
    title: "Forest",
    image: forest,
    actions: [
      {
        name: "collect mushrooms",
        func: collect
      },
      {
        name: "go deeper",
        func: goDeeper
      }
    ]
  }
];
export default LocationsData;
