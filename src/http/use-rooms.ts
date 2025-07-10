import { useQuery } from "@tanstack/react-query"
import type { GetRoomsAPIData } from "./types/get-rooms-api-data"

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIData = await response.json()

      return result
    },
  })
}