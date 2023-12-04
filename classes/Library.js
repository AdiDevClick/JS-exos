class Library 
{
    #books = []
    
    addBook(book) {
        this.#books.push(book)
    }

    addBooks(books) {
        // books.forEach(book => {                   // longue version pour plusieurs paramètres
        //         this.addBook(book)
        // })

        // books.forEach(book => this.addBook(book)) // courte version si l'on a qu'un seul paramètre

        // books.forEach(this.addBook, this)         // la plus courte mais va désactiver le "this" de la fonction addBook
    
        // this.#books = [...this.books, ...books]   // la même chose mais avec des spread operators, getter non autorisé     
    
        this.books.push(...books)                    // Encore plus court et plus facile à comprendre et le getter est autorisé      
    }

    get books() {
        return this.#books
    }

    findByLetter(fullWord) {
        // Sends the first result only from the array !Attention : full-word case sensitive
        return this.books.find((word) => word.title.includes(fullWord.toLowerCase()))        
    }

    findBooksByTitleLetter(letter) {
        // Sends all the results from the array
        return this.books.filter((book) => book.title.toLowerCase().includes(letter.toLowerCase()))
    }

    findByTitle() {
        return Object.values(this.books)
    }
}