import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
export const ClassicSearch = ({placeholder = "Search"}) => {
  return (
    <form className="bg-gray-100 w-full md:w-1/2 flex rounded-md overflow-hidden">
      <input className="outline-none border-none bg-transparent grow p-2 px-4" type="text" placeholder={placeholder}/>
      <button className='bg-gray-200 py-2 px-4 '><SearchRoundedIcon className='text-dark'/></button>
    </form>
  )
}
