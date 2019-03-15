const resolvers = {
  Query: {
    author(root, args){
      return { id: 1, firstName: '23422', lastName: '1354546' };
    },
  },
  Author: {
    // 定义author中的posts
    posts(author){
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2},
        { id: 2, title: 'Another post', text: 'Some other text', views: 200}
      ];
    },
  },
  Post: {
    // 定义Post里面的author
    author(post){
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    },
  }
};

export default resolvers;