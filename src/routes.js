export const toUsersList = () => "/users-list";
export const toAddForm = () => "/add-new-user";
export const toUser = ({id} = {id: ":id"}) => `/users-list/user-${id}`;