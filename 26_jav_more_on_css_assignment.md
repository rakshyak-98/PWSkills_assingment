### Q1 What is padding and amrgin and when do you use them?
- Padding: refers to the space between an element's content and its border. Used for adding space inside an element, pushing the content away from the edges.
- Margin: refers to the space between an element's border and the adjacent elements or the edge of the containing element. Used for adding space outside an element, pushing it away from other elements or the edge of the containing element.

### Q2 What is display property and explain display inline, block and inline-block?
- display: used to specify the type of the box that an element should generate, which affects how the element is laid out on the web page. Some values of display are `inline`, `block`, `inline-block`, `flex`, `grid`, `none`.
- `display: inline`: makes the element generate an inline-level box. 
    - Inline elements do not start on a new line, but instaed flow within the text of a line.
    - do not have a width or height, and their margin and padding only affect the space between their content and the surronunding text. 
    - Example: `<a>`, `<span>`, `<img>`.
- `display: block`: makes the element generate a block-level box. Block-level elments start on a new line and take up the full width of their parent container.
    - have height, which is determined by the content or by setting a specific height value, and their margin and padding affect the space around them.
    - Example: `<div>`, `<p>`, `<h1>`.
- `display: inline-block`: make the element generate a box that is a hybrid of both inline and block-level elements, Inline-block elements are laid out like inline elements, but they also have a width height.
    - Useful for creating elements that can sit next to each other horizontally, while still having some of the properties of block-level elments.
    - Example: `<button>`, `<textarea>`.

### Q3 Explain min-height, min-width, max-height, and max-width in CSS?
- `min-height`: sets the minimum height that an element can be. 
    - If the content of the element is shorter than the minimum height, teh element will expand to the minimum height. 
    - If the content is taller than teh minimum height, the element will expand to fit the content.
- `min-width`: sets the minimum width that an element can be.
    - If the content of the element is narrower than the minimum width, the element will expand to the minimum width.
    - If the content is wider than the minimu width, the element will expand to fit the content.
- `max-height`: sets the maximum height that an element can be.
    -  If the content of the element is taller than the maximum height, the element will be cut off and will not expand beyond the maximum height.
    -  If the content is shorter than the maximum height, the element will expand to fit the content.
- `max-width`: sets the maximum width that an element can be.
    - If the content of the element is wider than the maximum width, the element will be cut off and will not expand beyond the maximum width.
    -  If the content is narrower than the maximum width, the element will expand to fit the content.