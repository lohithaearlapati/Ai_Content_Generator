/** @type{import("drizzle-kit").Config} */
export default ({
    schema:"./utils/schema.tsx",
    dialect: "postgresql",
    dbCredentials: {
      url: "postgresql://neondb_owner:npg_ZXF9Ec6grwnY@ep-aged-moon-a8sxss8r-pooler.eastus2.azure.neon.tech/ai_content_generator?sslmode=require",
    }
  })