import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Googleconfirm = () =>{
    return (
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            className="w-[343px] h-[54px] rounded-full bg-[#156778] hover:bg-[#2e5f69] shadow-2xl mx-auto"
          >
            <Image src={"/google.svg"} width={25} height={25} alt="image"/>Sign In with Google
          </Button>
        </div>
    )
}