


/*

const a = [1];
console.dir(a);

const User = function(email, password){
        this.email = email;
        this.password = password + "%%%";
};

const user1 = new User('a@a.com', "123");
const user2 = new User('b@b.com', "123456");
console.log(user1);
console.log(user2);

console.log(user1 instanceof User);

*/
//=========================

const Book = function(title, author){
    this.author = author;
    this.title = title;
    this.isRead = false;
};

Book.prototype.read = function(){
    this.isRead = true;
}

Book.prototype.cover = "Paper";

const LOTR = new Book("Lord of the Ring", "Tolkien");
LOTR.read();
console.log(LOTR);
console.log(LOTR.cover);
console.log(LOTR.hasOwnProperty("cover")); //false
console.log(LOTR.hasOwnProperty("author")); //true

//console.log(LOTR.__proto__);
//console.log(LOTR.__proto__ === Book.prototype);
//console.log(Book.prototype.isPrototypeOf(LOTR));

//==================================================


const someBook = function(title, author){
        this.author = author;
        this.title = title;
};

someBook.prototype.isRead = false;

const LOTRBook = new someBook("someTitle", "bookAuthor");
console.log(LOTRBook);
console.log(someBook.prototype.__proto__);
console.log(LOTRBook.isRead);

console.log(LOTRBook.hasOwnProperty("title"));
console.log(LOTRBook.hasOwnProperty("isRead"));