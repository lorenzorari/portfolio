export default defineNuxtPlugin({
  hooks: {
    'app:beforeMount': async function () {
      const query = useRoute().query;
      const paramName = 'itsmelolo';

      if (paramName in query) {
        const { itsmelolo, ...otherParams } = query;

        navigateTo({ query: otherParams });
        window.localStorage.setItem('umami.disabled', '1');
        window.console.info(`Hello, Lorenzo!`);
      }
    },
  },
});
