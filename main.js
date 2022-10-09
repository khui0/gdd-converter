const rate = new Math.seedrandom("the great depressors")();

document.querySelectorAll("[data-currency]").forEach(input => {
    input.addEventListener("input", () => {
        let from = input.getAttribute("data-currency");
        switch (from) {
            case "usd":
                document.querySelector("[data-currency=gdd]").value = (input.value / rate).toFixed(2)
                break;
            case "gdd":
                document.querySelector("[data-currency=usd]").value = (input.value * rate).toFixed(2)
                break;
        }
    });
});

document.querySelector("[data-currency]").dispatchEvent(new Event("input"));

updateDate();
setInterval(updateDate, 500);

function updateDate() {
    let options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }
    let date = new Date().toLocaleDateString("en-US", options);
    document.getElementById("date").textContent = date;
}