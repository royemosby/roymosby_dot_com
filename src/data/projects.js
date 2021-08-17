const projects = [
  {
    "name": "RecipeSwap",
    "preview_image": "https://www.roymosby.me/images/recipeSwap.jpg",
    "demo_link": "https://recipe-swap.herokuapp.com/",
    "repo_link": "https://github.com/royemosby/RecipeSwap",
    "blog_link": "https://www.roymosby.me/blog/multiple-relations/",
    "technology": [
      "Ruby",
      "Sinatra",
      "Active Record",
      "Sqlite3",
      "PostgreSQL",
      "bcrypt"
    ],
    "description": "RecipeSwap allows users to browse, curate, and spin off recipes. This tool will allow users to tweak the recipes they curate to meet their own personal preferences.",
    "challenge": "For this project, I explored how to relate two types of data in various contexts. To design my object relation model for RecipeSwap, I worked with users and recipes. I also had to determine how those two types relate to each other. One context: users post recipes. With this relation, a recipe can only be authored by one user. Another context: users can favorite recipes. A recipe can be favorited by any number of users. A final context: a recipe can originate from another recipe. Inside RecipeSwap's UI, this was called a spinoff. Like Shakespeare's players, I have to get 'user' and 'recipe' each to play more than one part. "
  },
  {
    "name": "RoR Newsroom",
    "preview_image": "https://www.roymosby.me/images/ror_newsroom.svg",
    "demo_link": "https://www.roymosby.me/blog/creating-space/",
    "repo_link": "https://github.com/royemosby/RoR-Newsroom",
    "blog_link": "https://www.roymosby.me/blog/creating-space/",
    "technology": [
      "Ruby",
      "Ruby on Rails",
      "bcrypt",
      "Omniauth",
      "PostgreSQL",
      "Faker",
      "RSpec"
    ],
    "description": "RoR Newsroom as a platform focuses on the publishing workflow found in a multi-person, news-producing venture.",
    "challenge": "Readers can view published content on RoR Newsroom. The same platform allows employees to work on unpublished content. I used namespaces as a means to group controllers and re-route requests within the Rails app. By separating one of the uses off into a namespace, it allows me to work with the same model data in different ways without having to bog any controller actions down with excessive logic."
  },
  {
    "name": "JAT-Iron",
    "preview_image": "https://www.roymosby.me/images/jat-iron.svg",
    "demo_link": "https://www.youtube.com/watch?v=uoh32yhh0-s",
    "repo_link": "https://github.com/royemosby/JAT-Iron",
    "blog_link": "https://www.roymosby.me/blog/code-re-use/",
    "technology": [
      "Ruby",
      "Ruby on Rails",
      "PostgreSQL",
      "rack-cors",
      "JavaScript"
    ],
    "description": "JAT-Iron is a job application tracker written to be installed and used on a local user's computer.",
    "challenge": "While coding out the MVP, I found myself using 3 versions of the same form that take in the same type of information. Each varied based on whether it pre-loaded data and how the form activated. 3 forms at over 140 lines each is a headache in the making! From the commonalities I built the base of a form that I could re-use for the three versions. I took advantage of JavaScript's template literals to dynamically insert content as needed when the form was in use."
  },
  {
    "name": "RecipeBook",
    "preview_image": "https://www.roymosby.me/images/og/rb.jpg",
    "demo_link": "https://www.youtube.com/watch?v=pE8qaCFf4J0",
    "repo_link": "https://github.com/royemosby/RecipeBook",
    "blog_link": "https://www.roymosby.me/blog/missing-dynamic-routes/",
    "technology": [
      "Ruby",
      "Ruby on Rails",
      "bcrypt",
      "PostgreSQL",
      "UUID",
      "Active Model Serializers",
      "JWT",
      "rack-cors",
      "JavaScript",
      "React",
      "Redux",
      "React-Router",
      "Redux-Thunk"
    ],
    "description": "RecipeBook is an SPA (single page application) to create and save recipes.",
    "challenge": "React-Router has a significant limitation in that it does not handle dynamic routing failures gracefully. To prevent the SPA from crashing when a user manually enter a bad recipe path in the nav bar, I created a component that intercepts the recipe Route. The component compares the path to recipes in the Redux store. If it finds a match, it passes the information along to the Route component. If not, it redirects to a 404"
  }
]

export {projects}