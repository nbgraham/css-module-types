import module from "./cssModules/test.module.scss";

export default function (): void {
  console.log("redClass", module.redClass);
  console.log("blueClass", module.blueClass);
  // These _do_ show as an error in the VS Code IDE
  // But it would be nice if there was also a compile time error
  console.log("typoRedClass", module.typoRedClass);
  console.log("typoBlueClass", module.typoBlueClass);
}
