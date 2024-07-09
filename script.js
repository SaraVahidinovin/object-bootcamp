//1:
let book = {
    title: 'To Kill a Mockingbird',
    autor: 'Harper Lee',
    numPages: '281'
};

//2:

let books = [
    {
        title: 'To Kill a Mockingbird',
        autor: 'Harper Lee',
        numPages: '281'
    },
    {
        title: 'Pride and Prejudice',
        autor: 'Jane Austen',
        numPages: '279'
    },
    {
        title: 'The Great Gatsby',
        autor: 'F. Scott Fitzgerald',
        numPages: '180'   
    }
];


//3:
function findBookByTitle(booksArray, searchTitle) {
    const book = booksArray.find(book => book.title === searchTitle);
    return book || null;
}

let searchTitle = "The Great Gatsby";
let result = findBookByTitle(books, searchTitle);
console.log(result);

//4:

function stringToObject(str){
    let object = {};

    for (let char of str) {
        if (object[char]) {
            object[char]++;
        } else {
            object[char] = 1;
        }
    }
    
    return object;
}

console.log(stringToObject("Sara Vahidinovin"));

//5:filterByCountry

function filterByCountry(userlist, countryCode) {
    let filteredUsers= [];

    userlist.forEach(user => {
        if (countryCode === user.nat){
            filteredUsers.push(user);
        }
    });

    return filteredUsers;
}

console.log(filterByCountry(users, 'AU'));

//6:listEmails
function getEmailList(userlist){
    let listOfEmails = [];

    userlist.forEach(user => listOfEmails.push(user.email));

    return listOfEmails;
}

console.log(getEmailList(users));

//7: 
function getNewEmails(userlist) {
    let newEmailList = [];

    for (let user of userlist) {
        
        let lastName = user.name.last.toLowerCase();
        let firstName = user.name.first.toLowerCase();
        let nationality = user.nat.toLowerCase();
        let email = `${lastName}.${firstName}@evilcorp.${nationality}`;
        newEmailList.push(email);
    }

    return newEmailList;
}

console.log(getNewEmails(users));