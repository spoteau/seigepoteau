import Image from "next/image";

export default function Home() {
  return (
    <section
      className="flex min-h-screen h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md
            max-md:pb-14 sm:px-14"
    >
      <div className="w-full">
        <h1 className="text-3xl font-bold">Seige Poteau</h1>
        <p className="text-lg">Frontend Engineer</p>
        <Image
          src="/seige.jpg"
          alt="Seige"
          className="max-sm:size-10"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
}
