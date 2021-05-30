var makeDecoction = ['boil water', 'add tea powder', 'boil']

let strain = ['get a cup', 'strain the tea']

var masala = ['add Caradmum', 'add ginger', 'boil']

let milk = ['put milk', 'boil more']


let makeMasalTea = [...makeDecauction, ...masala,...milk, ...strain]


console.log(makeMasalTea);
