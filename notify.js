// --- NOTIFICATION CONFIGURATION ---
const nigerianNames = ["Chinedu", "Abubakar", "Olumide", "Ezenwa", "Tunde", "Blessing", "Aisha", "Uche", "Temitope", "Ibrahim", "Ngozi", "Favour", "Okon", "Segun", "Musa"];
const payoutAmounts = ["₦157,400", "₦142,000", "₦210,500", "₦98,700", "₦165,000", "₦120,000"];

// Create the HTML structure for the notification via JavaScript
const toastHtml = `
<div id="payout-toast" style="position: fixed; bottom: -120px; left: 20px; right: 20px; background: #ffffff; color: #0f172a; padding: 15px 20px; border-radius: 20px; box-shadow: 0 15px 30px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 15px; z-index: 99999; transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); border: 1px solid #e2e8f0; max-width: 350px; margin: 0 auto;">
    <div style="background: #10b981; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px;">✅</div>
    <div style="flex: 1;">
        <p id="toast-user" style="font-size: 13px; font-weight: 800; margin: 0; color: #0f172a;">User @*******</p>
        <p id="toast-desc" style="font-size: 11px; color: #64748b; margin: 0;">Just withdrew ₦145,500</p>
    </div>
</div>`;

// Inject the HTML into the body
document.body.insertAdjacentHTML('beforeend', toastHtml);

function showNotification() {
    const toast = document.getElementById('payout-toast');
    const userText = document.getElementById('toast-user');
    const descText = document.getElementById('toast-desc');

    const name = nigerianNames[Math.floor(Math.random() * nigerianNames.length)];
    const amount = payoutAmounts[Math.floor(Math.random() * payoutAmounts.length)];
    
    userText.innerText = `${name} @****`;
    descText.innerText = `Just withdrew ${amount} via OPay`;

    toast.style.bottom = "30px"; // Slide Up

    setTimeout(() => {
        toast.style.bottom = "-120px"; // Slide Down
    }, 4000);

    const nextTime = Math.floor(Math.random() * (15000 - 9000 + 1)) + 9000;
    setTimeout(showNotification, nextTime);
}

// Start first notification
setTimeout(showNotification, 4000);

