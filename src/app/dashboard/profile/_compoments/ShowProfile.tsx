"use client";
import type React from "react";
import { useUser } from "@/app/_context/UserContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const ShowProfile = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: user?.username,
    email: user?.email,
    phoneNumber: "(976) 1234-5678",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = async () => {
    // Here you would typically save the data to a database
    setIsEditing(false);

    const res = await fetch(`/api/editProfile?_id=${user?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
    console.log(res);
  };

  const handleCancel = () => {
    if (user) {
      setProfile({
        username: user.username ?? undefined,
        email: user.email ?? undefined,
        phoneNumber: user.phoneNumber || "",
      });
    }
    setIsEditing(false);
  };
  function phoneSelect() {
    const userPhone = user?.phoneNumber;
    if (!userPhone) {
      return "(+976) 1234-5678";
    } else {
      return userPhone;
    }
  }
  return (
    <div className="max-w-[768px] w-full mx-auto">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <h1 className="text-2xl font-bold">Профайл</h1>
            <p className="text-sm text-muted-foreground">
              Бүртгэлийнхээ мэдээллийг удирдах
            </p>
          </div>
          {!isEditing && (
            <Button onClick={() => setIsEditing(true)}>Профайлыг засах</Button>
          )}
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Хэрэглэгчийн нэр
            </label>
            {isEditing ? (
              <Input
                id="username"
                name="username"
                value={profile.username}
                onChange={handleChange}
              />
            ) : (
              <div className="rounded-md border p-2">{profile.username}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Имэйл
            </label>
            {isEditing ? (
              <Input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
              />
            ) : (
              <div className="rounded-md border p-2">{profile.email}</div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Утас
            </label>
            {isEditing ? (
              <Input
                id="phone"
                name="phone"
                value={phoneSelect()}
                onChange={handleChange}
              />
            ) : (
              <div className="rounded-md border p-2">{phoneSelect()}</div>
            )}
          </div>

          {isEditing && (
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
