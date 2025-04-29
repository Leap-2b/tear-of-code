import StaffsCards from "./_components/StaffsCard";

export default function OurStaff() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <h2 className="font-bold text-3xl mt-8 mb-2">Манай Ажилчид</h2>
      <p className="text-gray-500 mb-8">
        Туршлагатай мэргэжлийн багаас сонгон үйлчилгээгээ аваарай.
      </p>
      <StaffsCards />
    </div>
  );
}
