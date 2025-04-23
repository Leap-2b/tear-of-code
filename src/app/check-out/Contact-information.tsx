// import { UserCircle } from "lucide-react";
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Payment from "./Payment";

export default function Page() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const isFormComplete = () => {
    return (
      formData.username.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== ""
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="flex w-full flex-col mt-8 ">
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Захиалгын мэлээлэл
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </CardContent>
      </Card>
      {!isFormComplete() ? (
        <div
          className="w-full mx-auto bg-white rounded-lg overflow-hidden shadow-md flex flex-col mt-4 py-6"
          id="1"
        >
          <h1 className="font-bold text-xl ml-4">Төлбөрийн хэсэг</h1>
          <p className="flex justify-center items-center">
            Мэдээллээ бүрэн оруулснаар төлбөр өө төлөх боломжтой
          </p>
        </div>
      ) : (
        <Payment />
      )}
    </main>
  );
}
