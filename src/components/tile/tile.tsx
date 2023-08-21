import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./tile.css?inline";

interface Tile {
  country: string;
  number: string;
  color: string;
  topText: string;
  bottomText: string;
  image: string;
  storymap: string;
}
export interface TileProps {
  tile: Tile;
}
export const Tile = component$<TileProps>((props) => {
  useStylesScoped$(styles);
  const { tile } = props;
  if (tile) {
    return (
      <div class="tile">
        <div class="tile-circle">
          <div class="circle" style={`background-color: #${tile.color}`}>
            {tile.number}
          </div>
        </div>
        <div class="tile-rectangle">
          <div class="tile-top-text">{tile.topText}</div>
          <div class="tile-bottom-text">{tile.bottomText}</div>
        </div>
        <div class="tile-image">
          <img
            width="80"
            height="80"
            src={`https://collections.newberry.org/IIIF3/Image/${tile.image}/square/,80/0/default.jpg`}
            alt=""
          />
        </div>
      </div>
    );
  }
});
