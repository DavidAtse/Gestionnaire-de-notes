const titreInput = document.getElementById("titreNote")
const contenuInput = document.getElementById("contenuNote")
const bouton = document.getElementById("ajouterNote")
const conteneurNote = document.getElementById("listeNotes")
const compteur = document.getElementById("compteurNotes")
const etatVide = document.getElementById("etatVide")

let notes = JSON.parse(localStorage.getItem("notes")) || [];

bouton.addEventListener("click", () => {
    const texteTitre = titreInput.value;
    const texteContenu = contenuInput.value;

    if (texteTitre.trim() === ""){
        titreInput.focus()
        return;
    }

    const nouvelleNote = {
        titre: texteTitre,
        contenu: texteContenu
    }
    notes.push(nouvelleNote)

    localStorage.setItem("notes", JSON.stringify(notes))

    afficherUneNote(nouvelleNote, notes.length - 1)
    mettreAJourEtat()

    titreInput.value = ""
    contenuInput.value = ""
    titreInput.focus()
})

function afficherUneNote(note, index){
    const groupeNote = document.createElement("div")
    const titre = document.createElement("h3")
    const contenu = document.createElement("p")
    const boutonSupprimer = document.createElement("button")

    groupeNote.className = "note-card"
    boutonSupprimer.className = "btn-supprimer"

    titre.textContent = note.titre
    contenu.textContent = note.contenu
    boutonSupprimer.textContent = "Supprimer"

    boutonSupprimer.addEventListener("click", () => {
        notes.splice(index, 1)
        localStorage.setItem("notes", JSON.stringify(notes))
        afficherNotes()
    })

    groupeNote.appendChild(titre)
    groupeNote.appendChild(contenu)
    groupeNote.appendChild(boutonSupprimer)
    conteneurNote.appendChild(groupeNote)
}

// Afficher toutes les notes
function afficherNotes(){
    conteneurNote.innerHTML = ""

    notes.forEach((note, index) => {
        afficherUneNote(note, index)
    })

    mettreAJourEtat()
}

// Compteur de notes + message si la liste est vide
function mettreAJourEtat(){
    compteur.textContent = notes.length
    etatVide.classList.toggle("visible", notes.length === 0)
}

afficherNotes()
