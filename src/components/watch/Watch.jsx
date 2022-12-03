import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/watch?v=z5J7n5e6Mbs"
      />
    </div>
  );
}
