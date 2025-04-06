const app = require('express')()
const PORT = 3000
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Enable CORS
app.use(cors(corsOptions))

const posts = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
  },
]

app.get('/', (req, res) => {
  console.log('API is running')
  res.status(200).json({
    success: true,
    errors: null,
    count: posts.length,
    pagination: false,
    message: 'API is up and running on port 3000',
    posts,
  })
})

app.listen(PORT, () => console.log('API is up and running'))
