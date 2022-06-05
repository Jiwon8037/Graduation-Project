const GET_DATA='place/GET_DATA';
const CHECK='place/CHECK'

export const getData=(input)=>({type:GET_DATA, input})
export const check=(id)=>({type:CHECK,id})

const initialState={
    places:[
        {
            address_name: String,
            category_group_code: String,
            category_group_name: String,
            category_name: String,
            distance: String,
            id: String,
            phone: String,
            place_name: String,
            place_url: String,
            road_address_name: String,
            x: String,
            y: String,
            checked:Boolean
        },
    ],
}

function setPlace(state=initialState,action){
    switch(action.type){
        case GET_DATA:
            return {...state, 
                places:state.places=action.input
            };
        case CHECK:
            return {...state, 
                places:state.places.map(place=>
                    place.id===action.id?{...place, checked:!place.checked}:place)
            };
        default :return state;
    }
}

export default setPlace;