"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { StaffType } from "@/server/utils";

type StaffContextType = {
  staffs: StaffType[] | undefined;
  setStaffs: React.Dispatch<React.SetStateAction<StaffType[] | undefined>>;
};

export const StaffContext = createContext<StaffContextType>(
  {} as StaffContextType
);

export const useStaff = () => {
  return useContext(StaffContext);
};

export const StaffProvider = ({ children }: { children: ReactNode }) => {
  const [staffs, setStaffs] = useState<StaffType[]>();

  const getAllStaffs = async () => {
    const response = await axios.get("/api/staff/");
    setStaffs(response.data.allStaff);
  };

  useEffect(() => {
    getAllStaffs();
  }, []);

  return (
    <StaffContext.Provider value={{ staffs, setStaffs }}>
      {children}
    </StaffContext.Provider>
  );
};
