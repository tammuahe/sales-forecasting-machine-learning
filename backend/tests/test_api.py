import requests

url = "http://127.0.0.1:8000/predict/"

data = {
    "Item_Identifier": "FDX07",
    "Item_Weight": 10.5,
    "Item_Fat_Content": "Low Fat",
    "Item_Visibility": 0.02,
    "Item_MRP": 249.99,
    "Outlet_Identifier": "OUT049",
    "Outlet_Establishment_Year": 1999,
    "Outlet_Size": "Medium",
    "Outlet_Location_Type": "Tier 1",
    "Outlet_Type": "Supermarket Type1",
    "Item_Type": "Food",  # Required field
    "model_name": "RandomForestRegressor"  # Required field
}

response = requests.post(url, json=data)

print(response.json())  # Print the response
