import {createAction} from '@reduxjs/toolkit';
import NetInfo from '@react-native-community/netinfo';

export const onFocus = /* @__PURE__ */ createAction('__rtkq/focused');
export const onFocusLost = /* @__PURE__ */ createAction('__rtkq/unfocused');
export const onOnline = /* @__PURE__ */ createAction('__rtkq/online');
export const onOffline = /* @__PURE__ */ createAction('__rtkq/offline');

let initialized = false;

async function setupListeners(dispatch) {
  console.log('Store Listener Connection type 1111');

  async function defaultHandler() {
    // const handleFocus = () => dispatch(onFocus());
    // const handleFocusLost = () => dispatch(onFocusLost());
    const handleOnline = () => dispatch(onOnline());
    const handleOffline = () => dispatch(onOffline());

    // const handleVisibilityChange = () => {
    //   // check for visibility
    //   if (window.document.visibilityState === 'visible') {
    //     handleFocus();
    //   } else {
    //     handleFocusLost();
    //   }
    // };

    //   if not initalized listners, initialize them
    if (!initialized) {
      // setup listners
      initialized = await NetInfo.addEventListener(state => {
        if (__DEV__) console.log('Store Listener Connection type', state.type);
        if (__DEV__)
          console.log('Store Listener  Is connected?', state.isConnected);
        if (state.isConnected) handleOnline();
        else handleOffline();
      });
    }

    const unsubscribe = () => {
      // unsubscribe listners here
      if (initialized) {
        initialized();
      }
    };
    return unsubscribe();
  }
  return await defaultHandler();
}

export default setupListeners;
