import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomRequestData } from "./types/create-room-request-data";
import type { CreateRoomResponseData } from "./types/create-room-response-data";

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateRoomRequestData) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result: CreateRoomResponseData = await response.json()

      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
    }
  })
}