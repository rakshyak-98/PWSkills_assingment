### Q1 What is css and why use it?
CSS is a markup language use dot define the visual appearance of a web page4 or document written in HTML, CSS allows developers to specify how elements should be displayed, such as their size, color, font and positioning on the page.
- Css is used to separate the presentation of a web page from its content, which imporves the maintainablility and flexibility of the code.
- developer can make global changes to the style of a website by updating a single file, rather than making changes to each individual page.
- css provides stypling options, like ability to create responsive designs that adapt to different screen sizes and devices.

### Q2 What are the different ways to bring CSS into an HTML files?
1. inline CSS: directly to an HTML element using the style attribute.
2. internal CSS: add css to the head section of an HTML document using the style element.
3. External CSS: link to an external css file using the link element in the head section of an HTML document.
4. CSS frameworks: use CSS frameworks such as Bootstrap or Foundation, which provide pre-built CSS code and classes to make designing web pages seasier and more efficient. 

### Q3 What do you mean by specificity in CSS?
When multiple rules apply to the same element, the browser needs to decide which styles should take precedence, specificity is used to determine this.
The more specific a selector, the higher its specificity.
- inline CSS styles have the highest specificity.
- id selectors: have higher specificity than class selector.
- class selectors: have higher specificity than tag selector.
- tag seletros: have the lowest specificity.
NOTE: combining selectors increasses specificity.