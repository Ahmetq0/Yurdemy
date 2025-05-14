import Link from "next/link";
import Image from "./Image";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-x-[1px] border-[#eeeeee] shadow flex flex-col gap-4">
      <h1 className="text-xl font-bold text-black">
        {"Ne var"} Oluyor
      </h1>
      {/* TREND EVENT */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/event.png"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-black">
            Nadal v Federer Grand Slam
          </h2>
          <span className="text-sm text-textGray">Dün Gece</span>
        </div>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Teknoloji • Trend</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-black font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K gönderi</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Teknoloji • Trend</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-black font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K gönderi</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Teknoloji • Trend</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-black font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K gönderi</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Teknoloji • Trend</span>
          <Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>
        <h2 className="text-black font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K gönderi</span>
      </div>
      <Link href="/" className="text-iconBlue">
      Daha Fazlası 
      </Link>
    </div>
  );
};

export default PopularTags;
