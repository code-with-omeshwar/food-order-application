const { createContext } = require("react");

const UserContext = createContext({ userName: "development" });

export default UserContext;