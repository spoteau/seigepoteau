import Image from "next/image";
import HomeCard from "@/components/HomeCard";

export default function Home() {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[250px] w-full rounded-[20px] bg-teal-700 bg-cover">
        <div className="flex h-full flex-col max-md:px-5 max-lg:px-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center font-bold">
            My Resume
          </h2>
          <div className="flex gap-10 m-5">
            <div className="relative w-full, max-w-xs aspect-square m-4">
              <Image
                src="/seige.jpg"
                alt="Seige"
                fill
                priority
                sizes="(max-width:320px) 100vw 320px"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="sm:text-sm md:text-lg lg:text-xl font-bold">
                Seige Poteau
              </h1>
              <p className="sm:text-sm md:text-lg lg:text-lg">
                Software Engineer
              </p>
            </div>

            <div className="sm:text-xs md:text-lg lg:text-xl font-bold">
              <p>Master's in Computer Science - 1999</p>
              <p>Bachelor in Computer Science / Math - 1991</p>
              <p>Background in Statistics, Education, and Management</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <HomeCard
          img="/icons/add-meeting.svg"
          title="Experience"
          description="Start an instant meeting"
          className="bg-orange-600"
        />
        <HomeCard
          img="/icons/join-meeting.svg"
          title="Skills"
          description="Programming Languages"
          className="bg-blue-950"
        />
        {/* <HomeCard
          img="/icons/schedule.svg"
          title="Schedule Meeting"
          description="Plan your meeting"
          className="bg-purple-900"
        /> */}
        {/* <HomeCard
          img="/icons/recordings.svg"
          title="View Recordings"
          description="Meeting Recordings"
          className="bg-yellow-600"
        /> */}
      </div>
    </section>
  );
}

{
  /* //   <section
  //     className="flex min-h-screen h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md
  //           max-md:pb-14 sm:px-14"
  //   >
  //     <div className="w-full">
  //       <h1 className="text-3xl font-bold">Seige Poteau</h1>
  //       <p className="text-lg">Frontend Engineer</p>
  //       <Image
  //         src="/seige.jpg"
  //         alt="Seige"
  //         className="max-sm:size-10"
  //         width={50}
  //         height={50}
  //       />
  //     </div>
  //   </section> */
}
