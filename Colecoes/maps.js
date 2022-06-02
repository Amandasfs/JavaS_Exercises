const getAdmins = (map) => {
    let admins = [];
    for([key, value] of map){
        if(value === 'ADMIN'){
            admins.push(key);
        }
    }
    return admins;
};
const userRoles = new Map();
userRoles.set('Anrony','Sudo');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elsa', 'ADMIN');
userRoles.set('Carter', 'USER');
userRoles.set('Gustavo', 'USER');

console.log(getAdmins(userRoles));