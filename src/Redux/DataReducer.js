
const SORT = 'SORT';
const DELETE_ITEM = 'DELETE-ITEM';
const DUPLICATE_ITEM = "DUPLICATE-ITEM";
const CHANGE_PROPERTY = 'CHANGE-PROPERTY';

export const sortByProperty = (id) => ({type:SORT, id:id});
export const deleteItem = (id) => ({type: DELETE_ITEM, id: id});
export const duplicateItem = (id) => ({type: DUPLICATE_ITEM, id: id});
export const changeProperty = (id, propertyId, value) => ({type:CHANGE_PROPERTY, id:id, propertyId: propertyId, newValue:value});
let initialState = [

    {
        id: 645,
        properties:["Andrew","Ronaldinio","Football",28,1]
    },

    {
        id: 234,
        properties:["Fedor", "Emelianenko", "MixFight", 23,2],
    },
    {
        id: 678,
        properties:["Mike", "Taison", "Boxing", 19, 3],
    },
    {
        id: 123,
        properties:["Evgeni","Petrov","Football",24,2]
    },
    {
        id: 786,
        properties:["Vladimir","Kukuev","Football",25,4]
    },
    {
        id: 657,
        properties:["Andrew","Ivanov","Boxing",29,5]
    },
    {
        id: 647,
        properties:["Peter","Ivanov","Boxing",27,4]
    },
    {
        id: 787,
        properties:["Vladimir","Petrov","Swimming",29,2]
    },
    {
        id: 457,
        properties:["Andrew","Sokolov","Swimming",21,6]
    },
    {
        id: 697,
        properties:["Evgeniy","Orlov","Biatlon",25,7]
    },
    {
        id: 651,
        properties:["Andrew","Ivanov","Biatlon",31,3]
    },
];

// helpers

const Filter = (state = initialState, propertyId, value) => {

    return state.filter(item => {
        item.property[propertyId] = value
    });
};

export const DataReducer = (state = initialState, action) => {

    switch (action.type) {

        case SORT: {

            return [
                ...state.sort((prev,next) => {
                    if ( prev.properties[action.id-1] < next.properties[action.id-1] ) return -1;
                    if ( prev.properties[action.id-1] < next.properties[action.id-1] ) return 1;
                })
            ]
        }
        case DELETE_ITEM:{
            return[
                ...state.map(item => {
                    if(item && item.id !== action.id){return item}
                })
            ]
        }
        case DUPLICATE_ITEM: {

            let newId = new Date().getTime();
            let item = state.find(item => item.id === action.id);
            state.splice(state.indexOf(item), 0,
                {
                    id: newId,
                    properties: [...item.properties]
                }
            );
            console.log(state);
            return [...state]
        }
        case CHANGE_PROPERTY: {
            console.log(action);
            return (state.map((item) => {
                let newItem = {...item};
                if (item.id === action.id) {
                    newItem = {
                        ...item,
                        ...item.properties[action.propertyId] = action.newValue
                    }
                }
                return newItem;
            }))
        }
        default: {
            return [...state]
        }
    }
};


// Data Helpers




