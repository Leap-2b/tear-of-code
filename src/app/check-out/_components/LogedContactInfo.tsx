"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Payment from "./Payment";
import { Button } from "@/components/ui/button";
import { CreditCard, Pencil } from "lucide-react";
import { useUser } from "@/app/_context/UserContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import axios from "axios";

type formDataType = {
  phoneNumber: string;
};

export function LogedContactInfo({
  submitBooking,
  userId,
}: {
  submitBooking: () => void;
  userId: string | null;
}) {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    phoneNumber: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        phoneNumber: user.phoneNumber || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editProfile = async (formData: formDataType) => {
    try {
      const res = await axios.put(`/api/editProfile?_id=${userId}`, {
        phoneNumber: formData.phoneNumber,
      });
      alert(res.data.message);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    }
  };

  const handleSave = (formData: formDataType) => {
    editProfile(formData);
    setOpen(false);
  };

  return (
    <main>
      <div className="w-full grid grid-cols-1  gap-3">
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Захиалгын мэдээлэл
            </CardTitle>
          </CardHeader>

          <CardContent className="mb-6 rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-bold">Холбоо барих мэдээлэл</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-4 ">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Нэр</p>
                  <p>{user?.username}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Имэйл</p>
                  <p>t{user?.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500">Утас</p>
                  <p>{user?.phoneNumber}</p>
                </div>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button className="cursor-pointer">
                      <Pencil className="w-4 h-4 mr-1" />
                      Засварлах
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] flex flex-col gap-5 p-4 bg-[#ffffff]">
                    <div className="flex flex-col gap-1 ">
                      <Label htmlFor="phone">Утас</Label>
                      <Input
                        id="phone"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      onClick={() => handleSave(formData)}
                      className="w-full mt-4 cursor-pointer"
                      disabled={formData.phoneNumber === ""}
                    >
                      <CreditCard />
                      Хадгалах
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <Payment />
        </div>
      </div>

      <Button onClick={submitBooking} className="w-full mt-6 cursor-pointer">
        <CreditCard />
        Захиалах
      </Button>
    </main>
  );
}
