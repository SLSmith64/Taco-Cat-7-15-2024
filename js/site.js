//Function 1 getValues
//Gather the values from the user strings(inputs).
function getValues(){
      
    let inputPali = document.getElementById("paliMessage").value;     
    
    let reversePali = reverseString(inputPali);

    let paliCheck = specialCheck(inputPali);

    let paliCheckRev = specialCheck(reversePali);
    
    let isPalindrome = checkForPalindrome(paliCheck, paliCheckRev);

    displayResults(inputPali, paliCheckRev, isPalindrome);

    
}

//Function 2 checkForPalindrome
//Determine whether a string is a palindrome.
function checkForPalindrome(Pali, reversePali){    

   //Comparison to check if they are the same. 
   if(Pali == reversePali)
    {
        return true; 
    }
    else 
    {
      return false;  
    }
   
}
//Function 3 specialCheck
//Convert "paliMessage".value to lowercase and eliminate whitespace and special characters.
function specialCheck(checkPali)
{
    //To Lower Case
     checkPali = checkPali.toLowerCase();

    //remove spaces and special characters.
    let regex = /[^a-z0-9]/gi;

    checkPali = checkPali.replace(regex,"");

    return checkPali;

}

//Function 4 Reverse a String logic/Calculation
function reverseString(Pali){

    let reversePali = "";

    for( index = Pali.length-1; index>=0; index-- ) {
       reversePali += Pali[index];
    }

    return reversePali;
}

//Function 5 displayResults
//Display a message to the user to show whether their string is a palindrome or not.
function displayResults(inputPali, reversePali, isPalindrome){   

    // document.getElementById("paliAlert").classlist.remove("paliAlert");
    // document.getElementById("paliAlertBad").classlist.remove("paliAlertBad");
    
    let paliAlert = document.getElementById("paliAlert");
    
    paliAlert.style.opacity = 1;

    if(isPalindrome == true){

        
        paliAlert.classList.add('alert-success');
        paliAlert.classList.remove('alert-danger');

        //Success Message to User
        paliAlert.innerHTML = `<div">Well Done! You Entered a Palindrome</div><hr>
        <div>Your phrase reversed is: ${reversePali}</div>`;        

    }else{       
        
        paliAlert.classList.add('alert-danger');
        paliAlert.classList.remove('alert-success');

        //Failure Message to User
        paliAlert.innerHTML = `<div>Sorry! You did not enter a Palindrome</div><hr> <div>Your phrase reversed is: ${reversePali}</div>`;

    }   
}