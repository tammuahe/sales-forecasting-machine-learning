import { InputField } from "./components/InputField";
import "./styles/global.css";
import * as options from "./constants/CategoricalOptions";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

type SelectOption = { value: string | number; name: string };

type Input = {
  Item_Identifier: string;
  Item_Weight: number;
  Item_Fat_Content: string;
  Item_Visibility: number;
  Item_Type: string;
  Item_MRP: number;
  Outlet_Identifier: string;
  Outlet_Establishment_Year: number;
  Outlet_Size: string;
  Outlet_Location_Type: string;
  Outlet_Type: string;
};

function App() {
  const [formData, setFormData] = useState({
    Item_Identifier: "",
    Item_Weight: 0,
    Item_Fat_Content: "",
    Item_Visibility: 0,
    Item_Type: "",
    Item_MRP: 0,
    Outlet_Identifier: "",
    Outlet_Establishment_Year: 0,
    Outlet_Size: "",
    Outlet_Location_Type: "",
    Outlet_Type: "",
    model_name: "DecisionTreeRegressor",
  });

  const [prediction, setPrediction] = useState<number | undefined>(undefined);

  const getPrediction = async (data: Input) => {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch prediction");
    }

    return response.json();
  };

  const mutation = useMutation({
    mutationFn: getPrediction,
    onSuccess: (data) => {
      setPrediction(data.prediction[0]);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | SelectOption
  ) => {
    if ("target" in e) {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: [
          "Item_Weight",
          "Item_Visibility",
          "Item_MRP",
          "Outlet_Establishment_Year",
        ].includes(name)
          ? Number(value) || 0 // Convert to number, default to 0 if invalid
          : value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.name]: e.value,
      }));
    }
    setPrediction(undefined);
  };

  useEffect(() => {
    console.log(JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      <form className="p-2 bg-grey m-2 rounded-2xl mx-auto max-w-4xl min-w-l">
        <InputField
          id="Item_Identifier"
          label="Item_Identifier"
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
          options={["Regular", "Non-Edible", "Low_Fat"]}
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
        <InputField
          id="model_name"
          label="model_name"
          type="select"
          options={options.model_name}
          onChange={handleChange}
        />
      </form>
      <div className="flex flex-col items-center justify-center">
        {prediction && formData.model_name && (
          <div className="text-center bg-grey m-3 p-3">
            Predicted sale, according to model {formData.model_name}:{" "}
            {JSON.stringify(prediction)}
          </div>
        )}
        <input
          type="submit"
          className="border-gray-300 px-4 py-2 rounded bg-grey cursor-pointer hover:bg-gray-100"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
