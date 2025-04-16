import StaffsCards from "../_components/Staffs-Card";

export default function OurStaff() {
  return (
    <div className="">
      <h1 className="font-bold text-xl mt-6">Choose your Stylist</h1>
      <p className="text-gray-300 text-sm">
        Select from our team of experienced professional for your service
      </p>
      <StaffsCards />
    </div>
  );
}
