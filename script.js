// === DASHBOARD CORE ===

// Live date + time
function updateDateTime() {
  const now = new Date();
  const dateEl = document.getElementById("dash-date");
  const timeEl = document.getElementById("dash-time");

  if (!dateEl || !timeEl) return;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  dateEl.textContent = dateFormatter.format(now);

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  timeEl.textContent = timeFormatter.format(now);
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Placeholder shift data (we’ll wire this to real data later)
const shifts = []; // TODO: load from localStorage later
const hourlyRate = 15; // default; we’ll move this to Settings later

function calculateHoursAndEarnings() {
  const weeklyEl = document.getElementById("weekly-hours");
  const monthlyEl = document.getElementById("monthly-hours");
  const earningsEl = document.getElementById("earnings-total");

  if (!weeklyEl || !monthlyEl || !earningsEl) return;

  // For now, just show 0 until we wire real data
  weeklyEl.textContent = "0 hrs";
  monthlyEl.textContent = "0 hrs";
  earningsEl.textContent = "$0.00";
}

calculateHoursAndEarnings();

// Quick notes persistence
const notesEl = document.getElementById("quick-notes");
if (notesEl) {
  const saved = localStorage.getItem("quickNotes");
  if (saved) notesEl.value = saved;

  notesEl.addEventListener("input", () => {
    localStorage.setItem("quickNotes", notesEl.value);
  });
}

// Countdown placeholder
function updateCountdown() {
  const labelEl = document.getElementById("countdown-label");
  const timerEl = document.getElementById("countdown-timer");

  if (!labelEl || !timerEl) return;

  // For now, just show a neutral state until shifts are wired
  labelEl.textContent = "No active shift countdown.";
  timerEl.textContent = "--:--:--";
}

setInterval(updateCountdown, 1000);
updateCountdown();
