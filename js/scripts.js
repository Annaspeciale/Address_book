//business logic
function Contact(first, last, address, phoneNumber) {
  this.firstName = first;
  this.lastName = last;
  this.address = address;
  this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedaddress = $("input#new-address").val();
    var inputtedphoneNumber = $("input#new-phoneNumber").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedaddress, inputtedphoneNumber);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-phoneNumber").val("");

    $(".contact").last().click(function() {
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
      $(".phoneNumber").text(newContact.phoneNumber);
      $("#show-contact").show();
    });
  });


});
