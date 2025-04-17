import { RegisterHeader } from "./_compoments/RegisterHeader";
import { TabsDemo } from "./_compoments/Tabsdemo";

const Page = () => {
  return (
    <div className="max-w-[480px] w-full h-screen bg-[#ffffff] p-4 mx-auto flex flex-col gap-5">
      <RegisterHeader />
      <TabsDemo/>
    </div>
  );
};
export default Page;
