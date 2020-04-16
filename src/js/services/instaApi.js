import axios from 'axios'

export async function getImages(config) {
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJYV3lVOE1xR2RONnlmUk81UFJjVFRnZA0FvNWFxTG9CNUlQNC1TbjR2aHRxU3E1ZAGotSjMzNjRzZAi1qVm9OOGRkYnlYZAnByeEloVjZA6ZAGRRQVN3OW82TW1lWHc5T3JUcmY3SU4wZATlqdGY3ZAklrMAZDZD`)
    return response.data.data
}