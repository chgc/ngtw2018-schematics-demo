import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function demo1(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const fileName = 'HelloWorld.md';
    return tree.create(fileName, `# Hello Angular Taiwan 2018`);
  };
}
