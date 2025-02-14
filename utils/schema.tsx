import { pgTable,serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formdata:varchar('formData'),
    icon: text('icon'), 
    slug: varchar('slug'),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBY'),
    createdAt:varchar('createdAt')
})