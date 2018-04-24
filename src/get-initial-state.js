import loginStatus from './utils/login-status';

const initState = {
    // user: {
    //     name: 'erik.phipps',
    //     createdStories: [1234, 1235, 1236],
    //     collaboratedStories: [1237, 1238, 1239]
    // },
    user: {
        name: 'Guest',
        createdStories: [],
        collaboratedStories: [],
        id: 0
    },
    stories: {}
}

// add user status
initState.user = Object.assign(initState.user, loginStatus());

export default new Promise((resolve, reject) => {
    fetch('/api/v1/stories')
        .then(response => {
            return response.json();
        })
        .catch(error => {
            reject(Error("It broke"));
        })
        .then(stories => {
            initState.stories = stories.reduce((acc, item) => {
                acc[item._id] = {
                    title: item.title,
                    content: item.content,
                    id: item._id
                }
                return acc;
            }, {});

            initState.storyList = {
                ids: Object.keys(initState.stories)
            }

            resolve(initState);
        });
});
