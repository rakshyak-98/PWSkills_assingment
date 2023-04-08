### Q1 What is grid?
A grid layout system is a two-dimensional system that allows web developers to divide the page into columns and rows, creating a flexible and modular design that can adapt to different screen sizes and devices.

### Q2 What is the difference between Flex and Grid?
|Flex|Grid|
|----|----|
|1-dimensional|2-dimensional|
|horizontal or vertical| both horizontal and vertical|
|child align in one axis| child align in both axis|
|cell sizing not directly controlled, can be indirectly affected by `felx-basis` and `flex-grow`| cell sizing directly controlled using `grid-template-columns` and `grid-template-rows`.|
|can be arranged using `order` property| order is determined by the placeent in the grid|
|can be used for responsiv design, but can become complex| idal for responsive design, with features like `fr` units and media queries|

### Q3 How can you define rows and coluns for your grid?
This can be done using the grid-template-rows and grid-template-columns properties.
```css
.grid-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
}
```

### Q4 List two properties of the grid item and grid container.

Properties of Grid Container:
1. `display`: This property defines the container as a grid container by setting its value to grid.
2. `grid-template-columns` and grid-template-rows: These properties define the number and size of the grid columns and rows in the container.

Properties of Grid item:
1. `grid-column` and grid-row: These properties define the position and span of the grid item in the grid container.
2. `justify-self` and `align-self`: These properties define the alignment of the grid item in the grid cell in which it is placed.