export enum Avis {
    AIMER,
    DETESTER
}

export class Collegue {
    photo: string;
    pseudo: string;
    points: number;

    constructor(pseudo, points, photo) {
        this.pseudo = pseudo;
        this.points = points;
        this.photo = photo;
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