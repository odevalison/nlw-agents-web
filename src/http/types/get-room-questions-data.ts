export type GetRoomQuestionsData = Array<{
  id: string
  question: string
  answer: string | null
  createdAt: string
  isGeneratingAnswer?: boolean
}>