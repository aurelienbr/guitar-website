import App, { Container } from "next/app";
import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "../redux";
import withRedux from "next-redux-wrapper";
import { findVideos } from "../actions/videos";

const makeStore = (initialState, option) => {
  return createStore(reducers, initialState, applyMiddleware(thunkMiddleware));
};

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    await ctx.store.dispatch(findVideos());

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findVideos: () => {
      dispatch(findVideos());
    }
  };
};

export default withRedux(makeStore, null, mapDispatchToProps)(MyApp);
