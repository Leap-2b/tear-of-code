"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Payment from "./Payment";
import { Button } from "@/components/ui/button";
import { CreditCard, Pencil } from "lucide-react";
import { formDataType } from "../page";

export function LogoutContactInfo({
  submitBooking,
  userId,
}: {
  submitBooking: (formData: formDataType) => void;
  userId: string | null;
}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const validate = () => {
    const newErrors = { username: "", email: "", phone: "" };
    if (formData.username.trim().length < 3) {
      newErrors.username =
        "Хэрэглэгчийн нэр хамгийн багадаа 3 үсэгтэй байх ёстой";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Зөв имэйл хаяг оруулна уу";
    }
    const phoneRegex = /^[0-9]{8}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Зөвхөн 8 оронтой зөв утасны дугаар оруулна уу";
    }
    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e !== "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (validate()) {
      submitBooking(formData);
    }
  };

  const isFormValid = () => {
    const usernameValid = formData.username.trim().length >= 3;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    const phoneValid = /^[0-9]{8}$/.test(formData.phone.trim());
    return usernameValid && emailValid && phoneValid;
  };

  return (
    <main>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Захиалгын мэдээлэл
            </CardTitle>
          </CardHeader>
          {userId ? (
            <CardContent className="mb-6 rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p>John doe</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">email</p>
                    <p>test@gmail.com</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">phone</p>
                    <p>99119911</p>
                  </div>
                  <Button>
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          ) : (
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Хэрэглэгчийн нэр</Label>
                <Input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Имэйл</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Утас</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </CardContent>
          )}
        </Card>
        {userId ? (
          <div>
            <Payment />
          </div>
        ) : !isFormValid() ? (
          <div
            className="w-full mx-auto bg-white rounded-lg overflow-hidden border shadow-sm flex flex-col px-4 py-6"
            id="1"
          >
            <h1 className="font-bold text-xl">Төлбөрийн хэсэг</h1>
            <p className="text-center mt-5 sm:mt-20 md:my-15 ">
              Мэдээллээ бүрэн оруулснаар төлбөрөө төлөх боломжтой
            </p>
          </div>
        ) : (
          <Payment />
        )}
      </div>

      <Button onClick={handleSubmit} className="w-full mt-6 cursor-pointer">
        <CreditCard />
        Захиалах
      </Button>
    </main>
  );
}
