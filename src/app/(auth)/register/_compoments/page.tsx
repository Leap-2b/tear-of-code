"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "./LoginSign-in";
import { RegisterSign } from "./RegisterSign";

export function TabsDemo() {
  return (
    <Tabs defaultValue="Email" className="w-[400px] mx-auto">
      <TabsList className="grid w-full grid-cols-2 border-none">
        <TabsTrigger value="Email">Login</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="Email" className="">
        <Card className="border-none shadow-none">
          <ProfileForm />
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="border-none shadow-none">
          <RegisterSign />
        </Card>
      </TabsContent>
    </Tabs>
  );
}
