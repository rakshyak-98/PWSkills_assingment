### Q1 Why CSS selector are use din HTML?
CSS selectors are used in HTML to define the visuial style of specific elements on a web page. Selectors allow to target specific elements in the HTML document and apply different styles to them. This allows to make changes to the visual appearance of the page without affecting the underlying HTML.

### Q2 What are the different types of Selectors in CSS?
1. Type selector: target elements based on their tag names. `p` targets all `<p>`.
2. Class selector: target elements based on the value of their `class` attribute. `.paragraph` targets all elements with a `class` attribute set to `paragraph`.
3. Id selector: target elements based on the value of theri `id` attribute. `#heading1` targets the element with an `id` attribute set to `heading1`.
4. Attribute selector: target elements based on the value of their attributes. `[href]` targets all elements with an `href` attribute.
5. Pseudo-class selector: target element based on their state or relationship to other elements. `a:hover` targets `<a>` elements when the user hovers over them.
6. Pseudo-element selectors: target specific parts of an element, such as the first letter or line of a block of text. For example, the selector `p::first-letter` targets the first letter of all `<p>` elements.

### Q3 How do you include external fornts and apply them?
1. In the head tag add the link element pointing to the font-family source files. Then use the CSS property `font-family: ` to set the font-family.
2. In your CSS file, use the `@font-face` rule to define the font-family and the location of the font files.
``` 
@font-face{
    font-family: 'Open Sans';
    src: url('path/to/OpenSans-Regular.ttf') format('truetype');
}
```