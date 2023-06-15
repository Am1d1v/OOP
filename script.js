


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

const LOTR = new Book("Lord of the Ring", "Tolkien");
LOTR.read();
console.log(LOTR);

console.log(LOTR.__proto__);
console.log(LOTR.__proto__ === Book.prototype);
console.log(Book.prototype.isPrototypeOf(LOTR));