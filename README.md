# secify.js
`specify.js` is a JQuery plugin that makes it simple to make html code appear based on the selected value of a dropdown.
It is particularly usefull when a single form has the need for a **Please Specify** field that should only be shown when a condition is met.

## HOW TO USE IT
In the html form below...
```html
<div id="thedom" style="display: none">
  <input type="text" name="other" placeholder="Please Specify..."><br>
</div>

<form id="my awesome form">
    <input type="text" name="firstname" placeholder="First Name"><br>
    <input type="text" name="lastname" placeholder="Last Name"><br>
      
    <select id="dd" name="selector" data-trigger="other" data-conditionaldomid="thedom">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        <option value="other">Other</option>
    </select>
</form>
```
We wish to show an input field named **Please Specify** if the option **Other** is chosen. To do this, the following data attributes are needed:
* `data-trigger` this attribute tells the plugin which value the input field should be shown for.
* `data-conditionaldomid` this attribute indicates the id of the DOM element which is to be shown when the condition is met.

The DOM element that we want to show is defined in `<div id="thedom">`.
We can easiy make the textbox for other appear in the form by including `specify.js` and initializing the `<select>` DOM object as follows:
```html
<script src="coolname.js">
<script>
    $( document ).ready(function() {
        $('#dd').specify();
    });
</script>
```

The plugin was written specifically for dropdown lists but can be used with radio buttons or even input boxes since it uses the JQuery `.change()` function to check for input changes and respond to them.