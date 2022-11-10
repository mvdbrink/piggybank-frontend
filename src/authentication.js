const isLoggedIn = () => {
    return !localStorage.getItem('userToken');
}

const setUserId = (userId) => {
    localStorage.setItem('userToken', JSON.stringify({ userId }));
}

const logout = () => {
    localStorage.removeItem('userToken');
}

const getUserId = () => {
    return JSON.parse(localStorage.getItem('userToken')).userId;
}

export { setUserId, isLoggedIn, logout, getUserId };