import update from "immutability-helper";

const userState = {
    singleUser: {
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: ""
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    },
    userList: []
};

const userReducer = function (state, action) {
    let newState = state;

    if (typeof state === 'undefined') {
        return userState;
    }

    switch (action.type) {

        case 'UPDATE_SINGLE_USER':
            newState = update(state, {
                singleUser: { $set: action.data }
            });
            break;

        case 'UPDATE_USER_LIST':
            newState = update(state, {
                userList: { $set: action.data }
            });
            break;
    }

    console.log('reducer', newState);

    return newState;

}

export default userReducer;