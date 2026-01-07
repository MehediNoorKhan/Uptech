import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-64 md:h-96">
      <Image
        src="/banner.avif" // add your banner in public folder
        alt="Uptech Banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to Uptech
        </h1>
      </div>
    </div>
  );
}
