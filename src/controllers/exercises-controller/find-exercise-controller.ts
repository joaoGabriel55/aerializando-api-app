import { FastifyReply, FastifyRequest } from "fastify";
import makeExerciseRepository from "../../infra/repositories/exercise-repository";
import exercisesService from "../../infra/services/exercises-service";

export default async function findExerciseController(
  request: FastifyRequest | { params: { id: string } },
  response: FastifyReply
) {
  const { id } = request.params as { id: string };
  const service = exercisesService(makeExerciseRepository());

  const exercise = await service.findById(Number(id));

  return response.status(200).send(exercise);
}