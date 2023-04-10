### Q1 Explain the Table and its properties?
A table is used to display data in a structured manner, with rows and columns. Tables are create using `<table>` element, which contains one or more rows represented by the `<tr>` element, and within each row, one or more cells represented by the `<td>` element.
1. border: This attribute specifies the width of the border around the table. It can be set to 0 to remove the border altogether.

2. cellspacing and cellpadding: These attributes control the amount of space between cells and the content within cells, respectively.

3. width and height: These attributes specify the width and height of the table, respectively.

4. align and valign: These attributes control the horizontal and vertical alignment of the table within its container, respectively.

5. colspan and rowspan: These attributes allow a cell to span multiple columns or rows, respectively.

6. thead, tbody, and tfoot: These elements can be used to group the table rows into header, body, and footer sections, respectively.

7. scope: This attribute can be used on a <th> element to specify whether it represents a row header (scope="row") or a column header (scope="col").

8. caption: This element can be used to add a caption to the table, which will be displayed above or below the table depending on the value of the align attribute.

### Q2 Explain all Media elements and how they work?
1. Images: Images can be used to add visual interest to a web page. They are inserted using the `<img>` tag and are specified using the "src" attribute. The "alt" attribute is used to provide a text alternative for the image, which is helpful for accessibility purposes.
```html
<img src="image.jpg" alt="A beautiful landscape">
```
2. Audio: HTML5 introduced a native audio player that allows you to play audio files on your web page without the need for a third-party plugin. Audio files are inserted using the `<audio>` tag, and the file location is specified using the "src" attribute. The `<source>` tag can be used to specify multiple audio file formats for better browser compatibility.
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```
3. Video: Similar to audio, HTML5 introduced a native video player that allows you to play video files on your web page without the need for a third-party plugin. Video files are inserted using the `<video>` tag, and the file location is specified using the "src" attribute. Like audio, the `<source>` tag can be used to specify multiple video file formats for better browser compatibility.
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video element.
</video>
```
4. Embed: The `<embed>` tag is used to embed third-party content, such as videos or maps, into a web page. The content is specified using the "src" attribute, and the dimensions of the embedded content can be specified using the "width" and "height" attributes.
```html
<embed src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="640" height="480">
```
5. Iframe: The `<iframe>` tag is similar to the `<embed>` tag, but it allows you to embed an entire web page into your web page. The "src" attribute is used to specify the URL of the embedded page, and the "width" and "height" attributes are used to specify the dimensions of the embedded content.
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14133.619121140956!2d-96.7930891!3d32.7800788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48f7d9b45c9b25d3!2sAT%26T%20Stadium!5e0!3m2!1sen!2sus!4v1648661638624!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

### Q3 What is Get and Post in Form?
 GET: when a form is submitted using a GET method, the form data is encoded into the URL and sent to the server as a query string.
 - it is used when the form data is not sensitive and does not require a high level of security.
 - form data is visible in the URL of the resulting web page, which can be bookmarked, shared, or even cached by the web browser.
 ```html
 <form action="example.php" method="get">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>
  <input type="submit" value="Submit">
</form>
```

POST: When a form is submitted using the POST method, the form data is sent to the server in the body of the HTTP request, rather than being appended to the URL like in the GET method, this means that the form data is not visible in the URL and cannot be bookmarked, shared or cached by the web browser.
- POST requests should be used when the form data is sensitive or requires a high level of security.
```html
<form action="example.php" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"><br><br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="Submit">
</form>
``` 

### Q4 List all the input types we have in forms?
1. Text: `<input type="text">` - Used for single-line text input.

2. Password: `<input type="password">` - Used for password input, which obscures the typed text.

3. Email: `<input type="email">` - Used for email input, which automatically validates the email address.

4. Number: `<input type="number">` - Used for numeric input, which may include a spin box control.

5. Checkbox: `<input type="checkbox">` - Used for single or multiple item selection, which may include one or more checkboxes.

6. Radio: `<input type="radio">` - Used for single item selection from a group of choices.

7. Date: `<input type="date">` - Used for inputting dates, which may include a calendar control.

8. Time: `<input type="time">` - Used for inputting times, which may include a time picker control.

9. File: `<input type="file">` - Used for file uploads, which may include a file selector control.

10. Range: `<input type="range">` - Used for selecting a value from a range of values.

11. Submit: `<input type="submit">` - Used for submitting a form.

12. Reset: `<input type="reset">` - Used for resetting a form to its default values.

13. Button: `<input type="button">` - Used for creating custom buttons with JavaScript functionality.

14. Hidden: `<input type="hidden">` - Used for storing data in a form that is not visible to the user.