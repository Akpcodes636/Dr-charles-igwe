import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog';
import { event } from './event';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, event]
}
