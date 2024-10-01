import React from "react";
import Link from "next/link";

const azurewebapi = () => {
  return (
    <div className="flex-col w-full h-screen justify-items-center">
      <Link href="https://uespoir.edu.ht/" target="_blank">
        <h2 className="text-blue-500 pb-2 text-lg text-center">
          Link to site showcased below
        </h2>
      </Link>
      <iframe src="https://uespoir.edu.ht/" className="w-full h-screen" />
    </div>
  );
};

export default azurewebapi;
