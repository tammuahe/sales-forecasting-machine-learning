import { InputField } from "./components/InputField";
import "./styles/global.css";
import * as options from "./constants/CategoricalOptions";
import { useEffect, useState } from "react";

type SelectOption = { value: string | number; name: string };

function App() {
  const [formData, setFormData] = useState({
    item_Identifier: "",
    Item_Weight: "",
    Item_Fat_Content: "",
    Item_Visibility: "",
    Item_Type: "",
    Item_MRP: "",
    Outlet_Identifier: "",
    Outlet_Establishment_Year: "",
    Outlet_Size: "",
    Outlet_Location_Type: "",
    Outlet_Type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | SelectOption
  ) => {
    if ("target" in e) {
      // It's a normal input/select element
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      // It's from react-select
      setFormData((prev) => ({
        ...prev,
        [e.name]: e.value,
      }));
    }
  };

  useEffect(() => {console.log(JSON.stringify(formData))},[formData])

  return (
    <div>
      <form className="p-2 bg-grey m-2 rounded-2xl mx-auto max-w-4xl min-w-l">
        <InputField
          id="item_Identifier"
          label="item_Identifier"
          type="select"
          options={options.Item_Identifier}
          onChange={handleChange}
        />
        <InputField
          id="Item_Weight"
          label="Item_Weight"
          type="number"
          onChange={handleChange}
        />
        <InputField
          id="Item_Fat_Content"
          label="Item_Fat_Content"
          type="select"
          defaultValue={2}
          options={[1, 2, 3, 4, 5]}
          onChange={handleChange}
        />
        <InputField
          id="Item_Visibility"
          label="Item_Visibility"
          type="number"
          onChange={handleChange}
        />
        <InputField
          id="Item_Type"
          label="Item_Type"
          type="select"
          options={options.Item_Type}
          onChange={handleChange}
        />
        <InputField
          id="Item_MRP"
          label="Item_MRP"
          type="number"
          onChange={handleChange}
        />
        <InputField
          id="Outlet_Identifier"
          label="Outlet_Identifier"
          type="select"
          options={options.Outlet_Identifier}
          onChange={handleChange}
        />
        <InputField
          id="Outlet_Establishment_Year"
          label="Outlet_Establishment_Year"
          type="number"
          onChange={handleChange}
        />
        <InputField
          id="Outlet_Size"
          label="Outlet_Size"
          type="select"
          options={options.Outlet_Size}
          onChange={handleChange}
        />
        <InputField
          id="Outlet_Location_Type"
          label="Outlet_Location_Type"
          type="select"
          options={options.Outlet_Location_Type}
          onChange={handleChange}
        />
        <InputField
          id="Outlet_Type"
          label="Outlet_Type"
          type="select"
          options={options.Outlet_Type}
          onChange={handleChange}
        />
      </form>
      <div className="flex justify-center">
      <input type="submit" className="border-gray-300 px-4 py-2 rounded bg-grey cursor-pointer hover:bg-gray-100" />
      </div>
    </div>
  );
}

export default App;
