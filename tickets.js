document.addEventListener("DOMContentLoaded", function () {
  
    const ticketTypeRadios = document.querySelectorAll('input[name="ticket-type"]');
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const quantityInput = document.getElementById("quantity");
    const totalPriceSpan = document.getElementById("total-price");
    const calculatePriceButton = document.getElementById("calculate-price");
    const buyTicketsButton = document.getElementById("buy-tickets");

    const ticketPrices = {
      adult: 25.0,
      child: 15.0,
      senior: 20.0,
      group: 18.0,
    };
  
 
    function calculateTotalPrice() {
      const selectedTicketType = [...ticketTypeRadios].find((radio) => radio.checked);
      const selectedTicketPrice = ticketPrices[selectedTicketType.value];
      const selectedDate = dateInput.value;
      const selectedTime = timeInput.value;
      const selectedQuantity = quantityInput.value;
      const totalPrice = selectedTicketPrice * selectedQuantity;
  
      totalPriceSpan.textContent = `$${totalPrice.toFixed(2)}`;
    }
  

    calculatePriceButton.addEventListener("click", calculateTotalPrice);
  

    buyTicketsButton.addEventListener("click", function () {
      const totalPrice = parseFloat(totalPriceSpan.textContent.replace("$", ""));
      if (totalPrice > 0) {

        window.location.href = `purchase.html?total=${totalPrice}`;
      } else {
        alert("Please calculate the ticket price first.");
      }
    });
  });
  