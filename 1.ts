class Nodo {
    public valor: number;
    public siguiente: Nodo | null = null;
    public anterior: Nodo | null = null;

    constructor() {
        this.valor = Math.floor(Math.random() * 9) + 1; // Generar un número aleatorio entre 1 y 9
    }
}

class ListaDobleEnlazada {
    public cabeza: Nodo | null = null;
    public cola: Nodo | null = null;

    // Método para insertar un nuevo nodo al final de la lista
    public insertarAlFinal(): void {
        const nuevoNodo = new Nodo();

        if (this.cabeza === null) {
            // Si la lista está vacía, el nuevo nodo será cabeza y cola
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            if (this.cola) {
                this.cola.siguiente = nuevoNodo; // La cola actual apunta al nuevo nodo
                nuevoNodo.anterior = this.cola;  // El nuevo nodo apunta al nodo anterior (la antigua cola)
                this.cola = nuevoNodo;           // El nuevo nodo se convierte en la nueva cola
            }
        }
    }

    // Método para imprimir los números de los nodos, omitiendo los números impares
    public imprimirNumeros(): void {
        let actual = this.cabeza;

        while (actual !== null) {
            if (actual.valor % 2 === 0) {
                console.log(actual.valor);
            }
            actual = actual.siguiente;
        }
    }
}

// Programa principal
const lista = new ListaDobleEnlazada();

// Insertar 5 nodos
for (let i = 0; i < 5; i++) {
    lista.insertarAlFinal();
}

// Llamar al método imprimir
lista.imprimirNumeros();
