# JAMStack ECommerce

### Install gatsby
npm install -g gatsby-cli

### JAMStack ECommerce Github
[Git Clone -- master branch](https://github.com/jamstack-cms/jamstack-ecommerce.git)

```sh
cd jamstack-ecommerce

npm install
npm install aws-amplify

gatsby develop --host 0.0.0.0
http://localhost:8000/
```


### AppSync Setup

<pre>
amplify init
? Enter a name for the project <b>jamstackecommerce</b>
? Enter a name for the environment <b>dev</b>
? Choose your default editor: Visual <b>Studio Code</b>
? Choose the type of app that you're building j<b>avascript</b>
Please tell us about your project
? What javascript framework are you using <b>react</b>
? Source Directory Path:  <b>src</b>
? Distribution Directory Path: <b>build</b>
? Build Command:  <b>gatsby build</b>
? Start Command: <b>npm run start</b>

? Do you want to use an AWS profile? <b>Yes</b>
? Please choose the profile you want to use <b>amplify</b>
✔ Initialized provider successfully.

amplify add auth
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? <b>Default configuration</b>
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? <b>Username</b>
 Do you want to configure advanced settings? <b>Yes, I want to make some additional changes.</b>
 Warning: you will not be able to edit these selections. 
 What attributes are required for signing up? <b>Email</b>
 Do you want to enable any of the following capabilities? <b>Add User to Group</b>
? Enter the name of the group to which users will be added. <b>Admin</b>
Successfully added resource jamstackecommerceb5c1373bPostConfirmation locally.

Successfully added the Lambda function locally
? Do you want to edit your add-to-group function now? <b>Yes</b>
Please edit the file in your editor: /home/cskim/git-repo/experimentplatform/appsync/jamstack-ecommerce/amplify/backend/function/jamstackecommerceb5c1373bPostConfirmation/src/add-to-group.js
? Press enter to continue 
Successfully added auth resource jamstackecommerceb5c1373b locally

amplify add storage
? Please select from one of the below mentioned services: <b>Content (Images, audio, video, etc.)</b>
? Please provide a friendly name for your resource that will be used to label this category in the project: <b>s3jamstackecommerce</b>
? Please provide bucket name: <b>s3jamstackecommerce</b>
? Who should have access: <b>Auth and guest users</b>
? What kind of access do you want for Authenticated users? <b>create/update, read, delete</b>
? What kind of access do you want for Guest users? <b>read</b>
? Do you want to add a Lambda Trigger for your S3 Bucket? <b>No</b>
Auth configuration is required to allow unauthenticated users, but it is not configured properly.
Successfully updated auth resource locally.
Successfully added resource s3jamstackecommerce locally

amplify add api
? Please select from one of the below mentioned services: <b>GraphQL</b>
? Provide API name: <b>jamstackapi</b>
? Choose the default authorization type for the API <b>Amazon Cognito User Pool</b>
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API <b>Yes, I want to make some additional changes.</b>
? Configure additional auth types? <b>Yes</b>
? Choose the additional authorization types you want to configure for the API <b>API key</b>
API key configuration
? Enter a description for the API key: <b>gatsby</b>
? After how many days from now the API key should expire (1-365): <b>100</b>
? Configure conflict detection? <b>No</b>
? Do you have an annotated GraphQL schema? <b>No</b>
? Choose a schema template: <b>Single object with fields (e.g., “Todo” with ID, name, description)</b>

amplify push --y

<pre>


