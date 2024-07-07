import React from "react";
import Image from "next/image";

const aspnetsqlserver = () => {
  return (
    <div className="flex-col w-full h-screen justify-items-center">
      <div className="text-center text-xl font-semibold">
        Only Screenshots Provided - Site is Intranet
      </div>
      <div className="pt-5">
        <Image
          src="/seige.jpg"
          alt="Seige"
          className="max-sm:size-10 rounded-full items-center justify-center content-center"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default aspnetsqlserver;
