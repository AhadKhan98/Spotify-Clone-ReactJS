export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDz3NKJGSgIKDPoxbWOGxe9H2uQbz4WJbBBcI39-0_3BIxK-m7vp-AbHrQVzrMbZTwIrTyvs7zVYSNmSOa5BTZalAn7nMAw3ZdHeoTlFV_BQfYBjKiblPeoh6hTBkzm662kLIIw1FZgiVzOY6be134Hmm0CqpY3buGDOkMGZDJtNQ6Wm0Ob',
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {...state, user: action.user }

        case 'SET_TOKEN':
            return {...state, token: action.token }
        
        default:
            return state;
    }
};

export default reducer;