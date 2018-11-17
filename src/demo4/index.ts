import { template, mergeWith, apply, url } from '@angular-devkit/schematics';

export function demo4(option: any) {
  return mergeWith(
    apply(url('files'), [
      template({
        name: option.name,
        transform: value => `${value} !!!!`
      })
    ])
  );
}
