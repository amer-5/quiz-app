import { useEffect, useState } from "react";
import fetchData from "./fetchData";

interface User {
  name: string;
  image: string;
  score: number;
  placement: number;
}

export const useSortUsers = (users: User[]): User[] => {
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);

  fetchData({ url: "/api/users" }).then((data) => setSortedUsers(data));

  useEffect(() => {
    if (users.length > 0) {
      const sorted = users.sort((a, b) => b.score - a.score);

      const usersWithPlacement = sorted.map((user, index) => ({
        ...user,
        placement: index + 1,
      }));

      setSortedUsers(usersWithPlacement);
    }
  }, [users]);

  return sortedUsers;
};
