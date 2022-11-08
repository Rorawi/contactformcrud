export const loggedInUser = (user) => {
    return {
        type: "add_user",
        payload: user
    }
}