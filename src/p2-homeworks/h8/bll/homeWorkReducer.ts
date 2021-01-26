import React from "react";

type StateType ={
    _id: number
    name: string
    age: number
}

type SortUpType = {
    type: "sort"
    payload: "up"
}

type SortDownType = {
    type: "sort"
    payload: "down"
}

type CheckType = {
    type: "check"
}

type ActiveType = SortUpType | SortDownType | CheckType

export const homeWorkReducer = (state: Array<StateType>, action: ActiveType): Array<StateType> => {
    switch (action.type) {
        case "sort": {
            if(action.payload === "up") {
                return [...state.sort(function (a,b) {
                    if(a.name > b.name ) {
                        return 1
                    }
                    if(a.name < b.name) {
                        return -1
                    }
                    return 0
                })]
            }  else if (action.payload === "down") {
                return [...state.sort(function (a,b) {
                    if(a.name > b.name ) {
                        return -1
                    }
                    if(a.name < b.name) {
                        return 1
                    }
                    return 0
                })]
            }
        }
        case "check": {

            return state.filter(el => el.age > 18)
        }
        default: return state
    }
};