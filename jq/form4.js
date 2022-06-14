$(document).ready(function () {
  $("form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 3,
        onlytext: true,
      },
      lname: {
        required: true,
        minlength: 3,
        onlytext: true,
      },
      address1: {
        required: true,
        minlength: 3,
        address: true,
      },
      address2: {
        required: true,
        minlength: 3,
        address: true,
      },
      city: {
        required: true,
        minlength: 3,
        onlytext: true,
      },
      state: {
        required: true,
        minlength: 3,
        onlytext: true,
      },
      pin: {
        required: true,
        minlength: 6,
        pin: true,
      },
      phone: {
        required: true,
        minlength: 9,
      },

      email: {
        required: true,
        email: true,
      },

      feedback: {
        required: true,
        minlength: 50,
      },
      suggestion: {
        required: true,
        minlength: 50,
      },
      gender: { required: true },
    },

    messages: {
      fname: {
        required: "enter first name ",
        minlength: "Name should be at least 3 characters",
      },
      lname: {
        required: "enter last name ",
        minlength: "Name should be at least 3 characters",
      },
      address1: {
        required: "enter address line 1 ",
        minlength: "address should be at least 3 characters",
      },
      address2: {
        required: "enter address line 2 ",
        minlength: "address should be at least 3 characters",
      },
      city: {
        required: "enter city ",
        minlength: "city should be at least 3 characters",
      },
      state: {
        required: "enter state ",
        minlength: "state should be at least 3 characters",
      },

      pin: {
        required: "enter zipcode ",
        minlength: "zipcode should be at least 6 characters",
        placeholder: "match the field",
      },
      phone: {
        required: "enter phone number ",
        minlength: "phone number should be at least 9 characters",
        placeholder: "match the field",
      },
      email: {
        email: "The email should be in the format: abc@domain.tld",
      },
      feedback: {
        required: "enter feedback ",
        minlength: "feedback should be at least 50 characters",
      },
      suggestion: {
        required: "enter suggestion",
        minlength: "suggestion hould be at least 50 characters",
      },

      gender: {
        required: "Please select a gender<br/>",
      },
    },

    errorPlacement: function (error, element) {
      if (element.is(":radio")) {
        error.insertAfter("#other");
      } else {
        // This is the default behavior of the script for all fields
        error.insertAfter(element);
      }
    },
  });

  $.validator.addMethod(
    "onlytext",
    function (value) {
      return /^[a-zA-Z]*$/.test(value);
    },
    "enter a valid input"
  );
  // $.validator.addMethod(
  //   "lname",
  //   function (value) {
  //     return /[a-zA-Z]$/.test(value);
  //   },
  //   "enter a valid name"
  // );
  $.validator.addMethod(
    "address",
    function (value) {
      return /[a-zA-Z0-9]$/.test(value);
    },
    "enter valid address"
  );
  // $.validator.addMethod(
  //   "address2",
  //   function (value) {
  //     return /[a-zA-Z0-9]$/.test(value);
  //   },
  //   "enter valid street .address"
  // );
  // $.validator.addMethod(
  //   "city",
  //   function (value) {
  //     return /[a-zA-Z]$/.test(value);
  //   },
  //   "enter valid city"
  // );
  // $.validator.addMethod(
  //   "state",
  //   function (value) {
  //     return /[a-zA-Z]$/.test(value);
  //   },
  //   "enter valid state"
  // );
  $.validator.addMethod(
    "pin",
    function (value) {
      return /[0-9]$/.test(value);
    },
    "enter valid zipcode"
  );
});
