import { electronicDosimeterPm1211 } from "./ElectronicDosimeters/electronic-dosimeter-pm1211";
import getFullCharacteristics from "@/app/utils/getFullCharacteristics";
import getDocs from "@/app/utils/getDocs";

type TabsType = {
  description: string;
  characteristics: string;
  docs: string;
};

export type ProductItemType = {
  id: string;
  name: string;
  path: string;
  images: string[];

  status: string;
  shortDescription: JSX.Element;
  fullDescription: JSX.Element;
  tabs: TabsType;
  characteristics: JSX.Element;
  fullCharacteristics: JSX.Element;
  docs: JSX.Element;
};

export const electronicDosimetrs: ProductItemType[] = [
  {
    id: "electronic-dosimeter-pm1211",
    name: "Дозиметр гамма-излучения ДКГ-PM1211",
    path: "electronic-dosimeter-pm1211",
    images: [
      "./assets/productsImages/electronicDosimetrs/electronic-dosimeter-pm1211/images/60kzds2bxooglpwdzu80kcirw3820t53.webp",
      "./assets/productsImages/electronicDosimetrs/electronic-dosimeter-pm1211/images/gasivv8wwr2l6b5mhh5303q5qhjxh9u6.webp",
      "./assets/productsImages/electronicDosimetrs/electronic-dosimeter-pm1211/images/ng6qhtsd8c1189u0eoxy97yes2ahf6mu.webp",
    ],

    status: "Под заказ",
    shortDescription: electronicDosimeterPm1211().shortDescription,
    fullDescription: electronicDosimeterPm1211().fullDescription,
    tabs: {
      description: "Описание",
      characteristics: "Характеристики",
      docs: "Документы",
    },

    characteristics:
      electronicDosimeterPm1211().characteristicsShortDescription,
    fullCharacteristics: getFullCharacteristics(
      electronicDosimeterPm1211().characteristics,
    ),
    docs: getDocs({
      promotionalMaterials: [
        "../../../assets/productsImages/electronicDosimetrs/electronic-dosimeter-pm1211/promotionalMaterials/_PM1211_PM1211 Leaflet (2022.11 RU).pdf",
      ],
      certificates: [
        {
          type: "doc",
          path: "../../../assets/productsImages/electronicDosimetrs/electronic-dosimeter-pm1211/certificates/_PM1211_Сертификат_УТСИ_РБ_РМ1211_до_30.01.2025.pdf",
          title: "Сертификат УТСИ РБ",
        },
        {
          type: "doc",
          path: "../../../assets/productsImages/electronicDosimetrs/electronic-dosimeter-pm1211/certificates/_PM1211_1211_ТР_ТС_020_до_03.06.2026.pdf",
          title: "Сертификат ТР ТС",
        },
        {
          type: "doc",
          path: "../../../assets/productsImages/electronicDosimetrs/electronic-dosimeter-pm1211/certificates/_PM1211_1211_ТР_BY_024_до_03.06.2026.pdf",
          title: "Сертификат ТР BY",
        },
        {
          type: "link",
          path: "https://fgis.gost.ru/fundmetrology/registry/4/items/1394743",
          title: `ФГИС "АРШИН"`,
        },
        {
          type: "link",
          path: "https://www.oei.by/grsi?GrsiSearch%5Bgrsi_single%5D=&GrsiSearch%5Bgrsi_status%5D=1&GrsiSearch%5Bgrsi_name%5D=&GrsiSearch%5Bgrsi_nsut%5D=13161&GrsiSearch%5Bgrsi_number%5D=&GrsiSearch%5Bgrsi_izgname%5D=%D1%80%D0%B0%D0%B4%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BD&GrsiSearch%5Bgrsi_grantee%5D=&grsi_date-grsisearch-grsi_date-disp=&GrsiSearch%5Bgrsi_date%5D=&grsi_dateend-grsisearch-grsi_dateend-disp=&GrsiSearch%5Bgrsi_dateend%5D=&GrsiSearch%5Bgrsi_mcheck%5D=&GrsiSearch%5Bgrsi_mpi%5D=&GrsiSearch%5Bgrsi_groupname%5D=&GrsiSearch%5Bgrsi_prprizn%5D=",
          title: `Государственный реестр СИ РБ`,
        },
      ],
    }),
  },
];
