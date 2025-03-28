type InputFieldProps = {
  label: string;
  type: "number" | "text" | "select";
  defaultValue: number | string;
  id: string;
  options?: (string | number)[];
};

export const InputField = ({ label, type, defaultValue, id, options}: InputFieldProps) => {
  return (
    <div className="grid grid-cols-2 items-center gap-1 p-1">
      <label htmlFor={id} className="bg-grey rounded-xs p-0.5 m-1 self-center">{label}</label>
      {type === "select" ? (
        <select id={id} defaultValue={defaultValue} className="m-0.5 bg-grey rounded-xs border px-1">
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) :
      (<input id={id} type={type} defaultValue={defaultValue} className="m-0.5 bg-grey rounded-xs border px-1"/>)}
    </div>
  );
};
