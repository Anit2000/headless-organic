import { createClient } from "@sanity/client"
export const sanityClient = createClient({
    projectId: 'tf2ofztq',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03',
})