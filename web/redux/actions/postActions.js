import * as types from '../types';

export const fetchPosts = () => async dispatch => {
    // const res = await axios.get('somepath')

    dispatch({
        type: types.GET_POSTS,
        payload: ['Post 1', 'Post 2', 'Post 3']
    })
}