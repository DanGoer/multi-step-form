import { createContext, useContext, useState } from "react";

const MultiFormContext = createContext({} as any);

const useFormContext = () => useContext(MultiFormContext);

interface Props {
  children: React.ReactNode;
}

const MultiFormProvider = ({ children }: Props) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [step, setStep] = useState(1);

  return (
    <MultiFormContext.Provider
      value={{ personalInfo, setPersonalInfo, step, setStep }}
    >
      {children}
    </MultiFormContext.Provider>
  );
};

export { MultiFormProvider, useFormContext };