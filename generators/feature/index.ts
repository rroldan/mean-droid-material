import { Rule } from '@angular-devkit/schematics';
import {getTemplateRule} from "../generators.utils";

export default function rule(options: {name: string}): Rule {
  const destinationPath = 'tests';
  return getTemplateRule(__dirname, destinationPath, options);
}
