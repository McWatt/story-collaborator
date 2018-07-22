

/** Stories */
// Action types
export const API_CREATE_STORY = 'Stories/API_CREATE_STORY';
export const API_CREATE_STORY_SUCCESS_FAILURE = 'Stories/API_CREATE_STORY_SUCCESS_FAILURE';
export const API_UPDATE_STORY = 'Stories/API_UPDATE_STORY';
export const API_UPDATE_STORY_SUCCESS_FAILURE = 'Stories/API_UPDATE_STORY_SUCCESS_FAILURE';
export const API_DELETE_STORY = 'Stories/API_DELETE_STORY';
export const API_DELETE_STORY_SUCCESS_FAILURE = 'Stories/API_DELETE_STORY_SUCCESS_FAILURE';

// Action creators
export const apiCreateStory = (data) => {
    return {
        type: API_CREATE_STORY,
        payload: data
    }
}

export const apiUpdateStory = (data) => {
    return {
        type: API_UPDATE_STORY,
        payload: data
    }
}

export const apiDeleteStory = (id) => {
    return {
        type: API_DELETE_STORY,
        payload: id
    }
}

export function apiCallToCreateStory(data) {
    return new Promise((resolve, reject) => {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        fetch('/api/v1/stories', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headers
        })
            .then(res => res.json())
            .catch(error => {
                console.log(error);
            })
            .then(response => {
                // this is not working, needs to be in the generator
                resolve(response);
            });
    });
}

export function apiCallToUpdateStory(data) {
    return new Promise((resolve, reject) => {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        
        fetch(`/api/v1/stories/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: headers
        })
            .then(res => res.json())
            .catch(error => {
                console.log(error);
            })
            .then(response => {
                resolve(Object.assign(response, {id: response._id}));
            });
    });
}

export function apiCallToDeleteStory(id) {
    return new Promise((resolve, reject) => {
        fetch(`/api/v1/stories/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .catch(error => {
                console.log(error);
            })
            .then(response => {
                resolve(response);
            });
    });
}
