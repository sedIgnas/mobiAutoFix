import API from '../../api';
import axios from "axios";


export default {
    loginUser( {}, user) {
        axios
            .post("/api/users/login", {
                email: user.email,
                password: user.password,
            })
            .then(response => {
                console.log(response.data);
            })
    }
}
