import Image from "next/image";
import HomeCard from "@/components/HomeCard";
import Seige from "../(root)/(home)/images/seige.jpg";
import CV_Item from "@/components/CV_Item";

export default function Home() {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="flex h-[250px] w-full rounded-[20px] bg-orange-400 bg-cover">
        <div className="h-full flex-col max-md:px-5 max-lg:px-8 lg:p-11">
          <h2 className="glassmorphism max-w-[280px] rounded py-2 text-center font-bold">
            My Resume
          </h2>
          <div className="flex gap-2 mr-2 max-w-[280px]">
            <div className="max-w-xs aspect-square m-2">
              <Image
                className="rounded-md top-1"
                src={Seige}
                alt="Seige"
                width={120}
                height={120}
              />
            </div>
            <div className="flex-col gap-2 my-2">
              <h1 className="sm:text-sm md:text-lg lg:text-xl font-bold">
                Seige Poteau
              </h1>
              <div className="sm:text-[8px] md:text-[10px] lg:text-[12px]">
                <p>Software Engineer</p>
                <p>35+ years experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex-col max-md:px-5 max-lg:px-8 lg:p-11 sm:text-xs md:text-lg lg:text-lg font-bold">
          <p>Master's in Computer Science - 1999</p>
          <p>Bachelor in Computer Science / Math - 1991</p>
          <p>Background in Statistics, Education, and Management</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
        <CV_Item
          img="/icons/add-meeting.svg"
          title="35+ years Experience"
          description="Start an instant meeting"
          className="bg-slate-200 w-full"
          titleCN="text-black"
          descCN="text-black"
        />
        <CV_Item
          img="/icons/checked.svg"
          title="Skills"
          description="Programming Languages"
          className="bg-slate-200 w-full"
          titleCN="text-black"
          descCN="text-black"
        />
        {/* <HomeCard
          img="/icons/schedule.svg"
          title="Schedule Meeting"
          description="Plan your meeting"
          className="bg-purple-900"
                    titleCN="text-black"
          descCN="text-black"
        /> */}
        {/* <HomeCard
          img="/icons/recordings.svg"
          title="View Recordings"
          description="Meeting Recordings"
          className="bg-yellow-600"
                    titleCN="text-black"
          descCN="text-black"
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
