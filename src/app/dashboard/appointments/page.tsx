import { AppointmentsTable } from "./_component/AppointmentsTable";

export default function Page() {
    return (
      <div className="max-w-[768px] w-full bg-white p-5 space-y-4">
        <h1>Миний уулзалтууд</h1>
        <p>View and manage your appointments</p>
        <AppointmentsTable/>
    </div>
  );
}
