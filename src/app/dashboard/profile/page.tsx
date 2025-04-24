import { ProfileTable } from "./_compoments/ProfileTable";

export default function Page() {
  return (
    <div className="max-w-[768px] w-full bg-white p-5 space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Миний профайл</h2>
        <p className="text-muted-foreground">
          Хувийн мэдээлэл, тохиргоогоо удирдах
        </p>
      </div>
      <ProfileTable />
    </div>
  );
}
