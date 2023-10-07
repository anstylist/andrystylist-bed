module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/contact',
     handler: 'contact.create',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
