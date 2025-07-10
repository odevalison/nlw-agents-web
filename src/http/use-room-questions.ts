import { useQuery } from "@tanstack/react-query";
import type { GetRoomQuestionsData } from "./types/get-room-questions-data";

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      )
      const result: GetRoomQuestionsData = await response.json()

      return result
    }
  })
}