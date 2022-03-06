import { BASE_URL } from "../config";
import { baseFetch } from "./base";

export type GetPopularEventsParams = {
  sport: string;
};
export type GetPopularEventsResponse = string[];

export const getPopularEvents = (
  params: GetPopularEventsParams
): Promise<GetPopularEventsResponse> => {
  const { sport } = params;
  return baseFetch(`${BASE_URL}/popular/event_ids/sport/${sport}/`).then(
    (response) => response.popular_event_ids
  );
};
