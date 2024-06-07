# Model Selection

- Ranking classification models isn't straightforward because their performance depends on the specific dataset and problem at hand.

- However, a general ranking based on typical use cases, model complexity, interpretability, and performance can be provided.

1. **Random Forest**
    - Strengths:
        - High accuracy due to ensemble learning.
        - Handles both numerical and categorical data.
        - Robust to overfitting.
        - Can capture complex interactions in the data.
        - Provides feature importance.
    - Weaknesses:
        - Computationally intensive.
        - Less interpretable compared to simpler models.

1. **Support Vector Machine (RBF Kernel)**
    - Strengths:
        - High accuracy in complex datasets.
        - Effective in high-dimensional spaces.
        - Works well with non-linear boundaries.
    - Weaknesses:
        - Computationally expensive.
        - Requires careful tuning of hyperparameters (C and gamma).

1. **Support Vector Machine (Linear Kernel)**
    - Strengths:
        - Good performance with linearly separable data.
        - More interpretable than non-linear SVM.
        - Efficient for large feature spaces.
    - Weaknesses:
        - Limited to linear decision boundaries.
        - Requires feature scaling.

1. **Logistic Regression**
    - Strengths:
        - Simple and interpretable.
        - Efficient for binary classification.
        - Well-suited for linearly separable data.
        - Probabilistic output (predicts probabilities).
    - Weaknesses:
        - Struggles with complex relationships and non-linear data.
        - Assumes linear relationship between features and log odds of the outcome.

1. **K-Nearest Neighbour (KNN)**
    - Strengths:
        - Simple and intuitive.
        - Non-parametric (no assumption about data distribution).
        - Good for small datasets with simple decision boundaries.
    - Weaknesses:
        - Computationally expensive during prediction.
        - Sensitive to irrelevant or redundant features.
        - Requires a good choice of kk and distance metric.

1. **Naive Bayes**
    - Strengths:
        - Simple and fast.
        - Performs well with small datasets and real-time predictions.
        - Works well with high-dimensional data.
        - Assumes feature independence.
    - Weaknesses:
        - Assumption of independence is often unrealistic.
        - Can be less accurate than more sophisticated models.

1. **Decision Tree**
    - Strengths:
        - Simple to understand and interpret.
        - Handles both numerical and categorical data.
        - Requires little data preprocessing.
    - Weaknesses:
        - Prone to overfitting.
        - Unstable (small changes in data can lead to different trees).
        - Less accurate compared to ensemble methods like Random Forest.
<hr>

### Ranking
1. Support Vector Machine (RBF Kernel)
1. Random Forest
1. Support Vector Machine (Linear Kernel)
1. Logistic Regression
1. K-Nearest Neighbour (KNN)
1. Naive Bayes
1. Decision Tree

<hr>

## What is Confusion matrix ?

- a matrix that summarizes the performance of a machine learning model on a set of test data. 

- It is a means of displaying the number of accurate and inaccurate instances based on the model’s predictions. 
- It is often used to measure the performance of classification models

<img src='https://miro.medium.com/v2/resize:fit:1218/1*jMs1RmSwnYgR9CsBw-z1dw.png'>

### Note:
- Depending on Use cases, **Type 2** error can be more dangerous then **Type 1** error. 

- Suppose, We are predicting a Cancer using images as data,
    - **Type 1** error is when, Actualy there is no Cancer, but model predicted there is Cancer, In this senario, patient will only incure Mental/Emotional damage.
    
    - **Type 2** error is when, Patien is actually diagnosed with Cancer, but was predicted negative. in this cases, Patient is under false assumption that they safe, and may ....  

## Accuracy paradox
- is the paradoxical finding that accuracy is not a good metric for predictive models when classifying in predictive analytics. 

- This is because a Incompleate or incorrect Models may have higher accuracy which can be miss leading.

- eg.
    - A Model where we only predict positive end, that is we predict true for all the data points.
    - In that case **Negative**, and **type 1** will be zero, and there contributions will be added to ather side. 

$$
\begin{equation}
\begin{pmatrix}
  9700 & 150  \\
  50 & 100  \\
\end{pmatrix}
\end{equation}

→ Accuracy = \frac{9700 + 100}{10,000} =  98\%
$$
<br>

$$
\begin{equation}
\begin{pmatrix}
  9850 & 0  \\
  150 & 0  \\
\end{pmatrix}
\end{equation}

→ Accuracy = \frac{9850 + 0}{10,000} = 98.5\%
$$

- here The Incorrect model has higher Accuracy, but the prediction made will be wrong.

## CAP Analysis
- 

<img src='https://miro.medium.com/v2/resize:fit:1400/1*_kAtX-LmrEib3tX6zrkCtg.png'>

### Ways to Mesure performace of Model.

1. Ratio of areas bounde by curves.
    - <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShh-3h6y5sDfou-hcu8LLsO2njx5YIyGHMzQ&s'>

1. Mark a data point whos projection is 50% on x-axis. <br> Let the corresponding y-axis projection be 'X'. percentage of the X defines the Quality of model.
    - <img src='https://miro.medium.com/max/1400/1*zWOvvrbn_huZhT3QyF_POg.png'>
    - If 
        - 90% < X < 100%  &rarr; Too Good (Overfitting)
        - 80% < X < 90%  &rarr; Very Good
        - 70% < X < 80%  &rarr; Good
        - 60% < X < 70%  &rarr; Poor
        - 0%  < X < 60%  &rarr; Rubbish