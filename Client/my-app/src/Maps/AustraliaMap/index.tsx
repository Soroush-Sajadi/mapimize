import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

const australiaCountryData = [
  { code: "AUS", name: "Australia" },
  { code: "NZL", name: "New Zealand" },
  { code: "PNG", name: "Papua New Guinea" },
  { code: "FJI", name: "Fiji" },
  { code: "SLB", name: "Solomon Islands" },
  { code: "VUT", name: "Vanuatu" },
  { code: "WSM", name: "Samoa" },
  { code: "TON", name: "Tonga" },
  { code: "KIR", name: "Kiribati" },
  { code: "NRU", name: "Nauru" },
  { code: "TUV", name: "Tuvalu" },
  { code: "PLW", name: "Palau" },
  { code: "MHL", name: "Marshall Islands" },
];

export default function AustraliaMap() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-140.0, 20.0, 0],
        scale: 450,
      }}
      style={{ width: "50%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies
            .filter((geo) =>
              australiaCountryData.some((country) => country.code === geo.id)
            )
            .map((geo) => {
              const country = australiaCountryData.find(
                (country) => country.code === geo.id
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#b5bdb7",
                      stroke: "#000",
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: "#F53",
                      stroke: "#000",
                      strokeWidth: 0.7,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      stroke: "#000",
                      strokeWidth: 0.7,
                      outline: "none",
                    },
                  }}
                />
              );
            })
        }
      </Geographies>
    </ComposableMap>
  );
}
