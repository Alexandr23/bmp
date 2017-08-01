import * as React from 'react';
import * as Helmet from 'react-helmet';

interface IHtmlProps {
  manifest?: any;
  markup?: string;
  store?: any;
}

class Html extends React.Component<IHtmlProps, {}> {
  private resolve(files: any) {
    return files.map((src: any) => {
      //if (!this.props.manifest[src]) { return; }
      return '/' + src;
    }).filter((file: any) => file !== undefined);
  }

  public render() {
    //const head = Helmet.rewind();
    const { markup, store } = this.props;

    const styles = this.resolve(['styles.css']);
    const renderStyles = styles.map((src: any, i: any) =>
      <link key={i} rel="stylesheet" type="text/css" href={src} />,
    );

    const scripts = this.resolve(['manifest.js', 'vendor.js', 'app.js']);

    console.log(styles.length);
    console.log(scripts.length);

    const renderScripts = scripts.map((src: any, i: any) =>
      <script src={src} key={i} />,
    );

    // tslint:disable-next-line:max-line-length
    const initialState = (<script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};` }} charSet="UTF-8" />);

    return (
      <html>
      <head>
        {renderStyles}
        <link rel="shortcut icon" href="/favicon.ico" />
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
