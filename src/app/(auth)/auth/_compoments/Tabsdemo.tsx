"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "./LoginSign-in";
import { RegisterSign } from "./RegisterSign";

export function TabsDemo() {
  return (
    <Tabs defaultValue="Login" className="w-full max-w-[480px] mx-auto">
      <TabsList className="grid w-full grid-cols-2 border-none rounded-[6px]">
        <TabsTrigger value="Login" className="rounded-[4px]">
          Нэвтрэх
        </TabsTrigger>
        <TabsTrigger value="register" className="rounded-[4px]">
          Бүртгүүлэх
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Login" className="">
        <Card className="border-none shadow-none">
          <ProfileForm />
        </Card>
      </TabsContent>
      <TabsContent value="register">
        <Card className="border-none shadow-none">
          <RegisterSign />
        </Card>
      </TabsContent>
    </Tabs>
  );
}
