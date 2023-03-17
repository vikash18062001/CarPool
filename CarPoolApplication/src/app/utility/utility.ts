import { User } from "../models/user"

export class Utility
{

    static loggedInUser = new User();

    static currentLoggedInUser(userDetails : any) // have to decide the type
    {
        this.loggedInUser.emailId = userDetails.emailId;
        this.loggedInUser.id = userDetails.id;
        this.loggedInUser.profileUrl = userDetails.profileUrl ? userDetails.profileUrl : '';
        this.loggedInUser.userName = userDetails.userName ? userDetails.userName : '';
    }
}