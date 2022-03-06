import React, { memo } from "react";
import { Link } from "react-router-dom";
import { usePopularEvents } from "./usePopularEvents";
import styles from "./PopularEvents.module.css";

export const PopularEvents = memo(() => {
  const { data, isLoading, isError } = usePopularEvents();

  if (isError) {
    return <>error</>;
  }
  if (isLoading) {
    return <>loading</>;
  }

  return (
    <div>
      <h1 className={styles.caption}>Popular events</h1>
      {data?.map((eventData) => (
        <Link
          to={`/event/${eventData.id}`}
          className={styles.link}
          key={eventData.id}
        >
          {eventData.name}
        </Link>
      ))}
    </div>
  );
});
