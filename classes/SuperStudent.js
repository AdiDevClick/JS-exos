class SuperStudent extends Student 
{
    _notes = []

    constructor(firstname, lastname, notes) 
    {
        super(firstname, lastname)
        this._notes = notes
    }

    get name() {
        return 'Super ' + super.name
    }

    // get notes() {
    //     console.log(this._notes);
    // }

    canPass() {
        return super.canPass()
    }
}