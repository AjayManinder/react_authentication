import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
    UserPoolId: "us-east-1_wpVYFgywH",
    ClientId: "jf185e188dl0ik0mteus33h7p"
}

export default new CognitoUserPool(poolData);