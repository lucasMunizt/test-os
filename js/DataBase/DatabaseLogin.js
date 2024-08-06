import { auth, signInWithEmailAndPassword } from './config/configDataBase.js';

 export async function LoginDatabese(email,senha){
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        console.log("Login bem-sucedido");
<<<<<<< HEAD
        window.location.href = "./menu.html";
=======
        window.location.href = "/menu.html";
>>>>>>> e3203599afbc7c303889d6e617255c562afb9986
    } catch (error) {
        console.error("Erro de login:", error.message);
    }
}
