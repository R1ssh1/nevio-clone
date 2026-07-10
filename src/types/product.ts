// src/types/product.ts

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory?: string;
  overview?: string;
  images?: string[]; // relative paths to assets
  specifications?: Record<string, string>;
  standards?: string[];
  grades?: string[];
  dimensions?: Record<string, string>;
  chemicalComposition?: Record<string, string>;
  mechanicalProperties?: Record<string, string>;
  physicalProperties?: Record<string, string>;
  applications?: string[];
  availableForms?: string[];
  equivalentGrades?: string[];
  relatedProducts?: string[]; // slugs of related products
}
