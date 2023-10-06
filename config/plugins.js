module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: env('EMAIL_SENDER_USERNAME'),
          pass: env('EMAIL_SENDER_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'andrystylist.noreply@gmail.com',
        defaultReplyTo: 'noreply@gmail.com',
      },
    },
  },
  'email-designer': {
    enabled: true,

    // ⬇︎ Add the config property
    config: {
      editor: {
        // optional - if you have a premium unlayer account
        tools: {
          heading: {
            properties: {
              text: {
                value: 'This is the new default text!',
              },
            },
          },
        },
        options: {
          features: {
            colorPicker: {
              presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
            },
          },
          fonts: {
            showDefaultFonts: false,
            /*
             * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
             */
            customFonts: [
              {
                label: 'Anton',
                value: "'Anton', sans-serif",
                url: 'https://fonts.googleapis.com/css?family=Anton',
              },
              {
                label: 'Lato',
                value: "'Lato', Tahoma, Verdana, sans-serif",
                url: 'https://fonts.googleapis.com/css?family=Lato',
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: 'Email',
              value: '{{ USER.username }}',
              sample: 'john@doe.com',
            },
            // ...
          ],
        },
        appearance: {
          theme: 'dark',
          panels: {
            tools: {
              dock: 'left',
            },
          },
        },
      },
    },
  },
});