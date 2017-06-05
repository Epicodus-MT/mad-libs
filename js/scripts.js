$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var formFields = ["person1","person2", "animal", "exclamation", "verb", "noun"];

    formFields.forEach(function(formField){
      var result = $("input#"+formField).val();
      $("."+formField).text(result);
    });
    
    $("#story").show();

    event.preventDefault();
  });
});
