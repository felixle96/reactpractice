import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types"

export default function messages(state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const { userId, message } = action.payload;
            const activeMessages = state[userId];
            const number = Object.keys(activeMessages).length;

            return {
                ...state,
                [userId]: {
                    ...activeMessages,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            }
        default:
            return state;
    }
}