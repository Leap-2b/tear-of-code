"use client";
import { useUser } from "@/app/_context/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil } from "lucide-react";

export default function UserInformation() {
  const { user } = useUser();
  console.log(user);
  return (
    <main className="flex w-full flex-col mt-8 ">
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Захиалгын мэлээлэл
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 flex justify-between">
          <div>
            <p className="text-gray-400 font-bold text-sm">Name</p>
            <h1>{user.username}</h1>
          </div>
          <div>
            <p className="text-gray-400 font-bold text-sm">Email</p>
            <h1>{user.email}</h1>
          </div>
          <div>
            <p className="text-gray-400 font-bold text-sm">Phone</p>
            <h1>1231231</h1>
          </div>
          <Button>
            <Pencil /> Edit
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
