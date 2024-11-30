interface LoginResponse {
    token: string;
    refreshToken: string;
}

interface RegisterResponse {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dob: string,
    profile: string
}

interface DeleteUser {
    id: string
}


const dob = "2024-11-23";
const profile = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";

class UserServices {
    login = ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }): Promise<LoginResponse> => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            email,
            password
        });

        var requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        let loginResult: any = {};

        loginResult = fetch("http://192.168.100.8:4000/api/v1/users/login", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                return JSON.parse(result)
            })
            .catch((error) => console.log("error", error));

        return loginResult;
    };


    register = ({

        firstName,
        lastName,
        email,
        password,
    }: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
    }): Promise<RegisterResponse> => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            dob,
            profile,

        });

        var requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        let loginResult: any = {};

        loginResult = fetch("http://192.168.100.8:4000/api/v1/users/create", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log("Data successfully sent:", result);
                return JSON.parse(result);
            })
            
            .catch((error) => 
                console.log("error", error));

        return loginResult;
    };
delete = ({
    id ,
}:{
    id: string
}): Promise<DeleteUser> => {
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");
    
    var requestOptions: any = {
       method: 'DELETE',
       headers: myHeaders,
       redirect: 'follow'
    };
    
    var deleteUser:any = {};

    deleteUser = fetch("http://localhost:4000/api/v1/users/delete/id", requestOptions)
       .then(response => response.text())
       .then(result => {
        console.log("Delete successfully",result);
        return JSON.parse(result);
    })
       .catch(error => console.log('error', error));
       
       return deleteUser;
};
}

export default UserServices;