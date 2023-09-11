# custom-google-form
## Description
Custom Google Form.<br>
The data submited in this custom form wil be saved to corresponding response of Google Form.
## Building it
Create a google form.<br>
Make your own custom form using html css with same input fields.<br>
From google form select get pre-filled link and fill and submit the form.<br>
Open and inspect that pre-filled link.<br>
From the code copy the action attribute and name attribute and paste in our custom page's form and input tags.<br>  
-action attribute
```html
<form action="<copy paste from your inspected pre-filled google form>"></form>
```
-name attribute
```html
<input name="<copy paste from each input field of your inspected pre-filled google form>"></input>
```
The _redirects file is added for deploying it in netlify.
