import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

const northAmericaCountryData = [
  { code: "CAN", name: "Canada" },
  { code: "USA", name: "United States" },
  { code: "MEX", name: "Mexico" },
  { code: "BLZ", name: "Belize" },
  { code: "CRI", name: "Costa Rica" },
  { code: "SLV", name: "El Salvador" },
  { code: "GTM", name: "Guatemala" },
  { code: "HND", name: "Honduras" },
  { code: "NIC", name: "Nicaragua" },
  { code: "PAN", name: "Panama" },
  { code: "CUB", name: "Cuba" },
  { code: "HTI", name: "Haiti" },
  { code: "DOM", name: "Dominican Republic" },
  { code: "JAM", name: "Jamaica" },
  { code: "BHS", name: "Bahamas" },
  { code: "BRB", name: "Barbados" },
  { code: "GRD", name: "Grenada" },
  { code: "KNA", name: "Saint Kitts and Nevis" },
  { code: "LCA", name: "Saint Lucia" },
  { code: "VCT", name: "Saint Vincent and the Grenadines" },
  { code: "TTO", name: "Trinidad and Tobago" },
];

export default function NorthAmericaMap() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [100.0, -45.0, 0],
        scale: 600,
      }}
      style={{ width: "50%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies
            .filter((geo) =>
              northAmericaCountryData.some((country) => country.code === geo.id)
            )
            .map((geo) => {
              const country = northAmericaCountryData.find(
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
