export default function validateLoginData (email, password) {
    const emailCheck = new RegExp(/^\S+@\S+\.\S+$/)
    const passwordCheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[/!@#$%^&*.])(?=.{8,})")

    if (emailCheck.test(email)) {
        if (passwordCheck.test(password)) {
          return `Welcome to the Jungle`
        } else {
          return `Tolong masukkan password sesuai dengan ketentuan`
        }
    } 
    return `Tolong masukkan email yang valid`
}