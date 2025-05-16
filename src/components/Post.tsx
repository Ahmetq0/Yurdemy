import { imagekit } from "@/utils";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import Video from "./Video";
import Link from "next/link";
"use client";


interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const postList = [
  {
    id: 1,
    icon: "post1.jpg",
  },
  {
    id: 2,
    icon: "post2.jpg",
  },

];

const Post = async ({ type }: { type?: "status" | "comment" }) => {
 
  // FETCH POST MEDIA

  // const getFileDetails = async (
  //   fileId: string
  // ): Promise<FileDetailsResponse> => {
  //   return new Promise((resolve, reject) => {
  //     imagekit.getFileDetails(fileId, function (error, result) {
  //       if (error) reject(error);
  //       else resolve(result as FileDetailsResponse);
  //     });
  //   });
  // };

  // const fileDetails = await getFileDetails("675d943be375273f6003858f");

  // console.log(fileDetails);

  return (
    <div className="p-4 border-x-[1px] border-[#eeeeee]">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Ahmethan yeniden yayınladı</span>
      </div>
      {/* POST CONTENT */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* AVATAR */}
        <div
          className={`${
            type === "status" && "hidden"
          } relative w-10 h-10 rounded-full overflow-hidden`}
        >
          <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-2">
          {/* TOP */}
          <div className="w-full flex justify-between">
            <Link href={`/lamaWebDev`} className="flex gap-4">
              <div
                className={`${
                  type !== "status" && "hidden"
                } relative w-10 h-10 rounded-full overflow-hidden`}
              >
                <Image
                  path="general/avatar.png"
                  alt=""
                  w={100}
                  h={100}
                  tr={true}
                />
              </div>
              <div
                className={`flex items-center gap-2 flex-wrap ${
                  type === "status" && "flex-col gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">Ahmethan</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @ahmethan729
                </span>
                {type !== "status" && (
                  <span className="text-textGray">1 gün önce</span>
                )}
              </div>
            </Link>
            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <Link href={`/user/status/123`}>
            <p className={`${type === "status" && "text-lg"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              animi. Laborum commodi aliquam alias molestias odio, ab in,
              reprehenderit excepturi temporibus, ducimus necessitatibus fugiat
              iure nam voluptas soluta pariatur inventore.
            </p>
          </Link>
          {postList.map((post)=>(
          <Image key={post.id} path={`general/${post.icon}`} alt="" w={600} h={600} />
          ))}
          {/* AFTER FETCHING THE POST MEDIA */}
          {/* {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )} */}
          {type === "status" && (
            <span className="text-textGray">20:41 · 5 Aralık 2024</span>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
