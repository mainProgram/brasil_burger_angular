export interface ICommande
{
    id: number,

    prix : number,

    etat: string,

    date: Date,

    zone: string,

    client: number,

    commandeMenus: [],

    commandeBurgers: [],

    commandeFrites: [],

    commandeTailleBoissons: [],

}