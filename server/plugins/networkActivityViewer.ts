import { initNetworkLogging } from 'network-activity-viewer';

export default defineNitroPlugin((nitroApp) => {
  // FIXME: This does not detect any outgoing requests made during SSR.
  //   Adding these lines to `.output/server/index.mjs` manually AFTER running `yarn build` does not help.
  process.stdout.write("Initializing network activity viewer\n");
  initNetworkLogging();
});
