'use strict';

/**
 * A set of functions called "actions" for `contact`
 */

module.exports = {
  create: async (ctx, next) => {
    try {
      const { name, email, message } = ctx.request.body || {}

      if (name && email && message) {
        await strapi.plugins['email'].services.email.send({
          to: 'andrystylist88@gmail.com',
          from: email,
          subject: `Contact Chat - From ${name}`,
          text: `${message}`,
          html: `${message}`,
        });
      }

      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
      console.log(err)
    }
  }
};
