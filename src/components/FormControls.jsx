import { useSearchParams } from "react-router-dom";

const FormControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tab = Number(searchParams.get("tab"));

  const back = () => {
    if (tab > 1)
      setSearchParams({
        tab: Number(tab) - 1,
      });
    return;
  };

  const next = () => {
    if (tab < 3)
      setSearchParams({
        tab: Number(tab) + 1,
      });
    return;
  };

  return (
    <section className="form-controls flex items-center justify-between">
      <button
        className={`action-btn font-medium ${tab == 1 && "hidden"}`}
        onClick={() => back()}
      >
        Go back
      </button>
      <button
        className={`action-btn font-medium ${tab == 3 && "hidden"} next-btn`}
        onClick={() => next()}
      >
        Next Step
      </button>
    </section>
  );
};

export default FormControls;
