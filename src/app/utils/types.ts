import {
  AppointmentStatusEnum,
  ProfessionEnum,
  StaffRoleEnum,
} from "../../server/constant";

export interface UserType {
  _id?: string;
  email: string;
  password: string;
  phoneNumber?: string;
  username?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface StaffType {
  _id: string;
  email: string;
  password: string;
  role: StaffRoleEnum;
  name: string;
  experience: number;
  about: string;
  rating: number;
  image: string;
  category: CategoryType;
  profession: ProfessionEnum;
  services: ServiceType[];
  availableTimes: Date[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AppointmentType {
  _id: string;
  userId: UserType;
  staffId: StaffType;
  date: Date;
  time: string;
  status: AppointmentStatusEnum;
  paid: boolean;
  serviceIds: ServiceType;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FeedbackType {
  _id: string;
  userId: UserType;
  staffId: StaffType;
  rating: number;
  createdAt?: Date;
}

export interface ServiceType {
  _id: string;
  name: string;
  price: number;
  category: CategoryType;
  duration: number; // minutes
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryType {
  _id: string;
  name: string;
  image: string;
}
export interface AppointmentsType {
  id: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  status: "completed" | "pending" | "cancelled" | string;
  image: string;
};
