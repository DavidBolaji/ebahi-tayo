export default {
  // ...
  build: {
    rollupOptions: {
      // ...
      external: [
        // add the external module name here
        "@emotion/react",
      ],
    },
  },
};
