from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import model
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Define request body model
class PredictionInput(BaseModel):
    Item_Identifier: str
    Item_Weight: float
    Item_Fat_Content: str
    Item_Visibility: float
    Item_Type: str
    Outlet_Identifier: str
    Outlet_Establishment_Year: int
    Outlet_Size: str
    Outlet_Location_Type: str
    Outlet_Type: str
    Item_MRP: float
    model_name: str  # Model selection


@app.post("/predict/")
async def predict(data: PredictionInput):
    try:
        data_dict = data.model_dump()
        model_name = data_dict.pop("model_name")
        prediction = model.predict(data_dict, model_name)
        return prediction
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
