import React, { useContext, useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import SignUp from "../components/formComponents/SignUp"
import ConfirmSignUp from "../components/formComponents/ConfirmSignUp"
import SignIn from "../components/formComponents/SignIn"
import { Auth } from "aws-amplify"

const UserContext = React.createContext()

signUp = async form => {
  const { username, email, password } = form
  // step 1: Sign up a new user
  await Auth.signUp({
    username,
    password,
    attributes: { email },
  })
  this.setState({ formState: "confirmSignUp" })
}
confirmSignUp = async form => {
  const { username, authcode } = form
  // step 2: Use MFA to confirm the new user
  await Auth.confirmSignUp(username, authcode)
  this.setState({ formState: "signIn" })
}
signIn = async form => {
  const { username, password } = form
  // step 3: Sign in the new user
  await Auth.signIn(username, password)
  // step 4: Check to see if the user is an Admin, if so, show the inventory view.
  const user = await Auth.currentAuthenticatedUser()
  const {
    signInUserSession: {
      idToken: { payload },
    },
  } = user
  if (
    payload["cognito:groups"] &&
    payload["cognito:groups"].includes("Admin")
  ) {
    this.setState({ formState: "signedIn", isAdmin: true })
  }
}
signOut = async () => {
  // allow users to sign out
  await Auth.signOut()
  this.setState({ formState: "signUp" })
}

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0()

  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    setMyUser(user)
  }, [user])

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
