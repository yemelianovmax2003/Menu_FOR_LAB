function createInfoHtml(obj) {
    let dataHtml = "";
    for (let key in obj) {
        if (obj.githubLink) {
            dataHtml = ` <li>
                        ${obj.title}
                        <ol>
                            <li><a href ="${obj.githubLink}">Посилання на GitHub</a></li>
                            <li><a href ="${obj.gitpagesLink}">Посилання на GitPages</a></li>
                        </ol>
                    </li>`
        } else if (obj.other) {
            dataHtml = ` <li>
                        ${obj.title}
                        <ol>
                        <li><a href ="${obj.other}">Посилання на YouTube</a></li>
                        </ol>
                    </li>`
        }
    }
    return dataHtml;
}
// h1 tag and text 
const head = document.getElementById("head");
let headSite = document.createElement("h1");
headSite.textContent = 'Перескладання Максим Ємелянов ІПЗ/Р18к ВЕБ';
headSite.style = "text-align:center;";
head.appendChild(headSite);


// data for labs
const data = [
    {
        id: 1,
        title: "Лабораторна робота 1 з Web-дизайну",
        githubLink: "https://github.com/yemelianovmax2003/LAB1_WEB",
        gitpagesLink: "https://yemelianovmax2003.github.io/LAB1_WEB/",
        other: '',
    },
    {
        id: 2,
        title: "Лабораторна робота 2 з Web-дизайну",
        githubLink: "https://github.com/yemelianovmax2003/LAB2_WEB",
        gitpagesLink: "https://yemelianovmax2003.github.io/LAB2_WEB/",
        other: '',
    },
    {
        id: 3,
        title: "Лабораторна робота 3 з Web-дизайну",
        githubLink: "https://github.com/yemelianovmax2003/LAB3_WEB",
        gitpagesLink: "https://yemelianovmax2003.github.io/LAB3_WEB/",
        other: '',
    },
    {
        id: 4,
        title: "Лабораторна робота 4 з Web-дизайну",
        githubLink: "https://github.com/yemelianovmax2003/LAB4_WEB",
        gitpagesLink: "https://yemelianovmax2003.github.io/LAB4_WEB/",
        other: '',
    },
    {
        id: 5,
        title: "Лабораторна робота 5 з Web-дизайну",
        githubLink: "https://github.com/yemelianovmax2003/LAB5_WEB",
        gitpagesLink: "https://yemelianovmax2003.github.io/LAB5_WEB/",
        other: '',
    },
    {
        id: 6,
        title: "Лабораторна робота 6 з Web-дизайну",
        githubLink: "",
        gitpagesLink: "",
        other: "https://youtu.be/xGTqWuOWfdc",
    }
];

// output
const menuDiv = document.getElementById('menu');
let ul = document.createElement('ul');
ul.className = "menu_list";
for (let i = 0; i < data.length; i++) {
    ul.innerHTML += createInfoHtml(data[i]);
}
menuDiv.appendChild(ul);


