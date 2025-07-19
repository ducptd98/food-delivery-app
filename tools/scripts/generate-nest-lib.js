const { execSync } = require('child_process');

const folder = process.argv[2];
const name = process.argv[3];
const type = process.argv[4];

if (!folder) {
  console.error('Missing folder name argument.');
  process.exit(1);
}

if (!name) {
  console.error('Missing name argument.');
  process.exit(1);
}

if (!type || (type !== 'data-access' && type !== 'feature')) {
  console.error(
    'Missing type of library argument. Use "data-access" or "feature".'
  );
  process.exit(1);
}

const cmd = `nx g @nx/nest:lib libs/${folder}/${type} --name=${name}-${type} --tags=type:${type} --importPath=@food-delivery-app/${name}-${type} --linter=eslint ----unitTestRunner=jest`;
execSync(cmd, { stdio: 'inherit' });
