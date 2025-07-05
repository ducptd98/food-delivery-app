const { execSync } = require('child_process');

const folder = process.argv[2];
const type = process.argv[3];

if (!folder) {
  console.error('Missing folder name argument.');
  process.exit(1);
}

if (!type || (type !== 'data-access' && type !== 'feature')) {
  console.error(
    'Missing type of library argument. Use "data-access" or "feature".'
  );
  process.exit(1);
}

const cmd = `nx g @nx/nest:lib libs/${folder}/${type} --name=${folder}-${type} --importPath=@food-delivery-app/${folder}-${type} --linter=eslint ----unitTestRunner=jest`;
execSync(cmd, { stdio: 'inherit' });
