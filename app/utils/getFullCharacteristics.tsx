import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  title: string;
  value: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Наименование",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Значение",
    dataIndex: "value",
    key: "value",
  },
];

interface Characteristics {
  Детектор: string;
  "Диапазон индикации ЭД": string;
  "Диапазон индикации МЭД": string;
  "Диапазон измерения ЭД": string;
  "Диапазон измерения МЭД": string;
  "Предел допускаемой основной относительной погрешности измерения ЭД ": string;
  "Предел допускаемой основной относительной погрешности измерения МЭД": string;
  "Диапазон энергий измеряемого фотонного излучения": string;
  "Диапазон регистрируемых энергий": string;
  "Обмен информацией с ПК": string;
  "Тип сигнализации": string;
  "Степень защиты корпуса": string;
  "Атмосферное давление": string;
  "Относительная влажность": string;
  "Диапазон рабочих температур": string;
  Масса: string;
  Габариты: string;
  "Средний срок службы": string;
  "Элемент питания": string;
}

const getFullCharacteristics = (characteristics: Characteristics) => {
  const data: DataType[] = Object.keys(characteristics).map((key, index) => {
    return {
      key: index.toString(),
      title: key,
      value: Object.values(characteristics)[index],
    };
  });

  return <Table columns={columns} dataSource={data} />;
};

export default getFullCharacteristics;
