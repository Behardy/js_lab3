"use strict"






class Contact{
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}


class AddressBook{
    constructor(){
        this.contact = [ new Contact("KEY", "Bumykey@shineeworld.com", " 440-234-5893", "Idol"),
            new Contact("ONEW", "dsdxlmabr@shineeworld.com", " 440-234-5453", "Idol"),
            new Contact("MINHO", "flammingcharisma@shineeworld.com", " 440-235-8874", "Idol"), ];
    }
add(info){
this.contact.push(info);
}
deleteAt(index){
    this.contact.splice(index,1);
}
print(){
    for (let i = 0; i < this.contact.length; i++) {
 console.log(`Name: ${this.contact[i].name}, Email: ${this.contact[i].email}, Phone:${this.contact.phone}, relation: ${this.contact[i].relation}.`)     
    }
}
//deleteByName(){}

}
const book = new AddressBook();
// console.log(book);
// book.print();

while(true){
    let choice = prompt ("Add, Delete, Print or Quit.");
    if(choice === "Quit"){
        console.log("Farwell");
        break;
        
    }else if(choice === "Print"){
        book.print();
    } else if (choice === "Delete") {
        book.deleteAt(prompt("Which index to delete?"));
        // let deleteChoice = prompt("Delete by Index or Name?");
        // if(deleteChoice === "Name"){
        //     book.deleteAt(prompt ("Which Name to delete?"))
        // }else if(deleteChoice === "Index"){
        //     book.deleteAt(prompt(" Which index do you want to delete?"));
        // }
        
    } else if(choice === "Add") {
        book.add(new Contact(prompt ("Please enter a name"),
        prompt("Please enter an email."),
        prompt("Please enter a phone number."),
        prompt("Please enter a realationshp.")
        ));
        
        
    }
}