/** @typedef {import('plop').NodePlopAPI} PlopApi */

/** @type {(plop: PlopApi) => void} */
module.exports = function (plop) {
  plop.setGenerator('Sketch', {
    description: 'Creates sketch template',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is sketch name?'
      },
    ],

    actions: [
      // CREATING A SKETCH
      {
        type: 'add',
        path: './sketches/{{pascalCase name}}/data.ts',
        templateFile: 'templates/sketch/data.ts.hbs'
      },
      {
        type: 'add',
        path: './sketches/{{pascalCase name}}/sketch.ts',
        templateFile: 'templates/sketch/sketch.ts.hbs'
      },
      {
        type: 'add',
        path: './sketches/{{pascalCase name}}/index.ts',
        templateFile: 'templates/sketch/index.ts.hbs'
      },

      // CREATING A VIEW
      {
        type: 'add',
        path: './Views/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/view/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'Views/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/view/styles.ts.hbs'
      },

      // CREATING A PAGE
      {
        type: 'add',
        path: './pages/{{dashCase name}}.tsx',
        templateFile: 'templates/page.tsx.hbs'
      },
    ]
  });
}
