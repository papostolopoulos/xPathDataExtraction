For the method: processTextAreaValues, I might need to remove it from firing in the arguments list,
both for the textArea and the radio buttons. If it will be firing from the refreshArgumentsArr, every time
I click on the "test function" button, then there is no need to run it beforehand.
In the rprocessTextAreaValues, I need to "return finalArr" in the last line of code.
In the refreshArgumnentsArr, I need to say that the this.argumentsArr[i] equals to the processTextAreaValues for each one of the children components.

BUT would I need to have the process of confirming the string validity separate from the process of
using the string?


Need to figure out why the argumentsArr is empty. I am deleting the content somewhere which is unnecessary.

Need to add an alert in the evalFunction and for it to pop up in the function area in order
to alert the user in the event the function he has pasted is incorrect.  

Need to add errors in the evalString

Need to work more in the evalObject
