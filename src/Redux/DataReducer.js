
const SORT = 'DataReducer/SORT';
const DELETE_ITEM = 'DataReducer/DELETE-ITEM';
const DUPLICATE_ITEM = "DataReducer/DUPLICATE-ITEM";
const CHANGE_PROPERTY = 'DataReducer/CHANGE-PROPERTY';
const MAKE_ACTIV = 'DataReducer/MAKE-ACTIV';
const CANCEL_ACTIV = 'DataReducer/CANCEL-ACTIV';

export const sortByProperty = (id) => ({type:SORT, id:id});
export const deleteItem = (id) => ({type: DELETE_ITEM, id: id});
export const duplicateItem = (id) => ({type: DUPLICATE_ITEM, id: id});
export const changeProperty = (id, propertyId, value) => ({type:CHANGE_PROPERTY, id:id, propertyId: propertyId, newValue:value});
export const makeItemActive = (id) => ({type: MAKE_ACTIV, id: id});
export const cancelItemActive = (id) => ({type: CANCEL_ACTIV, id: id});

let initialState = {

    data: [
    {
        id: 645,
        activity: false,
        properties:["Andrew","Ronaldinio","Football","28","1"]
    },

    {
        id: 234,
        activity: false,
        properties:["Fedor", "Emelianenko", "MixFight", "23","2"],
    },
    {
        id: 678,
        activity: false,
        properties:["Mike", "Taison", "Boxing", "19", "3"],
    },
    {
        id: 123,
        activity: false,
        properties:["Evgeni","Petrov","Football","24","2"]
    },
    {
        id: 786,
        activity: false,
        properties:["Vladimir","Kukuev","Football","25","4"]
    },
    {
        id: 657,
        activity: false,
        properties:["Andrew","Ivanov","Boxing","29","5"]
    },
    {
        id: 647,
        activity: false,
        properties:["Peter","Ivanov","Boxing","27","4"]
    },
    {
        id: 787,
        activity: false,
        properties:["Vladimir","Petrov","Swimming","29","2"]
    },
    {
        id: 457,
        activity: false,
        properties:["Andrew","Sokolov","Swimming","21","6"]
    },
    {
        id: 697,
        activity: false,
        properties:["Evgeniy","Orlov","Biatlon","25","7"]
    },
    {
        id: 651,
        activity: false,
        properties:["Andrew","Ivanov","Biatlon","31","3"]
    },
]
};

// helpers

const changeActive = (data, id, value) => {
    //debugger;
    return data.map(item => {
        if(item && item.id === id){
            return{...item, activity:value}
        }else{
            return{...item}
        }
    })
};


export const DataReducer = (state = initialState, action) => {

    switch (action.type) {

        case SORT: {

            let newData = [
                ...state.data.sort((prev, next) => {
                    if (prev.properties[action.id - 1] < next.properties[action.id - 1]) {
                        return -1
                    }
                    if (prev.properties[action.id - 1] < next.properties[action.id - 1]) {
                        return 1
                    } else {}
                })
            ];
            return{...state, data: newData}
        }
        case DELETE_ITEM: {

            let newData = state.data.map(item => {
                if (item && item.id !== action.id) {
                    return item
                } else {
                    return null
                }
            });
            return {...state, data: newData}
        }
        case DUPLICATE_ITEM: {

            let newId = new Date().getTime();
            let item = state.data.find(item => item.id === action.id);
            let newData = [...state.data.splice(state.data.indexOf(item), 0,
                {
                    id: newId,
                    properties: [...item.properties]
                }
            )];
            debugger;
            return {...state, data: newData}
        }
        case CHANGE_PROPERTY: {

            let newData = state.data.map((item) => {
                if (item) {
                    let newItem = {...item};
                    if (item.id === action.id) {
                        newItem = {
                            ...item,
                            ...item.properties[action.propertyId] = action.newValue
                        }
                    } else {
                        return null
                    }
                    return newItem;
                } else {
                    return null
                }
            });
            return {...state, data:newData}
        }
        case MAKE_ACTIV:{
            let newData = changeActive(state.data, action.id , true);
            return{...state, data: newData}
        }
        case CANCEL_ACTIV:{
            let newData = changeActive(state.data, action.id, false);
            return{...state, data: newData}
        }
        default: {
            return {...state}
        }
    }
};


// Data Helpers




