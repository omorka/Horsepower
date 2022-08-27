
//get the values from startValue and endValue
function getValues()
{
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) 
    {  
        //generate numbers
        let numbers = generateNumbers(startValue, endValue);
        //display numbers
        displayNumbers(numbers);
    }
    else
    {
        //send error message
        alert("Please enter integers!");
    }

}

//generate numbers from startValue to the endValue
function generateNumbers(startValue, endValue)
{
    let numbers = [];

    for(let i = startValue; i <= endValue; i++)
    {
        numbers.push(i);
    }

    return numbers;
}

//display the numbers and mark even numbers bold
function displayNumbers(numbers)
{
    let templateRows = "";

    for(let i = 0; i < numbers.length; i++)
    {
        let number = numbers[i];

        if(number % 2 == 0)
        {
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`
        }
        else
        {
            templateRows += `<tr><td>${number}</td></tr>`
        }
    }

    document.getElementById("results").innerHTML = templateRows;
}