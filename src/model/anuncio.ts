export class Anuncio {
    titulo: string;
    imagenUrl?: string;
    contenido?: string;
    tags?: string[];
    style?: string;

    constructor(backgroundColor?: string) {
        this.style = backgroundColor ? `background-color: ${backgroundColor}` : '';
    }
}