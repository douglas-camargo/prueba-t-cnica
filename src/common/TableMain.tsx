import React, { useState } from "react";
import trianguloArriba from '../../public/trianguloArriba.svg';
import trianguloAbajo from '../../public/trianguloAbajo.svg';
import Image from "next/image";
import Modal from "./Modal";
import TableRatePlans from "./TableRatePlans";
import { DataItem, dataHeader } from "../../utils/data";

interface TableMainProps {
  falling: boolean;
  setFalling: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataItem[];
}

const TableMain: React.FC<TableMainProps> = ({ falling, setFalling, data }) => {
  const [id, setId] = useState(0);

  const handleClickRatePlan = (id: number) => {
    setId(id)
  }

  return (
    <div className="mt-5 h-full w-3/4 min-h-72 overflow-x-auto bg-white">
      <table className="min-w-full mb-8">
        <thead>
          <tr className="text-black font-bold text-sm">
            {dataHeader.map((item) => (
              <th
                key={item.id}
                className="whitespace-nowrap px-1 py-0.5 font-light border-r border-solid border-[rgba(0, 0, 0, 0.5)] text-start w-[5%] last:border-r-0"
              >
                {item.thName}
                {['Nombre', 'Codigo BOOK', 'Código PMS'].includes(item.thName) && (
                  <div className="inline-flex">
                    {falling ? (
                      <button className="ml-1" onClick={() => setFalling(!falling)}>
                        <Image alt="imagen" src={trianguloAbajo} className="h-3 w-3" />
                      </button>
                    ) : (
                      <button className="ml-1" onClick={() => setFalling(!falling)}>
                        <Image alt="imagen" src={trianguloArriba} className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length !== 0 && data.map((item) => (
            <tr key={item.id} className="text-black font-light text-xs">
              <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                {item.name}
              </td>
              <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                {item.codeBook}
              </td>
              <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                {item.codePms}
              </td>
              <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                {item.uds}
              </td>
              <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                {item.guests}
              </td>
              <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                <button onClick={() => handleClickRatePlan(item.id)} className="underline text-[blue]">
                  {item.ratePlan}
                </button>
                {item.id === id && (
                  <Modal stateModal title="Planes tarifarios" >
                    <TableRatePlans />
                  </Modal>
                )}
              </td>
              <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                {item.amenities}
              </td>
              <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                {item.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableMain;
