import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname issue in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let componentName = "Dropdown";
const parentDir = path.join(__dirname, "components", componentName);

// ✅ Step 1: Create Folder if it doesn’t exist
if (!fs.existsSync(parentDir)) {
    fs.mkdirSync(parentDir, { recursive: true });
    console.log(`📂 Created folder: ${parentDir}`);
}

// ✅ Step 2: Define File Paths
const files = {
    component: path.join(parentDir, `${componentName}.tsx`),
    styles: path.join(parentDir, `${componentName}.scss`),
    index: path.join(parentDir, "index.ts"),
};

// ✅ Step 3: Create Files with Default Content
const templates = {
    component: `import './${componentName}.scss';\n\nexport const ${componentName} = () => {\n  return <div>${componentName} Component</div>;\n};\n`,
    styles: `.${componentName.toLowerCase()} {\n  /* Add styles here */\n}\n`,
    index: `export * from './${componentName}';\n`,
};

// ✅ Step 4: Write Files (Only if they don't exist)
Object.keys(files).forEach((key) => {
    if (!fs.existsSync(files[key])) {
        fs.writeFileSync(files[key], templates[key]);
        console.log(`✅ Created file: ${files[key]}`);
    } else {
        console.log(`⚠️ File already exists: ${files[key]}`);
    }
});

console.log("🎉 Component setup completed!");
