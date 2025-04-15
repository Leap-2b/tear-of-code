import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Badge,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Scissors,
  Star,
} from "lucide-react";

interface SpecialistProfileProps {
  specialist?: {
    id: string;
    name: string;
    title: string;
    image: string;
    rating: number;
    reviewCount: number;
    experience: number;
    about: string;
    specialties: string[];
    services: Array<{
      name: string;
      duration: string;
      price: string;
    }>;
  };
}

export function SpecialistProfile({ specialist }: SpecialistProfileProps) {
  // Default data if no specialist is provided
  const defaultSpecialist = {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Hair Stylist",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviewCount: 127,
    experience: 8,
    about:
      "Sarah is a passionate hair stylist with over 8 years of experience specializing in color transformations and precision cuts. She's known for her attention to detail and ability to create personalized styles that enhance each client's unique features.",
    specialties: [
      "Hair Coloring",
      "Balayage",
      "Precision Cuts",
      "Bridal Styling",
      "Hair Treatments",
    ],
    services: [
      {
        name: "Women's Haircut & Style",
        duration: "60 min",
        price: "$85",
      },
      {
        name: "Men's Haircut",
        duration: "30 min",
        price: "$45",
      },
      {
        name: "Full Color",
        duration: "120 min",
        price: "$120",
      },
      {
        name: "Balayage",
        duration: "180 min",
        price: "$200",
      },
      {
        name: "Blowout",
        duration: "45 min",
        price: "$55",
      },
    ],
  };

  const data = specialist || defaultSpecialist;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card className="overflow-hidden">
        <CardHeader className="pb-0">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <Avatar className="w-24 h-24 border-4 border-background">
              <AvatarImage
                src={data.image || "/placeholder.svg"}
                alt={data.name}
              />
              <AvatarFallback>
                {data.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1 flex-1">
              <CardTitle className="text-2xl">{data.name}</CardTitle>
              <CardDescription className="text-base">
                {data.title}
              </CardDescription>
              <div className="flex items-center gap-1 mt-2">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-medium">{data.rating}</span>
                <span className="text-muted-foreground">
                  ({data.reviewCount} reviews)
                </span>
                <span className="mx-2">•</span>
                <span>{data.experience} years experience</span>
              </div>
            </div>
            <Button className="w-full md:w-auto">Book Appointment</Button>
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className="font-medium mb-2">About</h3>
            <p className="text-muted-foreground">{data.about}</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {data.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary">
                  <Scissors className="h-3 w-3 mr-1" />
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Services</h3>
            <div className="space-y-3">
              {data.services.map((service, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{service.price}</p>
                    <Button variant="link" size="sm" className="h-auto p-0">
                      Book
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <Separator />

        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between py-4">
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Available at Downtown Salon</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
