module.exports = ({ env }) => ({
  // ...
  upload: {
    "users-permissions": {
      config: {
        jwtSecret: env("JWT_SECRET"),
      },
    },
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
