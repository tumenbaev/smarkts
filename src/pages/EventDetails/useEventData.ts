import { useQuery } from "react-query";
import { eventDataKey } from "shared/keys";
import { getEventsData } from "shared/api/events.api";
import { EventData } from "./model";

const dataAdapter = (result: Record<string, any>[]): EventData => {
  const [data] = result;
  return {
    name: data.name,
    shortName: data.short_name,
    state: data.state,
    date: new Date(data.start_datetime).toLocaleDateString(),
    time: new Date(data.start_datetime).toLocaleTimeString(),
  };
};

export const useEventData = (eventId: string) => {
  return useQuery(
    eventDataKey([eventId]),
    () => getEventsData({ eventIds: [eventId] }),
    { select: dataAdapter }
  );
};
