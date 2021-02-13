const redux = require("redux");


function addNewContact(contact) {
    return {
        type: "ADD_NEW_CONTACT",
        payload: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}

const initialState = {
    contactList: [],
    contacts: 
    {
        name: "",
        phone: "",
        email: ""
    }

}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_NEW_CONTACT":
            return {
                ...state,
            
                contacts: action.payload,
                
                contactList: [...state.contactList, action.payload]
            }
        case "REMOVE_CONTACT": {
        const updatedArr = state.contactList.filter(contact => contact !== action.payload) 
        console.log(action.payload)
        console.log(updatedArr)
    
            return {
                ...state,
                contactList: updatedArr
            }
        }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

// ADD CONTACT
store.dispatch(addNewContact({name: "Taylor Smith", phone: "917-533-3203", email: "smithtaylorm@gmail.com"}))
store.dispatch(addNewContact({name: "James Robinson", phone: "914-557-8989", email: "robjames@gmail.com"}))
store.dispatch(addNewContact({name: "Cassie Carter", phone: "718-525-9897", email: "mscarter@gmail.com"}))
store.dispatch(addNewContact({name: "Sarah Walker", phone: "917-987-5434", email: "walker_sarah@gmail.com"}))

// DELETE CONTACT
store.dispatch(removeContact({name: "Taylor Smith", phone: "917-533-3203", email: "smithtaylorm@gmail.com"}))
store.dispatch(removeContact({name: "James Robinson", phone: "914-557-8989", email: "robjames@gmail.com"}))