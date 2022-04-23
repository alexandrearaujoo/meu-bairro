import { ReactNode } from "react";
import { UserProvider } from "./User";
import { CommerceProvider } from "./Commerce";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <UserProvider>
      <CommerceProvider>{children}</CommerceProvider>
    </UserProvider>
  );
};
