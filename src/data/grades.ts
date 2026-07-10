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
  },

  // ─── PIPES & TUBES (additional grades) ────────────────────────────────────

  {
    name: "SS 309 / 310 / 310S Pipes & Tubes",
    slug: "/products/pipes-tubes/ss-309-310-310s-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys supplies Stainless Steel 309/310/310S Pipes & Tubes — high chromium-nickel austenitic grades engineered for exceptional performance in high-temperature oxidising environments. SS 310 with 25% Cr and 20% Ni offers outstanding resistance to oxidation up to 1100°C.",
      "SS 310S is the low-carbon version suited for welded applications where carbide precipitation must be avoided. These grades conform to ASTM A312 / ASTM A213 and are commonly specified for furnace components, heat treatment baskets, and petrochemical cracking units.",
      "We supply in seamless and welded form across standard schedules. All pipes come with full material traceability and EN 10204 3.1 mill test certificates."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.20 max (0.08 max for 310S)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.50 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "24.0 – 26.0" },
      { element: "Nickel (Ni)", value: "19.0 – 22.0" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min" },
      { property: "Elongation", value: "35% min" },
      { property: "Hardness (Brinell)", value: "217 HBW max" }
    ],
    applications: [
      "High-Temperature Furnace Parts",
      "Heat Treatment Equipment",
      "Petrochemical Cracking Units",
      "Kilns & Incinerators",
      "Radiant Tubes",
      "Heat Exchangers"
    ],
    seoKeywords: "SS 310S Pipes Supplier India, Stainless Steel 309 Tubes Exporter, ASTM A312 TP310S Seamless Pipes, High Temperature Pipes Manufacturer Mumbai"
  },
  {
    name: "SS 321 / 321H Pipes & Tubes",
    slug: "/products/pipes-tubes/ss-321-321h-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and exports Stainless Steel 321 / 321H Pipes & Tubes — titanium-stabilised austenitic grades designed for continuous service in the 425°C–900°C temperature range. Titanium stabilisation prevents carbide precipitation, eliminating weld decay issues.",
      "SS 321H, with its higher carbon content, offers improved creep resistance for elevated-temperature service. These pipes are widely specified in the aerospace, power generation, and petrochemical industries. Standards: ASTM A312 / A213 / A249.",
      "We supply in annealed condition with full traceability documentation. Size range covers NPS 1/8\" to 24\" in seamless form and up to 48\" in welded form."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.04–0.10 for 321H)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "0.75 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "17.0 – 19.0" },
      { element: "Nickel (Ni)", value: "9.0 – 12.0" },
      { element: "Titanium (Ti)", value: "5×(C+N) min, 0.70 max" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min" },
      { property: "Elongation", value: "35% min" },
      { property: "Hardness (Brinell)", value: "217 HBW max" }
    ],
    applications: [
      "Aerospace Exhaust Systems",
      "Power Generation Equipment",
      "Petrochemical Heat Exchangers",
      "Expansion Bellows",
      "Boiler Superheaters",
      "Chemical Reactors"
    ],
    seoKeywords: "SS 321 Pipes Supplier, Stainless Steel 321H Tubes Exporter, ASTM A312 TP321 Seamless Pipes Manufacturer India, Titanium Stabilised Pipes Mumbai"
  },
  {
    name: "Duplex Steel S31803 / S32205 Pipes & Tubes",
    slug: "/products/pipes-tubes/duplex-steel-s31803-s32205-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys supplies Duplex Steel S31803 / S32205 (UNS S31803 / S32205) Pipes & Tubes — a two-phase austenitic-ferritic stainless steel combining high strength with excellent resistance to pitting, crevice corrosion, and stress corrosion cracking.",
      "Duplex 2205 offers roughly twice the yield strength of standard austenitic grades, enabling weight savings through thinner wall sections. Its Pitting Resistance Equivalent Number (PREN) of ~35 makes it suitable for aggressive chloride environments including seawater.",
      "Our Duplex pipes comply with ASTM A790 / A928 and are supplied in solution-annealed condition with full chemical, mechanical, and impact test reports. Size range: NPS 1/4\" to 24\"."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.030 max" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.030 max" },
      { element: "Sulfur (S)", value: "0.020 max" },
      { element: "Chromium (Cr)", value: "21.0 – 23.0" },
      { element: "Nickel (Ni)", value: "4.5 – 6.5" },
      { element: "Molybdenum (Mo)", value: "2.5 – 3.5" },
      { element: "Nitrogen (N)", value: "0.08 – 0.20" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "620 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "450 MPa min" },
      { property: "Elongation", value: "25% min" },
      { property: "Hardness (Brinell)", value: "293 HBW max" }
    ],
    applications: [
      "Offshore Oil & Gas",
      "Desalination Plants",
      "Chemical Processing",
      "Pulp & Paper Industry",
      "Seawater Heat Exchangers",
      "Marine Piping Systems"
    ],
    seoKeywords: "Duplex Steel Pipes Supplier India, S31803 S32205 Tubes Exporter, ASTM A790 Duplex Seamless Pipes Manufacturer Mumbai, 2205 Duplex Pipes Stockist"
  },
  {
    name: "Super Duplex S32750 / S32760 Pipes & Tubes",
    slug: "/products/pipes-tubes/super-duplex-s32750-s32760-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and exports Super Duplex Stainless Steel S32750 (2507) / S32760 Pipes & Tubes. Super Duplex grades feature a PREN ≥40, providing exceptional resistance to pitting and crevice corrosion in highly aggressive chloride environments such as seawater and process chemicals.",
      "These grades offer significantly higher strength than standard duplex — with yield strengths above 550 MPa — allowing for reduced wall thicknesses and weight savings in critical piping systems. They are the material of choice for subsea umbilicals, risers, and flowlines.",
      "Our Super Duplex pipes conform to ASTM A790 / A928 and are supplied in solution-annealed condition with Ferrite Number (FN) verification and full impact test reports."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.030 max" },
      { element: "Manganese (Mn)", value: "1.20 max" },
      { element: "Silicon (Si)", value: "0.80 max" },
      { element: "Phosphorus (P)", value: "0.035 max" },
      { element: "Sulfur (S)", value: "0.020 max" },
      { element: "Chromium (Cr)", value: "24.0 – 26.0" },
      { element: "Nickel (Ni)", value: "6.0 – 8.0" },
      { element: "Molybdenum (Mo)", value: "3.0 – 5.0" },
      { element: "Nitrogen (N)", value: "0.24 – 0.32" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "800 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "550 MPa min" },
      { property: "Elongation", value: "15% min" },
      { property: "Hardness (Brinell)", value: "310 HBW max" }
    ],
    applications: [
      "Subsea Umbilicals & Risers",
      "Offshore Platforms",
      "Desalination High-Pressure Piping",
      "Seawater Cooling Systems",
      "Chemical Process Equipment",
      "Flue Gas Desulfurisation"
    ],
    seoKeywords: "Super Duplex S32750 Pipes Supplier India, 2507 Stainless Tubes Exporter, ASTM A790 Super Duplex Seamless Pipes Manufacturer, S32760 Pipes Stockist Mumbai"
  },
  {
    name: "Titanium Grade 5 (Ti-6Al-4V) Pipes & Tubes",
    slug: "/products/pipes-tubes/titanium-grade-5-ti-6al-4v-pipes-tubes",
    categorySlug: "/products/pipes-tubes",
    introParagraphs: [
      "Vedantara Metal & Alloys is a premier supplier of Titanium Grade 5 (Ti-6Al-4V) Pipes & Tubes in India. Grade 5 is the most widely used titanium alloy — accounting for over 50% of world titanium consumption — due to its excellent combination of high strength, low weight, and good fabricability.",
      "Comprising 6% Aluminium and 4% Vanadium, these pipes are extensively used in aerospace, motorsport, and high-performance industries where an exceptional strength-to-weight ratio is mandatory. They perform reliably at temperatures up to 400°C.",
      "Our Titanium Grade 5 seamless pipes conform to ASTM B861, with full NDT (ultrasonic, eddy current) and chemical/mechanical certification."
    ],
    chemicalComposition: [
      { element: "Titanium (Ti)", value: "Balance" },
      { element: "Aluminium (Al)", value: "5.50 – 6.75" },
      { element: "Vanadium (V)", value: "3.50 – 4.50" },
      { element: "Iron (Fe)", value: "0.40 max" },
      { element: "Oxygen (O)", value: "0.20 max" },
      { element: "Carbon (C)", value: "0.08 max" },
      { element: "Nitrogen (N)", value: "0.05 max" },
      { element: "Hydrogen (H)", value: "0.015 max" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "895 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "828 MPa min" },
      { property: "Elongation", value: "10% min" }
    ],
    applications: [
      "Aerospace Components",
      "Gas Turbines",
      "High-Performance Automotive",
      "Sports Equipment",
      "Medical Prostheses",
      "Marine Fasteners"
    ],
    seoKeywords: "Titanium Grade 5 Pipes Supplier, Ti-6Al-4V Tubes Exporter, ASTM B861 Ti Gr 5 Seamless Pipes Stockist India, Titanium Alloy Manufacturer Mumbai"
  },

  // ─── ROUND BARS (additional grades) ──────────────────────────────────────

  {
    name: "SS 316 / 316L / 316Ti Round Bars",
    slug: "/products/round-bars/ss-316-316l-316ti-round-bars",
    categorySlug: "/products/round-bars",
    introParagraphs: [
      "Vedantara Metal & Alloys is a leading stockist and manufacturer of Stainless Steel 316/316L/316Ti Round Bars in India. The addition of molybdenum gives SS 316 superior corrosion resistance compared to 304, particularly against chlorides and industrial solvents.",
      "SS 316 round bars are ideal for components exposed to harsh environments, such as marine hardware, chemical processing equipment, and pharmaceutical machinery. The 316L variant offers excellent weldability for fabricated assemblies; 316Ti is stabilised with titanium for high-temperature service.",
      "We supply round, hex, and square bars per ASTM A276 and ASTM A479. Custom cut-to-length services and EN 10204 3.1 mill test certificates are standard with all our shipments."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 316L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "0.75 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "16.0 – 18.0" },
      { element: "Nickel (Ni)", value: "10.0 – 14.0" },
      { element: "Molybdenum (Mo)", value: "2.00 – 3.00" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min" },
      { property: "Elongation", value: "30% min" },
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
    seoKeywords: "SS 316 Round Bars Supplier, ASTM A276 Stainless Steel 316L Rods Exporter, SS 316 Bright Bars Stockist India, SS 316 Forged Bars Manufacturer Mumbai"
  },
  {
    name: "SS 904L Round Bars",
    slug: "/products/round-bars/ss-904l-round-bars",
    categorySlug: "/products/round-bars",
    introParagraphs: [
      "Vedantara Metal & Alloys supplies SS 904L (UNS N08904) Round Bars — a high-alloy austenitic stainless steel with exceptional resistance to strong acids, particularly sulfuric and phosphoric acid across a broad concentration range.",
      "904L is frequently specified in the chemical, fertiliser, and oil refinery industries where standard 316L falls short. It is fully austenitic with excellent toughness at cryogenic temperatures and good weldability without post-weld heat treatment.",
      "Our 904L bars conform to ASTM B649 / ASTM A276 and are supplied in annealed condition with full 3.1 mill test certificates."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.020 max" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.035 max" },
      { element: "Chromium (Cr)", value: "19.0 – 23.0" },
      { element: "Nickel (Ni)", value: "23.0 – 28.0" },
      { element: "Molybdenum (Mo)", value: "4.0 – 5.0" },
      { element: "Copper (Cu)", value: "1.0 – 2.0" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "490 MPa min" },
      { property: "Yield Strength (0.2% Offset)", value: "220 MPa min" },
      { property: "Elongation", value: "35% min" },
      { property: "Hardness (Rockwell B)", value: "70 – 90 HRB" }
    ],
    applications: [
      "Sulfuric & Phosphoric Acid Plants",
      "Fertiliser Manufacturing",
      "Offshore & Marine",
      "Oil Refinery Piping",
      "Pulp & Paper",
      "Pharmaceutical Vessels"
    ],
    seoKeywords: "SS 904L Round Bars Supplier India, UNS N08904 Stainless Steel Rods Exporter, ASTM B649 904L Bars Manufacturer Mumbai, High Alloy SS Bars Stockist"
  },
  {
    name: "SS 15-5 PH / 17-4 PH Round Bars",
    slug: "/products/round-bars/ss-15-5-ph-17-4-ph-round-bars",
    categorySlug: "/products/round-bars",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and exports Stainless Steel 15-5 PH and 17-4 PH (precipitation hardening) Round Bars. These martensitic PH grades offer an exceptional combination of high strength, hardness, and corrosion resistance that can be tailored by heat treatment condition.",
      "17-4 PH (UNS S17400) is the most widely used precipitation hardening stainless steel. In condition H900, it achieves tensile strengths approaching 1310 MPa while maintaining good corrosion resistance. 15-5 PH (UNS S15500) offers improved toughness in the same strength range.",
      "Our PH bars conform to ASTM A564 and AMS 5643/5659 standards, supplied in solution-annealed (condition A) or aged condition as specified."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.07 max" },
      { element: "Manganese (Mn)", value: "1.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Chromium (Cr)", value: "14.0–15.5 (15-5PH) / 15.5–17.5 (17-4PH)" },
      { element: "Nickel (Ni)", value: "3.5–5.5 (15-5PH) / 3.0–5.0 (17-4PH)" },
      { element: "Copper (Cu)", value: "2.5 – 4.5" },
      { element: "Niobium (Nb)", value: "0.15 – 0.45" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (H900)", value: "1310 MPa min" },
      { property: "Yield Strength (H900)", value: "1170 MPa min" },
      { property: "Elongation (H900)", value: "10% min" },
      { property: "Tensile Strength (H1150)", value: "1000 MPa min" },
      { property: "Yield Strength (H1150)", value: "795 MPa min" }
    ],
    applications: [
      "Aerospace Structural Components",
      "Turbine Blades & Discs",
      "Nuclear Waste Canisters",
      "Chemical Processing Pumps",
      "Medical Instruments",
      "Oil & Gas Valves"
    ],
    seoKeywords: "17-4 PH Round Bars Supplier India, 15-5PH Stainless Steel Rods Exporter, ASTM A564 Precipitation Hardening Bars Manufacturer Mumbai, PH SS Bars Stockist"
  },
  {
    name: "Titanium Grade 5 (Ti-6Al-4V) Round Bars",
    slug: "/products/round-bars/titanium-grade-5-ti-6al-4v-round-bars",
    categorySlug: "/products/round-bars",
    introParagraphs: [
      "Vedantara Metal & Alloys is a premier supplier of Titanium Grade 5 (Ti-6Al-4V) Round Bars in India. Grade 5 is the most widely used titanium alloy worldwide, prized for its high strength, low density, and excellent fatigue resistance.",
      "These bars are used extensively in aerospace structural components, biomedical implants, and high-performance engineering applications. The alloy can be heat treated to achieve tensile strengths exceeding 1100 MPa while remaining 45% lighter than steel.",
      "Our Titanium Gr 5 bars conform to ASTM B348 / AMS 4928, available in annealed or solution treated & aged condition."
    ],
    chemicalComposition: [
      { element: "Titanium (Ti)", value: "Balance" },
      { element: "Aluminium (Al)", value: "5.50 – 6.75" },
      { element: "Vanadium (V)", value: "3.50 – 4.50" },
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
      { property: "Reduction of Area", value: "20% min" }
    ],
    applications: [
      "Aerospace Structural Parts",
      "Turbine Engine Components",
      "Biomedical Implants",
      "Racing & Motorsport",
      "Marine Fasteners",
      "High-Performance Springs"
    ],
    seoKeywords: "Titanium Grade 5 Round Bars Supplier, ASTM B348 Ti-6Al-4V Rods Exporter, Ti Gr 5 Bars Stockist India, Titanium Alloy Bars Manufacturer Mumbai"
  },

  // ─── SHEETS & PLATES ─────────────────────────────────────────────────────

  {
    name: "SS 304 / 304L / 304H Sheets & Plates",
    slug: "/products/sheets-coils/ss-304-304l-304h-sheets-plates",
    categorySlug: "/products/sheets-coils",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and supplies Stainless Steel 304/304L/304H Sheets & Plates — the most versatile and widely used flat-rolled austenitic stainless steel product. Ideal for applications demanding excellent formability, weldability, and corrosion resistance.",
      "Available in hot-rolled (No.1), cold-rolled (2B, 2D, BA), and polished finishes (No.4, No.8 mirror). Sheet thicknesses range from 0.3mm foil to 100mm heavy plate. All grades conform to ASTM A240 / ASME SA240.",
      "We maintain large ready stock of standard sizes and offer custom cut-to-size service. All plates are supplied with EN 10204 3.1 mill test certificates."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 304L; 0.04–0.10 for 304H)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "0.75 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "18.0 – 20.0" },
      { element: "Nickel (Ni)", value: "8.0 – 10.5" },
      { element: "Nitrogen (N)", value: "0.10 max" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for 304L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for 304L)" },
      { property: "Elongation", value: "40% min (in 2 in.)" },
      { property: "Hardness (Brinell)", value: "201 HBW max" }
    ],
    applications: [
      "Kitchen Equipment & Sinks",
      "Food Processing Plants",
      "Architectural Cladding",
      "Chemical Storage Tanks",
      "Pressure Vessels",
      "Pharmaceutical Equipment"
    ],
    seoKeywords: "SS 304 Sheets Supplier India, ASTM A240 304L Stainless Steel Plates Exporter, SS 304 Coils Manufacturer Mumbai, Stainless Steel 304 HR Plates Stockist"
  },
  {
    name: "SS 316 / 316L / 316Ti Sheets & Plates",
    slug: "/products/sheets-coils/ss-316-316l-316ti-sheets-plates",
    categorySlug: "/products/sheets-coils",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and exports Stainless Steel 316/316L/316Ti Sheets & Plates — the molybdenum-bearing grade offering enhanced resistance to chlorides, pitting, and crevice corrosion compared to 304. Widely specified for marine, chemical, and pharmaceutical industries.",
      "Available in HR, CR, 2B, BA, and No.4 finishes. 316L with ultra-low carbon is ideal for welded pressure vessel construction. 316Ti with titanium stabilisation is preferred for elevated-temperature service above 425°C. Standards: ASTM A240 / ASME SA240.",
      "We maintain ready stock in thicknesses from 0.5mm to 100mm and widths to 3500mm. Custom profiling, laser cutting, and bending services available."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 316L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "0.75 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "16.0 – 18.0" },
      { element: "Nickel (Ni)", value: "10.0 – 14.0" },
      { element: "Molybdenum (Mo)", value: "2.00 – 3.00" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for 316L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for 316L)" },
      { property: "Elongation", value: "40% min" },
      { property: "Hardness (Brinell)", value: "217 HBW max" }
    ],
    applications: [
      "Marine & Offshore Structures",
      "Chemical Plant Equipment",
      "Pharmaceutical Processing",
      "Food Processing",
      "Architectural Applications",
      "Oil & Gas Equipment"
    ],
    seoKeywords: "SS 316 Sheets Supplier India, ASTM A240 316L Stainless Steel Plates Exporter, SS 316 Coils Manufacturer Mumbai, Stainless Steel 316Ti HR Plates Stockist"
  },
  {
    name: "Titanium Grade 2 Sheets & Plates",
    slug: "/products/sheets-coils/titanium-grade-2-sheets-plates",
    categorySlug: "/products/sheets-coils",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures Titanium Grade 2 Sheets & Plates — commercially pure titanium in flat-rolled form offering excellent corrosion resistance, good ductility, and weldability. Ideal for applications where formability is critical alongside chemical resistance.",
      "Our Titanium Gr 2 sheets comply with ASTM B265 (strip, sheet, plate). Available in hot-rolled and cold-rolled conditions, from 0.5mm foil to 50mm plate, supplied in annealed condition with full chemical and mechanical certification.",
      "Commonly used in heat exchanger construction, chemical plant linings, and medical device manufacturing. We offer custom cut-to-size and water-jet profiling services."
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
      "Heat Exchanger Plates",
      "Chemical Plant Linings",
      "Desalination Equipment",
      "Aerospace Skin Panels",
      "Medical Device Enclosures",
      "Electrochemical Processing"
    ],
    seoKeywords: "Titanium Grade 2 Sheets Supplier India, ASTM B265 Ti Gr 2 Plates Exporter, Titanium Sheets Manufacturer Mumbai, Commercially Pure Titanium Plates Stockist"
  },

  // ─── FLANGES ─────────────────────────────────────────────────────────────

  {
    name: "SS 304 / 304L / 304H Flanges",
    slug: "/products/flanges/ss-304-304l-304h-flanges",
    categorySlug: "/products/flanges",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and supplies Stainless Steel 304/304L/304H Flanges in all standard types — Slip On, Weld Neck, Blind, Socket Weld, Threaded, Lap Joint, and Orifice. These are the most commonly specified stainless flanges in food, chemical, and general process industries.",
      "All flanges are manufactured to ASME B16.5 (up to 24\") and ASME B16.47 (24\"–60\") in pressure classes 150# through 2500#. Facing options include Raised Face (RF), Ring Type Joint (RTJ), and Flat Face (FF).",
      "Our forged SS 304 flanges are produced from quality-certified forgings and tested per ASTM A182 / ASME SA182. Every flange undergoes dimensional inspection, hydrostatic testing, and PMI verification before despatch."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for F304L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "18.0 – 20.0" },
      { element: "Nickel (Ni)", value: "8.0 – 11.0" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for F304L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for F304L)" },
      { property: "Elongation", value: "30% min" },
      { property: "Hardness (Brinell)", value: "187 HBW max" }
    ],
    applications: [
      "Chemical Process Piping",
      "Food & Beverage Plants",
      "Water Treatment Systems",
      "HVAC Systems",
      "Oil & Gas Installations",
      "Pharmaceutical Pipelines"
    ],
    seoKeywords: "SS 304 Flanges Supplier India, ASME B16.5 Stainless Steel 304L Flanges Exporter, Weld Neck Flanges Manufacturer Mumbai, Forged SS 304 Flanges Stockist"
  },
  {
    name: "SS 316 / 316L / 316Ti Flanges",
    slug: "/products/flanges/ss-316-316l-316ti-flanges",
    categorySlug: "/products/flanges",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures Stainless Steel 316/316L/316Ti Flanges to ASTM A182 / ASME SA182. The molybdenum addition in SS 316 provides superior resistance to pitting and crevice corrosion in chloride environments, making these flanges the preferred choice for marine and offshore applications.",
      "Available in all standard types and facings per ASME B16.5 and B16.47. Pressure classes from 150# to 2500#. The 316L grade is ideal for corrosive environments where post-weld heat treatment is impractical.",
      "Every flange is PMI tested, dimensionally inspected, and hydrostatic tested before shipment. Full material traceability with EN 10204 3.1 documentation is supplied as standard."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for F316L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "16.0 – 18.0" },
      { element: "Nickel (Ni)", value: "10.0 – 14.0" },
      { element: "Molybdenum (Mo)", value: "2.00 – 3.00" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for F316L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for F316L)" },
      { property: "Elongation", value: "30% min" },
      { property: "Hardness (Brinell)", value: "217 HBW max" }
    ],
    applications: [
      "Marine Piping Systems",
      "Offshore Platforms",
      "Chemical & Petrochemical Plants",
      "Pharmaceutical Pipelines",
      "Desalination Plants",
      "Pulp & Paper Mills"
    ],
    seoKeywords: "SS 316 Flanges Supplier India, ASME B16.5 Stainless Steel 316L Flanges Exporter, Blind Flanges Manufacturer Mumbai, Forged SS 316 Flanges Stockist"
  },

  // ─── FORGED FITTINGS ─────────────────────────────────────────────────────

  {
    name: "SS 304 / 304L Forged Fittings",
    slug: "/products/forged-fittings/ss-304-304l-forged-fittings",
    categorySlug: "/products/forged-fittings",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures Stainless Steel 304/304L Forged Fittings including elbows, tees, couplings, unions, plugs, caps, nipples, and bushings. Produced from quality-certified forgings and designed for high-pressure, high-temperature piping applications.",
      "All fittings conform to ASME B16.11 (socket weld & threaded) and MSS SP-83. Available in pressure classes 2000#, 3000#, 6000#, and 9000# in sizes ¼\" to 4\". The 304L grade ensures excellent weldability for fabricated assemblies.",
      "Our forged fittings undergo 100% dimensional inspection, hydrostatic pressure testing, and PMI before despatch. All consignments include EN 10204 3.1 mill test certificates."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 304L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "18.0 – 20.0" },
      { element: "Nickel (Ni)", value: "8.0 – 11.0" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for 304L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for 304L)" },
      { property: "Elongation", value: "30% min" }
    ],
    applications: [
      "Chemical Process Piping",
      "Food & Dairy Processing",
      "Water Treatment Systems",
      "Oil & Gas Installations",
      "Pharmaceutical Plants",
      "Power Generation"
    ],
    seoKeywords: "SS 304 Forged Fittings Supplier India, ASME B16.11 Stainless Steel Fittings Exporter, 3000lb Socket Weld Fittings Manufacturer Mumbai, Forged Elbows Tees Stockist"
  },
  {
    name: "SS 316 / 316L Forged Fittings",
    slug: "/products/forged-fittings/ss-316-316l-forged-fittings",
    categorySlug: "/products/forged-fittings",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures Stainless Steel 316/316L Forged Fittings to ASME B16.11. The molybdenum content in SS 316 provides enhanced corrosion resistance in chloride and acidic environments, making these fittings ideal for chemical, marine, and pharmaceutical applications.",
      "Available in socket weld and threaded configurations, pressure classes 2000# to 9000#, sizes ¼\" to 4\". All fittings are forged from certified bar stock and heat treated per applicable ASTM / ASME standards.",
      "Full hydrostatic testing, dimensional inspection, and PMI verification are carried out before despatch. EN 10204 3.1 certificates accompany every order."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 316L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "16.0 – 18.0" },
      { element: "Nickel (Ni)", value: "10.0 – 14.0" },
      { element: "Molybdenum (Mo)", value: "2.00 – 3.00" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for 316L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for 316L)" },
      { property: "Elongation", value: "30% min" }
    ],
    applications: [
      "Marine Piping Systems",
      "Chemical Processing",
      "Pharmaceutical Plants",
      "Desalination Equipment",
      "Oil & Gas Refineries",
      "Nuclear Applications"
    ],
    seoKeywords: "SS 316 Forged Fittings Supplier India, ASME B16.11 Stainless Steel 316L Fittings Exporter, 6000lb Socket Weld Fittings Manufacturer Mumbai, Forged Tees Couplings Stockist"
  },

  // ─── BUTTWELD FITTINGS ────────────────────────────────────────────────────

  {
    name: "SS 304 / 304L Buttweld Fittings",
    slug: "/products/buttweld-fittings/ss-304-304l-buttweld-fittings",
    categorySlug: "/products/buttweld-fittings",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures Stainless Steel 304/304L Buttweld Fittings including 90° and 45° elbows, equal and reducing tees, concentric and eccentric reducers, caps, and stub ends. These fittings are manufactured to ASME B16.9 standards.",
      "Available in sizes ½\" to 48\" across all standard wall thicknesses (SCH 5 to SCH XXS). Seamless and welded construction available. The low-carbon 304L grade ensures weldability without post-weld heat treatment for most applications.",
      "All fittings undergo radiography, PMI, hydrostatic, and dimensional inspection before despatch. Full EN 10204 3.1 certification and third-party inspection on request."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 304L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "18.0 – 20.0" },
      { element: "Nickel (Ni)", value: "8.0 – 11.0" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (485 MPa for 304L)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min (170 MPa for 304L)" },
      { property: "Elongation", value: "35% min" }
    ],
    applications: [
      "Oil & Gas Pipelines",
      "Petrochemical Plants",
      "Chemical Processing",
      "Power Generation",
      "Marine Piping",
      "Pharmaceutical Plants"
    ],
    seoKeywords: "SS 304 Buttweld Fittings Supplier India, ASME B16.9 Stainless Steel Elbows Exporter, SS 304L Seamless Tees Manufacturer Mumbai, Buttweld Reducers Stockist"
  },

  // ─── FASTENERS ────────────────────────────────────────────────────────────

  {
    name: "SS 304 / 304L Fasteners",
    slug: "/products/fasteners/ss-304-304l-fasteners",
    categorySlug: "/products/fasteners",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and supplies Stainless Steel 304/304L Fasteners — including hex bolts, stud bolts, hex nuts, heavy hex nuts, washers, threaded rods, and anchor bolts. These are the most widely used stainless fasteners across general industrial, food processing, and chemical applications.",
      "Our SS 304 fasteners conform to ASTM A193 (bolts) and ASTM A194 (nuts) standards. Available in all metric and imperial thread forms, from M3 to M100, and custom lengths.",
      "All fasteners undergo hardness testing, dimensional checking, and salt spray testing before despatch. Full material traceability and EN 10204 3.1 certificates accompany every order."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 304L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "18.0 – 20.0" },
      { element: "Nickel (Ni)", value: "8.0 – 10.5" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (B8 Cl.1)", value: "515 MPa min" },
      { property: "Yield Strength (B8 Cl.1)", value: "205 MPa min" },
      { property: "Tensile Strength (B8 Cl.2)", value: "655 MPa min" },
      { property: "Yield Strength (B8 Cl.2)", value: "450 MPa min" },
      { property: "Elongation", value: "30% min (Cl.1) / 20% min (Cl.2)" }
    ],
    applications: [
      "Chemical Plant Assembly",
      "Food Processing Equipment",
      "Water Treatment Systems",
      "HVAC Installations",
      "General Construction",
      "Marine Deck Hardware"
    ],
    seoKeywords: "SS 304 Fasteners Supplier India, ASTM A193 B8 Stainless Steel Bolts Exporter, SS 304 Hex Bolts Nuts Manufacturer Mumbai, Stud Bolts Stockist"
  },
  {
    name: "SS 316 / 316L Fasteners",
    slug: "/products/fasteners/ss-316-316l-fasteners",
    categorySlug: "/products/fasteners",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures Stainless Steel 316/316L Fasteners — the marine-grade fastener of choice wherever chloride resistance is critical. The molybdenum content provides significantly better resistance to pitting and crevice corrosion than SS 304.",
      "Our SS 316 fasteners are manufactured to ASTM A193 Grade B8M (bolts) and ASTM A194 Grade 8M (nuts). Available in all standard thread forms and sizes M3–M100. The 316L grade is preferred for welded and high-corrosion service.",
      "All fasteners are 100% dimensionally checked, hardness tested, and salt spray tested (500-hour minimum for marine-grade). EN 10204 3.1 certificates and NABL lab test reports provided with each order."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 316L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "1.00 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "16.0 – 18.0" },
      { element: "Nickel (Ni)", value: "10.0 – 14.0" },
      { element: "Molybdenum (Mo)", value: "2.00 – 3.00" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (B8M Cl.1)", value: "515 MPa min" },
      { property: "Yield Strength (B8M Cl.1)", value: "205 MPa min" },
      { property: "Tensile Strength (B8M Cl.2)", value: "655 MPa min" },
      { property: "Yield Strength (B8M Cl.2)", value: "450 MPa min" },
      { property: "Elongation", value: "30% min (Cl.1) / 20% min (Cl.2)" }
    ],
    applications: [
      "Marine & Offshore Structures",
      "Chemical Plant Assembly",
      "Oil & Gas Installations",
      "Pharmaceutical Equipment",
      "Desalination Plants",
      "Nuclear Power Plants"
    ],
    seoKeywords: "SS 316 Fasteners Supplier India, ASTM A193 B8M Stainless Steel Bolts Exporter, SS 316L Hex Bolts Nuts Manufacturer Mumbai, Marine Grade Fasteners Stockist"
  },

  // ─── HOLLOW SECTIONS ─────────────────────────────────────────────────────

  {
    name: "Stainless Steel Square Hollow Sections (SHS)",
    slug: "/products/hollow-sections/stainless-steel-square-hollow-sections",
    categorySlug: "/products/hollow-sections",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and supplies Stainless Steel Square Hollow Sections (SHS) in grades SS 304/304L, SS 316/316L, and other alloys. SHS combines structural efficiency with the corrosion resistance of stainless steel, making it the preferred choice for architectural and structural applications.",
      "Our square hollow sections conform to EN 10219-2 (cold formed) and ASTM A500. Available in sizes from 20×20mm to 300×300mm, wall thickness 1.5mm to 20mm, in standard 6m lengths or custom cut lengths.",
      "Applications span architectural facades, furniture, handrails, structural frames, and chemical plant supports. All sections are supplied with dimensional and chemical certification."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (grade dependent)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "0.75 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "16.0 – 20.0 (grade dependent)" },
      { element: "Nickel (Ni)", value: "8.0 – 14.0 (grade dependent)" },
      { element: "Molybdenum (Mo)", value: "2.0 – 3.0 (SS 316 only)" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "515 MPa min (SS 304/316)" },
      { property: "Yield Strength (0.2% Offset)", value: "205 MPa min" },
      { property: "Elongation", value: "35% min" }
    ],
    applications: [
      "Architectural Facades & Cladding",
      "Structural Frames",
      "Handrails & Balustrades",
      "Chemical Plant Supports",
      "Food Processing Frameworks",
      "Interior & Exterior Furniture"
    ],
    seoKeywords: "Stainless Steel SHS Supplier India, SS 304 Square Hollow Sections Exporter, EN 10219 Stainless Hollow Sections Manufacturer Mumbai, SS 316 Hollow Sections Stockist"
  },

  // ─── WIRES ────────────────────────────────────────────────────────────────

  {
    name: "SS 304 / 304L Wires",
    slug: "/products/wires/ss-304-304l-wires",
    categorySlug: "/products/wires",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures and exports Stainless Steel 304/304L Wires — the most versatile austenitic stainless wire grade. Used across industries from general engineering to filtration, weaving, and welding electrode manufacturing.",
      "Available in cold-drawn, annealed, bright annealed, and tempered finishes. Diameter range: 0.05mm to 16mm. All wire conforms to ASTM A580 (SS wire) and ASTM A313 (spring wire). Supplied in coils, reels, spools, and cut lengths.",
      "Our SS 304 wire is produced from certified billets and tested for tensile strength, elongation, and dimensional accuracy. EN 10204 3.1 certificates are provided with each order."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 304L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "0.75 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "18.0 – 20.0" },
      { element: "Nickel (Ni)", value: "8.0 – 10.5" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (annealed)", value: "515 – 760 MPa" },
      { property: "Tensile Strength (hard drawn)", value: "up to 1900 MPa (diameter dependent)" },
      { property: "Elongation (annealed)", value: "35% min" }
    ],
    applications: [
      "Welding Electrode Manufacturing",
      "Filtration Mesh & Screens",
      "Springs & Precision Components",
      "Rope & Cable Manufacturing",
      "Weaving & Knitting",
      "General Fabrication"
    ],
    seoKeywords: "SS 304 Wire Supplier India, ASTM A580 Stainless Steel Wire Exporter, SS 304L Cold Drawn Wire Manufacturer Mumbai, Stainless Steel Spring Wire Stockist"
  },
  {
    name: "SS 316 / 316L Wires",
    slug: "/products/wires/ss-316-316l-wires",
    categorySlug: "/products/wires",
    introParagraphs: [
      "Vedantara Metal & Alloys manufactures Stainless Steel 316/316L Wires — the marine-grade wire with excellent resistance to chlorides and industrial chemicals. The molybdenum content makes 316 wire the preferred choice for offshore, marine, and chemical plant applications.",
      "Available in bright drawn, annealed, and spring temper finishes, diameter range 0.05mm to 16mm. Conforms to ASTM A580 and ASTM A313. Supplied in coils, spools, or cut straight lengths.",
      "All wire is tested for tensile strength, elongation, and surface quality. EN 10204 3.1 certificates accompany every consignment."
    ],
    chemicalComposition: [
      { element: "Carbon (C)", value: "0.08 max (0.035 max for 316L)" },
      { element: "Manganese (Mn)", value: "2.00 max" },
      { element: "Silicon (Si)", value: "0.75 max" },
      { element: "Phosphorus (P)", value: "0.045 max" },
      { element: "Sulfur (S)", value: "0.030 max" },
      { element: "Chromium (Cr)", value: "16.0 – 18.0" },
      { element: "Nickel (Ni)", value: "10.0 – 14.0" },
      { element: "Molybdenum (Mo)", value: "2.00 – 3.00" }
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (annealed)", value: "515 – 760 MPa" },
      { property: "Tensile Strength (hard drawn)", value: "up to 1850 MPa (diameter dependent)" },
      { property: "Elongation (annealed)", value: "35% min" }
    ],
    applications: [
      "Marine & Offshore Rigging",
      "Chemical Plant Mesh",
      "Medical Wire Sutures",
      "Architectural Rope Systems",
      "Spring Manufacturing",
      "Welding Wire / MIG/TIG Filler"
    ],
    seoKeywords: "SS 316 Wire Supplier India, ASTM A580 Stainless Steel 316L Wire Exporter, Marine Grade Wire Manufacturer Mumbai, SS 316 Spring Wire Stockist"
  }
];
