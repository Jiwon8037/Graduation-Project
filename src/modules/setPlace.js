const GET_DATA='place/GET_DATA';
const CHECK='place/CHECK'

export const getData=(input)=>({type:GET_DATA, input})
export const check=(id)=>({type:CHECK,id})

const initialState={
    places:[
        {
            address_name: '',
            category_group_code: '',
            category_group_name: '',
            category_name: '',
            distance: '',
            id: String,
            phone: '',
            place_name: String,
            place_url: '',
            road_address_name: '',
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