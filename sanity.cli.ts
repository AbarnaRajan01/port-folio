/**
 * This configuration file lets you run `$ sanity [command]` in this folder.
 * Go to https://www.sanity.io/docs/cli to learn more.
 */
import { defineCliConfig } from 'sanity/cli'
import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'your_dataset_name'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-27",
  useCdn: false, // Set false to ensure fresh data
  token: process.env.SANITY_API_TOKEN, // Add token for private datasets
})
