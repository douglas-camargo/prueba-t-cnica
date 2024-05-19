import { dataRatePlans, dataTableRatePlans } from "../../utils/data";

const TableRatePlans = () => {
  
  return (
    <>
      <div className="h-full w-full overflow-x-auto">
        <table className="min-w-full">
          <thead className="">
            <tr className="text-black font-bold text-sm ">
              {dataRatePlans.map((item) => (
                <th
                  key={item.id}
                  className="whitespace-nowrap px-1 py-0.5 font-bold border border-solid border-[rega(0, 0, 0, 0.5)] text-start w-[5%] py-2"
                >
                  {item.thName}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y-[6px] divide-white">
            {dataTableRatePlans.length !== 0 && dataTableRatePlans.map((item) => (
              <tr key={item.id} className="text-black font-light text-xs">
                <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white pt-1">
                  {item.planRate}
                </td>
                <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                  <div className="flex justify-between pr-2">
                    <p>$</p>
                    <p>{item.baseRate.toFixed(2)}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                  <div className="flex justify-between pr-2">
                    <p>$</p>
                    <p>{item.lowerRate.toFixed(2)}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-1 py-0.5 border-l-2 border-solid border-white">
                  <div className="flex justify-between pr-2">
                    <p>$</p>
                    <p>{item.higherRate.toFixed(2)}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableRatePlans;
