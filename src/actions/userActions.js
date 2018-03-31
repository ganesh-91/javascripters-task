export const updateUserList = (data) => {
    return ({
        type: 'UPDATE_USER_LIST',
        data: data
    });
}

export const updateSingleUser = (data) => {
    return ({
        type: 'UPDATE_SINGLE_USER',
        data: data
    });
}

const userActions = {
    updateSingleUser,
    updateUserList
};

export default userActions;