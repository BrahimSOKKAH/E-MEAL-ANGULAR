interface IngredientsInterface {
    
    nom: string,
    id: number
}

class IngredientsModel implements IngredientsInterface {
    
    nom!: string;
    id!: number;
        
    constructor(nom?: string) {
        if (nom) this.nom = nom
        
    }

    toString = () => {
        return `nom : ${this.nom}, id: ${this.id}}`
    }
}

export {IngredientsInterface, IngredientsModel}