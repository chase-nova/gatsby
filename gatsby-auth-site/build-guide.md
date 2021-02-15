# Gatsby Authentication with AWS Amplify

## GitHub Repository

https://github.com/beamsies/gatsby-starter-auth-aws-amplify

## Build

<pre>
$ gatsby new gatsby-auth-site https://github.com/ben-siewert/gatsby-starter-auth-aws-amplify

$ cd gatsby-auth-site

$ npm install

$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project <b>gatsbyauthsite</b>
? Enter a name for the environment <b>master</b>
? Choose your default editor: <b>Visual Studio Code</b>
? Choose the type of app that you're building <b>javascript</b>
Please tell us about your project
? What javascript framework are you using <b>react</b>
? Source Directory Path:  <b>src</b>
? Distribution Directory Path: <b>public</b>
? Build Command:  <b>npm run build</b>
? Start Command: <b>npm run dev</b>

? Do you want to use an AWS profile? <b>Yes</b>
? Please choose the profile you want to use <b>amplify</b>

Your project has been successfully initialized and connected to the cloud!

$ amplify add auth
 Do you want to use the default authentication and security configuration? <b>Default configuration</b>
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? <b>Email</b>
 Do you want to configure advanced settings? <b>No, I am done.</b>

$ amplify push
✔ Successfully pulled backend environment master from the cloud.

Current Environment: master

| Category | Resource name          | Operation | Provider plugin   |
| -------- | ---------------------- | --------- | ----------------- |
| Auth     | gatsbyauthsite4247fcc1 | Create    | awscloudformation |
? Are you sure you want to continue? <b>Yes</b>
✔ All resources are updated in the cloud


$ gatsby develop
 <b>Error</b>
 $ npm ls graphql
gatsby-auth-starter-aws@1.0.0 /home/cskim/git-repo/experimentplatform/gatsby/gatsby-auth-site
├─┬ aws-amplify@3.3.15
│ ├─┬ @aws-amplify/api@3.2.18
│ │ └─┬ @aws-amplify/api-graphql@1.2.18
│ │   └── graphql@14.0.0 
│ └─┬ @aws-amplify/pubsub@3.2.16
│   └── graphql@14.0.0 
├─┬ gatsby@2.31.1
│ ├─┬ gatsby-cli@2.18.0
│ │ └─┬ gatsby-recipes@0.8.0
│ │   └── graphql@14.7.0 
│ └── graphql@14.7.0 
└── graphql@14.7.0 

</pre>

## To Solve the Gatsby Amplify GraphQL Problem **Use Yarn**

