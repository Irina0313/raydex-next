type CharacteristicsType = {
  Detector: string;
};

export type ProductItemType = {
  id: string;
  name: string;
  path: string;
  images: string[];
  status: string;
  shortDescription: string;
  operationPrinciple: string;
  networkFunctions: string;
  characteristics: CharacteristicsType;
};

export const electronicDosimetrs: ProductItemType[] = [
  {
    id: "x-ray-and-gamma-radiation-dosimeter-1211",
    name: "Дозиметр гамма-излучения ДКГ-PM1211",
    path: "x-ray-and-gamma-radiation-dosimeter-1211",
    images: [
      "./assets/productsImages/electronicDosimetrs/1/1.webp",
      "./assets/productsImages/electronicDosimetrs/1/2.webp",
      "./assets/productsImages/electronicDosimetrs/1/3.webp",
    ],
    status: "Под заказ",
    shortDescription:
      "Серия дозиметров гамма-излучения ДКГ-PM1211 предназначена для непрерывного измерения МЭД и ЭД гамма и рентгеновского излучения, а также для контроля времени безопасного нахождения рядом с источником ионизирующего излучения.     Данная функция разработана специально для серии дозиметров ДКГ-PM1211 для упрощения работы с приборами и будет полезна",
    operationPrinciple:
      "Измерение МЭД и ЭД фотонного излучения осуществляется благодаря встроенному энергокомпенсированному детектору на основе счетчика Гейгера-Мюллера. Алгоритм работы прибора обеспечивает непрерывность процесса измерений, а также быструю адаптацию прибора к  изменению интенсивности излучения. В случае превышения установленных порогов (по МЭД и ЭД), прибор подает звуковые и световые сигналы. В дозиметрах предусмотрена функция индикации текущего времени, даты и температуры. Энергонезависимая память прибора позволяет сохранять и накапливать историю измерений.",
    networkFunctions:
      "Dosimeters can be integrated into Personal Dose Tracker System developed for continuous account for external radiation exposure, maintenance of dose history database and calculation of the personnel accumulated doses (individual as well as group doses) during the set period of time, automated preset threshold (individual as well as group thresholds) alarm signal.",
    characteristics: {
      Detector: "Geiger-Muller tube",
    },
  },
  {
    id: "x-ray-and-gamma-radiation-dosimeter",
    name: "Дозиметр гамма-излучения ДКГ-PM1211",
    path: "x-ray-and-gamma-radiation-dosimeter-1",
    images: [
      "./assets/productsImages/electronicDosimetrs/1/1.webp",
      "./assets/productsImages/electronicDosimetrs/1/2.webp",
      "./assets/productsImages/electronicDosimetrs/1/3.webp",
    ],
    status: "Под заказ",
    shortDescription:
      "Серия дозиметров гамма-излучения ДКГ-PM1211 предназначена для непрерывного измерения МЭД и ЭД гамма и рентгеновского излучения, а также для контроля времени безопасного нахождения рядом с источником ионизирующего излучения.     Данная функция разработана специально для серии дозиметров ДКГ-PM1211 для упрощения работы с приборами и будет полезна",
    operationPrinciple:
      "Измерение МЭД и ЭД фотонного излучения осуществляется благодаря встроенному энергокомпенсированному детектору на основе счетчика Гейгера-Мюллера. Алгоритм работы прибора обеспечивает непрерывность процесса измерений, а также быструю адаптацию прибора к  изменению интенсивности излучения. В случае превышения установленных порогов (по МЭД и ЭД), прибор подает звуковые и световые сигналы. В дозиметрах предусмотрена функция индикации текущего времени, даты и температуры. Энергонезависимая память прибора позволяет сохранять и накапливать историю измерений.",
    networkFunctions:
      "Dosimeters can be integrated into Personal Dose Tracker System developed for continuous account for external radiation exposure, maintenance of dose history database and calculation of the personnel accumulated doses (individual as well as group doses) during the set period of time, automated preset threshold (individual as well as group thresholds) alarm signal.",
    characteristics: {
      Detector: "Geiger-Muller tube",
    },
  },
];
