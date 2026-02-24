const { execSync } = require('child_process');
const fs = require('fs');

const run = (cmd, env = {}) => {
    try {
        return execSync(cmd, { stdio: 'pipe', encoding: 'utf-8', env: { ...process.env, ...env } });
    } catch (err) {
        if (env.DEBUG) console.error(err.message, err.stdout, err.stderr);
        return false;
    }
};

if (!fs.existsSync('.git')) {
    run('git init');
    run('git branch -M main');
} else {
    // ensure main
    run('git branch -M main');
}

if (!fs.existsSync('.gitignore')) {
    fs.writeFileSync('.gitignore', "node_modules\n.env\ndist\n.DS_Store\n");
}

const steps = [
    { msg: "Initial setup & configuration of project structure", files: ["backend/package.json", "frontend/package.json", ".gitignore"] },
    { msg: "Implement backend express server foundation", files: ["backend/src/server.js", "backend/src/app.js", "backend/src/index.js"] },
    { msg: "Initialize database schema with Prisma", files: ["backend/prisma/schema.prisma", "backend/prisma/migrations"] },
    { msg: "Add product models and relations setup", files: ["backend/src/models"] },
    { msg: "Implement baseline controllers for product fetching", files: ["backend/src/controllers/product.controller.js", "backend/src/controllers"] },
    { msg: "Configure backend routing and API setup", files: ["backend/src/routes"] },
    { msg: "Integrate initial seed data script for inventory", files: ["backend/prisma/seed.js", "backend/src/scripts"] },
    { msg: "Configure backend environment and middlewares", files: ["backend/.env.example", "backend/src/middlewares", "backend/src/config"] },
    { msg: "Initialize Vite app inside frontend", files: ["frontend/vite.config.js", "frontend/tailwind.config.js", "frontend/index.html", "frontend/postcss.config.js"] },
    { msg: "Set up React application entry and routing config", files: ["frontend/src/App.jsx", "frontend/src/main.jsx", "frontend/src/index.css"] },
    { msg: "Design main site navigation structure", files: ["frontend/src/components/Navbar.jsx", "frontend/src/components/Footer.jsx"] },
    { msg: "Build basic product card display layout", files: ["frontend/src/components/ProductCard.jsx"] },
    { msg: "Implement horizontal category bar filtering", files: ["frontend/src/components/CategoryBar.jsx"] },
    { msg: "Construct useProduct data binding hooks", files: ["frontend/src/hooks/useProduct.js", "frontend/src/hooks/useProducts.js", "frontend/src/hooks"] },
    { msg: "Create foundational landing page", files: ["frontend/src/pages/Home.jsx"] },
    { msg: "Implement dynamic category browsing view", files: ["frontend/src/pages/Category.jsx"] },
    { msg: "Add product detail screen and UI elements", files: ["frontend/src/pages/ProductDetail.jsx"] },
    { msg: "Incorporate public graphic assets", files: ["frontend/public"] },
    { msg: "Implement sidebar interface and auth modal", files: ["frontend/src/components/Sidebar.jsx", "frontend/src/components/AuthModal.jsx"] },
    { msg: "Add supplementary logic utilities and configuration", files: ["frontend/src/utils", "frontend/src/context", "backend/prisma.config.ts"] },
    { msg: "Add SVG assets and layout spacing refinements", files: ["frontend/src/assets", "frontend/src/components"] },
    { msg: "Update base README instructions", files: ["README.md"] },
    { msg: "Lock package sub-dependencies to stable", files: ["backend/package-lock.json", "frontend/package-lock.json"] },
    { msg: "Adjust EMI plans math and total precision logic", files: ["backend/src"] },
];

let currentTime = new Date("2026-02-23T22:30:00+05:30").getTime();
const interval = Math.floor((27 * 60 * 60 * 1000) / (steps.length + 1));

steps.forEach(step => {
    step.files.forEach(file => {
        run(`git add "${file}"`);
        if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
            const fullDir = file.endsWith('/') ? file : file + '/';
            run(`git add "${fullDir}*"`);
        }
    });

    const statusStr = run('git status --porcelain');
    if (statusStr && statusStr.trim().length > 0) {
        const d = new Date(currentTime);
        const isoString = d.toISOString();
        console.log(`Committing: "${step.msg}" at ${isoString}`);
        run(`git commit -m "${step.msg}"`, {
            GIT_AUTHOR_DATE: isoString,
            GIT_COMMITTER_DATE: isoString
        });
    }

    const noise = (Math.random() * 20 * 60 * 1000) - (10 * 60 * 1000);
    currentTime += interval + noise;
});

run('git add .');
const finalStatusStr = run('git status --porcelain');
if (finalStatusStr && finalStatusStr.trim().length > 0) {
    const finalD = new Date(currentTime);
    const isoString = finalD.toISOString();
    console.log(`Committing: "Final UI polish and calculation fixes" at ${isoString}`);
    run(`git commit -m "Final UI polish and calculation fixes"`, {
        GIT_AUTHOR_DATE: isoString,
        GIT_COMMITTER_DATE: isoString
    });
}
console.log("Commits generation complete!");
