import StaffsCards from "./_components/StaffsCard";

export default function OurStaff() {
  return (
    <div className="px-4 py-8">
      <h2 className="font-bold text-3xl mt-8 mb-2">Choose your Stylist</h2>
      <p className="text-gray-500 mb-8">
        Select from our team of experienced professional for your service
      </p>
      <StaffsCards />
    </div>
  );
}
