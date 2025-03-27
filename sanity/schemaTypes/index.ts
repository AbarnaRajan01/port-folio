import { type SchemaTypeDefinition } from 'sanity'

import skills from './skills'
import resume from './resume'
import works from './works'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [resume,skills,works],
}
