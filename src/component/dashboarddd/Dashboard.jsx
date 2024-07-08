import React, { useContext } from "react";

import { UserContext } from "../context/UserContext"; // Assume you have a context for user data
import DashBoardMain from "./DashboardMain";

const Dashboard = () => {
  const { user } = useContext(UserContext); // Get user data from context

  return <DashBoardMain userEmail={user.email} />;
};

export default Dashboard;
