import { useId } from "react";

const FormField = ({ placeholder, label, onChange }) => {
  const inputId = useId();

  return (
    <div className="form-group">
      <div className="flex items-center justify-between">
            <label htmlFor={inputId} role="label">
                {label}
            </label>
            <span className="error-message font-medium visually-hidden">omo</span>
      </div>
      <p className="visually-hidden">Fill in the {label} field below</p>
      <input
        type="text"
        id={inputId}
        placeholder={placeholder}
        className="font-medium text-base leading-text"
      />
    </div>
  );
};

export default FormField;
