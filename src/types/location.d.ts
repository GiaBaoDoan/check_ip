type Location = {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
};

type ASInfo = {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
};

export type IPInfo = {
  ip: string;
  location: Location;
  domains: string[];
  as: ASInfo;
  isp: string;
};
