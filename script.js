// --------- HOBBY LIST FUNCTIONALITY ---------

function addBenefit() {

    let input = document.getElementById("benefitInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a benefit");
        return;
    }

    let list = document.getElementById("benefitsList");

    let li = document.createElement("li");
    li.textContent = text + " ";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
}


// --------- CONTACT FORM ALERT ---------

function submitForm(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
}


// --------- DYNAMIC DATE & TIME ---------

function updateTime() {

    let now = new Date();

    let options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    let formatted = now.toLocaleString("en-IN", options);

    document.getElementById("dateTime").innerText = formatted;
}

setInterval(updateTime, 1000);

updateTime();