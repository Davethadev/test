import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  nPage: number;
  numbers: number[];
};

export function PaginationComponent({
  currentPage,
  nPage,
  numbers,
  setCurrentPage,
}: PaginationProps) {
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={goToPrevPage} />
        </PaginationItem>
        {numbers.map((number, index) => {
          return (
            <PaginationItem key={index}>
              <PaginationLink href="#" onClick={() => goToPage(number)}>
                {number}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext href="#" onClick={goToNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
