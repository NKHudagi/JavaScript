var makeDecoction = ['boil water', 'add tea powder', 'boil']

let strain = ['get a cup', 'strain the tea']

var masala = ['add Caradamum', 'add ginger', 'boil']

let milk = ['put milk', 'boil more']


let makeMasalTea = [...makeDecoction, ...masala,...milk, ...strain]


console.log(makeMasalTea);
