# Nuxt 3 with Network Activity Viewer

- Nuxt 3: https://www.npmjs.com/package/nuxt
- Network Activity Viewer: https://www.npmjs.com/package/network-activity-viewer

## Steps to reproduce

1. `yarn install`
2. `yarn build`
3. `yarn preview`
4. Open Network Activity Viewer at http://localhost:4500
5. Make a request to the Nitro server: `curl -I http://localhost:3000`
6. Observe `Starting fetch` and `Finished fetch` in the console, but no activity in Network Activity Viewer.
