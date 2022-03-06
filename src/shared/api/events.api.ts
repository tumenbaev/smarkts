import { BASE_URL } from "../config";
import { baseFetch } from "./base";

export type GetEventsDataParams = {
  eventIds: string[];
};
export type GetEventsDataResponse = Record<string, any>[];

export const getEventsData = (
  params: GetEventsDataParams
): Promise<GetEventsDataResponse> => {
  const { eventIds } = params;
  return baseFetch(`${BASE_URL}/events/${eventIds.join(",")}/`).then(
    (response) => response.events
  );
};
