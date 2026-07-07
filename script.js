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
        {name:"PhoneBook.cz", description:"Searches publicly indexed email addresses, domains, and subdomains for OSINT investigations.", link:"https://phonebook.cz"},
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
        {name:"Subfinder", description:"Fast passive subdomain enumeration using dozens of OSINT sources.", link:"https://github.com/projectdiscovery/subfinder"},
        {name:"Amass", description:"Advanced domain enumeration, subdomain discovery, ASN mapping, and attack surface mapping.", link:"https://github.com/owasp-amass/amass"},
        {name:"Assetfinder", description:"Finds subdomains using public sources such as certificates, APIs, and search engines.", link:"https://github.com/tomnomnom/assetfinder"},
        {name:"Findomain", description:"High-speed subdomain discovery using Certificate Transparency logs and multiple passive sources.", link:"https://github.com/Findomain/Findomain"},
        {name:"Chaos Dataset", description:"ProjectDiscovery's large database of publicly known subdomains for millions of domains.", link:"https://chaos.projectdiscovery.io"},
        {name:"crt.sh", description:"Searches Certificate Transparency logs to discover subdomains issued SSL/TLS certificates.", link:"https://crt.sh"},
        {name:"SecurityTrails", description:"Historical DNS records, subdomains, WHOIS history, NS records, and domain intelligence.", link:"https://securitytrails.com"},
        {name:"DNSDumpster", description:"Passive DNS reconnaissance, DNS records, subdomains, and DNS visualization.", link:"https://dnsdumpster.com"},
        {name:"WHOISFreaks", description:"WHOIS history, domain ownership data, DNS records, and expiration monitoring.", link:"https://whoisfreaks.com"},
        {name:"DNS.twister", description:"Comprehensive DNS OSINT including MX, TXT, NS, SPF, DMARC, subdomains, and DNS health.", link:"https://dnstwister.report"},
    ],

    search: [
        {name:"Google", description:"The most powerful search engine for OSINT using advanced search operators (Google Dorks).", link:"https://www.google.com"},
        {name:"Bing", description:"Microsoft's search engine with useful indexing and cache differences from Google.", link:"https://www.bing.com"},
        {name:"DuckDuckGo", description:"Privacy-focused search engine that can return different results from Google.", link:"https://duckduckgo.com"},
        {name:"Yandex Search", description:"Excellent for image searches and finding content indexed differently from Western search engines.", link:"https://yandex.com"},
        {name:"Intelligence X", description:"Searches historical websites, leaked data references, domains, emails, URLs, and documents.", link:"https://intelx.io"},
        {name:"PublicWWW", description:"Searches the source code of millions of websites to identify technologies, tracking IDs, and reused code.", link:"https://publicwww.com"},
        {name:"GreyNoise", description:"Internet intelligence for distinguishing benign internet scanning from suspicious activity.", link:"https://www.greynoise.io"},
        {name:"Hunter", description:"Finds professional email addresses associated with domains and verifies them.", link:"https://hunter.io"},
        {name:"Netlas", description:"Search engine for internet assets, domains, SSL certificates, websites, and exposed services.", link:"https://netlas.io"},
        {name:"Searchcode", description:"Searches millions of public source code repositories for strings, secrets, functions, and code snippets.", link:"https://searchcode.com"},
    ],

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