import fetchInstaApi from '../services/instaApi'

const App = {
    selectors: {
        app: '#app'
    },
    apiConfig: {
        clientId: 'testapifr',
        responseType: 'token',
        redirectUrl: 'http://localhost:8080/'
    },
    init: function(){
        this.$app = document.querySelector(this.selectors.app)

        this.appendResponse()
    },
    appendResponse: function(){
        fetchInstaApi(this.apiConfig)
            .then(response => {
                console.log(response)
            })
    }
}

export default App;