from backend.model import predict

# Sample test data
test_data = {
    "Item_Identifier": "FDX12",
    "Item_Weight": 10.5,
    "Item_Fat_Content": "Low Fat",
    "Item_Visibility": 0.02,
    "Item_Type": "Food",
    "Outlet_Identifier": "OUT027",
    "Outlet_Establishment_Year": 1985,
    "Outlet_Size": "Medium",
    "Outlet_Location_Type": "Tier 3",
    "Outlet_Type": "Supermarket Type1",
    "Item_MRP": 250.0
}

# Test each model
for model_name in ["DecisionTreeRegressor", "RandomForestRegressor", "XGBRegressor"]:
    try:
        result = predict(test_data, model_name)
        print(f"{model_name} Prediction:", result)
    except Exception as e:
        print(f"Error testing {model_name}: {e}")
