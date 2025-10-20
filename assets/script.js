console.log('it work')


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const container = document.getElementById('container');

for(let i=0; i<teamMembers.length; i++){
  const temp = teamMembers[i];

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const member = teamMembers[i];

  cards[i].innerHTML = `
    <img style: width=98px src="./assets/${member.img}">
    <p>${member.name}</p>
    <p>${member.role}</p>
    <a>${member.email}}</a>
  `;
}

}
