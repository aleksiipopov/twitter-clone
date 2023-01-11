/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { Header } from "../../components";
import { TwitterContent } from "../../components/TwitterContent";
import { BASE_URL_SERVER } from "../../helpers/constants";
import { ITweet, IUser } from "../../helpers/interfaces";

export const Tweets = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [tweets, setTweets] = useState<ITweet[] | []>([]);
  const [users, setUsers] = useState<IUser[] | []>([]);
  

  const arrayOfPath = window.location.pathname.split('/');
  const lengthOfPath = arrayOfPath.length;

  const handleFetch = useCallback(() => {
    (async () => {
      const response = await fetch(BASE_URL_SERVER + `/tweets`);
      if(response.status === 200) {
        const fetchedTweets = await response.json();
        setTweets(fetchedTweets.reverse());
        return;
      }
      setUser(null);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if(arrayOfPath[2]) {
        const response = await fetch(BASE_URL_SERVER + `/users/${arrayOfPath[2]}`);
        if(response.status === 200) {
          const existedUser: IUser = await response.json();
          setUser(existedUser);
          return;
        }
        setUser(null);
      }
    })();
  }, [lengthOfPath, arrayOfPath[lengthOfPath - 1]]);

  useEffect(() => {
    (async () => {
      setUsers(await fetch(BASE_URL_SERVER + `/users`).then(res => res.json()))
    })();
    handleFetch();
  }, []);

  const handleSubmit = useCallback((value: string) => {
    fetch(BASE_URL_SERVER + `/tweets`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        id: `${tweets.length + 1}`,
        author_id: user?.id,
        text: value
      })
    }).then(() => {handleFetch()});
  }, [user, tweets]);

  return (
    <>
    <Header userName={user?.name}/>
    <TwitterContent tweets={tweets.reverse()} users={users} handleSubmit={handleSubmit}/>
    </>
  )
};
