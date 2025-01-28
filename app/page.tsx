import Image from "next/image";
import background from "../public/pxfuel.jpg";

export default function Home() {
  return (
    <div className="w-screen h-screen p-[45px] bg-neutral-100">
      <main className="h-full grid grid-flow-row grid-rows-10 grid-cols-10 gap-[15px]">
        {/* Image tile */}
        <div className="col-span-3 row-span-3 rounded-lg flex justify-end items-end px-2"
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <Image src={"/memoji-salute-2.png"} alt="Memoji saluting" width={245} height={100}/>
        </div>

        {/* About tile */}
        <div className="border border-black col-span-2 row-span-3 rounded-lg"></div>

        {/* Selected Works tile */}
        <div className="border border-black col-span-3 row-span-4 rounded-lg"></div>

        {/* Interests tile */}
        <div className="border border-black col-span-2 row-span-4 rounded-lg"></div>

        {/* About Me & Links tile */}
        <div className="border border-black col-span-5 row-span-4 rounded-lg"></div>

        {/* Certifications tile */}
        <div className="border border-black col-span-2 row-span-3 rounded-lg"></div>

        {/* Skills tile */}
        <div className="border border-black col-span-3 row-span-3 rounded-lg"></div>

        {/* Hobbies tile */}
        <div className="border border-black col-span-2 row-span-3 rounded-lg"></div>

        {/* Tech Stack tile */}
        <div className="border border-black col-span-5 row-span-2 rounded-lg"></div>

        {/* Work Experience tile */}
        <div className="border border-black col-span-3 row-span-3 rounded-lg"></div>

        {/* Contact Info tile */}
        <div className="border border-black col-span-5 row-span-1 rounded-lg"></div>

      </main>
    </div>
  );
}
