//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Addresses(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
// user interface logic
$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append(
    '<div class="new-address">' +
      '<div class="form-group">'  +
        '<label for="street">Street</label>' +
        '<input type="text" class="form-control" id="street">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="city">City</label>' +
        '<input type="text" class="form-control" id="city">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="state">State</label>' +
        '<input type="text" class="form-control" id="state">' +
      '</div>' +
  '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input#street").val();
      var inputtedCity = $(this).find("input#city").val();
      var inputtedState = $(this).find("input#state").val();
      var newAddress = new Addresses(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
      console.log(newContact);
    });


    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");



    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + " " + address.city + " " + address.state + "</li>");
      });
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");
  });
});
