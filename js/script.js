// Effectif FC Barcelone — Saison 2025-2026
const joueursInitiaux = [

    // Gardiens
    { id: 1, nom: "Joan García", poste: "Gardien", nationalite: "Espagne", numero: 13, age: 24, note: 82, image: "img/joan-garcia.png" },
    { id: 2, nom: "Wojciech Szczęsny", poste: "Gardien", nationalite: "Pologne", numero: 25, age: 35, note: 83, image: "img/wojciech-szczesny.png" },

    // Défenseurs
    { id: 3, nom: "João Cancelo", poste: "Défenseur", nationalite: "Portugal", numero: 2, age: 31, note: 83, image: "img/cancelo.png" },
    { id: 4, nom: "Alejandro Balde", poste: "Défenseur", nationalite: "Espagne", numero: 3, age: 22, note: 81, image: "img/balde.png" },
    { id: 5, nom: "Ronald Araújo", poste: "Défenseur", nationalite: "Uruguay", numero: 4, age: 26, note: 85, image: "img/Araujo.png" },
    { id: 6, nom: "Pau Cubarsí", poste: "Défenseur", nationalite: "Espagne", numero: 5, age: 19, note: 82, image: "img/cubarsi.png" },
    { id: 7, nom: "Andreas Christensen", poste: "Défenseur", nationalite: "Danemark", numero: 15, age: 29, note: 81, image: "img/andreas-christensen.png" },
    { id: 8, nom: "Gerard Martín", poste: "Défenseur", nationalite: "Espagne", numero: 18, age: 24, note: 76, image: "img/gerard-martin.png" },
    { id: 9, nom: "Jules Koundé", poste: "Défenseur", nationalite: "France", numero: 23, age: 27, note: 86, image: "img/jules-kounde.png" },
    { id: 10, nom: "Eric García", poste: "Défenseur", nationalite: "Espagne", numero: 24, age: 25, note: 78, image: "img/eric-garcia.png" },
    { id: 11, nom: "Jofre Torrents", poste: "Défenseur", nationalite: "Espagne", numero: 26, age: 19, note: 68, image: "img/Jofre Torrents.png" },

    // Milieux
    { id: 12, nom: "Gavi", poste: "Milieu", nationalite: "Espagne", numero: 6, age: 21, note: 86, image: "img/Gavi.png" },
    { id: 13, nom: "Pedri González", poste: "Milieu", nationalite: "Espagne", numero: 8, age: 23, note: 88, image: "img/pedri.png" },
    { id: 14, nom: "Fermín López", poste: "Milieu", nationalite: "Espagne", numero: 16, age: 22, note: 82, image: "img/fermin.png" },
    { id: 15, nom: "Marc Casadó", poste: "Milieu", nationalite: "Espagne", numero: 17, age: 22, note: 77, image: "img/Casado.png" },
    { id: 16, nom: "Dani Olmo", poste: "Milieu", nationalite: "Espagne", numero: 20, age: 27, note: 86, image: "img/olmo.png" },
    { id: 17, nom: "Frenkie de Jong", poste: "Milieu", nationalite: "Pays-Bas", numero: 21, age: 28, note: 86, image: "img/Frenkie De Jong.png" },
    { id: 18, nom: "Marc Bernal", poste: "Milieu", nationalite: "Espagne", numero: 22, age: 18, note: 73, image: "img/Marc Bernal.png" },

    // Attaquants
    { id: 19, nom: "Ferran Torres", poste: "Attaquant", nationalite: "Espagne", numero: 7, age: 25, note: 82, image: "img/ferran-torres.png" },
    { id: 20, nom: "Robert Lewandowski", poste: "Attaquant", nationalite: "Pologne", numero: 9, age: 37, note: 90, image: "img/Lewandowski.png" },
    { id: 21, nom: "Lamine Yamal", poste: "Attaquant", nationalite: "Espagne", numero: 10, age: 18, note: 89, image: "img/Lamine-Yamal.png" },
    { id: 22, nom: "Raphinha", poste: "Attaquant", nationalite: "Brésil", numero: 11, age: 29, note: 87, image: "img/Raphinha.png" },
    { id: 23, nom: "Marcus Rashford", poste: "Attaquant", nationalite: "Angleterre", numero: 14, age: 28, note: 82, image: "img/Marcus Rashford.png" },
    { id: 24, nom: "Roony Bardghji", poste: "Attaquant", nationalite: "Suède", numero: 19, age: 20, note: 74, image: "img/roony.png" }
];

let joueurs = [...joueursInitiaux];
let prochainId = joueurs.length + 1;

// Refs DOM
const grille      = document.getElementById('grille-joueurs');
const search      = document.getElementById('recherche');
const filtrePoste = document.getElementById('filtre-poste');
const triEl       = document.getElementById('tri');
const compteur    = document.getElementById('compteur-joueurs');
const msgVide     = document.getElementById('message-vide');
const toastEl     = document.getElementById('toast');

const sectionForm   = document.getElementById('section-formulaire');
const btnOuvrir     = document.getElementById('btn-ouvrir-formulaire');
const btnSoumettre  = document.getElementById('btn-soumettre');
const btnAnnuler    = document.getElementById('btn-annuler');
const formTitre     = document.getElementById('form-titre');

const champId          = document.getElementById('joueur-id');
const champNom         = document.getElementById('f-nom');
const champNumero      = document.getElementById('f-numero');
const champPoste       = document.getElementById('f-poste');
const champNationalite = document.getElementById('f-nationalite');
const champAge         = document.getElementById('f-age');
const champNote        = document.getElementById('f-note');
const champImage       = document.getElementById('f-image');

// Rendu principal
function renderJoueurs() {
    const txt   = search.value.toLowerCase().trim();
    const poste = filtrePoste.value;
    const tri   = triEl.value;

    let liste = joueurs.filter(j => {
        const matchTxt   = j.nom.toLowerCase().includes(txt) || j.nationalite.toLowerCase().includes(txt);
        const matchPoste = poste === '' || j.poste === poste;
        return matchTxt && matchPoste;
    });

    liste.sort((a, b) => {
        switch (tri) {
            case 'nom':    return a.nom.localeCompare(b.nom);
            case 'numero': return a.numero - b.numero;
            case 'age':    return a.age - b.age;
            case 'note':   return b.note - a.note;
            default:       return 0;
        }
    });

    grille.innerHTML = '';
    msgVide.hidden = liste.length > 0;
    liste.forEach(j => grille.appendChild(creerCarte(j)));

    const n = joueurs.length;
    compteur.textContent = `${n} joueur${n > 1 ? 's' : ''}`;
}

function creerCarte(joueur) {
    const el = document.createElement('article');
    el.classList.add('player-card');
    el.setAttribute('role', 'listitem');
    el.dataset.id = joueur.id;

    const largeurBarre = Math.round((joueur.note / 99) * 100);

    el.innerHTML = `
    <div class="card-image">
      <img src="${joueur.image || ''}" alt="Photo de ${joueur.nom}" loading="lazy" onerror="this.src=''; this.style.display='none'" />
      <span class="card-numero">${joueur.numero}</span>
      <span class="card-poste-badge badge-${joueur.poste}">${joueur.poste}</span>
    </div>
    <div class="card-body">
      <h3 class="card-nom">${joueur.nom}</h3>
      <div class="card-meta">
        <span>${joueur.nationalite}</span>
        <span>${joueur.age} ans</span>
      </div>
      <div class="card-note-wrapper">
        <span class="card-note-label">${joueur.note}</span>
        <div class="card-note-bar" title="Note : ${joueur.note}/99">
          <div class="card-note-fill" style="width: ${largeurBarre}%"></div>
        </div>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-edit" data-id="${joueur.id}" aria-label="Modifier ${joueur.nom}">✎ Modifier</button>
      <button class="btn btn-danger" data-id="${joueur.id}" aria-label="Supprimer ${joueur.nom}">✕ Supprimer</button>
    </div>
  `;

    return el;
}

// Formulaire
function toggleFormulaire(ouvrir) {
    if (ouvrir) {
        sectionForm.classList.add('ouvert');
        sectionForm.setAttribute('aria-hidden', 'false');
        btnOuvrir.setAttribute('aria-expanded', 'true');
        champNom.focus();
    } else {
        sectionForm.classList.remove('ouvert');
        sectionForm.setAttribute('aria-hidden', 'true');
        btnOuvrir.setAttribute('aria-expanded', 'false');
        resetFormulaire();
    }
}

function resetFormulaire() {
    [champId, champNom, champNumero, champPoste, champNationalite, champAge, champNote, champImage]
        .forEach(c => c.value = '');
    formTitre.textContent      = 'Ajouter un joueur';
    btnSoumettre.textContent   = 'Ajouter';
    btnSoumettre.dataset.mode  = 'ajout';
}

function validerFormulaire() {
    const champs = [champNom, champNumero, champPoste, champNationalite, champAge, champNote];
    let ok = true;
    champs.forEach(c => {
        if (!c.value.trim()) {
            c.style.borderColor = 'var(--danger)';
            c.addEventListener('input', () => c.style.borderColor = '', { once: true });
            ok = false;
        }
    });
    return ok;
}

function ajouterJoueur() {
    if (!validerFormulaire()) {
        afficherToast('Merci de remplir tous les champs obligatoires.', 'danger');
        return;
    }

    const num = parseInt(champNumero.value);
    if (joueurs.some(j => j.numero === num)) {
        afficherToast(`Le numéro ${num} est déjà utilisé.`, 'danger');
        return;
    }

    joueurs.push({
        id:          prochainId++,
        nom:         champNom.value.trim(),
        poste:       champPoste.value,
        nationalite: champNationalite.value.trim(),
        numero:      num,
        age:         parseInt(champAge.value),
        note:        parseInt(champNote.value),
        image:       champImage.value.trim()
    });

    toggleFormulaire(false);
    renderJoueurs();
    afficherToast(`${champNom.value.trim()} a été ajouté ! ✓`, 'success');
}

function supprimerJoueur(id) {
    const idx = joueurs.findIndex(j => j.id === id);
    if (idx === -1) return;

    const nom = joueurs[idx].nom;
    joueurs.splice(idx, 1);
    renderJoueurs();    afficherToast(`${nom} a été supprimé.`, 'danger');
}

function ouvrirModification(id) {
    const j = joueurs.find(j => j.id === id);
    if (!j) return;

    champId.value          = j.id;
    champNom.value         = j.nom;
    champNumero.value      = j.numero;
    champPoste.value       = j.poste;
    champNationalite.value = j.nationalite;
    champAge.value         = j.age;
    champNote.value        = j.note;
    champImage.value       = j.image || '';

    formTitre.textContent      = `Modifier : ${j.nom}`;
    btnSoumettre.textContent   = 'Enregistrer';
    btnSoumettre.dataset.mode  = 'modification';

    toggleFormulaire(true);
    sectionForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function modifierJoueur() {
    if (!validerFormulaire()) {
        afficherToast('Merci de remplir tous les champs obligatoires.', 'danger');
        return;
    }

    const idCible  = parseInt(champId.value);
    const num      = parseInt(champNumero.value);

    if (joueurs.some(j => j.numero === num && j.id !== idCible)) {
        afficherToast(`Le numéro ${num} est déjà utilisé.`, 'danger');
        return;
    }

    const idx = joueurs.findIndex(j => j.id === idCible);
    if (idx === -1) return;

    joueurs[idx] = {
        ...joueurs[idx],
        nom:         champNom.value.trim(),
        poste:       champPoste.value,
        nationalite: champNationalite.value.trim(),
        numero:      num,
        age:         parseInt(champAge.value),
        note:        parseInt(champNote.value),
        image:       champImage.value.trim()
    };

    toggleFormulaire(false);
    renderJoueurs();
    afficherToast(`${joueurs[idx].nom} a été modifié ! ✓`, 'info');
}

// Toast
let timerToast = null;

function afficherToast(message, type = 'success') {
    toastEl.className = `toast toast-${type}`;
    toastEl.textContent = message;
    toastEl.classList.add('visible');

    if (timerToast) clearTimeout(timerToast);
    timerToast = setTimeout(() => toastEl.classList.remove('visible'), 3000);
}

// Events
btnOuvrir.addEventListener('click', () => {
    const estOuvert = sectionForm.classList.contains('ouvert');
    if (estOuvert) {
        toggleFormulaire(false);
    } else {
        resetFormulaire();
        toggleFormulaire(true);
    }
});

btnAnnuler.addEventListener('click', () => toggleFormulaire(false));

btnSoumettre.addEventListener('click', () => {
    btnSoumettre.dataset.mode === 'modification' ? modifierJoueur() : ajouterJoueur();
});

search.addEventListener('input', renderJoueurs);
filtrePoste.addEventListener('change', renderJoueurs);
triEl.addEventListener('change', renderJoueurs);

// Délégation sur la grille plutôt qu'un listener par carte
grille.addEventListener('click', e => {
    const btnDel  = e.target.closest('.btn-danger');
    const btnEdit = e.target.closest('.btn-edit');

    if (btnDel)  supprimerJoueur(parseInt(btnDel.dataset.id));
    if (btnEdit) ouvrirModification(parseInt(btnEdit.dataset.id));
});

renderJoueurs();