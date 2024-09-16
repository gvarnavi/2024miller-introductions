---
toc: false
style: css/index.css
---

# 2024 Miller Introduction

```js
import { sliderBottom } from "npm:d3-simple-slider";
const times = d3.utcYears(Date.UTC(2012), Date.UTC(2025));

const access_token =
  "pk.eyJ1IjoiaWNodWFuZyIsImEiOiJjazl2b2s1aW4wMWQzM3BxamczOTZ4c3ExIn0.3W79oPGv3rXMbqfS3KHnBw";
const mapbox_style = "mapbox://styles/mapbox/light-v11";

const centers = [
  [33.34607, 35.132732],
  [-71.098776, 42.355657],
  [-71.12473, 42.398913],
  [-122.278516, 37.869289],
];

const zooms = [7, 12, 12, 12];

const indices = [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3];
var index_map = {};
times.forEach((d, i) => (index_map[d] = indices[i]));
```

```js
const slider = sliderBottom()
  .min(d3.min(times))
  .max(d3.max(times))
  .marks(times)
  .width(400)
  .tickFormat(d3.utcFormat("%Y"))
  .tickValues(times)
  .on("onchange", () => svg.dispatch("input"));

const svg = d3
  .create("svg")
  .attr("viewBox", [-20, -20, 440, 60])
  .attr("width", 440)
  .attr("height", 60)
  .call(slider);

const time = view(
  Object.defineProperty(svg.node(), "value", { get: () => slider.value() }),
);
```

```js
function return_desc(index) {
  if (index == 0) {
    return html`
      <h1>Childhood</h1>
      <ul>
        <li>Born and raised in Cyprus</li>
        <li>
          Name is pronounced <code>Yeh-or-yee-os</code>, but I'll accept
          <code>George(ous)</code>
        </li>
        <li>Favourite activity: singing by the campfire</li>
      </ul>
    `;
  } else if (index == 1) {
    return html`
      <h1>Undergraduate Studies</h1>

      <ul>
        <li>Moved to Cambridge, MA to study at MIT</li>
        <li>
          B.S. in Materials Science and Engineering, Civil and Environmental
          Engineering
        </li>
        <li>
          New favourite activity:
          <a href="https://gvarnavides.com/generative-art-workshop-website/"
            >generative art</a
          >
        </li>
      </ul>
    `;
  } else if (index == 2) {
    return html`
      <h1>Graduate Studies</h1>
      <ul>
        <li>Moved to Somerville, MA to study at MIT/Harvard</li>
        <li>
          Studied the implications of electron "fluids" in charge transport
          inside materials
        </li>
        <li>
          New favourite activity:
          <a href="https://dmse-mit.github.io/3029/docs/2022/intro/"
            >materials-science pedagogy</a
          >
        </li>
      </ul>
    `;
  } else {
    return html`
      <h1>Postdoctoral Fellowship</h1>
      <ul>
        <li>
          Moved to Berkeley, CA to develop computational imaging modalities to
          observe transport fields with high resolution
        </li>
        <li>Hosted by Mary Scott (MSE) and Joel Moore (Physics)</li>
        <li>
          New favourite activity:
          <a href="https://www.elementalmicroscopy.com/"
            >interactive science communication</a
          >
        </li>
      </ul>
    `;
  }
}
```

<div class="grid grid-cols-2" style="grid-auto-rows: auto;">
  <div id ="desc" class="card"> ${return_desc(index_map[time])}</div>
  <div id ="map" class="card" style="height:250px;"></div>
</div>

```js
const map = new mapboxgl.Map({
  container: "map",
  accessToken: access_token,
  center: centers[0],
  zoom: zooms[0],
  style: mapbox_style,
  // interactive: false,
});

invalidation.then(() => map.remove());
```

```js
map.flyTo({
  center: centers[index_map[time]],
  zoom: zooms[index_map[time]],
  essential: true,
  speed: 0.75,
});
```
