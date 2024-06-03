export const addUserToLocalStorage = (user)=>{
    localStorage.setItem('user', JSON.stringify(user));
}
export const getUserFromLocalStorage = ()=>{
    const result = localStorage.getItem('user');
    if(result){
        return JSON.parse(result);
    }
    return null;
}
export const removeUserFromLocalStorage = ()=>{
    localStorage.removeItem('user');
}