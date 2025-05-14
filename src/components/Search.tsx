import Image from "./Image"

const Search = () => {
  return (
    <div className='bg-white py-2 px-4 flex items-center gap-4 rounded-full  w-100'>
      <input type="text" placeholder="Search" style={{borderRadius : "15px"}} className="bg-transparent outline-none p-1 w-full border border-1 border-[#00CEFF] placeholder:text-[#00CEFF]  "/>
    </div>
  )
}

export default Search