import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  bacground-color: var(--color-grey-50)
  display: flex;
  align-items: center;
  justify-content: center
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. while laoding, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. render app if there is a user
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
