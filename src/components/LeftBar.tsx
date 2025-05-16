import Link from "next/link";
import Image from "./Image";


const menuList = [
  {
    id: 1,
    name: "Anasayfa",
    link: "/",
    icon: "home.png",
  },
  {
    id: 2,
    name: "Keşfet",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Bildirim",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Mesaj",
    link: "/",
    icon: "message.png",
  },
  {
    id: 5,
    name: "Kaydedilenler",
    link: "/",
    icon: "bookmark.png",
  },
  {
    id: 6,
    name: "İş",
    link: "/",
    icon: "jobs.png",
  },
  {
    id: 7,
    name: "Topluluk",
    link: "/",
    icon: "community.png",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "premium.png",
  },
  {
    id: 9,
    name: "Profil",
    link: "/",
    icon: "profile.png",
  },
  {
    id: 10,
    name: "Daha",
    link: "/",
    icon: "more.png",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-1 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <div className="flex">
        <Link href="/" className="p-2 rounded-full  flex">
          <Image path="icons/logo.png" alt="logo" w={100} h={100} />
                            <h1 className="mt-6 font-bold mr-6  fs-6">YURDEMY</h1>

        </Link>
        </div>
        {/* MENU LIST */}
        <div className="flex flex-col gap-4 w-10 h-10"> 
          {menuList.map((item) => (
            <Link
              href={item.link}
              className="p-2 rounded-full flex items-center gap-4"
              key={item.id}
            >
              <Image
                path={`icons/${item.icon}`}
                alt={item.name}
                w={55}
                h={55}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <div className="" style={{marginTop : "550px"}}>
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image path="icons/post.svg" alt="new post" w={24} h={24} />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-[#00CEFF] text-white rounded-full font-bold mb-4 py-2 px-20"
        >
          Gönderi
        </Link>
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image path="/general/avatar.png" alt="lama dev" w={100} h={100} tr={true} />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Ahmethan</span>
            <span className="text-sm text-textGray">@ahmethan729</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
