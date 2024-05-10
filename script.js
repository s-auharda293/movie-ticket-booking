const seat = document.querySelectorAll(".seat");
const ticketInfo = document.querySelector(".ticket-info ");
const movieSelection = document.querySelector("#movie-dropdown");

let price = 0;
let count = 0;
let selectedMovie;

movieSelection.addEventListener("change", () => {
  // Get the selected movie value
  selectedMovie = Number(movieSelection.value);
});

let ticketInfoParagraph = document.createElement("p");
seat.forEach((s) => {
  s.addEventListener("click", (e) => {
    if (!selectedMovie) {
      ticketInfoParagraph.innerHTML = `<span class='warning'>Please select a movie!!!</span>`;
      ticketInfo.appendChild(ticketInfoParagraph);
      return;
    }
    if (
      !s.classList.contains("semi-circle--na") &&
      !s.classList.contains("semi-circle--occupied") &&
      !s.classList.contains("semi-circle--selected")
    ) {
      s.classList.toggle("semi-circle--unoccupied");
      s.classList.toggle("semi-circle--selected");
      price += selectedMovie;
      count++;
      ticketInfoParagraph.innerHTML = `You have occupied <span class='success'> ${count}</span> seats for the price of <span class='success'> ${price}$</span>`;
      ticketInfo.appendChild(ticketInfoParagraph);
      return;
    } else if (s.classList.contains("semi-circle--selected")) {
      s.classList.toggle("semi-circle--selected");
      s.classList.toggle("semi-circle--unoccupied");
      price -= selectedMovie;
      count--;
      ticketInfoParagraph.innerHTML = `You have occupied <span class='success'> ${count}</span> seats for the price of <span class='success'> ${price}$</span>`;
      ticketInfo.appendChild(ticketInfoParagraph);
      return;
    }
  });
});
