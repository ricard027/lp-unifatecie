import { forwardRef } from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  error?: string;
  isRequired?: boolean;
  options: RadioOption[];
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ label, error, options, name, value, onChange, onBlur }, ref) => {
    return (
      <div>
        <fieldset>
          <div className="flex items-center space-x-6  py-4 px-8 rounded-4xl border  border-white">
            <legend className="text-lg font-semibold text-white">
              {label}
            </legend>
            <div className="flex space-x-6">
              {options.map((option, index) => (
                <label
                  key={option.value}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    ref={index === 0 ? ref : undefined}
                    type="radio"
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="mr-2 text-primary-100 focus:ring-primary-100 w-4 checked:bg-primary-100 h-4"
                  />
                  <span className="text-sm text-white">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </fieldset>
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
