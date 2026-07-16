console.log("⚡ ScrapeBolt Loaded");

const companyCards = document.querySelectorAll(".companies-list.mb-3");

const companies = [];

companyCards.forEach(card => {

    const companyAnchor = card.querySelector(
        "h2.ms-2.mb-0 a.text-reset.text-decoration-none"
    );

    const companyName = companyAnchor?.textContent.trim();
    const companyLink = companyAnchor?.href;

    const badges = card.querySelectorAll(
    ".badge.badge-border.d-flex"
    );
    const cin = badges[0]?.textContent.trim();

    const address = badges[1]?.textContent.trim();

    const company = {
    company_name: companyName,
    company_link: companyLink,
    cin: cin,
    address: address
};

console.log(company);
 
});