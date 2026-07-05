// ==============================
// ضع بيانات الأدوات هنا
// ==============================

const data = {

    emails: [
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