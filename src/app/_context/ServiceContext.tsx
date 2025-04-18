"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

type ServiceType = {
  services: ServiceType[] | undefined;
  setServices: React.Dispatch<React.SetStateAction<ServiceType[] | undefined>>;
};

export const ServiceContext = createContext<ServiceType>({} as ServiceType);

export const useService = () => {
  return useContext(ServiceContext);
};

export const StaffProvider = ({ children }: { children: ReactNode }) => {
  const [services, setServices] = useState<ServiceType[]>();

  const getAllServices = async () => {
    const response = await axios.get("/api/service/");
    setServices(response.data);
    console.log("services => ", response.data);
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <ServiceContext.Provider value={{ services: services, setServices }}>
      {children}
    </ServiceContext.Provider>
  );
};
