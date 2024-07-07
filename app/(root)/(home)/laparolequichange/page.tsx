import Link from "next/link";
import React from "react";

const laparolequichange = () => {
  return (
    <div className="flex-col w-full h-screen justify-items-center">
      <Link href="https://laparolequichange.org/" target="_blank">
        <h2 className="text-blue-500 pb-2 text-lg text-center">
          Link to site showcased below
        </h2>
      </Link>
      <iframe
        src="https://laparolequichange.org/"
        className="w-full h-screen"
      />
    </div>
  );
};

export default laparolequichange;
