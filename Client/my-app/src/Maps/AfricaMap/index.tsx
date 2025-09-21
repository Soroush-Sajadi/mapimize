import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

const africaCountryData = [
  { code: "DZA", name: "Algeria" },
  { code: "AGO", name: "Angola" },
  { code: "BEN", name: "Benin" },
  { code: "BWA", name: "Botswana" },
  { code: "BFA", name: "Burkina Faso" },
  { code: "BDI", name: "Burundi" },
  { code: "CPV", name: "Cabo Verde" },
  { code: "CMR", name: "Cameroon" },
  { code: "CAF", name: "Central African Republic" },
  { code: "TCD", name: "Chad" },
  { code: "COM", name: "Comoros" },
  { code: "COG", name: "Congo" },
  { code: "COD", name: "Congo (DRC)" },
  { code: "CIV", name: "Côte d'Ivoire" },
  { code: "DJI", name: "Djibouti" },
  { code: "EGY", name: "Egypt" },
  { code: "GNQ", name: "Equatorial Guinea" },
  { code: "ERI", name: "Eritrea" },
  { code: "SWZ", name: "Eswatini" },
  { code: "ETH", name: "Ethiopia" },
  { code: "GAB", name: "Gabon" },
  { code: "GMB", name: "Gambia" },
  { code: "GHA", name: "Ghana" },
  { code: "GIN", name: "Guinea" },
  { code: "GNB", name: "Guinea-Bissau" },
  { code: "KEN", name: "Kenya" },
  { code: "LSO", name: "Lesotho" },
  { code: "LBR", name: "Liberia" },
  { code: "LBY", name: "Libya" },
  { code: "MDG", name: "Madagascar" },
  { code: "MWI", name: "Malawi" },
  { code: "MLI", name: "Mali" },
  { code: "MRT", name: "Mauritania" },
  { code: "MUS", name: "Mauritius" },
  { code: "MAR", name: "Morocco" },
  { code: "MOZ", name: "Mozambique" },
  { code: "NAM", name: "Namibia" },
  { code: "NER", name: "Niger" },
  { code: "NGA", name: "Nigeria" },
  { code: "RWA", name: "Rwanda" },
  { code: "STP", name: "São Tomé and Príncipe" },
  { code: "SEN", name: "Senegal" },
  { code: "SYC", name: "Seychelles" },
  { code: "SLE", name: "Sierra Leone" },
  { code: "SOM", name: "Somalia" },
  { code: "ZAF", name: "South Africa" },
  { code: "SSD", name: "South Sudan" },
  { code: "SDN", name: "Sudan" },
  { code: "TZA", name: "Tanzania" },
  { code: "TGO", name: "Togo" },
  { code: "TUN", name: "Tunisia" },
  { code: "UGA", name: "Uganda" },
  { code: "ZMB", name: "Zambia" },
  { code: "ZWE", name: "Zimbabwe" },
];

export default function AfricaMap() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, 0.0, 0],
        scale: 400,
      }}
      style={{ width: "50%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies
            .filter((geo) =>
              africaCountryData.some((country) => country.code === geo.id)
            )
            .map((geo) => {
              const country = africaCountryData.find(
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
