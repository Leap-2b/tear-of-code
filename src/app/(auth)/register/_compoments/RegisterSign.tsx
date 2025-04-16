"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LockKeyhole, Mail, EyeClosed, Eye } from "lucide-react";
import { useState } from "react";
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(6, {
    message: "Passowrd must be at least 6 characters.",
  }),
  confirmpassword: z.string().min(6, {
    message: "Confirm password must be at least 6 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

export function RegisterSign() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmpassword: "",
      username: "",
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <div className="w-[343px] h-[54px] p-5 text-[16px] font-normal rounded-[8px] flex justify-center items-center m-auto border-1 bg-[#fff]">
                  <Input
                    placeholder="Full Name"
                    type="text"
                    {...field}
                    className="w-full h-[22px] text-[16px] font-normal focus-visible:ring-transparent border-none  shadow-none order-none"
                  />
                </div>
              </FormControl>
              <FormMessage /> {/* Error will show here if invalid */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="w-[343px] h-[54px] p-5 text-[16px] font-normal rounded-[8px] flex justify-center items-center m-auto border-1 bg-[#fff]">
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                    className="w-full h-[22px] text-[16px] font-normal focus-visible:ring-transparent border-none  shadow-none order-none"
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="w-[343px] h-[54px] p-5 text-[16px] font-normal rounded-[8px] flex justify-center items-center m-auto border-1 bg-[#fff]">
                  <Input
                    placeholder="password"
                    type="password"
                    {...field}
                    className="w-full h-[22px] text-[16px] font-normal rounded-full focus-visible:ring-transparent border-none shadow-none order-none "
                  />
                </div>
              </FormControl>
              <FormMessage /> {/* Error will show here if invalid */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="w-[343px] h-[54px] p-5 text-[16px] font-normal rounded-[8px] flex justify-center items-center m-auto border-1 bg-[#fff]">
                  <Input
                    placeholder="Confirm Password"
                    type="text"
                    {...field}
                    className="w-full h-[22px] text-[16px] font-normal focus-visible:ring-transparent border-none  shadow-none order-none"
                  />
                </div>
              </FormControl>
              <FormMessage /> {/* Error will show here if invalid */}
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            className="w-[343px] h-[54px] rounded-[8px] shadow-2xl mx-auto"
          >
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
}
