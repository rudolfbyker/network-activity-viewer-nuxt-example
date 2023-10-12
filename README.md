# Nuxt 3 with Network Activity Viewer

- Nuxt 3: https://www.npmjs.com/package/nuxt
- Network Activity Viewer: https://www.npmjs.com/package/network-activity-viewer

## Steps to reproduce

1. `yarn build`
2. `yarn preview`
3. Open Network Activity Viewer at http://localhost:4500
4. Make a request to the Nitro server: `curl -I http://localhost:3000`
5. Observe `Starting fetch` and `Finished fetch` in the console, but no activity in Network Activity Viewer.
