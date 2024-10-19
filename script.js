/* setTimeout(() => {
    console.log("Delayed for 7 second.");
  }, "7000");  */

const timerLength = document.querySelector('.Timelength');
const timerDisplay = document.querySelector('.time');
const timerInputSpace = document.querySelector('.inputspace')
const button = document.querySelector('.button-7')

//Get time length
//Set Timeout, Countdown and Display
//Remove inputSpace div
//Timer Ends
//Display normal site again with empty timerDisplay

const timer = (timerLength, timerDisplay, timerInputSpace) => {
    console.log('Running');
    let secondsPassed = 0;
    let timeinSeconds = timerLength.value;
    let timeinMilliSeconds = timeinSeconds*1000;

    timerInputSpace.style.display = 'none';
    console.log(timerInputSpace);

    const IntervalCounter = setInterval(() => {
        secondsPassed++;
        timerDisplay.innerText = secondsPassed //updates instead of appending

        if (secondsPassed > timeinSeconds) { // use of > instead of >= to show last second
            clearInterval(IntervalCounter); // stop the interval
            timerDisplay.innerText = "";
            timerLength.value = '';
            timerInputSpace.style.display = 'block'; //keep inside the if block, outside it runs immediately.
        }
    }, 1000)

    
    
};

// Add event listener after the function is declared
button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission
    timer(timerLength, timerDisplay, timerInputSpace);
});


