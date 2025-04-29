// "use client";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import AskedQuest from "./_components/AskedQuest";
// import { useEffect, useState } from "react";

// import axios from "axios";
// import SalonService from "./_components/Service";
// import { Loader } from "../(auth)/auth/_compoments/Loader";
// import { CategoryType, ServiceType } from "../utils/types";

// export default function Service() {
//   const [service, setService] = useState<ServiceType[] | null>(null);
//   const [categories, setCategories] = useState<CategoryType[] | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getAllService = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get("/api/service");
//         setService(data.data);
//       } catch (err: unknown) {
//         console.error("Алдаа гарлаа:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const getAllCategories = async () => {
//       try {
//         const { data } = await axios.get("/api/category");

//         setCategories(data.allCategory);
//       } catch {}
//     };
//     getAllCategories();
//     getAllService();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full  h-full px-[16px] bg-white pt-4">
//       <Tabs defaultValue="all">
//         <TabsList className="px-4 py-1 bg-blue-50 w-full">
//           <TabsTrigger value="all" className=" cursor-pointer ">
//             Бүх үйлчилгээ
//           </TabsTrigger>
//           {categories?.map((category, index) => {
//             return (
//               <TabsTrigger
//                 className=" cursor-pointer "
//                 key={index}
//                 value={category._id}
//               >
//                 {category.name}
//               </TabsTrigger>
//             );
//           })}
//         </TabsList>
//         <TabsContent value="all">
//           {categories?.map((category: CategoryType) => {
//             return (
//               <SalonService
//                 key={category._id}
//                 service={service}
//                 category={category}
//               />
//             );
//           })}
//         </TabsContent>

//         {categories?.map((category) => {
//           return (
//             <TabsContent key={category._id} value={category._id}>
//               <SalonService service={service} category={category} />
//             </TabsContent>
//           );
//         })}
//       </Tabs>
//       <AskedQuest />
//     </div>
//   );
// }

"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AskedQuest from "./_components/AskedQuest";
import SalonService from "./_components/Service";
import { Loader } from "../(auth)/auth/_compoments/Loader";
import { useContext } from "react";
import { ServiceContext } from "../_context/ServiceContext";

export default function Service() {
  const { allService, allCategory, loading } = useContext(ServiceContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto w-full h-full px-[16px] bg-white pt-4">
      <Tabs defaultValue="all">
        <TabsList className="px-4 py-1 bg-blue-50 w-full flex gap-2 overflow-x-auto">
          <TabsTrigger value="all" className="cursor-pointer">
            Бүх үйлчилгээ
          </TabsTrigger>
          {allCategory?.map((category) => (
            <TabsTrigger
              key={category._id}
              value={category._id}
              className="cursor-pointer"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Бүх үйлчилгээг харуулах */}
        <TabsContent value="all">
          {allCategory?.map((category) => (
            <SalonService
              key={category._id}
              service={allService}
              category={category}
            />
          ))}
        </TabsContent>

        {/* Ангиллаар харуулах */}
        {allCategory?.map((category) => (
          <TabsContent key={category._id} value={category._id}>
            <SalonService service={allService} category={category} />
          </TabsContent>
        ))}
      </Tabs>

      <AskedQuest />
    </div>
  );
}
