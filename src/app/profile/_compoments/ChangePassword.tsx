import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ChangePassword() {
  const [value, setvalue] = useState({
    password: "",
    newpassword: "",
    confirmpassword: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalue((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = async () => {
    // Here you would typically save the data to a database
    // const res = await fetch(`/api/editProfile?_id=${user?._id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(profile),
    // });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="font-semibold">
          Нууц үг солих
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Нууц үг солих</DialogTitle>
          <DialogDescription>
            Одоогийн нууц үг болон шинэ нууц үгээ доор оруулна уу.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="gap-4 space-y-4">
            <Label htmlFor="current-password" className="text-top">
              Одоогийн нууц үг
            </Label>
            <Input
              name="password"
              value=""
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
          <div className="gap-4 space-y-4">
            <Label htmlFor="current-password" className="text-top">
              Шинэ нууц үг
            </Label>
            <Input
              name="newpassword"
              value=""
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
          <div className="gap-4 space-y-4">
            <Label htmlFor="current-password" className="text-top">
              Шинэ нууц үгээ баталгаажуулна уу
            </Label>
            <Input
              name="confirmpassword"
              value=""
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
