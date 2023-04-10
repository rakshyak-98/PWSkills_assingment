### Q1 What are inline and block elements in HTML and the difference between them? Name a few inline elements and block elements.
inline elements: are those element those that do not start a new line in a document and only take up as much width as necessary ot display their content, inline elements can be nested within block-level elements or other inline elements. These element height and width is dependent on the content.
Examples of inline elements: `<a>`, `<span>`, `<img>`, `<strong>`.

Block element: are those that start a new line in a document and occupy the full width available. Block elements can contain other block-level elements or inline elements. Height of these element is dependend on the content or the declared css height property  and width is depend on the declared css property or they take fill width of thier parent element.
Examples of block elements: `<div>`, `<p>`, `<h1>`, `<form>`.

### Q2 How to work with images in HTML and explain in detail `<img />` tag important attributes?
 The `<img>` tag is used to add images to an HTML page.
```html
<img src="image_url", alt="description_of_image" title="title_of_image"/>
````
1. src : attribute specifies the URL or path of the image. It is required attribute.
2. alt : attribute provides a description of the image in case the image fails to load or for visually impaired users who use screen readers. It is required attribute.
3. title : attribute provides additional information about the image when the user hovers over the image. It is an optional attribute.
4. srcset : attribute is an additional attribute that can be used to specify different images to be used based on the device's screen size or pixel density.
```html
<img src="example_img.jpg" srcset="example_small.jpg 320w, example_medium.jpg 768w, example_large.jpg 1280w" alt="Example Image">
```

### Q3 How to create lists in HTML?
```html
<ul>
    <li>this is unordered list</li>
    <li>this is unordered list</li>
    <li>this is unordered list</li>
    <li>this is unordered list</li>
</ul>

<ol>
    <li> this is ordered list</ol>
    <li> this is ordered list</ol>
    <li> this is ordered list</ol>
    <li> this is ordered list</ol>
</ol>

```
### Q4 How to interlink web pages and navigate people to other websites?
we can use `<a>` tag with `href` attribute to direct users to the other page.
```html
<a href="link_to_other_page">Viste to new page</a>
```
we can also provide id attribute of other element to navigate in the same page
```html
<a href="#element__selector">got the below element</a>
```