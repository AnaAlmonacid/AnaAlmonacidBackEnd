/* DESAFIO N°1 : Clases */

class User{
    constructor ( nombre, apellido, libros, mascotas ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }
    
    addMascota( Mascota ){
        this.mascotas.push(Mascota)
    }

    countMascotas(){
        return (this.mascotas).length
    }

    addBook( Nombre, Autor ){
        this.libros.push({ nombre:Nombre, autor:Autor })
    }

    getBookNames(){
        return this.libros.map( libro => libro.nombre )
    }
}

    const user1 = new User ( 
        'Juan', 
        'Perez', 
        [ { nombre:'El Principito', autor: 'Antoine S' }, { nombre:'Sherlock Holmes', autor: 'Arthur Conan Doyle' } ],
        ['Gato']
        )

    console.log('Nombre del usuario: ', user1.getFullName())
    user1.addMascota('Pez')
    console.log('Cantidad de mascotas del usuario: ', user1.countMascotas())
    user1.addBook('El psicoanalista', 'John Katzenbach')
    console.log('Nombres de libros del usuario: ', user1.getBookNames())