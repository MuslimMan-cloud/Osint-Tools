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