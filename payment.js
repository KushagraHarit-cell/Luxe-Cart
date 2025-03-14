function showPayment(method) {
    document.getElementById("upi-form").classList.add("hidden");
    document.getElementById("card-form").classList.add("hidden");

    if (method === "upi") {
        document.getElementById("upi-form").classList.remove("hidden");
    } else if (method === "card") {
        document.getElementById("card-form").classList.remove("hidden");
    }
}

function processPayment(method) {
    let paymentStatus = document.getElementById("payment-status");

    if (method === "upi") {
        let upiID = document.getElementById("upi-id").value;
        if (upiID === "") {
            paymentStatus.innerHTML = "Please enter a valid UPI ID.";
            paymentStatus.style.color = "yellow";
            return;
        }
    } else if (method === "card") {
        let cardNumber = document.getElementById("card-number").value;
        let cardName = document.getElementById("card-name").value;
        let expiryDate = document.getElementById("expiry-date").value;
        let cvv = document.getElementById("cvv").value;

        if (!cardNumber || !cardName || !expiryDate || !cvv) {
            paymentStatus.innerHTML = "Please fill all card details.";
            paymentStatus.style.color = "yellow";
            return;
        }
    }

    paymentStatus.innerHTML = "Processing payment...";
    paymentStatus.style.color = "white";

    setTimeout(() => {
        paymentStatus.innerHTML = "Payment Successful! ✅";
        paymentStatus.style.color = "lightgreen";
    }, 2000);
}
