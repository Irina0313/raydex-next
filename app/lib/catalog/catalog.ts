import {
  electronicDosimetrs,
  ProductItemType,
} from "./products/01_XRayAndGammaRadiationDosimeters/ElectronicDosimeters";
/* import { personalDosimetrs } from "./products/01_XRayAndGammaRadiationDosimeters/PersonalDosimeters"; */

export type CatalogItemType = {
  id: string;
  path: string;
  name: string;
  subcategory?: CatalogItemType[];
  products?: ProductItemType[];
};

export const catalog: CatalogItemType[] = [
  {
    id: "1",
    path: "x-ray-and-gamma-radiation-dosimeters",
    name: "Дозиметры рентгеновского и гамма-излучения",
    subcategory: [
      {
        id: "sub1",
        path: "electronic-dosimeters",
        name: "Электронные дозиметры",
        products: electronicDosimetrs,
      },
      {
        id: "sub2",
        path: "personal-dosimeters",
        name: "Индивидуальные дозиметры",
        /* products: personalDosimetrs, */
      },
    ],
  },
  {
    id: "2",
    path: "personal-radiation-detectors",
    name: "Поисковые приборы радиационного контроля",
    subcategory: [],
  },
  {
    id: "3",
    path: "radiation-portal-monitors",
    name: "Радиационные портальные мониторы",
    subcategory: [],
  },
  {
    id: "4",
    path: "radionuclide-identification-devices",
    name: "Идентификаторы радиоизотопов",
    subcategory: [],
  },
  {
    id: "5",
    path: "smart-probes",
    name: "Интеллектуальные блоки детектирования",
    subcategory: [],
  },
  {
    id: "6",
    path: "contamination-measurement-monitors",
    name: "Радиометры для контроля загрязненности",
    subcategory: [],
  },
  {
    id: "7",
    path: "contraband-detector",
    name: "Детектор контрабанды",
    subcategory: [],
  },
  {
    id: "8",
    path: "chemical-warfare-agent-detectors",
    name: "Приборы радиационно-химической разведки",
    subcategory: [],
  },
  {
    id: "9",
    path: "radiation-monitoring-system",
    name: "Автоматизированная система радиационного контроля",
    subcategory: [],
  },
  {
    id: "10",
    path: "gamma-radiation-calibration-equipment",
    name: "Поверочные установки гамма и нейтронного излучения",
    subcategory: [],
  },
  {
    id: "11",
    path: "system-software",
    name: "Системное программное обеспечение",
    subcategory: [],
  },
];
