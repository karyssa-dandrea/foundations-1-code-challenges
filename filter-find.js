// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    const allDairy = arr.filter(item => {
        return item.category === 'dairy';
    });
    return allDairy;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const moreFruit = arr.filter(item => {
        return item.price > 2 && item.category === 'fruit';
    });
    return moreFruit;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
    const cheese = arr.find(item => {
        return item.id === 'cheese';
    });
    return cheese;
}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    
    let names = arr.filter(Object => {
        
        return Object.category === 'fruit';
    });
    let fruitNames = [];
    names.forEach(Object => {
        fruitNames.push(Object.id);
    });
    return fruitNames;
    //names = names.map(name => name.id);
    //console.log(names);
    //return names;
}