module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'npm run lint', 'git add'],
  'src/**/*.{json,css,scss,md}': ['prettier --write', 'git add'],
};
