### Q1 Why is it called a psedo-class?
A pseudo-class is called "pseudo" because it is not a real class that is specified in the HTML markup or in a separate stylesheet. They are preceded by a colon `:` to indicate that they are a special type of selector that applies to elements in a particular state.
- pseudo-class: used to style an element that is in a particular state or condition. 
- Example `:hover` pseudo-class is used to style an element when the user hovers over it with the mouse. `:focus`, `:active`, `:focus`, `:visited`. Each of these pseudo-classes select an element based on a specific state or condition, to apply styles that are specific to that state or confition.

### Q2 What are gradients in CSS?
The CSS gradient is a way of filling an element witha smooth transition between two or more colors. Gradients can be used to create subtile shading effets, bold color combinations, or complex patters.
Ther are two main types of gradients in css:
1. Linear gradients: changes color along a straight line. In direction (`to bottom`, `to bottom right`, `to top`, `to top right`, `to left`, `to right`, `45 deg`)
```
background-image: linear-gradient(var(--direction), var(--color-stop1), var(--color-stop2))
```
2. Radial gradients: changes color in a circular or elliptical pattern. Shap (`ellipse`, `closest-side`), Size, at Position (`center`, `50% 50%`).
```
background-images: radial-gradient(var($shape) var(--size) var(--at-position))
```

### Q3 What are different types of transitions in CSS?
1. Property-based transitions: allow to specify which CSS property or properties should be animated, as well as the direction, timing function, and delay.
2. Color transitions: specify the starting and ending colors, as well as the duration, timing function, and delay.
3. Gradient transition: specify tha starting and ending gradients, as well as the duration, timing function, and delay.
4. Transform transitions: allow to animate changes in CSS transforms such as rotate, scale, translate. Can specify the starting and ending transform values, as well as the duration, timing function, and delay.
5. Opacity transitions: allow to animate changes in opacity. Can specify the starting and ending opacity values, as well as the duration, timing function and delay.