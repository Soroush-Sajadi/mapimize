import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson";

const asiaCountryData = [
  { code: "AFG", name: "Afghanistan" },
  { code: "ARM", name: "Armenia" },
  { code: "AZE", name: "Azerbaijan" },
  { code: "BHR", name: "Bahrain" },
  { code: "BGD", name: "Bangladesh" },
  { code: "BTN", name: "Bhutan" },
  { code: "BRN", name: "Brunei" },
  { code: "KHM", name: "Cambodia" },
  { code: "CHN", name: "China" },
  { code: "CYP", name: "Cyprus" },
  { code: "GEO", name: "Georgia" },
  { code: "IND", name: "India" },
  { code: "IDN", name: "Indonesia" },
  { code: "IRN", name: "Iran" },
  { code: "IRQ", name: "Iraq" },
  { code: "ISR", name: "Israel" },
  { code: "JPN", name: "Japan" },
  { code: "JOR", name: "Jordan" },
  { code: "KAZ", name: "Kazakhstan" },
  { code: "KWT", name: "Kuwait" },
  { code: "KGZ", name: "Kyrgyzstan" },
  { code: "LAO", name: "Laos" },
  { code: "LBN", name: "Lebanon" },
  { code: "MYS", name: "Malaysia" },
  { code: "MDV", name: "Maldives" },
  { code: "MNG", name: "Mongolia" },
  { code: "MMR", name: "Myanmar" },
  { code: "NPL", name: "Nepal" },
  { code: "PRK", name: "North Korea" },
  { code: "OMN", name: "Oman" },
  { code: "PAK", name: "Pakistan" },
  { code: "PHL", name: "Philippines" },
  { code: "QAT", name: "Qatar" },
  { code: "SAU", name: "Saudi Arabia" },
  { code: "SGP", name: "Singapore" },
  { code: "KOR", name: "South Korea" },
  { code: "LKA", name: "Sri Lanka" },
  { code: "SYR", name: "Syria" },
  { code: "TWN", name: "Taiwan" },
  { code: "TJK", name: "Tajikistan" },
  { code: "THA", name: "Thailand" },
  { code: "TUR", name: "Turkey" },
  { code: "TKM", name: "Turkmenistan" },
  { code: "ARE", name: "United Arab Emirates" },
  { code: "UZB", name: "Uzbekistan" },
  { code: "VNM", name: "Vietnam" },
  { code: "YEM", name: "Yemen" },
];

export default function AsiaMap() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-100.0, -45.0, 0],
        scale: 300,
      }}
      style={{ width: "50%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies
            .filter((geo) =>
              asiaCountryData.some((country) => country.code === geo.id)
            )
            .map((geo) => {
              const country = asiaCountryData.find(
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
