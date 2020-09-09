const withImages = require("next-images");

module.exports = withImages({
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
});
