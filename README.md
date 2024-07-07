# Code Challenge

![Progress](https://progress-bar.dev/32/?scale=500&title=Solved&width=400&color=babaca&suffix=/500)

**Goal: Solve 500 JavaScript Algorithm Problems**

Current Progress: 32/500

[Click here to update progress](#updating-progress)

## Purpose of This Journey

I started this coding challenge to improve my algorithm skills, which I currently find challenging. My goal is to enhance my problem-solving abilities in JavaScript, starting from the very basics and progressively tackling more complex problems. Through consistent practice and learning, I aim to build a solid foundation in JavaScript, preparing myself for more advanced concepts and frameworks like React. This repository documents my journey of growth and improvement in programming.

## How to Use

Each day has separate HTML and JavaScript files. For example, you can find the first day's coding task in the `day1.html` and `day1.js` files. The code will be commented with explanations and solutions.

## Example Directory Structure

code-challenge/
│
├── README.md
├── day1.html
├── day1.js
├── day2.html
├── day2.js
├── day3.html
├── day3.js
│
...



### Task Descriptions

#### Day 1 - Simple Comparison

**Task:**

In a store, a product costs 20 TL. If the customer has 30 TL or more on their card, they can buy the product; otherwise, they cannot.

**Code:**




### Task Descriptions

#### Day 1 - Simple Comparison

**Task:**

In a store, a product costs 20 TL. If the customer has 30 TL or more on their card, they can buy the product; otherwise, they cannot.

**Code:**


```html
<!-- day1.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 1 Challenge</title>
</head>
<body>
    <script src="day1.js"></script>
</body>
</html>
```

// day1.js
var product = 20;
var customercardlimit = Number(prompt("Please Enter Customer Card Limit"));

if (customercardlimit >= 30) {
    console.log("You Can Buy This Product");
} else {
    alert(`It's not enough limit, You can't buy it. Your Card Limit is ${customercardlimit}`);
}



How to Contribute
Fork this repository
Add your own solutions
Submit a pull request
Contact
For any questions or suggestions, you can reach me at caneryesiltas1@gmail.com


This README template will help visitors understand your project. 
You can add similar explanations for each day and detail how your code works. 
This will keep your repository organized and easy to follow. 
Good luck and happy coding!


