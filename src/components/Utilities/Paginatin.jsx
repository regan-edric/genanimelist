export default function Pagination({ page, setPage, totalPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <>
      <div className="text-primary text-2xl flex justify-center items-center gap-4 p-4">
        {page <= 1 ? null : (
          <button
            className="transition-all hover:text-accent"
            onClick={handlePrevPage}
          >
            Prev
          </button>
        )}
        <p>
          {page} of {totalPage}
        </p>
        {page >= totalPage ? null : (
          <button
            className="transition-all hover:text-accent"
            onClick={handleNextPage}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}
