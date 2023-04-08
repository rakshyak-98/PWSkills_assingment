### Q1 What are media queries in CSS and their use case?
Media queries are a fundemental aspect of responsive web design, and they allow you to create styles that are specifically targeted to different devices and screen sizes.
```
@media (media feature){
}
```
(media feature) refers to a specific feature like device or environment, such as the width of the screen, the orientation of the device, or the color scheme being used.
NOTE: When the media query is applied, any styles within the block will be applied only if the media feature matches the specified condition.
Media queries can be used to create a wide variety of responsive design effects, such as:
- Hiding or showing elements depending on screen size.
- Adjusting font sizes or line spacing based on screen size.
- Re-arranging or re-styling page elements based on screen size.
- Serving differnet image size depending on screen sizee and pixel density.
- Adjusting the layout of a page based on the device's orientation.

### Q2 Difference between min-width and max-width in media queries in CSS?
|min-width|max-width|
|---------|---------|
|applies styles if the viewport width is equal to or above the specified value.|Applies styles if the viewport width is equal  to or below the specified value.|
|`@media screen and (min-width: 600px){}`|`@media screen and (max-width: 600px){}`|
|apply styles if viewport width is 600px or more.|applies styles if viewport width 600px or less.|

### Q3 Explain float property and clear property in CSS with examples?
float property in CSS is used to specify how an element should be positioned on a web page. When an element is floated, it is taken out of the normal flow of the document and positioned to the left or right of its containing block. Other elements will then flow around it. The `float` property can be set to either `left`, `right` or `none`.
```
img{
    float: left;
    margin-right: 10px;
}
```
The `float` property is used to float an image to the left of its containing block, with a 10px margin on the right-hand side. This will cause text to flow around the image on the right-hand side.

The `clear` property is CSS is used to specify wheter an element should be allowed to float next to other elements or whether it should be forced to move below them. It can be set to `left`, `right`,`both` or `none`.
```
div{
    clear: both;
}
```
In this above code div element is forced to move below any floated elements that come before it, on both the left and right sides.