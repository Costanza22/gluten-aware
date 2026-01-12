from fastapi import FastAPI
import joblib
import numpy as np

app = FastAPI()
model = joblib.load("model.pkl")

@app.post("/predict")
def predict(data: dict):
    X = np.array([[ 
        data["ttg_iga"],
        data["ema_iga"],
        data["iga_total"]
    ]])

    pred = model.predict(X)[0]

    return { "celiac_risk": int(pred) }
