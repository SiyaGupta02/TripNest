const input =
document.getElementById("destinationInput");
const button =
document.getElementById("searchBtn");
const noResults =
document.getElementById("noResults");
button.addEventListener("click",function(){
    const searchValue =
    input.value.toLowerCase().trim();
    if (searchValue === ""){
        alert("Please enter a destination!");
        return;
    }
    const cards =
    document.querySelectorAll(".destination-card");
    let found = false;
    cards.forEach(function(card){
        const title =
        card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchValue)) {
            found = true;
            card.style.display = "";            
        } else{
            card.style.display =
            "none"
        }
    });
    if (found){
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
});
const contactForm = 
document.getElementById("contactForm");
const sendBtn = 
document.getElementById("sendBtn");
sendBtn.addEventListener("click",function(){
    if(!contactForm.reportValidity())
    {
        return;
    }
    alert("Thank you! Your message has been received.");
    contactForm.reset();
});