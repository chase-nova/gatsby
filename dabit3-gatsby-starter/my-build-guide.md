# Gatsby Auth starter with AWS Amplify -- Build Guide

>$ npm install -g gatsby-cli

### Clone and create project

```sh
$ gatsby new amplify-auth-gatsby-app https://github.com/dabit3/gatsby-auth-starter-aws-amplify
$ npm install react react-dom react-helmet
$ npm install aws-amplify aws-amplify-react
$ npm install gatsby gatsby-image gatsby-plugin-manifest gatsby-plugin-offline gatsby-plugin-react-helmet
$ npm install gatsby-plugin-sharp gatsby-source-filesystem gatsby-source-graphql gatsby-transformer-sharp prop-types
-- OR --
  "dependencies": {
    "aws-amplify": "latest",
    "aws-amplify-react": "latest",
    "gatsby": "latest",
    "gatsby-image": "latest",
    "gatsby-plugin-layout": "latest",
    "gatsby-plugin-manifest": "latest",
    "gatsby-plugin-offline": "latest",
    "gatsby-plugin-react-helmet": "latest",
    "gatsby-plugin-sharp": "latest",
    "gatsby-source-filesystem": "latest",
    "gatsby-source-graphql": "latest",
    "gatsby-transformer-sharp": "latest",
    "prop-types": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-helmet": "latest"
  }

$ cd amplify-auth-gatsby-app
$ rm -rf amplify
$ amplify init
$ amplify add auth
$ amplify push

$ gatsby develop --host 0.0.0.0

```







