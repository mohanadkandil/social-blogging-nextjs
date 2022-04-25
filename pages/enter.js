import { signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { auth, googleAuthProvider } from "../lib/firebase"

import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Enter(props) {
    const { user, username } = useContext(UserContext);

    // 1. User Signed out <SignInButton />
    // 2. User Signed in, but missing username <UsernameForm />
    // 3. User Signed in, has username <SignOutButton />

    return (
        <main>
            {
                user ? !username ? <UsernameForm /> : <SignOutButton />
                    : <SignInButton />
            }
        </main>
    )
}

// Sign in with Google button
function SignInButton() {
    const signInWithGoogle = async () => {
        // popup a model in the browser to make the user sign in through his/her google account
        try {
            await signInWithPopup(auth, googleAuthProvider);

        } catch (error) {
            toast.error(`Google popup ${error}`);
        }

    }
    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    )
}

// Sign out button
function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}

// for the user to select a username 
function UsernameForm() {

}