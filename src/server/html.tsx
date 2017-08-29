import * as React from 'react';
const mainConfig = require('../../config/main');
const publicPath = 'http://' + mainConfig.host + ':' + (+mainConfig.port + 1);


const IS_DEV = process.env.NODE_ENV === 'development';
interface IHtmlProps {
  manifest?: any;
  markup?: string;
  store?: any;
}


class Html extends React.Component<IHtmlProps, {}> {
  private resolve(files: any) {
    const basePath = IS_DEV ? publicPath : '';

    return files.map((src: any) => {
      return basePath + '/' + src;
    }).filter((file: any) => file !== undefined);
  }

  public render() {
    const { markup, store } = this.props;
    const styles = this.resolve(['styles.css']);
    const renderStyles = IS_DEV ? false : styles.map((src: any, i: any) => <link key={i} rel="stylesheet" type="text/css" href={src} />,);
    const scripts = this.resolve(['vendor.js', 'app.js']);
    const renderScripts = scripts.map((src: any, i: any) => <script src={src} key={i} />,);
    const initialState = (<script charSet="UTF-8" dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};` }} />);

    return (
      <html>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {renderStyles}
      </head>
      <body>
        <main id="app" dangerouslySetInnerHTML={{ __html: markup }} />
        {initialState}
        {renderScripts}
      </body>
      </html>
    );
  }
}

export default Html;
