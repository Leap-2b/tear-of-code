import ChosenStylist from "../components/chosen-stylist";
import DateTimePicker from "../components/date-time-picker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <ChosenStylist />
      <DateTimePicker />
    </main>
  );
}
