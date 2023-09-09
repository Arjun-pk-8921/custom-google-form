# gform
## Description
Custom Google Form.<br>
The data submited in this custom form wil be saved to corresponding response of Google Form.
## Getting started
1.Create a google form.<br>
2.Make your own custom form using html css with same input fields.<br>
2.From google form select get pre-filled link and fill and submit the form.<br>
3.Open and inspect that pre-filled link.<br>
4.From the code copy the action attribute and name attribute and paste in our custom page's form and input tags.<br>  
-action attribute
```html
<form action="<copy paste from your inspected pre-filled google form>"></form>
```
-name attribute
```html
<input name="<copy paste from each input field of your inspected pre-filled google form>"></input>
```
