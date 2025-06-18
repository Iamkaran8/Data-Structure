//Find And Print Duplicate Value Of An Array og Object


const people = [
    {
        name: "Alice",
        age: 21
    },
    {
        name: "Bob",
        age: 22
    },
    {
        name: "Charlie",
        age: 23
    },
    {
        name: "Alice",
        age: 22
    },
    {
        name: "David",
        age: 21
    },
    {
        name: "Bob",
        age: 21
    }
];


const FindDuplicate = (arr) => {
    const unique = new Set();
    for (val of arr) {
        if (unique.has(val.age)) {
            console.log("alread Exist :", val)
        } else {
            unique.add(val.age)
        }
    }
}

FindDuplicate(people)

