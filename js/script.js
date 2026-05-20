/* ================================================================
   BARÇA SQUAD — script.js
   Gestion d'une collection de joueurs du FC Barcelone
   Fonctionnalités : affichage, tri, recherche, filtre, ajout,
                     suppression, modification
   ================================================================ */

/* ---------------------------------------------------------------
   1. DONNÉES INITIALES
   Tableau d'objets — source de vérité de l'application.
   Chaque joueur est un objet avec 8 propriétés.
   --------------------------------------------------------------- */
// Effectif officiel FC Barcelone — Saison 2025-2026
// Source : Wikipedia / FCBarcelona.com / LaLiga.com (mise à jour : février 2026)
// Les notes sont estimées sur la base des performances de la saison
const joueursInitiaux = [

    // ── GARDIENS ──────────────────────────────────────────────────
    {
        id: 1,
        nom: "Joan García",
        poste: "Gardien",
        nationalite: "Espagne",
        numero: 13,
        age: 24,
        note: 82,
        image: "img/garcia.png"
    },
    {
        id: 2,
        nom: "Wojciech Szczęsny",
        poste: "Gardien",
        nationalite: "Pologne",
        numero: 25,
        age: 35,
        note: 83,
        image: "img/Wojciech Szczęsny.png"
    },

    // ── DÉFENSEURS ────────────────────────────────────────────────
    {
        id: 3,
        nom: "João Cancelo",
        poste: "Défenseur",
        nationalite: "Portugal",
        numero: 2,
        age: 31,
        note: 83,
        image: "img/cancelo.png"
    },
    {
        id: 4,
        nom: "Alejandro Balde",
        poste: "Défenseur",
        nationalite: "Espagne",
        numero: 3,
        age: 22,
        note: 81,
        image: "img/balde.png"
    },
    {
        id: 5,
        nom: "Ronald Araújo",
        poste: "Défenseur",
        nationalite: "Uruguay",
        numero: 4,
        age: 26,
        note: 85,
        image: "img/araujo.png"
    },
    {
        id: 6,
        nom: "Pau Cubarsí",
        poste: "Défenseur",
        nationalite: "Espagne",
        numero: 5,
        age: 19,
        note: 82,
        image: "img/cubarsi.png"
    },
    {
        id: 7,
        nom: "Andreas Christensen",
        poste: "Défenseur",
        nationalite: "Danemark",
        numero: 15,
        age: 29,
        note: 81,
        image: "img/christensen.png"
    },
    {
        id: 8,
        nom: "Gerard Martín",
        poste: "Défenseur",
        nationalite: "Espagne",
        numero: 18,
        age: 24,
        note: 76,
        image: "img/gerard martin.png"
    },
    {
        id: 9,
        nom: "Jules Koundé",
        poste: "Défenseur",
        nationalite: "France",
        numero: 23,
        age: 27,
        note: 86,
        image: "img/koundé.png"
    },
    {
        id: 10,
        nom: "Eric García",
        poste: "Défenseur",
        nationalite: "Espagne",
        numero: 24,
        age: 25,
        note: 78,
        image: "img/eric garcia.png"
    },
    {
        id: 11,
        nom: "Jofre Torrents",
        poste: "Défenseur",
        nationalite: "Espagne",
        numero: 26,
        age: 19,
        note: 68,
        image: "img/Jofre Torrents.png"
    },

    // ── MILIEUX ───────────────────────────────────────────────────
    {
        id: 12,
        nom: "Gavi",
        poste: "Milieu",
        nationalite: "Espagne",
        numero: 6,
        age: 21,
        note: 86,
        image: "img/Gavi.png"
    },
    {
        id: 13,
        nom: "Pedri González",
        poste: "Milieu",
        nationalite: "Espagne",
        numero: 8,
        age: 23,
        note: 88,
        image: "img/Pedri.png"
    },
    {
        id: 14,
        nom: "Fermín López",
        poste: "Milieu",
        nationalite: "Espagne",
        numero: 16,
        age: 22,
        note: 82,
        image: "img/fermin lopez.png"
    },
    {
        id: 15,
        nom: "Marc Casadó",
        poste: "Milieu",
        nationalite: "Espagne",
        numero: 17,
        age: 22,
        note: 77,
        image: "img/Casado.png"
    },
    {
        id: 16,
        nom: "Dani Olmo",
        poste: "Milieu",
        nationalite: "Espagne",
        numero: 20,
        age: 27,
        note: 86,
        image: "img/olmo.png"
    },
    {
        id: 17,
        nom: "Frenkie de Jong",
        poste: "Milieu",
        nationalite: "Pays-Bas",
        numero: 21,
        age: 28,
        note: 86,
        image: "img/de jong.png"
    },
    {
        id: 18,
        nom: "Marc Bernal",
        poste: "Milieu",
        nationalite: "Espagne",
        numero: 22,
        age: 18,
        note: 73,
        image: "img/Marc Bernal.png"
    },

    // ── ATTAQUANTS ────────────────────────────────────────────────
    {
        id: 19,
        nom: "Ferran Torres",
        poste: "Attaquant",
        nationalite: "Espagne",
        numero: 7,
        age: 25,
        note: 82,
        image: "img/ferran torres.png"
    },
    {
        id: 20,
        nom: "Robert Lewandowski",
        poste: "Attaquant",
        nationalite: "Pologne",
        numero: 9,
        age: 37,
        note: 90,
        image: "img/Lewandowski.png"
    },
    {
        id: 21,
        nom: "Lamine Yamal",
        poste: "Attaquant",
        nationalite: "Espagne",
        numero: 10,
        age: 18,
        note: 89,
        image: "img/Lamine-Yamal.png"
    },
    {
        id: 22,
        nom: "Raphinha",
        poste: "Attaquant",
        nationalite: "Brésil",
        numero: 11,
        age: 29,
        note: 87,
        image: "img/Raphinha.png"
    },
    {
        id: 23,
        nom: "Marcus Rashford",
        poste: "Attaquant",
        nationalite: "Angleterre",
        numero: 14,
        age: 28,
        note: 82,
        image: "img/rashford.png"
    },
    {
        id: 24,
        nom: "Roony Bardghji",
        poste: "Attaquant",
        nationalite: "Suède",
        numero: 19,
        age: 20,
        note: 74,
        image: "img/ronny.png"
    }
];

/* ---------------------------------------------------------------
   2. ÉTAT DE L'APPLICATION
   On travaille toujours sur cette copie du tableau.
   --------------------------------------------------------------- */
let joueurs = [...joueursInitiaux]; // copie du tableau initial
let prochainId = joueurs.length + 1; // compteur pour générer des ids uniques

/* ---------------------------------------------------------------
   3. SÉLECTION DES ÉLÉMENTS DU DOM
   On récupère tous les éléments une seule fois ici.
   --------------------------------------------------------------- */
const grilleEl        = document.getElementById('grille-joueurs');
const rechercheEl     = document.getElementById('recherche');
const filtrePosteEl   = document.getElementById('filtre-poste');
const triEl           = document.getElementById('tri');
const compteurEl      = document.getElementById('compteur-joueurs');
const messageVideEl   = document.getElementById('message-vide');
const toastEl         = document.getElementById('toast');

// Formulaire
const sectionFormulaireEl = document.getElementById('section-formulaire');
const btnOuvrirFormulaireEl = document.getElementById('btn-ouvrir-formulaire');
const btnSoumettreEl      = document.getElementById('btn-soumettre');
const btnAnnulerEl        = document.getElementById('btn-annuler');
const formTitreEl         = document.getElementById('form-titre');

// Champs du formulaire
const champId           = document.getElementById('joueur-id');
const champNom          = document.getElementById('f-nom');
const champNumero       = document.getElementById('f-numero');
const champPoste        = document.getElementById('f-poste');
const champNationalite  = document.getElementById('f-nationalite');
const champAge          = document.getElementById('f-age');
const champNote         = document.getElementById('f-note');
const champImage        = document.getElementById('f-image');

/* ---------------------------------------------------------------
   4. FONCTIONS DE RENDU (affichage DOM)
   --------------------------------------------------------------- */

/**
 * Rendu principal : filtre, trie et affiche les joueurs.
 * Appelée chaque fois que les données ou les filtres changent.
 */
function renderJoueurs() {
    const texteRecherche = rechercheEl.value.toLowerCase().trim();
    const posteActif     = filtrePosteEl.value;
    const criterereTri   = triEl.value;

    // --- ÉTAPE 1 : filtrage ---
    let joueursAffiches = joueurs.filter(joueur => {
        // Filtre texte : on cherche dans le nom et la nationalité
        const correspondTexte =
            joueur.nom.toLowerCase().includes(texteRecherche) ||
            joueur.nationalite.toLowerCase().includes(texteRecherche);

        // Filtre poste : vide = tous
        const correspondPoste = posteActif === '' || joueur.poste === posteActif;

        return correspondTexte && correspondPoste;
    });

    // --- ÉTAPE 2 : tri ---
    joueursAffiches = joueursAffiches.sort((a, b) => {
        switch (criterereTri) {
            case 'nom':    return a.nom.localeCompare(b.nom);
            case 'numero': return a.numero - b.numero;
            case 'age':    return a.age - b.age;
            case 'note':   return b.note - a.note; // décroissant : meilleur en premier
            default:       return 0;
        }
    });

    // --- ÉTAPE 3 : affichage ---
    grilleEl.innerHTML = '';

    // Afficher ou masquer le message "aucun résultat"
    messageVideEl.hidden = joueursAffiches.length > 0;

    // Créer et insérer les cartes dans la grille
    joueursAffiches.forEach(joueur => {
        const carte = creerCarteDom(joueur);
        grilleEl.appendChild(carte);
    });

    // Mettre à jour le compteur dans le header
    mettreAJourCompteur();
}

/**
 * Crée et retourne l'élément DOM d'une carte joueur.
 * @param {Object} joueur - L'objet joueur
 * @returns {HTMLElement} - La carte HTML prête à insérer
 */
function creerCarteDom(joueur) {
    const article = document.createElement('article');
    article.classList.add('player-card');
    article.setAttribute('role', 'listitem');
    article.dataset.id = joueur.id; // utile pour identifier la carte

    // Image de remplacement si l'URL est vide ou incorrecte
    const imageSrc = joueur.image || '';
    const imageAlt = `Photo de ${joueur.nom}`;

    // Classe CSS du badge poste (avec fallback)
    const classeBadge = `badge-${joueur.poste}` || 'badge-default';

    // Largeur de la barre de note (en pourcentage sur 99)
    const largeurBarre = Math.round((joueur.note / 99) * 100);

    article.innerHTML = `
    <!-- Zone image avec badges superposés -->
    <div class="card-image">
      <img
        src="${imageSrc}"
        alt="${imageAlt}"
        loading="lazy"
        onerror="this.src=''; this.style.display='none'"
      />
      <span class="card-numero">${joueur.numero}</span>
      <span class="card-poste-badge ${classeBadge}">${joueur.poste}</span>
    </div>

    <!-- Informations du joueur -->
    <div class="card-body">
      <h3 class="card-nom">${joueur.nom}</h3>
      <div class="card-meta">
        <span>${joueur.nationalite}</span>
        <span>${joueur.age} ans</span>
      </div>
      <!-- Barre de note visuelle -->
      <div class="card-note-wrapper">
        <span class="card-note-label">${joueur.note}</span>
        <div class="card-note-bar" title="Note : ${joueur.note}/99">
          <div class="card-note-fill" style="width: ${largeurBarre}%"></div>
        </div>
      </div>
    </div>

    <!-- Boutons d'action -->
    <div class="card-actions">
      <button
        class="btn btn-edit"
        data-id="${joueur.id}"
        aria-label="Modifier ${joueur.nom}"
      >✎ Modifier</button>
      <button
        class="btn btn-danger"
        data-id="${joueur.id}"
        aria-label="Supprimer ${joueur.nom}"
      >✕ Supprimer</button>
    </div>
  `;

    return article;
}

/**
 * Met à jour le compteur de joueurs dans le header.
 */
function mettreAJourCompteur() {
    const n = joueurs.length;
    compteurEl.textContent = `${n} joueur${n > 1 ? 's' : ''}`;
}

/* ---------------------------------------------------------------
   5. GESTION DU FORMULAIRE
   --------------------------------------------------------------- */

/**
 * Ouvre ou ferme le panneau du formulaire.
 * @param {boolean} ouvrir - true pour ouvrir, false pour fermer
 */
function toggleFormulaire(ouvrir) {
    if (ouvrir) {
        sectionFormulaireEl.classList.add('ouvert');
        sectionFormulaireEl.setAttribute('aria-hidden', 'false');
        btnOuvrirFormulaireEl.setAttribute('aria-expanded', 'true');
        champNom.focus(); // accessibilité : focus sur le premier champ
    } else {
        sectionFormulaireEl.classList.remove('ouvert');
        sectionFormulaireEl.setAttribute('aria-hidden', 'true');
        btnOuvrirFormulaireEl.setAttribute('aria-expanded', 'false');
        reinitialiserFormulaire();
    }
}

/**
 * Réinitialise tous les champs du formulaire et repasse en mode "ajout".
 */
function reinitialiserFormulaire() {
    champId.value          = '';
    champNom.value         = '';
    champNumero.value      = '';
    champPoste.value       = '';
    champNationalite.value = '';
    champAge.value         = '';
    champNote.value        = '';
    champImage.value       = '';

    formTitreEl.textContent        = 'Ajouter un joueur';
    btnSoumettreEl.textContent     = 'Ajouter';
    btnSoumettreEl.dataset.mode    = 'ajout';
}

/**
 * Valide les champs obligatoires avant soumission.
 * Retourne true si tout est valide.
 */
function validerFormulaire() {
    const champs = [champNom, champNumero, champPoste, champNationalite, champAge, champNote];
    let valide = true;

    champs.forEach(champ => {
        if (!champ.value.trim()) {
            // Mise en évidence du champ vide
            champ.style.borderColor = 'var(--danger)';
            champ.addEventListener('input', () => {
                champ.style.borderColor = '';
            }, { once: true });
            valide = false;
        }
    });

    return valide;
}

/**
 * Ajoute un nouveau joueur depuis les valeurs du formulaire.
 */
function ajouterJoueur() {
    if (!validerFormulaire()) {
        afficherToast('Merci de remplir tous les champs obligatoires.', 'danger');
        return;
    }

    // Vérifier que le numéro n'est pas déjà utilisé
    const numeroCible = parseInt(champNumero.value);
    if (joueurs.some(j => j.numero === numeroCible)) {
        afficherToast(`Le numéro ${numeroCible} est déjà utilisé.`, 'danger');
        return;
    }

    // Construire le nouvel objet joueur
    const nouveauJoueur = {
        id:          prochainId++,
        nom:         champNom.value.trim(),
        poste:       champPoste.value,
        nationalite: champNationalite.value.trim(),
        numero:      numeroCible,
        age:         parseInt(champAge.value),
        note:        parseInt(champNote.value),
        image:       champImage.value.trim()
    };

    // Ajouter au tableau (splice non nécessaire ici, push suffit)
    joueurs.push(nouveauJoueur);

    // Fermer le formulaire, rafraîchir, notifier
    toggleFormulaire(false);
    renderJoueurs();
    afficherToast(`${nouveauJoueur.nom} a été ajouté ! ✓`, 'success');
}

/**
 * Supprime un joueur du tableau par son id.
 * @param {number} id - L'id du joueur à supprimer
 */
function supprimerJoueur(id) {
    // Trouver l'index du joueur dans le tableau
    const index = joueurs.findIndex(j => j.id === id);
    if (index === -1) return;

    const nomJoueur = joueurs[index].nom;

    // splice supprime 1 élément à l'index trouvé
    joueurs.splice(index, 1);

    renderJoueurs();
    afficherToast(`${nomJoueur} a été supprimé.`, 'danger');
}

/**
 * Pré-remplit le formulaire avec les données d'un joueur existant (mode modification).
 * @param {number} id - L'id du joueur à modifier
 */
function ouvrirModification(id) {
    const joueur = joueurs.find(j => j.id === id);
    if (!joueur) return;

    // Remplir les champs avec les données actuelles
    champId.value          = joueur.id;
    champNom.value         = joueur.nom;
    champNumero.value      = joueur.numero;
    champPoste.value       = joueur.poste;
    champNationalite.value = joueur.nationalite;
    champAge.value         = joueur.age;
    champNote.value        = joueur.note;
    champImage.value       = joueur.image || '';

    // Passer en mode "modification"
    formTitreEl.textContent        = `Modifier : ${joueur.nom}`;
    btnSoumettreEl.textContent     = 'Enregistrer';
    btnSoumettreEl.dataset.mode    = 'modification';

    toggleFormulaire(true);

    // Scroll vers le formulaire
    sectionFormulaireEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Enregistre les modifications d'un joueur existant.
 */
function modifierJoueur() {
    if (!validerFormulaire()) {
        afficherToast('Merci de remplir tous les champs obligatoires.', 'danger');
        return;
    }

    const idCible     = parseInt(champId.value);
    const numeroCible = parseInt(champNumero.value);

    // Vérifier que le numéro n'est pas utilisé par un AUTRE joueur
    if (joueurs.some(j => j.numero === numeroCible && j.id !== idCible)) {
        afficherToast(`Le numéro ${numeroCible} est déjà utilisé.`, 'danger');
        return;
    }

    // Trouver et mettre à jour le joueur dans le tableau
    const index = joueurs.findIndex(j => j.id === idCible);
    if (index === -1) return;

    joueurs[index] = {
        ...joueurs[index],             // conserver les propriétés existantes
        nom:         champNom.value.trim(),
        poste:       champPoste.value,
        nationalite: champNationalite.value.trim(),
        numero:      numeroCible,
        age:         parseInt(champAge.value),
        note:        parseInt(champNote.value),
        image:       champImage.value.trim()
    };

    toggleFormulaire(false);
    renderJoueurs();
    afficherToast(`${joueurs[index].nom} a été modifié ! ✓`, 'info');
}

/* ---------------------------------------------------------------
   6. NOTIFICATION TOAST
   --------------------------------------------------------------- */

let timerToast = null; // référence au timer pour annuler si besoin

/**
 * Affiche un message toast pendant 3 secondes.
 * @param {string} message - Le texte à afficher
 * @param {'success'|'danger'|'info'} type - Le style de la notification
 */
function afficherToast(message, type = 'success') {
    // Réinitialiser les classes de style
    toastEl.className = `toast toast-${type}`;
    toastEl.textContent = message;
    toastEl.classList.add('visible');

    // Annuler un timer précédent si toast enchaînés
    if (timerToast) clearTimeout(timerToast);

    // Masquer après 3 secondes
    timerToast = setTimeout(() => {
        toastEl.classList.remove('visible');
    }, 3000);
}

/* ---------------------------------------------------------------
   7. ÉCOUTEURS D'ÉVÉNEMENTS
   --------------------------------------------------------------- */

// Bouton "Ajouter un joueur" → ouvrir/fermer le formulaire
btnOuvrirFormulaireEl.addEventListener('click', () => {
    const estOuvert = sectionFormulaireEl.classList.contains('ouvert');

    if (estOuvert) {
        toggleFormulaire(false);
    } else {
        reinitialiserFormulaire(); // s'assurer qu'on est en mode ajout
        toggleFormulaire(true);
    }
});

// Bouton Annuler dans le formulaire
btnAnnulerEl.addEventListener('click', () => {
    toggleFormulaire(false);
});

// Bouton Ajouter/Enregistrer dans le formulaire
btnSoumettreEl.addEventListener('click', () => {
    const mode = btnSoumettreEl.dataset.mode;
    if (mode === 'modification') {
        modifierJoueur();
    } else {
        ajouterJoueur();
    }
});

// Recherche en temps réel : déclenche renderJoueurs à chaque frappe
rechercheEl.addEventListener('input', renderJoueurs);

// Filtre par poste
filtrePosteEl.addEventListener('change', renderJoueurs);

// Tri
triEl.addEventListener('change', renderJoueurs);

// Délégation d'événements sur la grille :
// Écouter les clics sur les boutons Modifier et Supprimer.
// Déléguer au parent (grilleEl) est plus efficace que d'attacher
// un listener à chaque bouton de chaque carte.
grilleEl.addEventListener('click', (event) => {
    const btnSuppression = event.target.closest('.btn-danger');
    const btnEdition     = event.target.closest('.btn-edit');

    if (btnSuppression) {
        const id = parseInt(btnSuppression.dataset.id);
        supprimerJoueur(id);
    }

    if (btnEdition) {
        const id = parseInt(btnEdition.dataset.id);
        ouvrirModification(id);
    }
});

/* ---------------------------------------------------------------
   8. INITIALISATION
   On lance le rendu au chargement de la page.
   --------------------------------------------------------------- */
renderJoueurs();