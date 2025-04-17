import Nails from "./Nails";
import HairCut from "./HairCut";
import { TabsContent } from "@/components/ui/tabs";

export default function All() {
  return (
    <div>
      <HairCut />
      <Nails />
    </div>
  );
}
