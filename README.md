# Lorem Material [![Live demo](https://img.shields.io/badge/Live%20Demo-%20Storybook-brightgreen.svg)](https://usulpro.github.io/lorem-material/)

Set of _Lorem ipsum_ Material-UI forms for quick themes creating. You can use this project to try your hands in React development.


## Material content filling
![Material](doc/icons/ic_account_balance_black.png)
For easy themes design we required a realistic-looking content. It will be possible to try out different themes and immediately see how they look. For this we feel the need of help by designers and front-end developers in material design. Therefore, we are opening this trend and attract **#hacktoberfest** participants. We welcome all who wish to contribute.

We propose to fill this library by adding small pages or applications - each in a separate [story](https://sm-react.github.io/storybook-addon-material-ui/?theme-ind=0&theme-sidebar=false&theme-full=false&selectedKind=Material%20App&selectedStory=Hactoberfest%20issues%3A&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel). They should be made in the material design style and look like a real application (no need to use real data). We are pleased to see various interesting applications, but you can try your hand at creating something simple.

We do not impose special restrictions to create pages, but please keep the following:
- It should be in the [Material Design](https://material.google.com/) style
- It should be based on the [Material-UI](http://www.material-ui.com/#/) library
- Should look good with different themes
- The appearance should rely on themes settings
- Should not copy an already existing [story](https://sm-react.github.io/storybook-addon-material-ui)
- Each story in a separate file (or a folder)

### to initiate the participation [fork this project](https://github.com/UsulPro/lorem-material/fork).

![Material](doc/icons/ic_flight_takeoff.png)
Take `src/blankMaterialAppExampleProgress.jsx` as a starting point of development.

This project is built on the [React Storybook](https://getstorybook.io/docs) platform. It's a great basis for creating React components and applications. We create each `Lorem Material Page` as a separate `React Component` and add them as a story into storybook automatically.

We use material-ui components from [Material-UI](http://www.material-ui.com/#/) set  - The most popular and complete library for React that Implement Google's Material Design.

The aim of our [project (storybook-addon-material-ui)](https://github.com/sm-react/storybook-addon-material-ui) is to create a comfortable environment for designers and developers allows them to work with React components based on the use of the [theming](https://facebook.github.io/react/docs/context.html#passing-info-automatically-through-a-tree) approach. This approach allows us to decouple the functionality and appearance of components. Teming can transmit various data and properties in components: color, size, styles, and the like. We are working to expand the available options.

We support [Material-UI Themes](http://www.material-ui.com/#/customization/themes) now.

###### Creating Themed Components

It's possible to create theme related components in two ways. Firstly, you can combine ready-made `Material-UI` elements into your component. They themselves support themes, so you don't need to do anything more. 

The second case occurs when you want to add own non `Material-UI` element and set its appearance based on the theme settings. You can do it manually by fetching theme data from the content and applying it to your elements. Look at this brief example:

```
const contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

function HelloLabel(props, context) {
    const { palette } = context.muiTheme;
    const textStyle = {
        color: palette.textColor,
        backgroundColor: palette.canvasColor,
    };
    
    return (
      <div style={textStyle}>Hello, @{props.name}!</div>
      );
}
HelloLabel.propTypes = {
    name: React.PropTypes.string.isRequired,
};
HelloLabel.contextTypes = contextTypes;

```
Here we created a component which appearance is depended on current theme setting.

You can achieve the same result with `react-theme-provider`. You just need to wrap you non-material components:

```
<ThemeProvider>
  <YourThemedComponentOrPlainHTML />
</ThemeProvider>
```

See details in the [docs](https://github.com/sm-react/react-theme-provider) of React Theme Provider

You can edit theme data directly in the down-panel as a JSON structure. You can also edit the settings in the right panel using convenient tools. In any case, all changes will be immediately displayed in the selected story. Creating a new theme you need to specify only the parameters you want to override. All others will be taken from the base theme automatically. Please note that the settings specified in the pallete object will automatically be propagated to other objects. But you can set them directly. This is provided by the Material-UI library.
> When you finished editing your theme via this Storybook addon save it to your project folder. So you could continue working from this point later or use it in your app.

```
import greyTheme from './greyTheme.json';
addDecorator(muiTheme(greyTheme));
```

To learn more about material design follow the [link](https://material.google.com/)

We always welcome your questions, suggestions and ideas.

### For more details about the process of developing

- [make a fork](https://github.com/sm-react/storybook-addon-material-ui/fork).

- clone your repo to local machine and install

```
git clone https://github.com/YOUR-NAME/lorem-material.git
cd lorem-material
npm i
```

- Find `src/blankMaterialAppExampleProgress.jsx` and use it as a blank to start developing.


- Start storybook and check how it looks. Due to the [HMR] you will immediately see all the changes made to the file. Try different themes.
```
npm start
```

- Check codestyle.
```
npm run lint
```

- You can try to fix some erorrs automatically

```
npm run lintfix
```

- Make commit and push it to github: 

```
git commit -m «my ready to PR story»
git push

```

- Make  Pull request from your Github repo. 
