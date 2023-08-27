// Add event listeners on to the inputs that check to see if the content within them is valid after they have been left
// If they aren't valid show a message as to why it isn't valid
// If it is valid show a message sayin that is valid

// In that event listener add a block that adds required to each input so that when they are left it is known that that they are to be required

// In that event listener also check to see if the content within the input is satisfying the pattern requirements

const form = document.querySelector("form"); // this selects the form element

const submitBtn = document.querySelector("#submit_btn");

const inputs = document.querySelectorAll(
  "input[type='text'], input[type ='number'], input[type='email']"
); // this selects all of the inputs of type: text, number, and email

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];

  input.addEventListener("blur", () => {
    input.setAttribute("required", true); // this adds required to the element after it has been left

    const message = input.nextElementSibling; //this selects the span element that is included with the input element.

    if (!input.checkValidity()) {
      message.classList.add("invalid_active"); //adds the red area to the error message
      message.innerText = input.validationMessage;
    } else {
      message.classList.add("valid_active"); //adds green background and writing to the message area;
      message.innerText = "All requirements for this field have been met :D!";
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stops the submit button from submitting prematurely
  if (form.checkValidity()) {
    form.submit(); // if the form is valid submit
  } else {
    console.log("Something ain't right");
  }
});
