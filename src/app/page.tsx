import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return <div className="">
    <div className='px-4 pt-4 flex justify-between text-textGray font-bold border-x-[1px] border-[#eeeeee]'>
      <Link className="pb-3 flex items-center border-b-4 border-iconBlue" href="/">Senin İçin</Link>
      <Link className="pb-3 flex items-center" href="/">Takipçi</Link>
      <Link className="hidden pb-3 md:flex items-center" href="/">React.js</Link>
      <Link className="hidden pb-3 md:flex items-center" href="/">Javascript</Link>
      <Link className="hidden pb-3 md:flex items-center" href="/">CSS</Link>
    </div>
    <Share/>
    <Feed/>
  </div>;
};

export default Homepage;
