class Book 
{
    static defaultPage = 1
    constructor(title, nbPages)
    {
        this.title = title
        this.nbPages = nbPages
    }

    get page() {
        // let page = 1
        // if (!this.nbPages > Book.defaultPage ) {
            // return Book.defaultPage++
        // }
        return Book.defaultPage
    }

    nextPage() {
        if (Book.defaultPage < this.nbPages) {
            return Book.defaultPage++
        } else {
            console.log('C\était la dernière page...');
        }
    }

    close() {
        if (Book.defaultPage) {
            return Book.defaultPage = 1
        }
    }
}

