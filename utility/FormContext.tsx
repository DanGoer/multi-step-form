import { createContext, useContext, useState } from "react";

const MultiFormContext = createContext({} as any);

const useFormContext = () => useContext(MultiFormContext);

interface Props {
  children: React.ReactNode;
}

interface requiredI {
  name: boolean;
  email: boolean;
  phone: boolean;
}

const MultiFormProvider = ({ children }: Props) => {
  const [required, setRequired] = useState<requiredI>({
    name: false,
    email: false,
    phone: false,
  });
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [step, setStep] = useState<number>(1);
  const [schedule, setSchedule] = useState(true);
  const [plan, setPlan] = useState(0);
  const [add, setAdd] = useState({
    service: false,
    storage: false,
    profile: false,
  });

  return (
    <MultiFormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        step,
        setStep,
        schedule,
        setSchedule,
        plan,
        setPlan,
        add,
        setAdd,
        required,
        setRequired,
      }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};

export { MultiFormProvider, useFormContext };
