import { useFormContext } from "@/utility/FormContext";
import SubTitle from "./SubTitle";
import Title from "./Title";

function InfoStep() {
  const { personalInfo, setPersonalInfo } = useFormContext();

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
    </form>
  );
}
export default InfoStep;
