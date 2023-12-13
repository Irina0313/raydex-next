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

export const personalDosimetrs: ProductItemType[] = [
  {
    id: "electronic-personal-dosimeter-PM1300",
    name: "Дозиметр индивидуальный ДКГ-PM1300",
    path: "electronic-personal-dosimeter-PM1300",
    images: [
      "./assets/productsImages/personalDosimetrs/ElectronicPersonalDosimeterPM1300/1.webp",
      "./assets/productsImages/personalDosimetrs/ElectronicPersonalDosimeterPM1300/2.webp",
      "./assets/productsImages/personalDosimetrs/ElectronicPersonalDosimeterPM1300/3.webp",
      "./assets/productsImages/personalDosimetrs/ElectronicPersonalDosimeterPM1300/4.webp",
      "./assets/productsImages/personalDosimetrs/ElectronicPersonalDosimeterPM1300/5.webp",
      "./assets/productsImages/personalDosimetrs/ElectronicPersonalDosimeterPM1300/6.webp",
    ],
    status: "Под заказ",
    shortDescription:
      "Дозиметр индивидуальный ДКГ-PM1300 является электронным прямопоказывающим средством измерения, предназначенным для оперативного контроля радиационной обстановки и дозовых нагрузок персонала.",
    operationPrinciple:
      "Алгоритм работы дозиметра обеспечивает непрерывность процесса измерений, статистическую обработку результатов измерений, быструю адаптацию к изменению интенсивности излучения и оперативное представление полученной информации на символьном ЖКИ",
    networkFunctions:
      "Dosimeters can be integrated into Personal Dose Tracker System developed for continuous account for external radiation exposure, maintenance of dose history database and calculation of the personnel accumulated doses (individual as well as group doses) during the set period of time, automated preset threshold (individual as well as group thresholds) alarm signal.",
    characteristics: {
      Detector: "Geiger-Muller tube",
    },
  },
];
