This is simply another calculator project. Perhaps a right of passage for web developers. I did get to learn some valuable 
concepts such as assigning values to HTML elements, specifically buttons, as well as being introduced to 
using math in my JS. For the stylings I ended up utilizing AI to help me achieve the desired result as well as the final bit of functionality.
I plan to study the LLM output for the cosmetic effects at another time to fully understand them. Here are some of the things I learned/ practiced
in this project


HTML:
- The HTML was simple for this project.
- Create div for the calculator as a "container" > Create separate div for display> create all buttons and assign necessary values
- With the assistance of AI, I also implemented a Canvas element which allows the dynamic display of graphics on the webpage. Very useful


CSS:
- There are 2 CSS files, the original was for a static background, the second file is the one used after the implementation of the effects
- We stylized all the buttons, display, colors, hover effects, and used Grid for buttons, instead of Flexbox to organize and group them up
- One fun element was adding a glow to the buttons with the hover pseudo-class
- Of course we added a media query to give responsiveness for smaller devices.


JS:
- the functionality was the most challenging part of this project.
- Of course making use of global variables for desired elements
- We created an object for the operator keys and assigned their values.
- The main function for this calculator is the useOperator(operator). This does the main part of our math and also resets operatorValue and then awaiting
  awaiting next value to true so that we can do continued operations with the result of the first calculation. I had to use AI to help me write the continues
  calculation portion. The rest was fllowing the project video
- We also added functionality to make the display have multiple numbers appending to it until an operator was used
- Then there was adding the correct functionality to the Decimal, operator, and number buttons through the use of conditional logic based on the HTML class element
- Aside from the calculator functionality, there is the Matrix JS file which simply creates the background effect. While I'd love to say
  that I created this on my own, I made use of ai tools available to me in order to create this. 


Overall this simple project provided a very nice challenge. While I felt discouraged not understanding all of the componenets of the
main JS file right away, I did manage to use resources available to me to put this all together. One of the great parts in the world of 
development is not having to re-invent the wheel. 
