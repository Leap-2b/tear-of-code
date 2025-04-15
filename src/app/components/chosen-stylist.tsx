import { Star } from "lucide-react";

export default function ChosenStylist() {
  return (
    <div className="h-[160px] w-full max-w-[400px] mx-auto p-4  bg-white rounded-lg shadow-sm gap-4">
      {" "}
      <div className="flex gap-4">
        <img className="bg-black w-[60px] h-[60px]" src="/google.svg" alt="" />
        <div className="">
          <h1>Name</h1>
          <p className="flex ">
            <Star color="yellow" size={15} fill="yellow" className="mt-[5px]" />{" "}
            4/5
          </p>
        </div>{" "}
      </div>{" "}
      <p>information</p>
    </div>
  );
}
