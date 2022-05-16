import { ReactNode } from "react";
import { UserProvider } from "./User";
import { CommerceProvider } from "./Commerce";
import { CategoryProvider } from "./Categories";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <UserProvider>
      <CommerceProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </CommerceProvider>
    </UserProvider>
  );
};
