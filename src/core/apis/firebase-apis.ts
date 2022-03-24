import { firebaseAuth } from 'App';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

class FirebaseAPI {
    signInWithEmailAndPassword = async ({ email, password }: { email: string, password: string }) => {
        return signInWithEmailAndPassword(
            firebaseAuth, email, password
        ).then((res) => {
            // Get `user` from credential
            const userCer = res.user;

            console.log(userCer);
        }).catch((error) => {
            // TODO: Handle error here .... 
            throw error;
        });
    }

    signOut = async () => {
        return signOut(firebaseAuth).then((res) => { }).catch((error) => {
            throw error;
        }).finally(() => {
            // TODO: Handle when end here ...
        });
    }
}

export default FirebaseAPI;