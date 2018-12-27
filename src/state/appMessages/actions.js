export const APP_MESSAGE_UPDATE = "APP_MESSAGE_UPDATE";
export const APP_MESSAGE_CLEAR = "APP_MESSAGE_CLEAR";

export const appMessageUpdate = message => {
  return {
    type: APP_MESSAGE_UPDATE,
    payload: {
      message
    }
  };
};

export const appMessageClear = () => {
  return {
    type: APP_MESSAGE_CLEAR
  };
};

/*
{
	type: 'APP_MESSAGE_UPDATE',
	payload: {
		message: 'Login failed',
	}
}
*/
