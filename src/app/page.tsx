import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p>ymar vilcilgee awmaar bn</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto p-4">
        {/* Haircut */}
        <div className="flex flex-col items-center">
          <div className="bg-[#e6f4f7] w-24 h-24 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2d6e7e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 2c.5 0 1 .5 1 1v18c0 .5-.5 1-1 1H8c-.5 0-1-.5-1-1V3c0-.5.5-1 1-1h8z" />
              <path d="M8 5h8" />
              <path d="M8 9h8" />
              <path d="M8 13h8" />
              <path d="M8 17h8" />
              <path d="M16 2c-1.5 2-4.5 2-6 0" />
              <path d="M12 22v-4" />
              <path d="M10 22h4" />
            </svg>
          </div>
          <span className="text-[#2d6e7e] text-xl font-medium">Haircut</span>
        </div>

        {/* Nails */}
        <div className="flex flex-col items-center">
          <div className="bg-[#e6f4f7] w-24 h-24 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2d6e7e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 16.5H5.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H10" />
              <path d="M11 12.5V10a1 1 0 0 1 1-1h2.5a1 1 0 0 1 .5.1L19 12v4.5" />
              <path d="M5.5 13.5V17a1 1 0 0 0 1 1h.5" />
              <path d="M17.5 17.5h.5a1 1 0 0 0 1-1v-2" />
            </svg>
          </div>
          <span className="text-[#2d6e7e] text-xl font-medium">Nails</span>
        </div>
      </div>
    </div>
  );
}
