import { useEffect, useState } from "react";

export default function useLocalTime(date?: Date) {
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    if (date) {
      const local = new Date(date).toLocaleString();
      setLocalTime(local);
    }
  }, [date]);

  return localTime;
}
