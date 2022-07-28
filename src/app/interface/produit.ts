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

    quantite?: number
}