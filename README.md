# बेड बघ 🧐 

(*Marathi* Look at the bed)  
Visually create bed files for references or visualize references given a bed file  
Compliments [Bed Bugs](https://labs.epi2me.io/bed-bugs/)

## Project management

### v0.1

- [ ] Has two columns for fasta and bed
- [x] Works with lambda reference
- [x] Works with linear DNA
- [ ] Can edit bed file
- [ ] Has two buttons to change results
- [x] Deploy to gh-pages

### Not in v0.1

- [ ] Can edit reference
- [ ] Can add multiple reference
- [ ] Undo or redo
- [ ] Beautiful UI

## Development

### Importing seqviz

- 

### Setting up github actions

- Vite instructions fail as they're for npm and not bun
- Setup bun using these two guides:
  - https://bun.sh/guides/runtime/cicd
  - [SO-77651333](https://stackoverflow.com/questions/77651333/how-to-deploy-a-static-website-project-with-bun-lockb-to-github-pages)



## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
