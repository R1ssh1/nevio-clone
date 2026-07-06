export type ChemicalProperty = { element: string; value: string };
export type MechanicalProperty = { property: string; value: string };

export type ProductGradeInfo = {
  name: string;
  slug: string;
  categorySlug: string;
  introParagraphs: string[];
  chemicalComposition: ChemicalProperty[];
  mechanicalProperties: MechanicalProperty[];
  applications: string[];
  seoKeywords: string;
};

export const productGrades: ProductGradeInfo[] = [
  {
    name: "SS 304 / 304L Pipes & Tubes",
    slug: "/products/pipes-tubes/ss-304-304l-304h-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys is an ISO 9001:2015 certified manufacturer, supplier, and exporter of Stainless Steel 304/304L Pipes & Tubes in India. SS 304 is the most versatile and widely used austenitic stainless steel, containing 18% chromium and 8% nickel. It offers excellent corrosion resistance, high ease of fabrication, and outstanding formability.",
      "The 'L' in 304L stands for 'Low Carbon' which minimizes carbide precipitation during welding, making it highly suitable for welded components. These seamless and welded pipes are commonly used in the chemical, petrochemical, food processing, and dairy industries. Our SS 304 pipes adhere to ASTM A312, ASTM A213, and ASME standards.",
      "We supply these pipes in various schedules (SCH 5, SCH 10, SCH 40, SCH 80, etc.), random lengths, and custom cut sizes to meet project requirements. Every batch undergoes rigorous quality testing including Hydrostatic tests, PMI tests, and 100% X-ray testing for welded pipes."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 304L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Chromium (Cr)", value: "18.0 - 20.0" },
      { element: "Nickel (Ni)", value: "8.0 - 10.5 (8.0 - 12.0 for 304L)" },
      { element: "Nitrogen (N)", value: "0.10 max" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for 304L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for 304L)" },
      { property: "Elongation", value: "35% min" },
      { property: "Hardness (Brinell)", value: "201 HBW max" }
    ],
    applications: [
      "Food & Beverage Processing",
      "Chemical & Petrochemical",
      "Pharmaceutical Manufacturing",
      "Water Treatment Plants",
      "Heat Exchangers & Condensers",
      "Oil & Gas Industries"
    ],
    seoKeywords: "SS 304 Pipes Supplier, 304L Stainless Steel Tubes Exporter, ASTM A312 TP304 Seamless Pipes Stockist in India, SS 304 Welded Pipes Manufacturer Mumbai"
  },
  {
    name: "SS 316 / 316L Pipes & Tubes",
    slug: "/products/pipes-tubes/ss-316-316l-316h-316ti-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys is a leading supplier and exporter of Stainless Steel 316/316L Pipes & Tubes in Mumbai, India. SS 316 is a molybdenum-bearing austenitic stainless steel, which greatly increases its resistance to pitting and crevice corrosion in chloride environments compared to SS 304.",
      "The lower carbon content in 316L provides enhanced weldability and reduces the risk of intergranular corrosion after welding. These pipes are widely specified for marine applications, chemical processing, and highly corrosive industrial environments.",
      "Our SS 316/316L seamless and welded tubes are manufactured strictly per ASTM A312 and ASTM A213 standards, providing superior strength at elevated temperatures. All pipes are supplied with EN 10204 3.1 Mill Test Certificates."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 316L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Chromium (Cr)", value: "16.0 - 18.0" },
      { element: "Nickel (Ni)", value: "10.0 - 14.0" },
      { element: "Molybdenum (Mo)", value: "2.00 - 3.00" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for 316L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for 316L)" },
      { property: "Elongation", value: "35% min" },
      { property: "Hardness (Brinell)", value: "217 HBW max" }
    ],
    applications: [
      "Marine Engineering",
      "Chemical Processing Equipment",
      "Pulp and Paper Manufacturing",
      "Pharmaceutical Equipment",
      "Oil & Gas Refineries",
      "Pollution Control Equipment"
    ],
    seoKeywords: "SS 316 Pipes Supplier, 316L Stainless Steel Tubes Exporter, ASTM A312 TP316 Seamless Pipes Stockist in India, SS 316 Welded Pipes Manufacturer Mumbai"
  },
  {
    name: "Titanium Grade 2 Pipes & Tubes",
    slug: "/products/pipes-tubes/titanium-grade-2-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys specializes in manufacturing and exporting commercially pure Titanium Grade 2 Pipes & Tubes. Titanium Gr 2 is the 'workhorse' of the titanium industry, known for its excellent balance of strength, ductility, and outstanding corrosion resistance, especially in highly oxidizing and mildly reducing environments.",
      "These pipes are highly sought after for marine, chemical, and medical applications due to their high strength-to-weight ratio. They provide superior resistance to chlorides, making them ideal for seawater heat exchangers and desalination plants.",
      "Our Titanium Gr 2 pipes comply with ASTM B338 (for seamless and welded tubes) and ASTM B861 (for seamless pipes) standards, undergoing rigorous testing such as ultrasonic, eddy current, and hydrostatic tests."
    ],
    chemicalComposition: [
      { element: "Titanium (Ti)", value: "Balance" },
      { element: "Carbon (C)", value: "0.08 max" },
      { element: "Iron (Fe)", value: "0.30 max" },
      { element: "Nitrogen (N)", value: "0.03 max" },
      { element: "Oxygen (O)", value: "0.25 max" },
      { element: "Hydrogen (H)", value: "0.015 max" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "345 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "275 MPa min" },
      { property: "Elongation", value: "20% min" }
    ],
    applications: [
      "Desalination Plants",
      "Power Generation",
      "Marine & Offshore",
      "Chlor-Alkali Chemical Processing",
      "Heat Exchangers",
      "Medical Implants"
    ],
    seoKeywords: "Titanium Grade 2 Pipes Supplier, ASTM B861 Ti Gr 2 Seamless Tubes Exporter, Titanium Welded Pipes Stockist in India, Titanium Grade 2 Manufacturer Mumbai"
  },
  {
    name: "Titanium Grade 5 Pipes & Tubes",
    slug: "/products/pipes-tubes/titanium-grade-5-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys is a premier supplier of Titanium Grade 5 (Ti-6Al-4V) Pipes & Tubes in India. Grade 5 is the most widely used titanium alloy, accounting for 50% of total titanium usage worldwide. It offers significantly higher strength than commercially pure titanium while retaining the same stiffness and thermal properties.",
      "Composed of 6% Aluminum and 4% Vanadium, these pipes are heavily utilized in the aerospace, motorsport, and medical industries where an exceptional strength-to-weight ratio is crucial. They perform exceptionally well at temperatures up to 400°C.",
      "We supply Titanium Grade 5 seamless pipes according to ASTM B861 standards, ensuring defect-free products through strict dimensional checking and NDT (Non-Destructive Testing) processes."
    ],
    chemicalComposition: [
      { element: "Titanium (Ti)", value: "Balance" },
      { element: "Aluminum (Al)", value: "5.50 - 6.75" },
      { element: "Vanadium (V)", value: "3.50 - 4.50" },
      { element: "Iron (Fe)", value: "0.40 max" },
      { element: "Oxygen (O)", value: "0.20 max" },
      { element: "Carbon (C)", value: "0.08 max" },
      { element: "Nitrogen (N)", value: "0.05 max" },
      { element: "Hydrogen (H)", value: "0.015 max" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "895 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "828 MPa min" },
      { property: "Elongation", value: "10% min" },
      { property: "Hardness", value: "36 HRC (approx)" }
    ],
    applications: [
      "Aerospace Components",
      "Gas Turbines",
      "High-Performance Automotive",
      "Sports Equipment",
      "Medical Prostheses",
      "Marine Fasteners"
    ],
    seoKeywords: "Titanium Grade 5 Pipes Supplier, Ti-6Al-4V Tubes Exporter, ASTM B861 Ti Gr 5 Seamless Pipes Stockist in India, Titanium Alloy Manufacturer Mumbai"
  },
  {
    name: "SS 304 Round Bars",
    slug: "/products/round-bars/ss-304-304l-304h-round-bars",
    categorySlug: "/products/round-bars",
    introParagraphs: [
      "Vedantara Metal & Alloys is a globally recognized manufacturer and supplier of Stainless Steel 304/304L Round Bars in Mumbai, India. These bars are manufactured using premium quality raw materials and advanced machining technologies, ensuring dimensional precision and excellent surface finish.",
      "SS 304 round bars offer superb corrosion resistance, ease of fabrication, and high strength. They are extensively used in machining, structural applications, and the manufacturing of fasteners, shafts, and valves. The low carbon variant (304L) ensures weldability without carbide precipitation.",
      "Our SS 304 round bars conform to ASTM A276 and ASTM A479 standards. We offer them in bright drawn, peeled, turned, and centerless ground finishes, ranging from small diameters to large forged bars."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Chromium (Cr)", value: "18.0 - 20.0" },
      { element: "Nickel (Ni)", value: "8.0 - 10.5" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min" },
      { property: "Yield Strength", value: "205 MPa min" },
      { property: "Elongation", value: "40% min" },
      { property: "Reduction of Area", value: "50% min" }
    ],
    applications: [
      "Machined Components",
      "Pump Shafts",
      "Valves & Fittings",
      "Fasteners (Bolts & Nuts)",
      "Food Processing Equipment",
      "Structural Supports"
    ],
    seoKeywords: "SS 304 Round Bars Supplier, ASTM A276 Stainless Steel 304 Rods Exporter, SS 304 Bright Bars Stockist in India, SS 304 Hex Bars Manufacturer Mumbai"
  },
  {
    name: "SS 316 Round Bars",
    slug: "/products/round-bars/ss-316-316l-316h-316ti-round-bars",
    categorySlug: "/products/round-bars",
    introParagraphs: [
      "Vedantara Metal & Alloys is a leading stockist and manufacturer of Stainless Steel 316/316L Round Bars in India. The addition of molybdenum gives SS 316 superior corrosion resistance compared to 304, particularly against chlorides and industrial solvents.",
      "SS 316 round bars are ideal for components exposed to harsh environments, such as marine parts, chemical processing equipment, and pharmaceutical machinery. The 316L variant offers excellent weldability for fabricated assemblies.",
      "We supply SS 316 round, hex, and square bars in accordance with ASTM A276 and ASTM A479, ensuring high tensile strength and longevity. Custom cut-to-length services and 100% material traceability are standard with all our shipments."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Chromium (Cr)", value: "16.0 - 18.0" },
      { element: "Nickel (Ni)", value: "10.0 - 14.0" },
      { element: "Molybdenum (Mo)", value: "2.00 - 3.00" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min" },
      { property: "Yield Strength", value: "205 MPa min" },
      { property: "Elongation", value: "40% min" },
      { property: "Reduction of Area", value: "50% min" }
    ],
    applications: [
      "Marine Hardware",
      "Chemical Processing Plants",
      "Medical Implants & Devices",
      "Oil & Gas Drilling Components",
      "Pharmaceutical Machinery",
      "Valve Trim"
    ],
    seoKeywords: "SS 316 Round Bars Supplier, ASTM A276 Stainless Steel 316L Rods Exporter, SS 316 Bright Bars Stockist in India, SS 316 Forged Bars Manufacturer Mumbai"
  },
  {
    name: "Titanium Grade 2 Round Bars",
    slug: "/products/round-bars/titanium-grade-2-round-bars",
    categorySlug: "/products/round-bars",
    introParagraphs: [
      "Vedantara Metal & Alloys is a premier manufacturer and exporter of Titanium Grade 2 Round Bars in India. Commercially pure Titanium Grade 2 offers an excellent combination of strength, formability, and weldability while maintaining superior corrosion resistance.",
      "These titanium rods are highly resistant to pitting and crevice corrosion in seawater and chloride-containing environments, making them indispensable in marine and offshore applications. Their high strength-to-weight ratio also makes them suitable for aerospace and medical industries.",
      "Our Titanium Grade 2 round bars are manufactured in accordance with ASTM B348 standards. We offer them in peeled, polished, and centerless ground finishes, ensuring tight dimensional tolerances and premium surface quality."
    ],
    chemicalComposition: [
      { element: "Titanium (Ti)", value: "Balance" },
      { element: "Carbon (C)", value: "0.08 max" },
      { element: "Iron (Fe)", value: "0.30 max" },
      { element: "Nitrogen (N)", value: "0.03 max" },
      { element: "Oxygen (O)", value: "0.25 max" },
      { element: "Hydrogen (H)", value: "0.015 max" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "345 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "275 MPa min" },
      { property: "Elongation", value: "20% min" },
      { property: "Reduction of Area", value: "30% min" }
    ],
    applications: [
      "Marine Shafts & Propellers",
      "Chemical Reactor Components",
      "Surgical Implants",
      "Fastener Manufacturing",
      "Aerospace Fasteners",
      "Desalination Plant Components"
    ],
    seoKeywords: "Titanium Grade 2 Round Bars Supplier, ASTM B348 Ti Gr 2 Rods Exporter, Titanium Bright Bars Stockist in India, Titanium Grade 2 Hex Bars Manufacturer Mumbai"
  }
];
