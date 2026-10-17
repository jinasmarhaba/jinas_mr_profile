// ===============================
// EDIT THIS FILE WHENEVER YOU WANT
// ===============================

const profile = {
  phone: "8606095470",

  // Replace these with your exact profile URLs before publishing.
  linkedin: "PASTE_YOUR_LINKEDIN_URL_HERE",
  instagram: "PASTE_YOUR_INSTAGRAM_URL_HERE"
};

const whatsappMessage =
  "Assalamu Alaikum. I came across Muhammad Jinas KJ's marriage profile and would like to know more.";

const whatsappURL =
  "https://wa.me/91" + profile.phone + "?text=" + encodeURIComponent(whatsappMessage);

document.getElementById("whatsappTop").href = whatsappURL;
document.getElementById("whatsappBottom").href = whatsappURL;
document.getElementById("callBottom").href = "tel:+91" + profile.phone;

if (!profile.linkedin.startsWith("PASTE_")) {
  document.getElementById("linkedin").href = profile.linkedin;
}
if (!profile.instagram.startsWith("PASTE_")) {
  document.getElementById("instagram").href = profile.instagram;
}

document.getElementById("year").textContent = new Date().getFullYear();
