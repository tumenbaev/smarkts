import React, { memo } from "react";
import { useParams, Link } from "react-router-dom";
import { useEventData } from "./useEventData";
import styles from "./EventDetails.module.css";

type Params = {
  eventId: string;
};

export const EventDetails = memo(() => {
  const { eventId } = useParams<Params>();
  const { data, isLoading, isError } = useEventData(eventId!);

  if (isError) {
    return <>error</>;
  }
  if (!data || isLoading) {
    return <>loading</>;
  }

  const { name, shortName, date, time } = data;
  return (
    <>
      <Link to={"/"}>back</Link>
      <h1 className={styles.caption}>Event details</h1>
      <div>{name}</div>
      <div>{shortName}</div>
      <div>{date}</div>
      <div>{time}</div>
    </>
  );
});
