import AskedQuest from "../service/components/AskedQuest";
import { Contact } from "./_compoments/Contact";
import { GetImTouchHeader } from "./_compoments/GetInTouchHeader";

export default function () {
  return (
    <div className="max-w-[768px] w-full">
        {/* Deed tolgoi hesegiin black box */}
      <GetImTouchHeader/>
      <div className="w-full">
        <Contact />
      </div>
      <AskedQuest/>
    </div>
  );
}
