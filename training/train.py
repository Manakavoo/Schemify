"""
Disclaimer: Ensure that you have reviewed and comply with the licensing terms and usage policies associated with any third-party libraries or data sources used in this script.

Author: Chiristo Selva Nimal

"""


from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.multioutput import MultiOutputClassifier
from sklearn.metrics import hamming_loss, accuracy_score, classification_report
import pandas as pd
import joblib
import warnings

df = pd.read_csv("dataset.csv")

X = df[['age', 'religion', 'community', 'income', 'gender', 'segment']]
y = df[['scheme', 'link']]

# remove warnings
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")

X_encoded = pd.get_dummies(X, columns=['religion', 'community', 'gender', 'segment'])
print(X_encoded.info())

X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

classifier = MultiOutputClassifier(RandomForestClassifier())
classifier.fit(X_train, y_train)

# prediction
y_pred = classifier.predict(X_test)

hamming_losses = [hamming_loss(y_test[col], y_pred[:, idx]) for idx, col in enumerate(y_test.columns)]
accuracies = [accuracy_score(y_test[col], y_pred[:, idx]) for idx, col in enumerate(y_test.columns)]

for idx, col in enumerate(y_test.columns):
    print(f"Column: {col}")
    print("Accuracy:", accuracies[idx])
    print("Classification Report:\n", classification_report(y_test[col], y_pred[:, idx]))

# export the model
joblib.dump(classifier, "model.joblib")