module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/contact',
     handler: 'contact.create',
     config: {
       policies: [],
       middlewares: [],
       description: 'Send a contact email message',
       requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                message: {
                  type: 'string'
                },
                email: {
                  type: 'string'
                }
              }
            }
          }
        }
      },
      responses: {
        '200': {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                type: 'integer',
                format: 'int64'
              }
            }
          }
        },
        '400': {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                '$ref': '#/components/schemas/Error'
              }
            }
          }
        }
      }
     },
    },
  ],
};
