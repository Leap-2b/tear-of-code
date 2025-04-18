import Image from "next/image";

export function GetImTouchHeader() {
  return (
    <section className="relative bg-black/70 py-12 text-white sm:py-16 md:py-24">
    <div className="absolute inset-0 opacity-30">
    </div>
    <div className="container relative z-10 px-4 sm:px-6 mx-auto">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl mx-auto">
          Get In Touch
        </h1>
        <p className="mx-auto max-w-md text-base sm:text-lg text-gray-200">
        </p>
      </div>
    </div>
  </section>
  );
}
