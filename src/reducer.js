export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    featured_playlist: null,
    current_song: null,
    playing: null,
    // token: 'BQDz3NKJGSgIKDPoxbWOGxe9H2uQbz4WJbBBcI39-0_3BIxK-m7vp-AbHrQVzrMbZTwIrTyvs7zVYSNmSOa5BTZalAn7nMAw3ZdHeoTlFV_BQfYBjKiblPeoh6hTBkzm662kLIIw1FZgiVzOY6be134Hmm0CqpY3buGDOkMGZDJtNQ6Wm0Ob',
}

const reducer = (state, action) => {

    switch(action.type) {
        case 'SET_USER':
            return {...state, user: action.user }

        case 'SET_TOKEN':
            return {...state, token: action.token }

        case 'SET_PLAYLISTS':
            return {...state, playlists: action.playlists}

        case 'SET_SPOTIFY':
            return {...state, spotify: action.spotify}

        case 'SET_FEATURED_PLAYLIST':
            return {...state, featured_playlist: action.featured_playlist}

        case 'SET_PLAYING':
            return {...state, playing:action.playing}

        case 'SET_CURRENT_SONG':
            return {...state, current_song:action.current_song}
        
        default:
            return state;
    }
};

export default reducer;