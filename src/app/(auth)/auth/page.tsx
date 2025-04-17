import { RegisterHeader } from "./_compoments/RegisterHeader";
import { TabsDemo } from "./_compoments/Tabsdemo";

const Page = () => {
  return (
    <div className="max-w-[480px] w-full h-[calc(100vh-60px)] bg-[#ffffff] p-4 mx-auto flex flex-col">
      <div className="flex flex-col gap-8 my-auto">
        <RegisterHeader />
        <TabsDemo />
      </div>
    </div>
  );
};
export default Page;
