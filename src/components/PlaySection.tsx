import Image from "next/image";

export default function PlaySection() {
  return (
    <div className="flex items-center gap-10 m-auto w-full justify-center flex-col sm:flex-row text-center px-6">
      <Image
        src="/play.png"
        alt="de-um-play"
        width={125}
        height={125}
        className="sm:w-32 sm:h-32 w-16 h-16"
      />
      <p className="font-bold sm:text-6xl text-4xl sm:text-center text-left">
        De um play na sua vida
      </p>
    </div>
  );
}
