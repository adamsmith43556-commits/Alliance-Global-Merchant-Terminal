/**
 * AGMT PREMIUM NOTIFICATION ENGINE
 * Designed for maximum FOMO and Trust
 */

const nigerianNames = [
    "Abubakar M.", "Chinedu O.", "Olumide W.", "Ezenwa U.", "Tunde A.", 
    "Blessing E.", "Aisha K.", "Uche J.", "Temitope B.", "Ibrahim S.", 
    "Ngozi F.", "Favour P.", "Okon E.", "Segun D.", "Musa H.", "Damilola O."
];

const bankIcons = ["💳", "📱", "🌴", "🏦"];
const withdrawalAmounts = ["₦145,000", "₦210,500", "₦88,200", "₦350,000", "₦125,000", "₦420,000"];

// Create the notification container
const style = document.createElement('style');
style.innerHTML = `
    .premium-toast {
        position: fixed;
        top: -100px;
        left: 20px;
        right: 20px;
        max-width: 400px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(10px);
        border-radius: 24px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 999999;
        transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        border: 1px solid rgba(0,0,0,0.05);
    }
    .toast-active { top: 25px; }
    .toast-icon {
        width: 45px;
        height: 45px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        flex-shrink: 0;
    }
    .toast-content { flex: 1; }
    .toast-user { font-size: 13px; font-weight: 800; color: #0f172a; margin: 0; }
    .toast-msg { font-size: 11px; color: #64748b; margin: 2px 0 0; font-weight: 600; }
    .toast-time { font-size: 9px; color: #94a3b8; margin-top: 4px; font-weight: 700; text-transform: uppercase; }
`;
document.head.appendChild(style);

const toastMarkup = `
    <div id="premiumToast" class="premium-toast">
        <div id="pIcon" class="toast-icon">✅</div>
        <div class="toast-content">
            <p id="pUser" class="toast-user">User @*******</p>
            <p id="pMsg" class="toast-msg">Successfully withdrew ₦145,500</p>
            <p class="toast-time">Just Now • Verified</p>
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', toastMarkup);

function launchToast() {
    const toast = document.getElementById('premiumToast');
    const user = document.getElementById('pUser');
    const msg = document.getElementById('pMsg');
    const icon = document.getElementById('pIcon');

    const randomName = nigerianNames[Math.floor(Math.random() * nigerianNames.length)];
    const randomType = Math.random(); // Decide notification type

    if (randomType > 0.6) {
        // UPGRADE NOTIFICATION (FOMO)
        user.innerText = `${randomName} @Verified`;
        msg.innerHTML = `Upgraded to <span style="color:#2563eb;">PREMIUM NODE</span> (Level 2)`;
        icon.innerText = "💎";
        icon.style.background = "rgba(37, 99, 235, 0.1)";
        icon.style.color = "#2563eb";
    } else if (randomType > 0.2) {
        // WITHDRAWAL NOTIFICATION
        const amt = withdrawalAmounts[Math.floor(Math.random() * withdrawalAmounts.length)];
        user.innerText = `${randomName} @Payment`;
        msg.innerText = `Successfully withdrew ${amt} to OPay`;
        icon.innerText = "✅";
        icon.style.background = "rgba(16, 185, 129, 0.1)";
        icon.style.color = "#10b981";
    } else {
        // SERVER SYNC NOTIFICATION
        user.innerText = "System Terminal";
        msg.innerText = "Global Node Synchronization Complete.";
        icon.innerText = "⚡";
        icon.style.background = "rgba(245, 158, 11, 0.1)";
        icon.style.color = "#f59e0b";
    }

    // Show Toast
    toast.classList.add('toast-active');

    // Hide Toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('toast-active');
    }, 5000);

    // Schedule next toast at random interval (between 12 and 25 seconds)
    const nextLaunch = Math.floor(Math.random() * 13000) + 12000;
    setTimeout(launchToast, nextLaunch);
}

// Initial Delay before first toast
setTimeout(launchToast, 4000);
