import Nails from "./Nails";
import HairCut from "./HairCut";
import { ServiceType } from "@/server/utils";

interface AllProps {
  service: ServiceType[] | null;
}

export default function All({ service }: AllProps) {
  if (!service) return <div>Түр хүлээнэ үү...</div>;
  return (
    <div>
      <HairCut service={service} />
      <Nails service={service} />
    </div>
  );
}
