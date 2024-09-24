// 1. Output to the console
console.log("Welcome to the Contact Management System!");

// 2. Create a global variable (and identify it with comments)
// This is a global variable because it's declared outside of any function or block
var contactCount = 0;
console.log("Initial contact count:", contactCount);

// 3. Create an array to hold contacts
// This array will store multiple contact objects
let contacts = [];

// 4. Create a function to add a contact
function addContact(name, age, email) {
    // This is a contact object that holds key-value pairs
    const contact = {
        name: name,
        age: age,
        email: email,
        // Method to display contact info
        displayInfo: function() {
            console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
        }
    };
    
    contacts.push(contact); // Add the new contact to the contacts array
    contactCount++; // Increment the global contact count
    console.log(`Contact added: ${name}`);
}

// 5. Create a function to display all contacts
function displayContacts() {
    console.log("Current Contacts:");
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}.`);
        contact.displayInfo(); // Call the method to display contact info
    });
}

// 6. Create some sample contacts
addContact("Alice", 28, "alice@example.com");
addContact("Bob", 32, "bob@example.com");
addContact("Charlie", 25, "charlie@example.com");

// 7. Display all contacts
displayContacts();

// 8. Perform mathematical operations on the number of contacts
let averageAge = contacts.reduce((sum, contact) => sum + contact.age, 0) / contacts.length;
console.log("Average age of contacts:", averageAge);
