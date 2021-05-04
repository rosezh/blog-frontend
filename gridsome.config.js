// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'BlogPost',
      path: './content/blog/**/*.md',
    }
  },
  {
    use: '@gridsome/source-strapi',
    options: {
      apiURL: process.env.GRIDSOME_API_URL,
      queryLimit: 1000, // Defaults to 100
      contentTypes: ['posts','tags'],//StrapiPosts
      // typeName: 'Strapi'
      singleTypes: ['general'],
      // Possibility to login with a Strapi user,
      // when content types are not publicly available (optional).
      // loginData: {
      //   identifier: '',
      //   password: ''
      // }
    }
  }],
  templates:{
    StrapiPosts:[{//集合的名字 Strapi + contentTypes
      path: '/post/:id',
      component: './src/templates/post.vue'
    }],
    StrapiTags:[
      {
        path:'/tag/:id',
        component:'./src/templates/tag.vue'
      }
    ]
  }
}
