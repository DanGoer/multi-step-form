import { useFormContext } from "@/utility/FormContext";

function InfoStep() {
  const { personalInfo, setPersonalInfo } = useFormContext();

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="e.g. Stephen King"
        value={personalInfo.name}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, name: e.target.value })
        }
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
      />
    </form>
  );
}
export default InfoStep;
