import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import joblib

df = pd.read_csv("data/gluten_foods.csv")

X = df[["ttg_iga", "ema_iga", "iga_total"]]
y = df["diagnosis"]

model = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", LogisticRegression())
])

model.fit(X, y)

joblib.dump(model, "model.pkl")
