import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

const southAmericaCountryData = [
  { code: "ARG", name: "Argentina" },
  { code: "BOL", name: "Bolivia" },
  { code: "BRA", name: "Brazil" },
  { code: "CHL", name: "Chile" },
  { code: "COL", name: "Colombia" },
  { code: "ECU", name: "Ecuador" },
  { code: "GUY", name: "Guyana" },
  { code: "PRY", name: "Paraguay" },
  { code: "PER", name: "Peru" },
  { code: "SUR", name: "Suriname" },
  { code: "URY", name: "Uruguay" },
  { code: "VEN", name: "Venezuela" },
];

export default function SouthAmericaMap() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [60.0, 20.0, 0],
        scale: 450,
      }}
      style={{ width: "50%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies
            .filter((geo) =>
              southAmericaCountryData.some((country) => country.code === geo.id)
            )
            .map((geo) => {
              const country = southAmericaCountryData.find(
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
