"use client";

import { createContext, Dispatch, useContext, useState } from "react";

type AppointmentContextType = {
  setServiceId: Dispatch<string>;
  setServiceStaffId: Dispatch<string>;
  serviceId: string | null;
  serviceStaffId: string | null;
};

const appointmentContext = createContext<AppointmentContextType | null>(null);

export const useAppointment = () => {
  return useContext(appointmentContext);
};

const AppointmentsProvider = ({ children }: { children: React.ReactNode }) => {
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [serviceStaffId, setServiceStaffId] = useState<string | null>(null);
  // console.log(serviceId, serviceStaffId);

  return (
    <appointmentContext.Provider
      value={{
        setServiceStaffId,
        setServiceId,
        serviceId,
        serviceStaffId,
      }}
    >
      {children}
    </appointmentContext.Provider>
  );
};

export default AppointmentsProvider;
