import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Instagram, Facebook, Twitch } from "lucide-react";
import Link from "next/link";

{
  /* Data */
}
const locate = "123 Main Street, Anytown, USA 12345";
const phone = "(976) 9939-9196";
const email = "info.stylecut.com";
export function ContactInformation() {
  return (
    <div className="w-full px-6">
      <h2 className="mb-6 text-3xl font-bold">Холбоо барих мэдээлэл</h2>
      <div>
        <div className="flex items-center gap-5">
          <MapPin />
          <div>
            <p className="font-bold">Байршил</p>
            <p className="text-gray-600">{locate}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Phone />
          <div>
            <p className="font-bold">Утас</p>
            <p className="text-gray-600">{phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Mail />
          <div>
            <p className="font-bold">Имэйл</p>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
      </div>

      <div className="w-full p-6 rounded-lg border bg-card text-card-foreground shadow-sm mb-8 flex flex-col gap-3 my-6">
        <p className="mb-1 text-xl font-bold">Ажлын цаг</p>
        <div className=" flex justify-between">
          <div className="flex gap-3">
            <Clock /> <p>Даваа - Баасан</p>
          </div>
          <p>9:00 AM - 8:00 PM</p>
        </div>
        <div className=" flex justify-between">
          <div className="flex gap-3">
            <Clock /> <p>Бямба гариг</p>
          </div>

          <p>9:00 AM - 6:00 PM</p>
        </div>
        <div className=" flex justify-between">
          <div className="flex gap-3">
            <Clock /> <p>Ням гараг</p>
          </div>
          <p>10:00 AM - 4:00 PM</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-4 text-xl font-bold">Follow us</h3>
        <div className="flex space-x-4"></div>
        <div className="flex gap-3 ">
          <Link href={"https://youtu.be/dQw4w9WgXcQ?si=_c2Bwoxhz2l0GZJm"}>
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
              <Instagram />
            </div>
          </Link>
          <Link href={"https://youtu.be/dQw4w9WgXcQ?si=_c2Bwoxhz2l0GZJm"}>
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
              <Facebook />
            </div>
          </Link>
          <Link href={"https://youtu.be/dQw4w9WgXcQ?si=_c2Bwoxhz2l0GZJm"}>
            <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
              <Twitch />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
