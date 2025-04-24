"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShowProfile } from "./ShowProfile";
import { ChangePassword } from "./ChangePassword";

export function ProfileTable() {
  return (
    <Tabs defaultValue="personalInformation" className="w-full">
      <TabsList className="w-full grid-cols-2 hidden">
        <TabsTrigger value="personalInformation">
          Personal Information
        </TabsTrigger>
        {/* <TabsTrigger value="preferences">Preferences</TabsTrigger> */}
      </TabsList>

      <TabsContent value="personalInformation" className=" w-full space-y-5">
        <ShowProfile />
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                Дансны мэдээлэл
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Бүртгэлийнхээ тохиргоог удирдана уу
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex w-full justify-between items-center">
              <div>
                <h4 className="font-semibold">Нууц үг</h4>
                <p>Хамгийн сүүлд 0 сарын өмнө өөрчлөгдсөн</p>
              </div>
              {/* Change password */}
              <ChangePassword />
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <h4 className="font-semibold">Имэйлийн мэдэгдэл</h4>
                <p>Уулзалтын сануулга болон шинэчлэлтүүдийг хүлээн авах</p>
              </div>
              <Button
                variant={"secondary"}
                className="border-[1px] font-semibold"
              >
                Мэдэгдлийг удирдах
              </Button>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <h4 className="font-semibold">Бүртгэл устгах</h4>
                <p>Бүртгэл хаах</p>
              </div>
              <Button
                variant={"destructive"}
                className="bg-red-400 font-semibold"
              >
                Бүртгэл устгах
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      {/* Table 2 */}
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
