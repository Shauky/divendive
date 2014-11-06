<form name="contactForm" ng-controller="boatController as form" ng-submit="submit(contactForm.$valid, saved)" style="width:620px; float:left;" placeholder="Hi Ghost. What's your real name?">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input ng-model="data.name"> {{data.name}}
<!-- <p>{{saved}}</p> -->
PR Interest: <div class="btn-group"><label class="btn btn-primary" ng-model="checkModel.articles" btn-checkbox>articles</label><label class="btn btn-primary" ng-model="checkModel.news" btn-checkbox>news</label>
<label class="btn btn-primary" ng-model="checkModel.publishing" btn-checkbox>publishing</label><label class="btn btn-primary" ng-model="checkModel.advertising" btn-checkbox>advertising</label>
</div> 
<p></p>
Company:&nbsp;&nbsp; &nbsp; <input ng-model="data.company">  {{data.company}} Designation: &nbsp; <input ng-model="data.job"> {{data.job}}
<p></p>
Address: &nbsp; &nbsp; &nbsp; <input ng-model="data.address"> {{data.address}}
<p></p>
Contact No: &nbsp; <input name="contactNum" ng-model="data.contactNum" ng-pattern="/^00+[0-9]+$/" required> {{data.contactNum}}
<div ng-if="contactForm.$submitted || contactForm.contactNum.$touched" >
    <div ng-if="contactForm.contactNum.$error.required || contactForm.contactNum.$invalid">
         Contact Number is required. Use only numbers prefixed with 00
     </div>
</div>
Country: &nbsp; &nbsp; <country-select data-ng-model="selectedCountry"></country-select>{{selectedCountry}}
<p></p>
Email:  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<input type="email" custom-validator name="emailAdd" min-length="5" max-length="100" ng-model="data.email" required> {{data.email}}  
<div ng-if="contactForm.$submitted || contactForm.emailAdd.$touched" >
    <div ng-if="contactForm.emailAdd.$error.required">
      Email needs to be valid...
     </div>
</div>   <input type="checkbox"> &nbsp; Send me promotions.   
<p></p>
<br>
Message: <textarea id="textMsg" ng-model="data.message" style=" text-align:left;  
    width:500px;
    height:150px; 
    margin-left:25px; 
    padding-bottom:65px; 
    margin-bottom:18px;position:relative;"> {{data.message}} </textarea>
<p></p>
<button id="formSubmit" class="btn-default" type="submit" text="submit" style="float:right; margin-bottom:25px;"
> Submit </button>

<script type="text/javascript">
    document.getElementById("formSubmit").onclick = function () {
        location.href = "../thank";
    };
</script>


<!-- Social Media: facebook: twitter: Submit: footer  -->
    
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.40329273933776!2d73.50367415708128!3d4.175858167006616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7e5302963c67%3A0xd15a0d462152a40a!2sMaldives+Oceanic+Dreams!5e0!3m2!1sen!2smv!4v1412756863669" width="600" height="450" frameborder="0" style="border:0" data-no-instant></iframe> 
</form> 
<p></p>