import { INSERT_POINTXY, INSERT_POINTXY1, INSERT_POINTXY2, INSERT_POINTXY3, INSERT_POINTXY4 } from "../action/PoninAction"
const initialState = {
    x1: 50, y1: 50, x2: 200, y2: 50, x3: 50, y3: 200, x4: 200, y4: 200
}
export const ponintReduct = (state = initialState, payload) => {
    switch (payload.type) {
        case INSERT_POINTXY1:
            // console.log(payload.x ,"payload");
            return {
                ...state,
                x1: payload.x,
                y1 : payload.y  ,
            }
        case INSERT_POINTXY2 :  
            return {
                ...state ,
                x2 : payload.x ,
                y2 :  payload.y
            }    
        case INSERT_POINTXY3 :  {
            return {
                ...state ,
                x3 : payload.x ,
                y3 : payload.y

            }
        } 
        case INSERT_POINTXY4 :  {
            return {
                ...state,
                x4 : payload.x ,
                y4 : payload.y
            }
        }
        case INSERT_POINTXY :  {
            return {
                ...state ,
                 x1 :  payload.x1,
                 x2 : payload.x2 ,
                 x3 :  payload.x3,
                 x4 : payload.x4 ,
                 y1 : payload.y1,
                 y2 : payload.y2,
                 y3 : payload.y3 ,
                 y4 : payload.y4
            }
        }
        default:
            return state
    }
}