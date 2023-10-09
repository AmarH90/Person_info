
const theBody = document.querySelector('body');
const openNav = document.querySelector('.menu-bar button');
const closeNav = document.querySelector('.close-nav button');
const Navbar = document.querySelector('.navbar');


function showHide(){
    Navbar.classList.toggle('show');
}

openNav.onclick = showHide;
closeNav.onclick = showHide;

var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; 
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
}
  
    currentImg = n;
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}


const langEl = document.querySelector('.navbar');
const link = document.querySelectorAll('a');
const con1_h1EL = document.querySelector('.con1_h1');
const con2_h1EL = document.querySelector('.con2_h1');
const con3_h1EL = document.querySelector('.con3_h1');
const con4_h1EL = document.querySelector('.con4_h1');
const time_con_h1EL = document.querySelector('.time_con_h1');
const con1_pEL = document.querySelector('.con1_p');
const con2_pEL = document.querySelector('.con2_p');
const con3_pEL = document.querySelector('.con3_p');
const time_con_p1EL = document.querySelector('.time_con_p1');
const con4_th1EL = document.querySelector('.con4_th1');
const con4_th2EL = document.querySelector('.con4_th2');
const con4_th3EL = document.querySelector('.con4_th3');
const con4_th4EL = document.querySelector('.con4_th4');

      link.forEach(el => {
            el.addEventListener('click', () => {
            langEl.querySelector('.active').classList.remove('active');
            el.classList.add('active');
            const attr = el.getAttribute('language');
            con1_h1EL.textContent = data[attr].con1_h1;
            con2_h1EL.textContent = data[attr].con2_h1;
            con3_h1EL.textContent = data[attr].con3_h1;
            con4_h1EL.textContent = data[attr].con4_h1;
            time_con_h1EL.textContent = data[attr].time_con_h1;
            con1_pEL.textContent = data[attr].con1_p;
            con2_pEL.textContent = data[attr].con2_p;
            con3_pEL.textContent = data[attr].con3_p;
            time_con_p1EL.textContent = data[attr].time_con_p1;
            con4_th1EL.textContent = data[attr].con4_th1;
            con4_th2EL.textContent = data[attr].con4_th2;
            con4_th3EL.textContent = data[attr].con4_th3;
            con4_th4EL.textContent = data[attr].con4_th4;
         
    });
});



var data = {
  "croatia": {
      "con1_h1": "Opis firme",
          "con1_p": `Test prjevod 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.\n
          Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel. \n
          Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor. \n
          Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum. \n
          Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
      "con2_h1": "Usluge",
            "con2_p": `
                 Test prjevod 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.
                Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel.    
                Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor.
                Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum.
                Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
        "time_con_h1": "Besplatna voznja kroz grad",
            "time_con_p1": `Za vise informacija kontaktirajte me`,
        "con3_h1": "O Alfa omega",
            "con3_p": `Test prjevod 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.
            Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel.    
            Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor.
            Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum.
            Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
        "con4_h1": "Moji kontakti",
        "con4_th1":"Ime",
        "con4_th2":"Platforme",
        "con4_th3":"Kontakti",
        "con4_th4":"telefon"
      },
    "italy": {
        "con1_h1": "circa l'azienda",
            "con1_p":`Test Italy 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.
            Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel.    
            Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor.
            Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum.
            Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
        "con2_h1": "Servizi", 
            "con2_p" : `Test Italy 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.
            Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel.    
            Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor.
            Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum.
            Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
        "time_con_h1": "Giro gratuito per la città",
            "time_con_p1":`Per maggiori informazioni contattami`,
        "con3_h1": "o alfa omega",
            "con3_p": `Test Italy 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.
            Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel.    
            Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor.
            Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum.
            Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
            "con4_h1": "I miei contatti",
            "con4_th1":"Nome",
            "con4_th2":"Piattaforma",
            "con4_th3":"Contatti",
            "con4_th4":"Telefono"
      },
    "france": {
        "con1_h1": "à propos de l'entreprise",
            "con1_p":`Test France 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.
            Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel.    
            Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor.
            Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum.
            Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
        "con2_h1": "prestations de service", 
            "con2_p" : `Test France 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.
            Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel.    
            Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor.
            Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum.
            Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
        "time_con_h1": "Balade gratuite à travers la ville",
            "time_con_p1": `Pour plus d'informations contactez-moi`,
        "con3_h1": "à propos de l'alpha et de l'oméga",
            "con3_p": `Test France 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor libero, ullamcorper at quam id, porta porttitor risus. Fusce scelerisque commodo mauris sed feugiat. Proin sit amet efficitur metus, non fermentum ligula. Curabitur suscipit consectetur orci et ornare. In sollicitudin interdum tortor, a interdum leo rhoncus sed. Pellentesque pulvinar leo pellentesque tellus aliquet maximus. Fusce in neque cursus, volutpat dui in, aliquam quam.
            Curabitur congue elit vel convallis sodales. Nulla ac varius ipsum. Duis iaculis, lorem ac laoreet volutpat, diam turpis maximus ex, lobortis aliquet erat mauris porttitor arcu. Ut tellus quam, tristique eu tellus at, accumsan tristique sapien. Praesent vitae felis molestie, facilisis erat et, volutpat sem. Cras pharetra, dui sed viverra ultricies, dui velit feugiat metus, ut suscipit purus dui non mauris. Donec sapien enim, varius pulvinar rhoncus ac, bibendum sed ipsum. Suspendisse potenti. Ut porttitor at nisl quis condimentum. Donec in ultricies felis, ut eleifend mi. Sed purus lectus, euismod vestibulum magna vitae, vehicula luctus massa. Vivamus semper elit risus, sed bibendum massa hendrerit venenatis. Praesent bibendum leo leo, eget ullamcorper tortor tincidunt vel.    
            Cras ac ultricies nibh, interdum aliquam augue. Fusce facilisis purus ante, nec facilisis augue sagittis pretium. Nullam non neque et eros cursus posuere quis non magna. Pellentesque et auctor enim. Etiam velit nibh, finibus at maximus ut, pharetra sed turpis. Maecenas id risus feugiat, cursus eros at, tincidunt augue. Ut felis enim, eleifend ut ultrices rhoncus, convallis at dolor.
            Phasellus quis faucibus massa. Vestibulum rutrum purus a mi tempor, quis tristique orci mollis. Ut eget ultrices felis. Donec et magna aliquam, commodo est in, tincidunt risus. Curabitur venenatis massa nec placerat vehicula. Nulla sodales hendrerit augue et aliquam. Sed ac porta neque. Nulla eu dignissim lectus, ac congue est. Aliquam viverra lacinia enim, non bibendum felis rutrum vel. Sed non dui venenatis, faucibus justo vitae, vehicula ante. In ut justo ut felis lobortis interdum ac non est. Fusce sit amet mattis neque. In rhoncus in sem semper dictum.
            Mauris sed libero ligula. Pellentesque id enim non massa laoreet faucibus. Nam pulvinar risus nec urna finibus euismod. Praesent ac pellentesque magna, sit amet suscipit tortor. Aliquam nec sodales felis. Ut eu nisi pellentesque, pulvinar mauris eu, semper nibh. Vestibulum tempor rutrum lacus, at rutrum arcu laoreet eu. Nam eget urna nec neque varius sagittis. Fusce eu mi a ex consectetur dapibus. Sed sagittis sem erat, at cursus magna facilisis sed.`,
        "con4_h1": "Mes contacts",
        "con4_th1":"Nom",
        "con4_th2":"Plateformes",
        "con4_th3":"Contact",
        "con4_th4":"Téléphone"
      },
}

var countDownDate = new Date("Sep 8, 2023 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("time").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
 
if (distance < 0) {
     clearInterval(x);
     document.getElementById("time").innerHTML = "EXPIRED";
   }
}, 1000);



