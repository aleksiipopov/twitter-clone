import React, { useMemo } from "react";
import { initInitials } from "../../helpers/helpers";
import { ITweet, IUser } from "../../helpers/interfaces";
import {
  BlockOfTweetStyles,
  InitialsCircleTweetStyles,
  BlockOfContentStyles,
  TextOfTweetStyles,
  BlockOfAuthorStyles
} from "./Styles";

export const BlockOfTweet = ({tweet, users}: {tweet: ITweet, users: IUser[] | []}) => {
  
  const author = users.find((item) => item.id === tweet.author_id);
  const initials = initInitials(author?.name || '');
  const text = () => tweet.text;
  
  return (
  <BlockOfTweetStyles>
    <BlockOfAuthorStyles>
      <InitialsCircleTweetStyles>
        <span>{initials}</span>
      </InitialsCircleTweetStyles>
    </BlockOfAuthorStyles>
    <BlockOfContentStyles>
      {author?.name}
      <TextOfTweetStyles dangerouslySetInnerHTML={{__html: tweet.text }} />
    </BlockOfContentStyles>
  </BlockOfTweetStyles>
)};
