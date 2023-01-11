import React from "react";
import {
  TwitterContentWrapper,
  TwitterInputWrapper,
  TweetButtonStyle,
  TweetFormStyles
} from "./Styles";
import { BlockOfTweet } from "../BlockOfTweet";
import { ITweet, IUser } from "../../helpers/interfaces";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const TwitterContent = ({
  tweets,
  users,
  handleSubmit
}: {
  tweets: ITweet[] | [],
  users: IUser[] | [],
  handleSubmit: (value: string) => void
}) => {

  const tweetSchema = Yup.object().shape({
    tweet: Yup.string()
      .min(1, 'Too Short!')
      .max(140, 'Too Long!'),
  })

  return (
    <TwitterContentWrapper>
      <Formik
        initialValues={{ tweet: "" }}
        validationSchema={tweetSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({errors, values}) => (
          <TweetFormStyles>
          <TwitterInputWrapper
            name="tweet"
            component="textarea"
            error={errors.tweet}
            placeholder="What’s happening?"
          />
          <ErrorMessage name="tweet" component="div" />
          <TweetButtonStyle
            type="submit"
            disabled={!!errors.tweet}
            onClick={() => {handleSubmit(values.tweet)}}
          >
            Tweet
          </TweetButtonStyle>
        </TweetFormStyles>
        )}
      </Formik>
      {tweets.map((tweet) => {return <BlockOfTweet tweet={tweet} users={users} key={tweet.id}/>})}
    </TwitterContentWrapper>
  )
}