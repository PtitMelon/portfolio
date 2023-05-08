function menuMobile() {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');

  btn.addEventListener('click', () => {
    header.classList.toggle('show-nav');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show-nav');
    });
  });
}

menuMobile();

/* Porfolio */

function tabsFilters() {
  const tabs = document.querySelectorAll('.portfolio-filters a');
  const projets = document.querySelectorAll('.portfolio .card');

  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    })
  }

  const showProjets = (elem) => {
    console.log(elem);
    projets.forEach(projet => {

      let filter = projet.getAttribute('data-category');

      if (elem === 'all') {
        projet.parentNode.classList.remove('hide');
        return
      }

      console.log('tutu');
      // ne sera pas pris en compte !
      /*if (filter !== elem) {
        projet.parentNode.classList.add('hide');
      } else {
        projet.parentNode.classList.remove('hide');
      }*/

      // option pour les plus motivés - opérateur ternaire
      filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

    });
  }

  tabs.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let filter = elem.getAttribute('data-filter');
      showProjets(filter)
      resetActiveLinks();
      elem.classList.add('active');
    });
  })
}

tabsFilters()

function showProjectDetails() {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      hideModals();
    });
  });

}

showProjectDetails();

// effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();

var powerAffiche = 0;

function powerPointClick() {
  if (powerAffiche == 0) {
    document.getElementById('AP1diapo').style.display = "flex";
    powerAffiche = 1;
  } else {
    document.getElementById('AP1diapo').style.display = "none";
    powerAffiche = 0;
  }
}

function powerPointOff() {
  powerAffiche2 = 0;
  powerAffiche2_2 = 0;
  powerAffiche2_3 = 0;
  powerAffiche5 = 0;
  powerAffiche6 = 0;
  document.getElementById('AP2diapo').style.display = "none";
  document.getElementById('AP2_2diapo').style.display = "none";
  document.getElementById('AP2_3diapo').style.display = "none";
  document.getElementById('AP3').style.display = "none";
  document.getElementById('AP4').style.display = "none";
}

var powerAffiche2 = 0;

function powerPointAP2Click() {
  if (powerAffiche2 == 0) {
    powerPointOff()
    document.getElementById('AP2diapo').style.display = "flex";
    powerAffiche2 = 1;
  } else {
    document.getElementById('AP2diapo').style.display = "none";
    powerAffiche2 = 0;
  }
}

var powerAffiche2_2 = 0;

function powerPointAP2_2Click() {
  if (powerAffiche2_2 == 0) {
    powerPointOff()
    document.getElementById('AP2_2diapo').style.display = "flex";
    powerAffiche2_2 = 1;
  } else {
    document.getElementById('AP2_2diapo').style.display = "none";
    powerAffiche2_2 = 0;
  }
}

var powerAffiche2_3 = 0;

function powerPointAP2_3Click() {
  if (powerAffiche2_3 == 0) {
    powerPointOff()
    document.getElementById('AP2_3diapo').style.display = "flex";
    powerAffiche2_3 = 1;
  } else {
    document.getElementById('AP2_3diapo').style.display = "none";
    powerAffiche2_3 = 0;
  }
}

var powerAffiche5 = 0;

function powerPointAP3Click() {
  if (powerAffiche5 == 0) {
    powerPointOff()
    document.getElementById('AP3').style.display = "flex";
    powerAffiche5 = 1;
  } else {
    document.getElementById('AP3').style.display = "none";
    powerAffiche5 = 0;
  }
}

var powerAffiche6 = 0;

function powerPointAP4Click() {
  if (powerAffiche6 == 0) {
    powerPointOff()
    document.getElementById('AP4').style.display = "flex";
    powerAffiche6 = 1;
  } else {
    document.getElementById('AP4').style.display = "none";
    powerAffiche6 = 0;
  }
}

function powerPointVeilleOff() {
  powerAffiche3 = 0;
  powerAffiche4 = 0;
  document.getElementById('veilleprincipale').style.display = "none";
  document.getElementById('veillesecondaire').style.display = "none";
}

var powerAffiche3 = 0;

function powerPointVeillePrincipale() {
  if (powerAffiche3 == 0) {
    powerPointVeilleOff()
    document.getElementById('veilleprincipale').style.display = "flex";
    powerAffiche3 = 1;
  } else {
    document.getElementById('veilleprincipale').style.display = "none";
    powerAffiche3 = 0;
  }
}
var powerAffiche4 = 0;

function powerPointVeilleSecondaire() {
  if (powerAffiche4 == 0) {
    powerPointVeilleOff()
    document.getElementById('veillesecondaire').style.display = "flex";
    console.log('test')
    powerAffiche4 = 1;
  } else {
    document.getElementById('veillesecondaire').style.display = "none";
    powerAffiche4 = 0;
  }
}

var blocDocCount1 = 0;

function blocDoc1() {
  if (blocDocCount1 == 0) {
    docOff()
    document.getElementById('pdfdoc1').style.display = "flex"
    blocDocCount1++
  } else {
    document.getElementById('pdfdoc1').style.display = "none"
    blocDocCount1--
  }
}

var blocDocCount2 = 0;

function blocDoc2() {
  if (blocDocCount2 == 0) {
    docOff()
    document.getElementById('pdfdoc2').style.display = "flex"
    blocDocCount2++
  } else {
    document.getElementById('pdfdoc2').style.display = "none"
    blocDocCount2--
  }
}
var blocDocCount3 = 0;

function blocDoc3() {
  if (blocDocCount3 == 0) {
    docOff()
    document.getElementById('pdfdoc3').style.display = "flex"
    blocDocCount3++
  } else {
    document.getElementById('pdfdoc3').style.display = "none"
    blocDocCount3--
  }
}
var blocDocCount4 = 0;

function blocDoc4() {
  if (blocDocCount4 == 0) {
    docOff()
    document.getElementById('pdfdoc4').style.display = "flex"
    blocDocCount4++
  } else {
    document.getElementById('pdfdoc4').style.display = "none"
    blocDocCount4--
  }
}
var blocDocCount5 = 0;

function blocDoc5() {
  if (blocDocCount5 == 0) {
    docOff()
    document.getElementById('pdfdoc5').style.display = "flex"
    blocDocCount5++
  } else {
    document.getElementById('pdfdoc5').style.display = "none"
    blocDocCount5--
  }
}
var blocDocCount6 = 0;

function blocDoc6() {
  if (blocDocCount6 == 0) {
    docOff()
    document.getElementById('pdfdoc6').style.display = "flex"
    blocDocCount6++
  } else {
    document.getElementById('pdfdoc6').style.display = "none"
    blocDocCount6--
  }
}
var blocDocCount7 = 0;

function blocDoc7() {
  if (blocDocCount7 == 0) {
    docOff()
    document.getElementById('pdfdoc7').style.display = "flex"
    blocDocCount7++
  } else {
    document.getElementById('pdfdoc7').style.display = "none"
    blocDocCount7--
  }
}
var blocDocCount8 = 0;

function blocDoc8() {
  if (blocDocCount8 == 0) {
    docOff()
    document.getElementById('pdfdoc8').style.display = "flex"
    blocDocCount8++
  } else {
    document.getElementById('pdfdoc8').style.display = "none"
    blocDocCount8--
  }
}
var blocDocCount9 = 0;

function blocDoc9() {
  if (blocDocCount9 == 0) {
    docOff()
    document.getElementById('pdfdoc9').style.display = "flex"
    blocDocCount9++
  } else {
    document.getElementById('pdfdoc9').style.display = "none"
    blocDocCount9--
  }
}
var blocDocCount10 = 0;

function blocDoc10() {
  if (blocDocCount10 == 0) {
    docOff()
    document.getElementById('pdfdoc10').style.display = "flex"
    blocDocCount10++
  } else {
    document.getElementById('pdfdoc10').style.display = "none"
    blocDocCount10--
  }
}
var blocDocCount11 = 0;

function blocDoc11() {
  if (blocDocCount11 == 0) {
    docOff()
    document.getElementById('pdfdoc11').style.display = "flex"
    blocDocCount11++
  } else {
    document.getElementById('pdfdoc11').style.display = "none"
    blocDocCount11--
  }
}
var blocDocCount12 = 0;

function blocDoc12() {
  if (blocDocCount12 == 0) {
    docOff()
    document.getElementById('pdfdoc12').style.display = "flex"
    blocDocCount12++
  } else {
    document.getElementById('pdfdoc12').style.display = "none"
    blocDocCount12--
  }
}
var blocDocCount13 = 0;

function blocDoc13() {
  if (blocDocCount13 == 0) {
    docOff()
    document.getElementById('pdfdoc13').style.display = "flex"
    blocDocCount13++
  } else {
    document.getElementById('pdfdoc13').style.display = "none"
    blocDocCount13--
  }
}

var blocDocCount14 = 0;

function blocDoc14() {
  if (blocDocCount14 == 0) {
    docOff()
    document.getElementById('pdfdoc14').style.display = "flex"
    blocDocCount14++
  } else {
    document.getElementById('pdfdoc14').style.display = "none"
    blocDocCount14--
  }
}

var blocDocCount15 = 0;

function blocDoc15() {
  if (blocDocCount15 == 0) {
    docOff()
    document.getElementById('pdfdoc15').style.display = "flex"
    blocDocCount15++
  } else {
    document.getElementById('pdfdoc15').style.display = "none"
    blocDocCount15--
  }
}

var blocDocCount16 = 0;

function blocDoc16() {
  if (blocDocCount16 == 0) {
    docOff()
    document.getElementById('pdfdoc16').style.display = "flex"
    blocDocCount16++
  } else {
    document.getElementById('pdfdoc16').style.display = "none"
    blocDocCount16--
  }
}

var blocDocCount17 = 0;

function blocDoc17() {
  if (blocDocCount17 == 0) {
    docOff()
    document.getElementById('pdfdoc17').style.display = "flex"
    blocDocCount17++
  } else {
    document.getElementById('pdfdoc17').style.display = "none"
    blocDocCount17--
  }
}

var blocDocCount18 = 0;

function blocDoc18() {
  if (blocDocCount18 == 0) {
    docOff()
    document.getElementById('pdfdoc18').style.display = "flex"
    blocDocCount18++
  } else {
    document.getElementById('pdfdoc18').style.display = "none"
    blocDocCount18--
  }
}
var blocDocCount19 = 0;

function blocDoc19() {
  if (blocDocCount19 == 0) {
    docOff()
    document.getElementById('pdfdoc19').style.display = "flex"
    blocDocCount19++
  } else {
    document.getElementById('pdfdoc19').style.display = "none"
    blocDocCount19--
  }
}
var blocDocCount20 = 0;

function blocDoc20() {
  if (blocDocCount20 == 0) {
    docOff()
    document.getElementById('pdfdoc20').style.display = "flex"
    blocDocCount20++
  } else {
    document.getElementById('pdfdoc20').style.display = "none"
    blocDocCount20--
  }
}

var blocDocCount21 = 0;

function blocDoc21() {
  if (blocDocCount21 == 0) {
    docOff()
    document.getElementById('pdfdoc21').style.display = "flex"
    blocDocCount21++
  } else {
    document.getElementById('pdfdoc21').style.display = "none"
    blocDocCount21--
  }
}

function docOff() {
  blocDocCount1 = 0;
  blocDocCount2 = 0;
  blocDocCount3 = 0;
  blocDocCount4 = 0;
  blocDocCount5 = 0;
  blocDocCount6 = 0;
  blocDocCount7 = 0;
  blocDocCount8 = 0;
  blocDocCount9 = 0;
  blocDocCount10 = 0;
  blocDocCount11 = 0;
  blocDocCount12 = 0;
  blocDocCount13 = 0;
  blocDocCount14 = 0;
  blocDocCount15 = 0;
  blocDocCount16 = 0;
  blocDocCount17 = 0;
  blocDocCount18 = 0;
  blocDocCount19 = 0;
  blocDocCount20 = 0;
  blocDocCount21 = 0;
  document.getElementById('pdfdoc1').style.display = "none";
  document.getElementById('pdfdoc2').style.display = "none";
  document.getElementById('pdfdoc3').style.display = "none";
  document.getElementById('pdfdoc4').style.display = "none";
  document.getElementById('pdfdoc5').style.display = "none";
  document.getElementById('pdfdoc6').style.display = "none";
  document.getElementById('pdfdoc7').style.display = "none";
  document.getElementById('pdfdoc8').style.display = "none";
  document.getElementById('pdfdoc9').style.display = "none";
  document.getElementById('pdfdoc10').style.display = "none";
  document.getElementById('pdfdoc11').style.display = "none";
  document.getElementById('pdfdoc12').style.display = "none";
  document.getElementById('pdfdoc13').style.display = "none";
  document.getElementById('pdfdoc14').style.display = "none";
  document.getElementById('pdfdoc15').style.display = "none";
  document.getElementById('pdfdoc16').style.display = "none";
  document.getElementById('pdfdoc17').style.display = "none";
  document.getElementById('pdfdoc18').style.display = "none";
  document.getElementById('pdfdoc19').style.display = "none";
  document.getElementById('pdfdoc20').style.display = "none";
  document.getElementById('pdfdoc21').style.display = "none";
}