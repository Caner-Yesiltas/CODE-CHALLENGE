# Code Challenge

This repository is created to develop my algorithm skills with JavaScript by solving daily coding tasks. I will start with simple tasks and progressively work on more complex problems. The code, along with explanations and solutions, will be shared here.

## How to Use

Each day has a separate HTML file. For example, you can find the first day's coding task in the `day1.html` file. The code will be commented with explanations and solutions.

### Example Directory Structure

code-challenge/
│
├── README.md
├── day1.html
├── day2.html
├── day3.html
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
    <script>
        var product = 20;
        var customercardlimit = Number(prompt("Please Enter Customer Card Limit"));
        
        if (customercardlimit >= 30) {
            console.log("You Can Buy This Product");
        } else {
            alert(`It's not enough limit, You can't buy it. Your Card Limit is ${customercardlimit}`);
        }
    </script>
</body>
</html>
```
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


