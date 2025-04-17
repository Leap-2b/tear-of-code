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
const formSchema = z.object({
  username: z.string().min(3, {
    message: "Хэрэглэгчийн нэр дор хаяж 3 тэмдэгттэй байх ёстой.",
  }),
  password: z.string().min(6, {
    message: "Нууц үг дор хаяж 6 тэмдэгттэй байх ёстой.",
  }),
  confirmpassword: z.string(),
  email: z.string(),
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
        className="space-y-4 w-full mx-auto"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel className="w-full">Хэрэглэгчийн нэр</FormLabel>
              <FormControl>
                <div className="w-full h-[40px] py-5 px-1 text-[16px] font-normal rounded-[5px] flex justify-center items-center m-auto border-1 bg-[#fff]">
                  <Input
                    type="text"
                    {...field}
                    className="w-full h-[40px] text-[16px] font-normal focus-visible:ring-transparent border-none  shadow-none order-none"
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
            <FormItem className="w-full ">
              <FormLabel>Имэйл</FormLabel>
              <FormControl>
                <div className="w-full h-[40px] py-5 px-1 text-[16px] font-normal rounded-[5px] flex justify-center items-center m-auto border-1 bg-[#fff]">
                  <Input
                    placeholder="m@example.com"
                    type="email"
                    {...field}
                    className="w-full h-[40px] text-[16px] font-normal focus-visible:ring-transparent border-none  shadow-none order-none"
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
            <FormItem className="w-full ">
              <FormLabel>Нууц үг</FormLabel>
              <FormControl>
                <div className="w-full h-[40px] py-5 px-1 text-[16px] font-normal rounded-[5px] flex justify-center items-center m-auto border-1 bg-[#fff]">
                  <Input
                    type="password"
                    {...field}
                    className="w-full h-[40px] text-[16px] font-normal rounded-full focus-visible:ring-transparent border-none shadow-none order-none "
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
            <FormItem className="w-full ">
              <FormLabel>Нууц үгээ баталгаажуулна уу</FormLabel>
              <FormControl>
                <div className="w-full h-[40px] py-5 px-1 text-[16px] font-normal rounded-[5px] flex justify-center items-center m-auto border-1 bg-[#fff]">
                  <Input
                    type="password"
                    {...field}
                    className="w-full h-[40px] text-[16px] font-normal focus-visible:ring-transparent border-none  shadow-none order-none"
                  />
                </div>
              </FormControl>
              <FormMessage /> {/* Error will show here if invalid */}
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center mt-8">
          <Button
            type="submit"
            className="w-full h-[40px] rounded-[5px] shadow-2xl mx-auto"
          >
            Бүртгүүлэх
          </Button>
        </div>
      </form>
    </Form>
  );
}
