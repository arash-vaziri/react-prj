const apiKey = import.meta.env.VITE_API_KEY;

const environment = {

    server : 'https://api.rawg.io/api',
    apiKey,
    endPoints : {

        game : {
            list : '/games',
        },
        genre : {
            list : "/genres"
        } 




    }







}

export default environment;