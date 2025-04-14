"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LockKeyhole, Mail, EyeClosed, Eye } from "lucide-react";
import { useState } from "react";
const formSchema = z.object({
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const [showpassword, nowshowpassword] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // ✅ Validated and type-safe
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 min-w-[375px] mx-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-[343px] h-[54px] p-5 text-[16px] font-normal rounded-full bg-[#F0F3F6] flex justify-center items-center overflow-hidden hover:border-[#156778] hover:border-2 m-auto">
                  <Mail color="#ADB3BC" />
                  <Input
                    placeholder="email"
                    type="email"
                    {...field}
                    className="w-full h-[22px] text-[16px] font-normal rounded-full focus-visible:ring-transparent border-none  shadow-none order-none"
                  />
                </div>
              </FormControl>
              <FormMessage /> {/* Error will show here if invalid */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-[343px] h-[54px] p-5 text-[16px] font-normal rounded-full bg-[#F0F3F6] flex justify-center items-center overflow-hidden hover:border-[#156778] hover:border-2 m-auto">
                  <LockKeyhole color="#ADB3BC" />
                  <Input
                    placeholder="password"
                    type={showpassword ? "text" : "password"}
                    {...field}
                    className="w-full h-[22px] text-[16px] font-normal rounded-full focus-visible:ring-transparent border-none  shadow-none order-none "
                  />
                  <button
                    type="button"
                    onClick={() => nowshowpassword(!showpassword)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    {showpassword ? (
                      <EyeClosed color="#ADB3BC" />
                    ) : (
                      <Eye color="#ADB3BC" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage /> {/* Error will show here if invalid */}
            </FormItem>
          )}
        />
        <div className="flex justify-end w-[343px]">
          <p className="text-[#156778]">Forgot password?</p>
        </div>
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            className="w-[343px] h-[54px] rounded-full bg-[#156778] hover:bg-[#2e5f69] shadow-2xl mt-[120px] mx-auto"
          >
            Sign in
          </Button>
        </div>
      </form>
    </Form>
  );
}
