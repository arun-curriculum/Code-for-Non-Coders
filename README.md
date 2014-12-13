#Code for Non Coders

##Share Out
- What is programming and why should I care?
- Should I learn programming or should I hire someone else to do it?
- Come up with two ideas and discuss how technology could make them a reality.

##Typical Web Development Cycle
1. User experience design
2. Information architecture
3. Visual design
4. Development

##Introduction to UX Design
- Two well-known tools:
	- Omnigraffle
	- Balsamiq
- User experience design is all about enhancing user satisfaction while interacting with products.
- It is heavy on research and flow design.

##UX Design Lab
- Take a few minutes to research an online business of your choice.
- Write down at least 5 examples of good UX design, and at least 2 examples of bad UX design / improvements for the product.
- Present to the class your findings.

##Introduction to HTML and CSS

#####HTML and CSS
- HTML and CSS work together to create the front end structure and design.
- Front end frameworks and the grid system.

#####Tags:
- Tags allow you to set up your document's structure.
- Attributes allow you to add additional information to a tag.
- Attributes also allow you to bridge the gap between HTML and CSS.

#####Div:
- Divs are like empty rectangles.
- They help organize content on the page.

```
<div class="margin-top-20 logo">
	My Text Inside
</div>
```

#####Input:
- Inputs allow users to enter data to be saved to a database.
- They come in different forms to facilitate the specific data entry type.

```
<input type="text" class="form-control" />
```

#####Select list:
- Select lists allow users to select options from a dropdown menu.

```
<select>
	<option value="USA">United States</option>
</select>
```

#####Button:
- Buttons are HTML elements that give users the ability to submit the data entered as well as transition to new pages.

```
<button>My Button</button>
```

#####Linking CSS with HTML
- CSS creates the look and feel of the website.
- In order to run external CSS you need to link it to the HTML. This usually goes in the `head` tag:

```
<link rel="stylesheet" href="css/mystyle.css" />
```

#####Linking JS with HTML
- JavaScript enables interaction with the page.
- In order to run external JS you need to link it to the HTML. This usually goes before the closing `body` tag:

```
<script src="js/script.js"></script>
```

##HTML Markup Lab
- Open the `html_form` folder and open `index.html`.
- For each comment denoted by `<!-- -->` replace the comment text with the correct HTML as per the instruction to create the form.
- Alter the CSS file to use a Google Fonts font. You will need to use the `font-family` CSS property.
- Bonus: Use CSS to change the background color of the page. Experiment with using images as backgrounds as well.
- Double Bonus: Review the CSS `transition` property documentation and try to create a small animation anywhere on the form. An example may be to highlight a border around a form field when it is clicked.

##Introduction to JavaScript

#####JavaScript
- JavaScript helps with page interactions such as animations and dynamic loading of content.
- Datatypes
- Variables
- Functions
	- Return
- Alerts
- Arrays
- Loops - FOR loop

##JavaScript Game Lab
- [TicTacToe](https://github.com/arsood/TicTacToe)
- [Memory Game](https://github.com/arsood/Memory)

##Introduction to Back End Development

#####Introduction
- Why is a back end language needed?
- How do back end languages interact with the front end?
- Back end language examples:
	- Ruby on Rails
	- PHP
	- Python
	- NodeJS

#####Databases
- Difference between SQL and NoSQL databases.
	- MySQL
	- PostgresSQL
	- MongoDB
	- Redis

##Architecture Design Lab

Let's look at some popular sites and determine what technologies could be used. Think about the interaction between backend and frontend and how they fit together.

Your answer doesn't have to be the "right" one (the technology they actually use), but we just want you to demonstrate you understand how each piece fits together. You can choose your own site to analyze, but here are some examples:
- Twitter
- Facebook
- Instagram
- Medium

##Introduction to Algorithms
- Algorithms are step-by-step procedures for various calculations.
- They are generally used for data processing and automated reasoning.
- Algorithms are used in programming to perform calculations useful to the application.
- Examples of algorithms:
	- Search for values in a database by location.
	- Find the shortest path between two points.
	- Determine the most popular songs for a given demographic.
	- Suggest friends that you may know based on certain criteria.

##Algorithm Lab

Problem: Given an array list of letters and/or numbers, how can we find out where a certain value is located?

Sample array:

```
[1, 44, 23, 5, "a", "b", "n", 87, 7]
```

How can we find which place "n" is located?

##Overview of Mobile App Development
- Overview of iOS platform and XCode
- Objective C
- Swift
- Overview of Android platform and ADT
- Java
- Hybrid apps with jQuery Mobile, Phonegap, and Ionic.
- API call structure

##Introduction to Version Control Systems
- [Git](http://git-scm.com/) and [GitHub](https://github.com/)
- [SVN](https://subversion.apache.org/)
- [Mercurial](http://mercurial.selenic.com/)

##Design Your Own Project Lab
- In this lab you will have the chance to practice your conceptual skills to virtually create the next big startup.
- Your task is to come up with a great idea in groups and then discuss how it can be implemented with the technologies we have discussed.
- Make sure to:
	- Discuss idea testing possibilities.
	- Design simple UX.
	- List all technologies that you will use.
	- Create simple goals for development and deployment.