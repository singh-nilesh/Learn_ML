# Regression for machine learning
- Regression analysis is a statistical method to model the relationship between a dependent (target) and independent (predictor) variables with one or more independent variables. 
- helps us to understand how the value of the dependent variable is changing corresponding to an independent variable when other independent variables are held fixed.
- It predicts continuous/real values such as temperature, age, salary, price, etc.

**Example**
- Suppose there is a marketing company A, who does various advertisement every year and get sales on that. The below list shows the advertisement made by the company in the last 5 years and the corresponding sales:

|Advertisement|Sales|
|:---:|:---:|
|$90|$1000|
|$120|$1300|
|$150|$1800|
|$100|$1200|
|$130|$1380|
|$200| ?? |

Now, the company wants to do the advertisement of $200 in the year 2019 and wants to know the prediction about the sales for this year. So to solve such type of prediction problems in machine learning, we need regression analysis.

**Terminologies Related to the Regression Analysis:**

- **Dependent Variable:** The main factor or target variable.

- **Independent Variable:** The factors which are used to predict the values of the dependent variables.

- **Outliers:** Outlier is an observation which contains either very **low value or very high value** in comparison to other observed values. An outlier may hamper the result, so it should be avoided using **Feature scalling**.
- **Multicollinearity:** If the independent variables are highly correlated with each other than other variables, then such condition is called Multicollinearity. It should not be present in the dataset, because it creates problem while ranking the most affecting variable.

- **Overfitting:** If our algorithm works well with the training dataset but not well with test dataset

- **Underfitting:** if our algorithm does not perform well even with training dataset


**Types of Regression**

- Linear Regression
- Logistic Regression
- Polynomial Regression
- Support Vector Regression
- Decision Tree Regression
- Random Forest Regression
- Ridge Regression
- Lasso Regression

