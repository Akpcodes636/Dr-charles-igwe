import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog';
import { event } from './event';
import { category } from "./category";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, event,category]
}
