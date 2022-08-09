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

export interface IProduit
{
    id: number,
    
    nom: string,

    prix: number,

    image: string,

    detail: string,

    frites?: any[],

    tailles?: any[],

    burgers?: any[],

    quantite?: number,

    categorie?: string,

    tabBoissonsMenu?: []
}

export interface IComplement{
    pm: [],

    gm: [],

    frites: [],
}

export interface ICatalogue
{
    menus: IProduit[],

    burgers: IProduit[]
}