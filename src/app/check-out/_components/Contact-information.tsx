"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Payment from "./Payment";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { formDataType } from "../page";

export function ContactInformation({
  submitBooking,
}: {
  submitBooking: (formData: formDataType) => void;
}) {
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
    <main className=" ">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 ">
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
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
            className="w-full mx-auto bg-white rounded-lg overflow-hidden border shadow-sm flex flex-col  px-4 py-6"
            id="1"
          >
            <h1 className="font-bold text-xl">Төлбөрийн хэсэг</h1>
            <p className="text-center mt-5 sm:mt-20 ">
              Мэдээллээ бүрэн оруулснаар төлбөр өө төлөх боломжтой
            </p>
          </div>
        ) : (
          <Payment />
        )}
      </div>

      <Button
        disabled={!isFormComplete}
        onClick={() => submitBooking(formData)}
        className="w-full mt-6 "
      >
        <CreditCard />
        Захиалах
      </Button>
    </main>
  );
}
