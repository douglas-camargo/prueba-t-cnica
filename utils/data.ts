export interface DataItem {
  name: string;
  codeBook: string;
  codePms: string;
  uds: number;
  guests: string;
  ratePlan: string;
  amenities: number;
  state: string;
  id: number;
}

export const dataBody: DataItem[] = [
  {
    name: "Habitacion #1",
    codeBook: "00010",
    codePms: "00010",
    uds: 4,
    guests: "3",
    ratePlan: "2 planes",
    amenities: 12,
    state: "Pendiente",
    id: 1,
  },
  {
    name: "Habitacion #2",
    codeBook: "00020",
    codePms: "00020",
    uds: 5,
    guests: "3",
    ratePlan: "2 planes",
    amenities: 12,
    state: "Pendiente",
    id: 2,
  },
  {
    name: "Habitacion #3",
    codeBook: "00030",
    codePms: "00030",
    uds: 4,
    guests: "3",
    ratePlan: "2 planes",
    amenities: 12,
    state: "Oculto",
    id: 3,
  },
  {
    name: "Habitacion #4",
    codeBook: "00040",
    codePms: "00040",
    uds: 4,
    guests: "3",
    ratePlan: "2 planes",
    amenities: 12,
    state: "Pendiente",
    id: 4,
  },
  {
    name: "Habitacion #5",
    codeBook: "00050",
    codePms: "00050",
    uds: 6,
    guests: "4",
    ratePlan: "4 planes",
    amenities: 24,
    state: "Oculto",
    id: 5,
  },
  {
    name: "Habitacion #6",
    codeBook: "00060",
    codePms: "00060",
    uds: 2,
    guests: "1",
    ratePlan: "1 plan",
    amenities: 8,
    state: "Publicado",
    id: 6,
  },
  {
    name: "Habitacion #7",
    codeBook: "00070",
    codePms: "00070",
    uds: 5,
    guests: "3",
    ratePlan: "3 planes",
    amenities: 15,
    state: "Pendiente",
    id: 7,
  },
  {
    name: "Habitacion #8",
    codeBook: "00080",
    codePms: "00080",
    uds: 7,
    guests: "4",
    ratePlan: "4 planes",
    amenities: 28,
    state: "Oculto",
    id: 8,
  },
  {
    name: "Habitacion #9",
    codeBook: "00090",
    codePms: "00090",
    uds: 3,
    guests: "2",
    ratePlan: "2 planes",
    amenities: 10,
    state: "Publicado",
    id: 9,
  },
  {
    name: "Habitacion #10",
    codeBook: "00100",
    codePms: "00100",
    uds: 6,
    guests: "4",
    ratePlan: "3 planes",
    amenities: 18,
    state: "Oculto",
    id: 10,
  },
  {
    name: "Habitacion #11",
    codeBook: "00110",
    codePms: "00110",
    uds: 4,
    guests: "3",
    ratePlan: "1 plan",
    amenities: 12,
    state: "completar",
    id: 11,
  },
  {
    name: "Habitacion #12",
    codeBook: "00120",
    codePms: "00120",
    uds: 8,
    guests: "5",
    ratePlan: "4 planes",
    amenities: 26,
    state: "Publicado",
    id: 12,
  },
  {
    name: "Habitacion #13",
    codeBook: "00130",
    codePms: "00130",
    uds: 5,
    guests: "3",
    ratePlan: "2 planes",
    amenities: 14,
    state: "Oculto",
    id: 13,
  },
  {
    name: "Habitacion #14",
    codeBook: "00140",
    codePms: "00140",
    uds: 3,
    guests: "2",
    ratePlan: "3 planes",
    amenities: 9,
    state: "completar",
    id: 14,
  },
]

interface HeaderItem {
  thName: string;
  id: number;
}

export const dataHeader: HeaderItem[] = [
  { thName: 'Nombre', id: 1 },
  { thName: 'Codigo BOOK', id: 2 },
  { thName: 'Código PMS', id: 3 },
  { thName: 'Uds', id: 4 },
  { thName: 'Huéspedes', id: 5 },
  { thName: 'Plan tarifario', id: 6 },
  { thName: 'Amenidades', id: 7 },
  { thName: 'Estado', id: 8 },
];

export interface HeaderItemRatePlans {
  thName: string;
  id: number;
}

export const dataRatePlans: HeaderItemRatePlans[] = [
  { thName: 'Plan tarifario', id: 1 },
  { thName: 'Tarifa base', id: 2 },
  { thName: 'Tarifa menor', id: 3 },
  { thName: 'Tarifa mayor', id: 4 },
];

export interface DataItemRatePlans {
  planRate: string;
  baseRate: number;
  lowerRate: number;
  higherRate: number;
  id: number;
}

export const dataTableRatePlans: DataItemRatePlans[] = [
  {
    planRate: "Rack",
    baseRate: 90.00,
    lowerRate: 90.00,
    higherRate: 120.00,
    id: 1,
  },
  {
    planRate: "Airbn",
    baseRate: 100.00,
    lowerRate: 110.00,
    higherRate: 130.00,
    id: 1,
  },
  {
    planRate: "Booking",
    baseRate: 140.00,
    lowerRate: 160.00,
    higherRate: 200.00,
    id: 1,
  },
]