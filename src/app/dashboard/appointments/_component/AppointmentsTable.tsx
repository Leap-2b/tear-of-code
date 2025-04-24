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
import Image from "next/image";
import { useState } from "react";
import { User, Calendar, Clock, Ellipsis } from "lucide-react";
import { Upcomming } from "./AppointmentsUpcomming";

export function AppointmentsTable() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const upcomingAppointments = [
    {
      id: "1",
      service: "Fade Haircut",
      barber: "John Smith",
      date: "April 20, 2025",
      time: "10:00 AM",
      duration: "45 min",
      price: "$35",
      status: "confirmed",
      image: "/placeholder.svg?height=50&width=50",
    },
  ];

  const pastAppointments = [
    {
      id: "2",
      service: "Regular Haircut",
      barber: "Sarah Johnson",
      date: "April 5, 2025",
      time: "2:30 PM",
      duration: "30 min",
      price: "$25",
      status: "completed",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "3",
      service: "Beard Trim",
      barber: "Mike Williams",
      date: "March 22, 2025",
      time: "11:15 AM",
      duration: "15 min",
      price: "$15",
      status: "completed",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "4",
      service: "Hair Coloring",
      barber: "Sarah Johnson",
      date: "March 10, 2025",
      time: "1:00 PM",
      duration: "90 min",
      price: "$65",
      status: "completed",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: "5",
      service: "Premium Cut & Style",
      barber: "John Smith",
      date: "February 28, 2025",
      time: "4:30 PM",
      duration: "60 min",
      price: "$45",
      status: "completed",
      image: "/placeholder.svg?height=50&width=50",
    },
  ];

  const cancelledAppointments = [
    {
      id: "6",
      service: "Manicure",
      barber: "Lisa Chen",
      date: "March 15, 2025",
      time: "3:00 PM",
      duration: "45 min",
      price: "$35",
      status: "cancelled",
      image: "/placeholder.svg?height=50&width=50",
    },
  ];

  return (
    <Tabs defaultValue="Upcoming" className="w-full">
      <TabsList className=" w-full">
        <TabsTrigger value="Upcoming">Удахгүй</TabsTrigger>
        <TabsTrigger value="Past">Өнгөрсөн</TabsTrigger>
        <TabsTrigger value="Cancelled">Цуцлагдсан</TabsTrigger>
      </TabsList>
      <TabsContent value="Upcoming" className="space-y-5">
        {upcomingAppointments.map((data) => {
          return <Upcomming {...data} />;
        })}
      </TabsContent>
      {/*  */}
      {/*  */}
      <TabsContent value="Past" className="space-y-5">
        {pastAppointments.map((data) => {
          return <Upcomming {...data} />;
        })}
      </TabsContent>
      <TabsContent value="Cancelled" className="space-y-5">
        {cancelledAppointments.map((data) => {
          return <Upcomming {...data} />;
        })}
      </TabsContent>
    </Tabs>
  );
}
