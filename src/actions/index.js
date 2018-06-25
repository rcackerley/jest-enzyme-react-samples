import {SAVE_COMMENT} from 'actions/types';

export let saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment
}
)
