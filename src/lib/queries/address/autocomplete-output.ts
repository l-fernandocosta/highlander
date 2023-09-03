export interface AddressOutput {
  type: string;
  features: Feature[];
  query: Query;
}

export interface Query {
  text: string;
  parsed: Parsed;
}

export interface Parsed {
  city: string;
  expected_type: string;
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  bbox: number[];
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  datasource: Datasource;
  name?: string;
  country: string;
  country_code: string;
  region?: string;
  state: string;
  city: string;
  lon: number;
  lat: number;
  formatted: string;
  address_line1: string;
  address_line2: string;
  category: string;
  timezone: Timezone;
  plus_code: string;
  plus_code_short?: string;
  result_type: string;
  rank: Rank;
  place_id: string;
  state_district?: string;
  county?: string;
  municipality?: string;
  district?: string;
  suburb?: string;
  state_code?: string;
  postcode?: string;
  hamlet?: string;
}

export interface Rank {
  importance: number;
  confidence: number;
  confidence_city_level: number;
  match_type: string;
}

export interface Timezone {
  name: string;
  offset_STD: string;
  offset_STD_seconds: number;
  offset_DST: string;
  offset_DST_seconds: number;
  abbreviation_STD?: string;
  abbreviation_DST?: string;
}

export interface Datasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
}