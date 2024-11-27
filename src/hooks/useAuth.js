import { connectorsByName } from "../connectors";

const useAuth = () => {
  const login = async (connectorId) => {
    const connector = connectorsByName[connectorId];
    if (connector) {
      try {
        await connector.activate();
        window.localStorage.setItem("connectorId", connectorId);
        console.log("Connected successfully");
      } catch (error) {
        console.error("Connection failed", error);
      }
    } else {
      console.error("Invalid connector ID");
    }
  };

  const logout = async () => {
    const connectorID = window.localStorage.getItem("connectorId");
    const connector = connectorsByName[connectorID];

    if (connector) {
      try {
        if (connector.deactivate) {
          await connector.deactivate();
        } else {
          await connector.resetState();
        }
        window.localStorage.removeItem("connectorId");
        console.log("Logged out successfully");
      } catch (error) {
        console.error("Logout Failed", error);
      }
    }
  };

  return { login, logout };
};

export default useAuth;
