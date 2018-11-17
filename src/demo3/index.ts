import { SchematicContext, Tree } from '@angular-devkit/schematics';

export function demo3(option: any) {
  return (tree: Tree, context: SchematicContext) => {
    const fileName = 'HelloWorld.md';
    if (tree.exists(fileName)) {
      let sourceText = tree.read(fileName)!.toString('utf-8');
      sourceText += '\n## Schematics really Rocks';
      tree.overwrite(fileName, sourceText);
    } else {
      tree.create(fileName, `# Hello Angular Taiwan 2018`);
    }
    return tree;
  };
}
