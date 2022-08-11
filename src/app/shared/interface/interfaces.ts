import { Time } from "@angular/common"

export interface IProduit
{
    id?: number,
    
    nom: string,

    prix: number,

    image: string,

    detail?: string,

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

export interface ICommande
{
    id? : number 

    client : string

    livraison? : string

    gestionnaire? : string

    zone? : string

    ticket? : string

    etat : string
  
    paye? : string
    
    prix : number

    commandeTailleBoissons? : []

    date? : Date

    numero? : string

    commandeMenus? : []

    commandeFrites? : []

    commandeBurgers? : []
}

export interface Livraison
{
    id? : number,

    duree? : Time

    date? : Date

    livreur? : string

    commandes : []
}

export interface IZone
{
    id : number

    nom : string

    prix? : string

    isEtat? : boolean 

    quartiers? : []

    commandes? : []
}

export interface Ticket
{

}

export interface User
{
    id? : number

    email? : string

    roles? : []

    password? : string

    confirmPassword? : string

    nom? : string

    prenom? : string

    telephone? : string

    isEtat? : boolean

    produits? : []

    token? : string

    isActivated? : boolean

    expiredAt? : Date
}

export interface ICredential
{
    email: string,

    password: string
}

export interface IToken
{
    token: string
}

