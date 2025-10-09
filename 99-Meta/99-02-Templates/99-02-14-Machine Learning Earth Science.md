---
<%*
// Use the folder selection and auto-numbering script
const result = await tp.user.createNoteWithFolderSelection(tp);

// If user cancelled, stop
if (!result) {
  new Notice("Note creation cancelled");
  return;
}

// Build the note content
const content = `---
title: ${result.fullTitle}
aliases:
  - ${result.cleanTitle}
tags:
  - machine-learning
  - ml
  - earth-science
  - data-science
ml-type: supervised | unsupervised | deep-learning | reinforcement
domain: earth-science | geology | oceanography | climate
date: ${tp.date.now("YYYY-MM-DD")}
status: 🔬 experimental
cssclasses: 
---

# ${result.cleanTitle}

## 📋 Overview

> [!summary] ML Problem Statement
> Brief description of the machine learning problem and Earth Science application

**Domain**: Earth Science / Geology / Oceanography / Climate
**ML Type**: Classification | Regression | Clustering | Neural Network
**Libraries**: TensorFlow, PyTorch, Scikit-learn, etc.

---

## 🎯 Problem Definition

### Scientific Question


### ML Objective
- **Input Features**: 
- **Target Variable**: 
- **Success Metrics**: Accuracy, F1-Score, RMSE, etc.

### Real-World Impact


---

## 📊 Dataset Description

### Data Source
- **Source**: 
- **Size**: 
- **Time Period**: 
- **Spatial Coverage**: 

### Features
| Feature Name | Type  | Description | Unit |
|--------------|-------|-------------|------|
| feature_1    | float |             |      |
| feature_2    | int   |             |      |
| target       | float |             |      |

### Data Characteristics
- **Total Samples**: 
- **Train/Val/Test Split**: 
- **Class Balance**: 
- **Missing Values**: 

---

## 🔧 Data Preprocessing

### Data Cleaning
\`\`\`python
import pandas as pd
import numpy as np

# Load data


# Handle missing values


# Remove outliers


\`\`\`

### Feature Engineering
\`\`\`python
# Create new features


# Transform features


\`\`\`

### Scaling & Normalization
\`\`\`python
from sklearn.preprocessing import StandardScaler

# Scale features


\`\`\`

---

## 🤖 Model Architecture

### Model Selection
**Chosen Model**: 
**Reason**: 

### Model Configuration
\`\`\`python
from sklearn.model_selection import train_test_split

# Model setup


\`\`\`

### Hyperparameters
- **Learning Rate**: 
- **Batch Size**: 
- **Epochs**: 
- **Other Parameters**: 

---

## 💻 Implementation

### Full Code
\`\`\`python
"""
Machine Learning Model for [Earth Science Problem]
"""

# Imports
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, mean_squared_error

# Load and prepare data
def load_data():
    pass

# Feature engineering
def engineer_features(df):
    pass

# Train model
def train_model(X_train, y_train):
    pass

# Evaluate model
def evaluate_model(model, X_test, y_test):
    pass

# Main execution
if __name__ == "__main__":
    # Load data
    data = load_data()
    
    # Engineer features
    X, y = engineer_features(data)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    
    # Train
    model = train_model(X_train, y_train)
    
    # Evaluate
    evaluate_model(model, X_test, y_test)
\`\`\`

---

## 📈 Results & Evaluation

### Performance Metrics
| Metric    | Train | Validation | Test |
|-----------|-------|------------|------|
| Accuracy  |       |            |      |
| Precision |       |            |      |
| Recall    |       |            |      |
| F1-Score  |       |            |      |

### Confusion Matrix
\`\`\`python
from sklearn.metrics import confusion_matrix
import seaborn as sns

# Plot confusion matrix


\`\`\`

### Feature Importance
\`\`\`python
# Feature importance analysis


\`\`\`

---

## 📊 Visualizations

### Data Distribution
\`\`\`python
# Visualize data distribution


\`\`\`

### Model Performance
\`\`\`python
# Learning curves, ROC curves, etc.


\`\`\`

### Predictions vs Actuals
\`\`\`python
# Compare predictions with ground truth


\`\`\`

---

## 🌍 Earth Science Interpretation

### Geological/Scientific Insights


### Model Limitations in Earth Science Context


### Domain-Specific Considerations
- 
- 

---

## 🔬 Experiments & Iterations

### Experiment 1
- **Date**: 
- **Changes**: 
- **Results**: 
- **Conclusion**: 

### Experiment 2
- **Date**: 
- **Changes**: 
- **Results**: 
- **Conclusion**: 

---

## 🚀 Improvements & Future Work

### Model Improvements
- [ ] Try different algorithms
- [ ] Tune hyperparameters
- [ ] Add more features
- [ ] Ensemble methods

### Data Improvements
- [ ] Collect more data
- [ ] Improve data quality
- [ ] Add external data sources
- [ ] Better feature engineering

### Deployment
- [ ] Model optimization
- [ ] API development
- [ ] Documentation
- [ ] Testing

---

## 🔗 Related Work

### Related Projects
- [[Project 1]]
- [[Project 2]]

### Research Papers
- 

### Similar Problems
- 

---

## 📚 Resources & References

### Papers
- 

### Datasets
- 

### Code Repositories
- 

### Tutorials
- 

---

## 📝 Personal Notes & Observations

<!-- Your insights, challenges faced, lessons learned -->


---

## 🗂️ Metadata

**Created**: ${tp.date.now("YYYY-MM-DD")}
**Last Modified**: ${tp.date.now("YYYY-MM-DD")}
**Status**: 🔬 Experimental | 🧪 Testing | ✅ Validated | 🚀 Production
**Confidence**: Low | Medium | High
**Next Review**: 

---

## 📌 Quick Reference

> [!example] Quick Test
> \`\`\`python
> # Quick code to test the model
> 
> \`\`\`

> [!warning] Known Issues
> - Issue 1
> - Issue 2
`;

// Create the new file in the target folder
const targetFolder = app.vault.getAbstractFileByPath(result.targetFolder);
const newFile = await tp.file.create_new(content, result.fullTitle, false, targetFolder);

// Open the newly created file
if (newFile) {
  await app.workspace.getLeaf(false).openFile(newFile);
}
-%>
