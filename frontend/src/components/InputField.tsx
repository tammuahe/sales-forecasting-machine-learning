import Select from "react-select";

type InputFieldProps = {
  label: string;
  type: "number" | "text" | "select";
  defaultValue?: number | string;
  id: string;
  options?: (string | number)[];
  required?: boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { value: string | number; name: string }
  ) => void;
};

export const InputField = ({
  label,
  type,
  defaultValue,
  id,
  options,
  required = false,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="grid grid-cols-2 items-center gap-1 p-1">
      <label htmlFor={id} className="bg-grey rounded-xs p-0.5 m-1 self-center">
        {label}
      </label>
      {type === "select" ? (
        <Select
          className="m-0.5 bg-grey rounded-xs px-1"
          options={options?.map((option) => ({
            value: option,
            label: String(option),
          }))}
          onChange={(selectedOption) => {
            if (selectedOption) {
              onChange({ value: selectedOption.value, name: id });
            }
          }}
        />
      ) : (
        <input
          onChange={onChange}
          id={id}
          type={type}
          required={required}
          defaultValue={defaultValue}
          className="mx-2 p-1 bg-white rounded-xs border-grey px-1"
        />
      )}
    </div>
  );
};
