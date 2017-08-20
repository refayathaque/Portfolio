export class User {
    constructor (
        public date_of_birth: string = "",
        public username: string = "",
        public email: string = "",
        public password: string = "",
        public confirmpassword: string = ""
    ) {}
}
