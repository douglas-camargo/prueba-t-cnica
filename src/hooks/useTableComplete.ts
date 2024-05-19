import { useState, useEffect } from "react";
import { DataItem, dataBody } from "../../utils/data";

const useTableComplete = () => {
  const [select, setSelect] = useState(0);
  const [data, setData] = useState<DataItem[]>([]);
  const [dataCopia, setDataCopia] = useState<DataItem[]>([]);
  const [falling, setFalling] = useState(true);

  useEffect(() => {
    if (dataBody.length !== 0) {
      const sortedData = [...dataBody].sort((a, b) => {
        const numeroA = parseInt(a.name.split(' ')[1].substring(1));
        const numeroB = parseInt(b.name.split(' ')[1].substring(1));
        
        return falling ? numeroA - numeroB : numeroB - numeroA;
      });

      const inicio = (select * 10) % sortedData.length;
      const fin = inicio + 10;
      setData(sortedData.slice(inicio, fin));
      setDataCopia(sortedData.slice(inicio, fin));
    }
  }, [select, falling]);

  const handlePageChange = (selected: number) => {
    setSelect(selected);
  };

  const functionTotalPages = (totalItems: number, itemsPorPage: number) => {
    return totalItems && itemsPorPage ? Math.ceil(totalItems / itemsPorPage) : 0;
  };

  const handleChangeFiltrar = (caracter: string) => {
    if (caracter.trim() === "") {
      setData(dataCopia);
    } else {
      const filteredData = dataCopia.filter(item =>
        Object.values(item).some(value =>
          new RegExp(caracter, 'i').test(String(value))
        )
      );
      setData(filteredData);
    }
  };

  const handleChangeReaunudar = () => {
    setData(dataCopia);
  };

  return {
    data,
    falling,
    setFalling,
    handlePageChange,
    functionTotalPages,
    handleChangeFiltrar,
    handleChangeReaunudar,
  };
};

export default useTableComplete;
