import { SchematicContext, Tree } from '@angular-devkit/schematics';

export function demo2(option: any) {
  return (tree: Tree, context: SchematicContext) => {
    const fileName = 'HelloWorld.md';
    if (tree.exists(fileName)) {
      tree.delete(fileName);
    }
    return tree.create(fileName, `# Hello Angular Taiwan 2018`);
  };
}
