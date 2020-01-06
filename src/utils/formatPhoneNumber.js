// uses regex to turn a 10-digit number string into the preferred format XXX-XXX-XXXX

export function formatPhoneNumber(tenDigitString) {
  let regexObj = /^(?:\(?([0-9]{3})\)?[-. ]?)?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (regexObj.test(tenDigitString)) {
      let parts = tenDigitString.match(regexObj);
      console.log(parts)
      let hyphenatedPhoneNumber = "";
      hyphenatedPhoneNumber += parts[1] + "-" +  parts[2] + "-" + parts[3];
      return hyphenatedPhoneNumber;
  }
  else {
      //invalid phone number
      return tenDigitString;
  }
}