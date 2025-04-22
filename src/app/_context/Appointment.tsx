"use client";

import { createContext, Dispatch, useContext, useState } from "react";

type AppointmentContextType = {
  setServiceId: Dispatch<string>;
  setServiceStaffId: Dispatch<string>;
};

const appointmentContext = createContext<AppointmentContextType | null>(null);

export const useAppointment = () => {
  return useContext(appointmentContext);
};

const AppointmentsProvider = ({ children }: { children: React.ReactNode }) => {
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [serviceStaffId, setServiceStaffId] = useState<string | null>(null);

  return (
    <appointmentContext.Provider
      value={{
        setServiceStaffId,
        setServiceId,
      }}
    >
      {children}
    </appointmentContext.Provider>
  );
};

export default AppointmentsProvider;
