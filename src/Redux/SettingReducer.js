
const MOVIE_RIGHT = 'MOVIE-RIGHT';
const MAKE_ACTIVE = 'MAKE_ACTIVE';


export const moveRight = (pos) =>({type:MOVIE_RIGHT, pos:pos, direction: 1});
export const moveLeft = (pos) =>({type:MOVIE_RIGHT, pos:pos, direction: -1});
export const makeActive = (id) =>({type:MAKE_ACTIVE, id:id});


let initialState = {
    tableHead: [
        {name:"Имя", id:1, activity: false},
        {name:"Спорт", id:2, activity: false},
        {name:"Возраст", id:3, activity: false},
        {name:"Золотые медали", id:4, activity: false}
        ],
};

let move = (date, i, direction) => {
    let n = date[i+direction];
    date[i+direction] = date[i];
    date[i] = n;
    return date;
};




export const SettingReducer = (state = initialState, action) => {

    switch (action.type) {

        case MOVIE_RIGHT: {

            return {...state, tableHead: move(state.tableHead, action.pos, action.direction)}
        }
        case MAKE_ACTIVE: {

            return {
                ...state, tableHead: state.tableHead.map(item => {
                    if (item.id === action.id) {
                        return {...item, activity: true}
                    } else {
                        return {...item, activity: false}
                    }

                })
            }
        }
        default: {
            return {...state}
        }
    }
};



