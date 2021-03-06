import { AmpScript, Layout } from "amdxg-components";
import ssgConfig from "../amdxg.config";
import ssrCounter from "../public/amp-script/counter/ssr";

export const config = {
  amp: true,
};

const host =
  process.env.NODE_ENV === "production"
    ? "https://mizchi.dev/"
    : "http://localhost:3000/";

function Counter(props: any) {
  const encoded = Buffer.from(JSON.stringify(props)).toString("base64");
  return (
    <AmpScript
      sandbox="allow-forms"
      layout="container"
      src={`${host}amp-script/counter/run.js`}
    >
      <div
        className="root"
        id={encoded}
        dangerouslySetInnerHTML={{ __html: ssrCounter(props) }}
      />
    </AmpScript>
  );
}

export default () => {
  return (
    <Layout config={ssgConfig}>
      <Counter initialValue={3} />
    </Layout>
  );
};
