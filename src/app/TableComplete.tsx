"use client";
import BarFilter from '@/common/BarFilter';
import Paginate from '@/common/Paginate';
import TableMain from '@/common/TableMain';
import { dataBody } from '../../utils/data';
import useTableComplete from '@/hooks/useTableComplete';
import React from 'react';

const TableComplete = (): React.JSX.Element => {

  const {
    data,
    falling,
    setFalling,
    handlePageChange,
    functionTotalPages,
    handleChangeFiltrar,
    handleChangeReaunudar,
  } = useTableComplete();

  return (
    <>
      <BarFilter
        enabled
        containerFilter="flex justify-end"
        css="border border-solid border-[#DBDCDE] h-[36px] rounded-full w-[250px] h-[30px] pl-3 mt-5"
        actionFilter={handleChangeFiltrar}
        restoreList={handleChangeReaunudar}
        maxLength={50}
      />

      <TableMain falling={falling} setFalling={setFalling} data={data} />

      <Paginate
        functionHandleChange={handlePageChange}
        totalPages={functionTotalPages(dataBody.length, 10)}
      />
    </>
  )
}

export default TableComplete;
