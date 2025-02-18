import { useEffect, useState } from "react";

interface User {
  name: string;
  image: string;
  score: number;
  placement: number;
}

export const useSortUsers = async (users: User[]): User[] => {
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);

  const response = await fetch("/api/users")

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
