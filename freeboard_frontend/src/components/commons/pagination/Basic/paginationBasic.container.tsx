import { useState } from "react";
import type { MouseEvent } from "react";
import PaginationBasicUI from "./paginationBasic.presenter";
import { IPaginationBasicProps } from "./paginationBasic.types";

export default function PaginationBasic(
  props: IPaginationBasicProps
): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
    const activePage = Number(e.currentTarget.id);
    setActivePage(activePage);
    void props.refetch({ page: activePage });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <PaginationBasicUI
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
