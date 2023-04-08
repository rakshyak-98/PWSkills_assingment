### Q1 What is positon property in CSS and its type?
The `position` property is CSS is used to set the positioning of an element in relation to its containing element. There are four possible values for the `position` property.
Types: `static`, `relative`, `absolute`, `fixed`, `sticky`.

### Q2 How many types of positioning are there in CSS?
1. `static`: This is the default value for all elements, and it means that the element will be positioned according to the normal flow of the document. In other words, it will be positioned where it would normally appear in the document without any additional positioning.
2. `relative`: This value allows you to position an element relative to its normal position. Use `top`, `bottom`, `left` and `right` properties to specify the offset.
3. `absolute`: This value allows you to position an element relative to its nearest positioned ancestor. If there is no positioned ancestor, it will be positioned relative to the initial containing block (usually the body element). Use the `top`, `bottom`, `left`, and `right` properties to specify the offset from the nearest positioned ancestor.
4. `fixed`: This value positions an element relative to teh viewport and keeps it fixed in that position even if the page is scrolled. Use the `top`, `bottom`, `left`, and `right` properties to specify the offset from the nearest positioned ancestor.
5. `sticky`: This value positions an element based on the user's scroll position, but it also behaves as a relatily positioned element until the viewport reaches a specified threshold. Once the element reaches the threshold, it becomes fixed and remains in place, even when the user continues to scroll.

### Q3 What is z-index and why to use it?
`z-index`: controls the vertical stacking order of elements on a web page. It specifies the order in which elements should be displayed on top of one another, with higher values appearing in front of lower values.
NOTE: this property applies only to elements that have been positioned `realtive`, `absolute`, `fixed`.
- It takes a numeric value which determines the element's position on the z-axis, with higher values appearing in front of lower values. 
- usefult for creating layered layouts, such as menus that appear on top of the other content, or pop-up windows that appear in front of the main content.