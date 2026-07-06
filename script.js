// ==============================
// ضع بيانات الأدوات هنا
// ==============================

const data = {

    emails: [
        {name:"Have I Been Pwned", description:"Checks whether an email address has appeared in known data breaches.", link:"https://haveibeenpwned.com"},
        {name:"GHunt", description:"Open-source tool for investigating publicly available information associated with Google accounts.", link:"https://github.com/mxrch/GHunt"},
        {name:"Holehe", description:"Checks if an email address is registered on hundreds of online services.", link:"https://github.com/megadose/holehe"},
        {name:"EmailRep", description:"Provides reputation data and risk indicators for email addresses.", link:"https://emailrep.io"},
        {name:"Epieos", description:"Finds publicly accessible information and linked accounts from an email address.", link:"https://epieos.com"},
        {name:"SpiderFoot Community Edition", description:"Automates OSINT investigations by correlating email, domain, IP, and other public data.", link:"https://www.spiderfoot.net"},
        {name:"theHarvester", description:"Collects publicly available email addresses and related OSINT from search engines and other sources.", link:"https://github.com/laramies/theHarvester"},
        {name:"Sherlock", description:"Finds usernames across hundreds of social networks and websites, useful after identifying usernames linked to an email.", link:"https://github.com/sherlock-project/sherlock"},
        {name:"Maigret", description:"Searches for usernames across thousands of websites to uncover associated online profiles.", link:"https://github.com/soxoj/maigret"},
        {name:"PhoneBook.cz", description:"Searches publicly indexed email addresses, domains, and subdomains for OSINT investigations.", link:"https://phonebook.cz"}
    ],

    ip: [
        {name:"AbuseIPDB", description:"IP reputation and abuse reports", link:"https://www.abuseipdb.com"},
        {name:"Shodan", description:"Search internet-connected devices", link:"https://www.shodan.io"},
        {name:"Censys", description:"Host, certificate, and service search", link:"https://search.censys.io"},
        {name:"VirusTotal", description:"IP, domain, URL, and file reputation", link:"https://www.virustotal.com"},
        {name:"GreyNoise", description:"Internet scanner and background noise analysis", link:"https://www.greynoise.io"},
        {name:"IPinfo", description:"IP geolocation, ASN, and ISP lookup", link:"https://ipinfo.io"},
        {name:"IP2Location", description:"Geolocation and proxy/VPN detection", link:"https://www.ip2location.com"},
        {name:"ICANN Lookup", description:"WHOIS and domain registration lookup", link:"https://lookup.icann.org"},
        {name:"BGPView", description:"ASN and BGP routing information", link:"https://bgpview.io"},
        {name:"Cisco Talos Intelligence", description:"IP and domain reputation", link:"https://talosintelligence.com"},
    ],

    domain: [
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"}
    ],

    search: [
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"},
        {name:"Tool Name", description:"Paragraph about the tool.", link:"#"}
    ]

};

// ==============================

const toolsList = document.getElementById("toolsList");
const title = document.getElementById("toolTitle");
const description = document.getElementById("toolDescription");
const link = document.getElementById("toolLink");

document.querySelectorAll(".category").forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        showTools(category);

    });

});

function showTools(category){

    toolsList.innerHTML = "";

    data[category].forEach(tool => {

        const btn = document.createElement("button");

        btn.className = "tool";
        btn.textContent = tool.name;

        btn.onclick = () => {

            title.textContent = tool.name;
            description.textContent = tool.description;
            link.href = tool.link;
            link.textContent = tool.link;

        };

        toolsList.appendChild(btn);

    });

}