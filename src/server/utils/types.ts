import { Schema } from "mongoose";
import {
  AppointmentStatusEnum,
  ProfessionEnum,
  StaffRoleEnum,
} from "../constant";

export interface UserType {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
  phoneNumber?: string;
  username?: string;
  favoriteStaff?: Schema.Types.ObjectId[];
  favoriteServices?: Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface StaffType {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
  role: StaffRoleEnum;
  name: string;
  experience: number;
  about: string;
  rating: number;
  image: string;
  phone: number;
  location: string;
  category: CategoryType;
  profession: ProfessionEnum;
  services: ServiceType;
  availableTimes: Date[];
  bio: string;
  phone: string;
  location: string;
  instagram: string;
  facebook: string;
  gallery: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AppointmentType {
  _id: Schema.Types.ObjectId;
  userId: UserType;
  staffId: StaffType;
  date: Date;
  time: string;
  status: AppointmentStatusEnum;
  paid: boolean;
  paymentMethod: string;
  serviceIds: ServiceType;
  price: number;
  username?: string;
  email?: string;
  phone?: string;
  cancellationReason?: string;
  reasonType?: string;
  cancellationFee?: number;
  paymentStatus?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FeedbackType {
  _id: Schema.Types.ObjectId;
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
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryType {
  _id: Schema.Types.ObjectId;
  name: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
