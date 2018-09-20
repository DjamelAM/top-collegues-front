export enum Avis {
    AIMER = "Aimer",
    DETESTER = "Détester"
}

export class Collegue {
    photo: string;
    pseudo: string;
    points: number;
    nom: string;
    adresse: string;
    email: string;
    prenom: string;

    constructor(nom, points, photo, pseudo, adresse, email, prenom) {
        this.pseudo = pseudo;
        this.points = points;
        this.photo = photo;
        this.email = email;
        this.adresse = adresse;
        this.nom = nom;
        this.prenom = prenom;
    }

    majPoint(avis, collegue) {
        if (avis === Avis.AIMER) {
            collegue.points += 1;
        }
        if (avis === Avis.DETESTER) {
            collegue.points -= 1;
        }
    }
}

export class Vote {
    avis: Avis;
    collegue: Collegue;

    constructor(avis, collegue) {
        this.avis = avis;
        this.collegue = collegue;
    }

}

export class Formulaire {
    matricule: string;
    pseudo: string;
    photo: string;
    constructor(matricule, pseudo, photo) {
        this.matricule = matricule;
        this.pseudo = pseudo;
        this.photo = photo;
    }
}