import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function demo5(options: any) {
  return (tree: Tree, context: SchematicContext) => {
    [
      {
        name: 'angular2-template-loader',
        version: '^0.6.2'
      }
    ].forEach(dependency => {
      addDependencyToPackageJson(
        tree,
        'devDependencies',
        dependency.name,
        dependency.version
      );
    });
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}

export type DependencyTypes =
  | 'dependencies'
  | 'devDependencies'
  | 'optionalDependencies'
  | 'peerDependencies';
/**
 * Adds a package to the package.json
 */
export function addDependencyToPackageJson(
  tree: Tree,
  type: DependencyTypes,
  pkg: string,
  version: string = 'latest'
): Tree {
  if (tree.exists('/package.json')) {
    const sourceText = tree.read('/package.json')!.toString('utf-8');
    const json = JSON.parse(sourceText);
    if (!json[type]) {
      json[type] = {};
    }

    if (!json[type][pkg]) {
      json[type][pkg] = version;
    }

    tree.overwrite('/package.json', JSON.stringify(json, null, 2));
  }

  return tree;
}
