const initializeAssButtonEvents = () => {
  // CAN'T TOUCH THIS - START
  const allCloseButtons = document.querySelectorAll(".button--close")

  for (const btn of allCloseButtons) {
    btn.addEventListener(
      "click",
      theEvent => {
        const dialogElement = theEvent.target.parentNode
        dialogElement.close()
      }
    )
  }
  // CAN'T TOUCH THIS - END


  // You will be writing code below this line

  // Show Bart's details when the button is clicked
  const allDetailButtons = document.querySelectorAll("button[id^='button--']")

  // Add an event listener to each one
  for (const btn of allDetailButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
              const theDialog = document.querySelector(dialogSiblingSelector)
              theDialog.showModal()
          }
      )
  }
}

  export default initializeAssButtonEvents