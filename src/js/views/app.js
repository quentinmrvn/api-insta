import {getImages} from '../services/instaApi'

const App = {
    selectors: {
        app: '#app'
    },
    init: function(){
        this.$app = document.querySelector(this.selectors.app)

        this.appendResponse()
    },
    appendResponse: function(){
        getImages()
            .then(response => {
                this.createImages(response)
            })
    },
    createImages: function(images) {
        images.forEach(image => {
            this.renderPost(image)
        });
    },
    renderPost: function (image) {
        const container = document.createElement('div')
        container.classList.add('col-md-3')
        const template = `
            <img id="${image.id}" src="${image.media_url}"/>
        `
        container.innerHTML = template
        this.$app.appendChild(container)
    }
}

export default App;