import { useQuery, useQueryClient } from "react-query";
import { getPopularEvents } from "shared/api/popular.api";
import { getEventsData } from "shared/api/events.api";
import { eventDataKey } from "shared/keys";

export const usePopularEvents = () => {
  const queryClient = useQueryClient();

  const popularEvents = useQuery("popular-events", () =>
    getPopularEvents({ sport: "football" })
  );

  console.info(popularEvents);

  const result = useQuery(
    eventDataKey(popularEvents.data!),
    () => getEventsData({ eventIds: popularEvents.data! }),
    {
      enabled: !!popularEvents.data,
      onSuccess: (data) =>
        data.map((item) =>
          queryClient.setQueryData(eventDataKey([item.id]), [item])
        ),
    }
  );

  if (!popularEvents.data) {
    result.isLoading = popularEvents.isLoading;
  }
  if (popularEvents.isError && !popularEvents.isFetching) {
    result.isError = true;
  }

  return result;
};
