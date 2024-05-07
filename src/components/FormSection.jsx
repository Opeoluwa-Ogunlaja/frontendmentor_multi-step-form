import FormControls from "./FormControls";
import FormField from "./FormField";
import { useSearchParams } from "react-router-dom";

const FirstSection = ({ title }) => {
  return (
    <>
      <div className="flex info-container">
        <h2 className="form-title text-header font-bold eading-wide font-xl">
          {title}
        </h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form className="info-form grid gap-4">
        <FormField label={"Name"} placeholder={"e.g. Stephen King"} />
        <FormField
          label={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
        />
        <FormField label={"Phone number"} placeholder={"e.g. +1 234 567 890"} />
      </form>
    </>
  );
};

const FormSection = () => {
  const [ searchParams, setSearchParams ] = useSearchParams()
  const tab = Number(searchParams.get('tab'))

  return (
    <section className="form-section grid">
      <div className="form-container grid">
        {tab == 1 && <FirstSection title={"Personal Info"}/>}
        {tab == 2 && <FirstSection title={"Omo"}/>}
        {tab == 3 && <FirstSection title={"Oshey"}/>}
      </div>
      <FormControls />
    </section>
  );
};

export default FormSection;
