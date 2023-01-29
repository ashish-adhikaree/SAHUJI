import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export const SearchBar = () => {
  return (
    <form className="bg-gradient-to-r from-[#DBF8FF] to-[rgba(194, 255, 197, 0)] rounded-full px-4 text-customGray text-sm md:w-[200px] flex">
      <input
        className="bg-transparent border-none outline-none flex-grow py-2"
        type="text"
        placeholder="SEARCH"
      />
      <button className="bg-dark rounded-r-full px-3">
        <SearchRoundedIcon className="text-white" />
      </button>
    </form>
  );
};
