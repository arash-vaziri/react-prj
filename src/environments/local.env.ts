const apiKey = import.meta.env.VITE_API_KEY;

console.log('key >' , apiKey);

const environment = {

    server : 'https://api.rawg.io/api',
    apiKey,
    endPoints : {

        game : {
            list : '/games',
        }




    }







}

export default environment;