import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Hizmet Şartları</Link>
        <Link href="/">Gizlilik Politikası</Link>
        <Link href="/">Çerez Politikası</Link>
        <Link href="/">Erişilebilirlik</Link>
        <Link href="/">Reklam Bilgileri</Link>
        <span>© 2025 Meghatron Şirketi</span>
      </div>
    </div>
  );
};

export default RightBar;
