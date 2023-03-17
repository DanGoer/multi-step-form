import { useFormContext } from "@/utility/FormContext";
import ConfirmButton from "./ConfirmButton";
import SubTitle from "./SubTitle";
import Title from "./Title";

function InfoStep() {
  const { personalInfo, setPersonalInfo, step, setStep } = useFormContext();

  const handleNextStep = () => {
    setStep(2);
  };

  return (
    <form>
      <Title title="Personal Info" />
      <SubTitle subTitle="Please provide your name, email address, and phone number" />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
        value={personalInfo.name}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, name: e.target.value })
        }
        required
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        value={personalInfo.email}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, email: e.target.value })
        }
        required
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        placeholder="e.g. +1 234 567 890"
        value={personalInfo.phone}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, phone: e.target.value })
        }
        required
      />
      <ConfirmButton handler={handleNextStep} text="Next Step" />
    </form>
  );
}
export default InfoStep;
