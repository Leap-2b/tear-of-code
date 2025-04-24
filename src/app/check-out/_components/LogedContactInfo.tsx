"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Payment from "./Payment";
import { Button } from "@/components/ui/button";
import { CreditCard, Pencil } from "lucide-react";
import { formDataType } from "../page";

export function LogedContactInfo({
  submitBooking,
}: {
  submitBooking: () => void;
}) {
  return (
    <main>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Card className="w-full mx-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Захиалгын мэдээлэл
            </CardTitle>
          </CardHeader>

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
