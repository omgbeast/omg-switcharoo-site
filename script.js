const SITE = {
  installUrl:
    "https://discord.com/oauth2/authorize?client_id=1536196681505443860",
  supportUrl: "#support",
  supportEmail: "xomgbeastx@gmail.com",
};

document
  .querySelectorAll("[data-install]")
  .forEach((link) => (link.href = SITE.installUrl));
document
  .querySelectorAll("[data-support]")
  .forEach((link) => (link.href = SITE.supportUrl));
document.querySelectorAll("[data-email]").forEach((node) => {
  node.textContent = SITE.supportEmail;
  if (node.tagName === "A") node.href = `mailto:${SITE.supportEmail}`;
});
document
  .querySelectorAll("[data-year]")
  .forEach((node) => (node.textContent = new Date().getFullYear()));
