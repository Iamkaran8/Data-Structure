//Remove Duplicates from Array of Objects by Key

const arr = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" },
    { id: 3, name: "C" }
]

const RemoveDuplicate = (arr) => {
    const set = new Set();
    const updatedArray = []

    for (let val of arr) {
        if (!set.has(val.id)) {
            set.add(val.id);
            updatedArray.push(val)
        }
    }
    console.log("Duplicate Removed Array :", updatedArray)
}


RemoveDuplicate(arr)