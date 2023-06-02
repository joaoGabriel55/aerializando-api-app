import { Exercise } from "../../domain/exercises/Exercise"
import { ExerciseRepository } from "../../domain/exercises/ExerciseRepository"
import client from "../db/instance"

const makeExerciseRepository = (): ExerciseRepository => ({
  store: async (exercise: Omit<Exercise, "id">): Promise<Exercise> => {
    return await client.exercise.create({ data: exercise })
  },
  update: async (exercise: Exercise): Promise<Exercise> => {
    return await client.exercise.update({ where: { id: exercise.id }, data: exercise })
  },
  delete: async (id: number): Promise<void> => {
    await client.exercise.delete({ where: { id } })
  },
  findAll: async (): Promise<Exercise[]> => {
    return await client.exercise.findMany()
  }
})

export default makeExerciseRepository