import fs from "fs";
import path from "path";

function addJsExtension(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      addJsExtension(filePath);
    } else if (filePath.endsWith(".d.ts")) {
      let content = fs.readFileSync(filePath, "utf8");
      let replaceHappened = false;
      const matchedImportsFroms = content.match(/from \'(\.\/[^\']*)'/g);
      let matchedImportFiles = matchedImportsFroms?.map(
        (match) =>{
            console.log("match", match);
            const regexp = /'(\.\/[^\']*)'/.exec(match);
            if (regexp) {
              console.log("regexp(1)", regexp[1]);
              return regexp[1];
            }else{
                return "-";
            }
        } 
      );
      console.log("Matched", matchedImportFiles);
      matchedImportFiles?.forEach((matchedImportFile) => {
        //if file exists
        const absoluteImportPath =
          path.dirname(filePath) + "/"+matchedImportFile + ".js";
        console.log("absolute path:" + absoluteImportPath);
        if (fs.existsSync(absoluteImportPath)) {
          console.log("Js existing, replacing import...");
          console.log("Content before", content);
          content = content.replace("from '"+matchedImportFile+"'", "from '"+matchedImportFile+".js'");
          console.log("Content", content);
          replaceHappened = true;
        }
      });

      if (replaceHappened){
        fs.writeFileSync(filePath, content, "utf8");
        console.log("File written to " + filePath +"\n\n"+content);
      }
    }
  });
}

addJsExtension("./dist");
