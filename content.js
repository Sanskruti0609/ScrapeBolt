console.log("⚡ ScrapeBolt Loaded");

function parseCompanies() {

    const companyCards = document.querySelectorAll(".companies-list.mb-3");

    const companies = [];

    companyCards.forEach(card => {

        const companyAnchor = card.querySelector(
            "h2.ms-2.mb-0 a.text-reset.text-decoration-none"
        );

        const badges = card.querySelectorAll(
            ".badge.badge-border.d-flex"
        );

        const statusElement = card.querySelector(
            ".badge.badge-primary.d-flex.align-items-center"
        );

        companies.push({
            companyName: companyAnchor?.textContent.trim() ?? "",
            companyLink: companyAnchor?.href ?? "",
            cin: badges[0]?.textContent.trim() ?? "",
            address: badges[1]?.textContent.trim() ?? "",
            status: statusElement?.textContent.trim() ?? ""
        });

    });

    return companies;
}

const companies = parseCompanies();

chrome.runtime.sendMessage({
    action: "PAGE_PARSED",
    companies: companies
});