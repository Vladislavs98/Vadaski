    function validation() {
    var name = document.getElementById("txtName").value;
    var email = document.getElementById("txtEmail").value;
    var broj = document.getElementById("txtNumber").value;
    var poruka = document.getElementById('poruka').value;
    
    try {
        if(name=='' || email == '' || broj =='') throw "Niste popunili sva polja";
        if(isNaN(broj)) throw "Morate uneti broj";
        if(broj.length < 6) throw "Broj mora da sadrzi minimum 6 cifara";
        if(poruka=='') throw "Vasa poruka je prazna";
        else {
            return  alert("Uspesno ste poslali poruku");
        } 
    }
    catch(err) {
    document.getElementById("rezultat").innerHTML = err;
    
    }
}

    var i = 0;
    var images = [];
    var time = 5000;

    images[0] = 'img/slide2.jpg';
    images[1] = 'img/slide3.jpg';
    images[2] = 'img/slide5.jpg';

    function changeImg() {
        document.slide.src = images[i];

        if( i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout("changeImg()", time);
    }
    window.onload = changeImg;



var tim = [
{
    name: "Sonja",
    species: "Snimatelj & menadzer",
    biofrafija: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type
    specimen book. It has survived not only five centuries, but also the leap
    into electronic typesetting.`,
    birthYear: 1988,
    photo: "https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/10177965_10204768011193016_6975838571909776551_n.jpg?_nc_cat=104&_nc_ht=scontent.fbeg2-1.fna&oh=c8a9775af1c3d98f8fe50ef2c06d981f&oe=5D6407EE"
  },
  {
    name: "Vladimir",
    species: "Fotograf & Montazer",
    biofrafija: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type
    specimen book. It has survived not only five centuries, but also the leap
    into electronic typesetting.`,
    birthYear: 1985,
    photo: "https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/1383729_10201506013827516_824707965_n.jpg?_nc_cat=101&_nc_ht=scontent.fbeg2-1.fna&oh=7a3dd034ced24a12895fc8c97f0b5384&oe=5D340E49"
  },
  {
    name: "Vladislav",
    species: "Snimatelj & Montazer",
    biofrafija: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type
    specimen book. It has survived not only five centuries, but also the leap
    into electronic typesetting.`,
    birthYear: 1998,
    photo: "https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/17190535_1412740902151062_2633829923716376958_n.jpg?_nc_cat=108&_nc_ht=scontent.fbeg2-1.fna&oh=be20c674b0a2662d5aa9eafdc0ae3fdb&oe=5D72EA85"
  }
  
];

function age(birthYear) {
  return new Date().getFullYear() - birthYear;
}


function timTemplejt(osoba) {
    return `
  <div class="clan">
    <img class="osoba-photo" src="${osoba.photo}">
    <h2 class="osoba-name">${osoba.name} <span class="species"> (${osoba.species}) </span> </h2>
    <p><strong>Godine :</strong> ${age(osoba.birthYear)}</p>
    <p><strong>Biografija:<br><br></strong>${osoba.biofrafija} </p>
  </div>
  `
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">Clanovi Tima</h1>
  ${tim.map(timTemplejt).join('')}
`




function saveValues()
{
  localStorage._user = document.getElementById("txtName").value;
  localStorage._unumber = document.getElementById("txtNumber").value;
  localStorage._uemail = document.getElementById("txtEmail").value;
  localStorage._udate = document.getElementById("date").value;
  localStorage._uproslava = document.getElementById("proslava").value;
  localStorage._uporuka = document.getElementById("poruka").value;

}
function loadValues()
{
  document.getElementById("txtName").value = localStorage._user;
  document.getElementById("txtNumber").value = localStorage._unumber;
  document.getElementById("txtEmail").value = localStorage._uemail;
  document.getElementById("date").value = localStorage._udate;
  document.getElementById("proslava").value = localStorage._uproslava;
  document.getElementById("poruka").value = localStorage._uporuka;
}