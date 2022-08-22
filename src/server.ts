interface IUser {
    firstName: string;
    lastName: string;
    accessGroups: string[];
}

const user: IUser = {
    firstName: "Hendrick",
    lastName: "Denzmann",
    accessGroups: ["loggedInUsers", "members"],
};

console.log(user);
