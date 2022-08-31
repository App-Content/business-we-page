import * as bootstrap from "bootstrap";

import { buttonInitialLoad } from "./buttons";
import { launchCarousel, closeCarousel } from "./carouselHandle";

fetch(
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fautoelectrogm&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
).then((result) => console.log(result));
