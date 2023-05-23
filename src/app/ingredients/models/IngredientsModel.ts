interface IngredientsInterface {
    
    nom: string,
    id: number
}

class IngredientsModel implements IngredientsInterface {
    
    nom!: string;
    id!: number;
        
    constructor(nom?: string, task?: string) {
        if (nom) this.nom = nom
        
    }

    toString = () => {
        return `titre : ${this.nom}, id: ${this.id}}`
    }
}

export {IngredientsInterface, IngredientsModel}