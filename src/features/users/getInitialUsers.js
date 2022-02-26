export const getInitialUsers = async () => {
    const response = await fetch("initialUsersList.json");

    if(!response.ok) {
        new Error(response.statusText);
    }

    const users = await response.json();

    return users;
};